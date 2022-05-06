import React, { useContext, useState } from 'react' 
import EnquireNowForm from './../Course/EnquireNowForm';
import { CurrencyContxt } from '../../Atoms/Contextcurrency';
import Forms from '../../Atoms/Form'


const Certificate = (props) => {


    const [allcountryList, setallcountryList] = useState([])
    const [countryLoad, setcountryLoad] = useState(false)


    const [selectphoneval, setselectphoneval] = useState([]);
    function setvalPhone(e) {
        setselectphoneval(e.target.value)
    }
    if (selectphoneval == 'Please select your country') {
        setselectphoneval('')
    }
    const [phoneSetvalue, Updatephonevalue] = useState();

    const [contextcur, setContextCur] = useContext(CurrencyContxt)


    return (
        <div className='certification-courses full-w partner-marketing-affiliates would full-w'>
            <div className="container bankingcxc">
                <div className="row py-16 align-items-center">
                    <div className="col-xxl-8 col-xl-7 col-12 pb-16 pb-xl-0">
                        {props.data[0].category_title ?
                            <h2 className="text-2xl sm:text-3xl xl:text-4xl mb-4 font-bold text-white uppercase mastercnhero">
                                {props.data[0].category_title} {" "}
                                <span className="orange-lgclr d-inline-block">
                                    CERTIFICATION COURSE
                                </span>
                            </h2>
                            : ''}
                        <span className="heading-border-line d-block left-0  mt-3 mb-4"></span>
                     
                        



                        <div className="row mb-4 text-white">
                            <div className="col-md-6 col-12">
                                <ul className="px-0 mb-0">
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
                                        Student Handouts
                                    </li>
                                    <li className="sm:text-lg mb-3 font-semibold tracking-wide d-flex">
                                        <div className="mr-2">
                                            <i className="shadow bi bi-check2 text-dark text-lg mr-1 bg-yellow-400 rounded px-1" />
                                        </div>{" "}
                                        E-learning
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-6 col-12">
                                <ul className="px-0">
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

                    
                    <div className='col-xxl-4 col-xl-5 col-lg-6 col-12 align-self-center'>
                    <Forms titlemasterfalse='empty' messageboxnone='empty'/>

                    </div>

                    
                </div>
            </div>
        </div>
    )
}
export default Certificate
