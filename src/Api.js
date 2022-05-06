import React, { createContext, useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router'
import { CurrencyContxt } from './Atoms/Contextcurrency'
import { base } from './Base'
import { TopCategoryMenubar } from './Factory/PhpApi'
import { CategoryPage } from './Factory/PhpApi'
import { FreeElearningBatch } from './Factory/PhpApi'
import { AllBatchList } from './Factory/PhpApi'
import { CountryList } from './Factory/PhpApi'


export const Context = createContext()

export const Provider = (props) => {
    let { id } = useParams() 
    const [exactData, setData] = useState([])
    const [Catfinal, Catsetfinal] = useState([])
    const [freeCour, setFreeCour] = useState([])
    const [allfreeCour, setallFreeCour] = useState([])
    const [allcountryList, setallcountryList] = useState([]) 

   
    const [status, loadStatus] = useState(false)
    const [Catsts, Catloadsts] = useState(false)
    const [freeCourLoad, setFreeCourLoad] = useState(false)
    const [allfreeCourLoad, setallFreeCourLoad] = useState(false)
    const [countryLoad, setcountryLoad] = useState(false)
   
 
    const [contextcur] = useContext(CurrencyContxt)
 
 


     async function getData() { 
        await fetch(base, {
            method: 'POST',
            body: JSON.stringify({ "apiurl": TopCategoryMenubar }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        }, []).then((response) => response.json()).then((json) => setData(json.records)).catch((error) => {
            setData(''); 
        });
 
        loadStatus(true) 
 } 

    async function getCourse() {
        await fetch(base, {
            method: 'POST',
            body: JSON.stringify({ "apiurl": CategoryPage + id + "&timeZone=EST" }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        }, []).then((response) => response.json()).then((json) => Catsetfinal(json.records)).catch((error) => {
            Catsetfinal(''); 
        });
        Catloadsts(true)
    }

     async function freeCourse() {
        await fetch(base, {
            method: 'POST',
            body: JSON.stringify({ "apiurl": FreeElearningBatch + contextcur.currency }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        }, []).then((response) => response.json()).then((json) => setFreeCour(json.records)).catch((error) => {
            setFreeCour(''); 
        }); 
        setFreeCourLoad(true)
    }

     async function AllfreeCourse() {
        await fetch(base, {
            method: 'POST',
            body: JSON.stringify({ "apiurl": AllBatchList + contextcur.currency }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        }, []).then((response) => response.json()).then((json) => setallFreeCour(json.records)).catch((error) => {
            setallFreeCour(''); 
        });
 
        setallFreeCourLoad(true);
    }


     async function Allcountrylist() { 
       await fetch(base, {
            method: 'POST',
            body: JSON.stringify({ "apiurl": CountryList }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        }, []).then((response) => response.json()).then((json) => setallcountryList(json.records)).catch((error) => {
            setallcountryList(''); 
        });
        setcountryLoad(true);
    }
 

    useEffect(() => {
        getData()
        getCourse()
        freeCourse()
        AllfreeCourse()
        Allcountrylist() 
    }, [])

 
    return (
        <>
            <Context.Provider
                value={{
                    value1: [exactData, setData],
                    value2: [status, loadStatus],
                    value5: [Catfinal, Catsetfinal],
                    value6: [Catsts, Catloadsts],
                    value7: [freeCour, setFreeCour],
                    value8: [freeCourLoad, setFreeCourLoad],
                    value9: [allfreeCour, setallFreeCour],
                    value10: [allfreeCourLoad, setallFreeCourLoad],
                    value11: [allcountryList, setallcountryList],
                    value12: [countryLoad, setcountryLoad]
                     }} >
                {props.children}
            </Context.Provider>
        </>
    )
}
