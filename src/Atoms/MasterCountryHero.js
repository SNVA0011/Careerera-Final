import React, { useContext, useState } from 'react'
import partner from '../Images/Partner.jpg'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import { Context } from "../Api";
import { CurrencyContxt } from './Contextcurrency';
import Forms from './Form'


export default function MasterCountryHero(props) {
    // Country List Api
    const { value11, value12 } = useContext(Context);
    const [cntry, setcntry] = value11;
    const [cntryLoad, setcntryLoad] = value12;

    // setvalPhoneCode
    const [selectphoneval, setselectphoneval] = useState([]);

    function setvalPhone(e) {
        setselectphoneval(e.target.value)
    }

    if (selectphoneval == 'Please select your country') {
        setselectphoneval('')
    }

    // phoneSetvalue
    const [phoneSetvalue, Updatephonevalue] = useState();

    // currency inr/usd
    const [contextcur, setContextCur] = useContext(CurrencyContxt)

    return (
        <div style={{ background: 'rgba(0, 0, 0, 0.5)' }} className='partner-marketing-affiliates would full-w'>
            <div style={{
                backgroundImage: `url(${partner})`,
                backgroundSize: 'cover',
            }}>

                <div className="container py-16">
                    <div className='row align-items-center'>

                        <div className="col-xl-7 col-12 pb-16 pb-xl-0">
                            <h1 className="text-2xl md:text-3xl text-white font-bold mt-1 mb-3 uppercase maintitle mastercnhero">
                                {props.title}
                            </h1>
                            <span className="heading-border-line d-block left-0 mt-2 mb-4"></span>
                            <div className="row mt-1 mb-4 text-white">
                                <div className="col-xxl-6 col-12">
                                    <ul className="px-0 mb-0">
                                        <li className="sm:text-lg mb-3 font-semibold tracking-wide d-flex">
                                            <div className="mr-2">
                                                <i className="shadow bi bi-check2 text-dark text-lg mr-1 bg-yellow-400 rounded px-1" />
                                            </div>{" "}

                                            {props.durationasitis ?
                                                props.durationasitis
                                                :
                                                <>
                                                    36 Hours
                                                </>
                                            }
                                        </li>
                                        <li className="sm:text-lg mb-3 font-semibold tracking-wide d-flex">
                                            <div className="mr-2">
                                                <i className="shadow bi bi-check2 text-dark text-lg mr-1 bg-yellow-400 rounded px-1" />
                                            </div>{" "}
                                            Live Online
                                        </li>
                                        <li className="sm:text-lg mb-3 font-semibold tracking-wide d-flex">
                                            <div className="mr-2">
                                                <i className="shadow bi bi-check2 text-dark text-lg mr-1 bg-yellow-400 rounded px-1" />
                                            </div>{" "}
                                            Student Handouts{" "}
                                        </li>
                                        <li className="sm:text-lg mb-3 font-semibold tracking-wide d-flex">
                                            <div className="mr-2">
                                                <i className="shadow bi bi-check2 text-dark text-lg mr-1 bg-yellow-400 rounded px-1" />
                                            </div>{" "}
                                            Attend 3 Times in 6 Months
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-xxl-6 col-12">
                                    <ul className="px-0">
                                        <li className="sm:text-lg mb-3 font-semibold tracking-wide d-flex">
                                            <div className="mr-2">
                                                <i className="shadow bi bi-check2 text-dark text-lg mr-1 bg-yellow-400 rounded px-1" />
                                            </div>{" "}
                                            E-learning
                                        </li>
                                        <li className="sm:text-lg mb-3 font-semibold tracking-wide d-flex">
                                            <div className="mr-2">
                                                <i className="shadow bi bi-check2 text-dark text-lg mr-1 bg-yellow-400 rounded px-1" />
                                            </div>{" "}
                                            Recorded Video
                                        </li>
                                        <li className="sm:text-lg mb-3 font-semibold tracking-wide d-flex">
                                            <div className="mr-2">
                                                <i className="shadow bi bi-check2 text-dark text-lg mr-1 bg-yellow-400 rounded px-1" />
                                            </div>{" "}
                                            Mock test
                                        </li>
                                        <li className="sm:text-lg mb-3 font-semibold tracking-wide d-flex">
                                            <div className="mr-2">
                                                <i className="shadow bi bi-check2 text-dark text-lg mr-1 bg-yellow-400 rounded px-1" />
                                            </div>{" "}
                                            Career Guidance
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="mt-5 mt-lg-4">
                                <a
                                    href={"tel:" + contextcur.title}
                                    target='_blank' rel='noreferrer' 
                                    className="md:h-12 btn-site invert mr-4 no-underline d-inline-flex justify-content-center align-items-center btnlg-learn"
                                >
                                    <span><i className="fa mr-1 fa-phone"></i> {contextcur.title}</span>
                                </a>




                                {contextcur.currency === 'Asia/Kolkata' ?
                                    <a href="mailto:support@careerera.com"
                                    target='_blank' rel='noreferrer' 
                                        className="md:h-12 btn-site gray no-underline d-inline-flex justify-content-center align-items-center btnlg-learn">

                                        <span className='lowercase'>
                                            <i className="fa mr-2 fa-envelope"></i>
                                            support@careerera.com
                                        </span>
                                    </a>
                                    : ''}

                                {contextcur.currency === 'Asia/Singapore' ?
                                    <a href="mailto:support@careerera.com"
                                    target='_blank' rel='noreferrer' 
                                        className="md:h-12 btn-site gray no-underline d-inline-flex justify-content-center align-items-center btnlg-learn">

                                        <span className='lowercase'>
                                            <i className="fa mr-2 fa-envelope"></i>
                                            support@careerera.com
                                        </span>
                                    </a>
                                    : ''}

                                {contextcur.currency === 'America/New_York' ?
                                    <a href="mailto:info@careerera.com"
                                    target='_blank' rel='noreferrer' 
                                        className="md:h-12 btn-site gray no-underline d-inline-flex justify-content-center align-items-center btnlg-learn">

                                        <span className='lowercase'>
                                            <i className="fa mr-2 fa-envelope"></i>
                                            info@careerera.com
                                        </span>
                                    </a>
                                    : ''}

                                {contextcur.currency === 'SGT' ?
                                    <a href="mailto:support@careerera.com"
                                    target='_blank' rel='noreferrer' 
                                        className="md:h-12 btn-site gray no-underline d-inline-flex justify-content-center align-items-center btnlg-learn">

                                        <span className='lowercase'>
                                            <i className="fa mr-2 fa-envelope"></i>
                                            support@careerera.com
                                        </span>
                                    </a>
                                    : ''}

                                {contextcur.currency === 'Europe/London' ?
                                    <a href="mailto:info@careerera.com"
                                    target='_blank' rel='noreferrer' 
                                        className="md:h-12 btn-site gray no-underline d-inline-flex justify-content-center align-items-center btnlg-learn">

                                        <span className='lowercase'>
                                            <i className="fa mr-2 fa-envelope"></i>
                                            info@careerera.com
                                        </span>
                                    </a>
                                    : ''}

                                {contextcur.currency === 'Asia/Dubai' ?
                                    <a href="mailto:info@careerera.com"
                                    target='_blank' rel='noreferrer' 
                                        className="md:h-12 btn-site gray no-underline d-inline-flex justify-content-center align-items-center btnlg-learn">

                                        <span className='lowercase'>
                                            <i className="fa mr-2 fa-envelope"></i>
                                            info@careerera.com
                                        </span>
                                    </a>
                                    : ''}

                                {contextcur.currency === 'Asia/Dhaka' ?
                                    <a href="mailto:support@careerera.com"
                                    target='_blank' rel='noreferrer' 
                                        className="md:h-12 btn-site gray no-underline d-inline-flex justify-content-center align-items-center btnlg-learn">

                                        <span className='lowercase'>
                                            <i className="fa mr-2 fa-envelope"></i>
                                            support@careerera.com
                                        </span>
                                    </a>
                                    : ''}
                            </div>

                        </div>



                        <div className="ml-auto col-xxl-4 col-xl-5 col-12 align-self-center help-page"> 
                            <Forms titlemasterfalse='empty' />
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}
