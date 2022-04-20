import React, { createContext, useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router'
import { CurrencyContxt } from './Atoms/Contextcurrency'
import { base } from './Base'

export const Context = createContext()

export const Provider = (props) => {
    let { id } = useParams()
    let { news } = useParams()
 

    // Store Api data in variable of usestate
    const [exactData, setData] = useState([])
    const [Catfinal, Catsetfinal] = useState([])
    const [freeCour, setFreeCour] = useState([])
    const [allfreeCour, setallFreeCour] = useState([])
    const [allcountryList, setallcountryList] = useState([])
    // const [Blog, setBlog] = useState([])
    // const [BlogDetail, setBlogDetail] = useState([])
    // const [Event, setEvent] = useState([])
    // const [Eventdetails, setEventdetails] = useState([])

    // On api load : status (true/false)
    const [status, loadStatus] = useState(false)
    const [Catsts, Catloadsts] = useState(false)
    const [freeCourLoad, setFreeCourLoad] = useState(false)
    const [allfreeCourLoad, setallFreeCourLoad] = useState(false)
    const [countryLoad, setcountryLoad] = useState(false)
    // const [blogsts, setblogsts] = useState(false)
    // const [blogDetailsts, setblogDetailsts] = useState(false)
    // const [Eventsts, setEventsts] = useState(false)
    // const [Eventdetailssts, setEventdetailssts] = useState(false)

    // currency inr/usd
    const [contextcur] = useContext(CurrencyContxt)
    // console.log('Currency=>',contextcur);

    // Logger()
    const [logger, setLogger] = useState([])


    // Menu API -
    async function getData() {
        const Api = "https://my.careerera.com/API/course/TopCategoryMenubar.php"
        const data = await fetch(base, {
            method: 'POST',
            body: JSON.stringify({ "apiurl": "https://my.careerera.com/API/course/TopCategoryMenubar.php" }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        }, []).then((response) => response.json()).then((json) => setData(json.records));

        console.log("1111", data)
        loadStatus(true) 
 }
    console.log("0000000", logger)

    async function getCourse() {
        const data = await fetch(base, {
            method: 'POST',
            body: JSON.stringify({ "apiurl": 'https://my.careerera.com/API/course/CategoryPage.php?url=' + id + "&timeZone=EST" }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        }, []).then((response) => response.json()).then((json) => Catsetfinal(json.records));
        console.log("P", data)


        // const course = await fetch(
        //     'https://my.careerera.com/API/course/CategoryPage.php?url=' +
        //     id +
        //     '&timeZone=EST'
        // )
        // const courseapi = await course.json()
        // Catsetfinal(courseapi.records)
        Catloadsts(true)
    }

    // Free Courses
    async function freeCourse() {
        await fetch(base, {
            method: 'POST',
            body: JSON.stringify({ "apiurl": 'https://my.careerera.com/API/course/FreeElearningBatch.php?timeZone=' + contextcur.currency }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        }, []).then((response) => response.json()).then((json) => setFreeCour(json.records));



        // const free_course = await fetch(
        //     'https://my.careerera.com/API/course/FreeElearningBatch.php?timeZone=' +
        //     contextcur.currency
        // )
        // const free_courseapi = await free_course.json()
        // setFreeCour(free_courseapi.records)
        setFreeCourLoad(true)
    }

    // Live Online Api
    async function AllfreeCourse() {
        const data = await fetch(base, {
            method: 'POST',
            body: JSON.stringify({ "apiurl": 'https://my.careerera.com/API/course/AllBatchList.php?timeZone=' + contextcur.currency }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        }, []).then((response) => response.json()).then((json) => setallFreeCour(json.records));


        // const allfree_course = await fetch(
        //     'https://my.careerera.com/API/course/AllBatchList.php?timeZone=' +
        //     contextcur.currency
        // )
        // const allfree_courseapi = await allfree_course.json()
        // setallFreeCour(allfree_courseapi.records)
        setallFreeCourLoad(true);
    }


    // Country List Api
    async function Allcountrylist() { 
       await fetch(base, {
            method: 'POST',
            body: JSON.stringify({ "apiurl": 'https://my.careerera.com/API/common/CountryList.php' }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        }, []).then((response) => response.json()).then((json) => setallcountryList(json.records));
        setcountryLoad(true);
    }


    // async function CallApi(){
    //     fetch(base, {
    //       method: 'POST',
    //       body: JSON.stringify({"apiurl":"https://my.careerera.com/API/course/TopCategoryMenubar.php"}),
    //       headers: {
    //         'Content-type': 'application/json; charset=UTF-8',
    //       },
    //     },[])
    //       .then((response) => response.json())
    //       .then((json) => console.log("real",json));

    //   } 

    useEffect(() => {
        getData()
        getCourse()
        freeCourse()
        AllfreeCourse()
        Allcountrylist()

    }, [])

    console.log("lkj=>", contextcur.currency)

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
                    // value13: [Blog, setBlog],
                    // value14: [blogsts, setblogsts],
                    // value15: [Event, setEvent],
                    // value16: [Eventsts, setEventsts],
                    // value17: [Eventdetails, setEventdetails],
                    // value18: [Eventdetailssts, setEventdetailssts],
                    // value19: [BlogDetail, setBlogDetail],
                    // value20: [blogDetailsts, setblogDetailsts],
                }}
            >
                {props.children}
            </Context.Provider>
        </>
    )
}
