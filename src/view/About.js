import React, { useState, useEffect } from 'react'
import about1 from '../Images/about1.png'
import about2 from '../Images/about2.png'
import about3 from '../Images/about3.png'
import about4 from '../Images/about4.png'
import about5 from '../Images/about5.png'
import toplayer from '../Images/mocktest/top-layer.png'
import live from '../Images/live.png'
import learning from '../Images/learning.png'
import Creative from '../Images/creative.png'
import Quiz from '../Images/quiz.png'
import Cost from '../Images/cost.png'
import Flexible from '../Images/flex.png'
import Discussion from '../Images/discussion.png'
import Certificate from '../Images/certificate.png'
import Trained from '../Images/trained.png'
import vivek from '../Images/vivek.jpeg'
import alok from '../Images/alok.jpg'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import AnimatedNumbers from "react-animated-numbers";
import Spinner from 'react-bootstrap/Spinner'
import { base } from '../Base'


const About = () => {

    const [Blog, setBlog] = useState([])
    const [blogsts, setblogsts] = useState(false)

    // List of Blog
    async function Bloglist() {
        await fetch(base, {
            method: 'POST',
            body: JSON.stringify({ "apiurl": 'https://my.careerera.com/API/common/BlogList.php' }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        }, []).then((response) => response.json()).then((json) => setBlog(json.records));
        setblogsts(true);
    }


    useEffect(() => {
        Bloglist()
        window.scrollTo(0, 0);
    }, []);


    return (
        <div className='full-w about-page'>
            <Helmet>
                <title>Careerera- About the Company</title>
                <meta name="description" content="Read here history of Careerera online professional training company. Careerera is USA based Herndon company, offering different certification programs & online classroom training." />
                <meta name="keywords" content="About Careerera, History of Careerera, Careerera About us Page" />
                <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
                <link rel="canonical" href="https://www.careerera.com/about" />
            </Helmet>

            <div className='certification-courseslight full-w'>
                <div className="container py-16">

                    <div className="row align-items-center">
                        <div className='col-lg-6 col-12 order-2 order-lg-1  mt-4 mt-lg-0'>

                            <div className="sec_title">
                                <h1 className="text-2xl md:text-3xl font-bold">
                                    About <span className="orange-clrsite">Us</span>
                                </h1>
                                <hr className="w-20 hr mb-4 bg-blue-400 sepfoll-hr" />
                            </div>


                            <p className="font-semibold list-disc text-gray-700 leading-relaxed text-base lg:text-justify sm:text-lg pt-2">
                                Careerera is one of the leading providers of Higher
                                Education Professional Certification Training, Test
                                Preparation, K -12 Educations, Language Training, and
                                other skill training for Adults and kids in the field of
                                IT, Management, Software Development, Project
                                Management, Quality Assurance, and the list goes on.
                                <br /> <br />
                                Being a partner to some of the top universities and
                                certification bodies, the organization aims at
                                facilitating quality training to professionals
                                worldwide. Careerera has its online learners in 60
                                countries including America, Canada, Europe, and Asia
                                Pacific region. It has a track record of training
                                thousands of professionals successfully via classroom
                                and online training. Careerera welcomes you to join one
                                of the largest live online education systems.
                                <br /> <br /> Since its beginning, the organization is
                                dedicated to developing state-of-the-art learning
                                methodologies by engaging learners and experienced
                                faculty and facilitating the individuals and Corporate
                                with high-quality training materials, which in turn has
                                helped professionals to accomplish their career
                                objectives and become a professional.
                            </p>
                        </div>
                        <div className='col-lg-6 col-12 order-1 order-lg-2 text-center'>
                            <img src={about1} alt='About Us' className="mx-auto" />
                        </div>
                    </div>
                </div>
            </div>


            <div className="container py-16">
                <div className="row align-items-center">
                    <div className='col-lg-6 col-12'>
                        <img src={about2} alt='Mission' />
                    </div>
                    <div className="col-xxl-5 col-lg-6 col-12 mt-4 mt-lg-0 ml-auto">

                        <div className="sec_title">
                            <h2 className="text-2xl md:text-3xl font-bold">
                                Mission
                            </h2>
                            <hr className="w-20 hr mb-4 bg-blue-400 sepfoll-hr" />
                        </div>


                        <p className="text-gray-800 pt-2">
                            <ul className='font-semibold list-disc pl-6 text-gray-700 leading-relaxed text-base lg:text-justify sm:text-lg'>

                                <li className="mb-3">
                                    LEARN, GROW and EXCEL are the motto of every
                                    individual at Careerera.
                                </li>
                                <li className="mb-3">
                                    Our mission is to be the most preferred destination
                                    for quality education in the virtual campus and to
                                    demonstrate extraordinary commitment to every
                                    individual that we serve.
                                </li>
                                <li className="mb-3">
                                    We also aim to serve the community at large by
                                    making appropriate use of the most advanced systems
                                    and concepts to consistently deliver quality
                                    results.
                                </li>
                                <li className="mb-3">
                                    We endeavor to provide world class learning
                                    experience to students and working professionals.
                                </li>
                                <li>
                                    Our Mission is to provide a learning environment for
                                    not just acquiring knowledge but also overall
                                    development in personality, confidence, work ethics,
                                    professionalism and motivation.
                                </li>
                            </ul>
                        </p>
                    </div>
                </div>
            </div>

            <div className="container pb-16">
                <div className="row align-items-center">
                    <div className="col-xxl-5 col-lg-6 col-12 order-2 order-lg-1 mr-auto">
                        <div className="sec_title">
                            <h2 className="text-2xl md:text-3xl font-bold">
                                Vision
                            </h2>
                            <hr className="w-20 hr mb-4 bg-blue-400 sepfoll-hr" />
                        </div>

                        <p className="text-gray-800 pt-2">
                            <ul className='font-semibold list-disc pl-6 text-gray-700 leading-relaxed text-base lg:text-justify sm:text-lg'>

                                <li className="mb-3">
                                    To become a globally renowned one stop household
                                    brand for lifelong learning.
                                </li>
                                <li className="mb-3">
                                    To overcome the hurdles in virtual education and
                                    make the society prepare for online education.
                                </li>
                                <li className="mb-3">
                                    To be widely acclaimed for transformation of society
                                    through education and innovation.
                                </li>
                                <li className="mb-3">
                                    We endeavor to provide world class learning
                                    experience to students and working professionals.
                                </li>
                                <li>
                                    To create differentiated education models, a model
                                    that will focus and will be committed to building
                                    better career prospects for every individual.
                                </li>
                            </ul>
                        </p>
                    </div>
                    <div className='col-lg-6 col-12  mt-4 mt-lg-0 order-1 order-lg-2'>
                        <img src={about3} className="mx-auto" alt='Vision' />
                    </div>
                </div>
            </div>



            <div className='application_process_sec full-w start-yourcareer partnership-reach'>
                <div className="container py-16">
                    <div className="sec_title text-center">
                        <h2 className="text-2xl md:text-3xl font-bold">
                            WHY <span className="orange-clrsite">CAREERERA</span>
                        </h2>
                        <hr className="w-20 hr mb-4 bg-blue-400 sepfoll-hr mx-auto" />
                    </div>

                    <div className="row align-items-center justify-content-center">
                        {/* 1st */}
                        <div className='col-xxl-2 col-lg-3 col-md-4 col-sm-6 col-12'>
                            <div className="text-center py-6">
                                <div className="tt-iconbox-customimg mb-3">
                                    <img alt={'Live Online'} src={live} className="mx-auto rounded-circle" width="92" />
                                </div>
                                <h4 className="text-gray-700 font-bold text-lg lg:text-xl xxl:text-2xl mb-0">
                                    Live Online
                                </h4>
                            </div>
                        </div>
                        {/* 2nd */}
                        <div className='col-xxl-2 col-lg-3 col-md-4 col-sm-6 col-12'>
                            <div className="text-center py-6">
                                <div className="tt-iconbox-customimg mb-3">
                                    <img alt={'E-Learning'} src={learning} className="mx-auto rounded-circle" width="92" />
                                </div>
                                <h4 className="text-gray-700 font-bold text-lg lg:text-xl xxl:text-2xl mb-0">
                                    E-Learning
                                </h4>
                            </div>
                        </div>

                        {/* 3rd */}
                        <div className='col-xxl-2 col-lg-3 col-md-4 col-sm-6 col-12'>
                            <div className="text-center py-6">
                                <div className="tt-iconbox-customimg mb-3">
                                    <img alt={'Creative Courses'} src={Creative} className="mx-auto rounded-circle" width="92" />
                                </div>
                                <h4 className="text-gray-700 font-bold text-lg lg:text-xl xxl:text-2xl mb-0">
                                    Creative Courses
                                </h4>
                            </div>
                        </div>

                        {/* 4th */}
                        <div className='col-xxl-2 col-lg-3 col-md-4 col-sm-6 col-12'>
                            <div className="text-center py-6">
                                <div className="tt-iconbox-customimg mb-3">
                                    <img alt={'Quiz & Exam'} src={Quiz} className="mx-auto rounded-circle" width="92" />
                                </div>
                                <h4 className="text-gray-700 font-bold text-lg lg:text-xl xxl:text-2xl mb-0">
                                    Quiz & Exam
                                </h4>
                            </div>
                        </div>

                        {/* 5th */}
                        <div className='col-xxl-2 col-lg-3 col-md-4 col-sm-6 col-12'>
                            <div className="text-center py-6">
                                <div className="tt-iconbox-customimg mb-3">
                                    <img alt={'Cost & Time'} src={Cost} className="mx-auto rounded-circle" width="92" />
                                </div>
                                <h4 className="text-gray-700 font-bold text-lg lg:text-xl xxl:text-2xl mb-0">
                                    Cost & Time
                                </h4>
                            </div>
                        </div>

                        {/* 6th */}
                        <div className='col-xxl-2 col-lg-3 col-md-4 col-sm-6 col-12'>
                            <div className="text-center py-6">
                                <div className="tt-iconbox-customimg mb-3">
                                    <img alt={'Flexible Learning'} src={Flexible} className="mx-auto rounded-circle" width="92" />
                                </div>
                                <h4 className="text-gray-700 font-bold text-lg lg:text-xl xxl:text-2xl mb-0">
                                    Flexible Learning
                                </h4>
                            </div>
                        </div>

                        {/* 7th */}
                        <div className='col-xxl-2 col-lg-3 col-md-4 col-sm-6 col-12'>
                            <div className="text-center py-6">
                                <div className="tt-iconbox-customimg mb-3">
                                    <img alt={'Discussion'} src={Discussion} className="mx-auto rounded-circle" width="92" />
                                </div>
                                <h4 className="text-gray-700 font-bold text-lg lg:text-xl xxl:text-2xl mb-0">
                                    Discussion
                                </h4>
                            </div>
                        </div>

                        {/* 8th */}
                        <div className='col-xxl-2 col-lg-3 col-md-4 col-sm-6 col-12'>
                            <div className="text-center py-6">
                                <div className="tt-iconbox-customimg mb-3">
                                    <img alt={'Certificate'} src={Certificate} className="mx-auto rounded-circle" width="92" />
                                </div>
                                <h4 className="text-gray-700 font-bold text-lg lg:text-xl xxl:text-2xl mb-0">
                                    Certificate
                                </h4>
                            </div>
                        </div>

                        {/* 9th */}
                        <div className='col-xxl-2 col-lg-3 col-md-4 col-sm-6 col-12'>
                            <div className="text-center py-6">
                                <div className="tt-iconbox-customimg mb-3">
                                    <img alt={'Trained Faculty'} src={Trained} className="mx-auto rounded-circle" width="92" />
                                </div>
                                <h4 className="text-gray-700 font-bold text-lg lg:text-xl xxl:text-2xl mb-0">
                                    Trained Faculty
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className="container pt-16 pb-4">
                <div className="sec_title text-center">
                    <h2 className="text-2xl md:text-3xl font-bold">
                        OUR <span className="orange-clrsite">FOUNDERS</span>
                    </h2>
                    <hr className="w-20 hr mb-4 bg-blue-400 sepfoll-hr mx-auto" />
                </div>

                <div className="row pt-3 align-items-center justify-content-center">
                    <div className="col-xl-4 col-md-5   col-12">
                        <div className="single-team-box">
                            <div className="image">
                                <img src={vivek} alt="Vivek K Singh" className='rounded border' />

                                <ul className="social">
                                    <li>
                                        <a href="https://www.facebook.com/vivek00999" target='_blank' rel='noreferrer' >
                                            <i className="fab fa-facebook-f" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://twitter.com/the_vivek_ks" target='_blank' rel='noreferrer' >
                                            <i className="fab fa-twitter" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/in/the-vivek-k-singh/" target='_blank' rel='noreferrer' >
                                            <i className="fab fa-linkedin-in" />
                                        </a>
                                    </li>

                                </ul>
                            </div>
                            <div className="content">
                                <h3>Vivek K Singh</h3>
                                <span>Founder</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-1 col-md-1  col-12 d-none d-md-block"></div>


                    <div className="col-xl-4 col-md-5  col-12 mt-5 mt-md-0">
                        <div className="single-team-box">
                            <div className="image">
                                <img src={alok} alt="Alok K Singh" className='rounded-circle border' />

                                <ul className="social">
                                    <li>
                                        <a href="https://www.facebook.com/alok0099" target='_blank' rel='noreferrer' >
                                            <i className="fab fa-facebook-f" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://twitter.com/alok0099" target='_blank' rel='noreferrer' >
                                            <i className="fab fa-twitter" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/in/alok-singh-104991157/" target='_blank' rel='noreferrer' >
                                            <i className="fab fa-linkedin-in" />
                                        </a>
                                    </li>

                                </ul>
                            </div>
                            <div className="content">
                                <h3>Alok K Singh</h3>
                                <span>Founder</span>
                            </div>
                        </div>
                    </div>



                </div>
            </div>



            <div className='regiavail full-w requirement-sale'>
                <div className='overflow-hidden ppt-clistaff norotate'>
                    <div className="shape-bottom top-2-relativeminus">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                            <path className="shape-fill" fill="#fff" d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7  c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4  c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"></path>
                        </svg>
                    </div>
                </div>

                <div className="container pt-16 pb-4">
                    <div className="sec_title text-center">
                        <h2 className="text-2xl md:text-3xl font-bold">
                            OUR <span className="orange-clrsite">ACHIEVEMENTS</span>
                        </h2>
                        <hr className="w-20 hr mb-4 bg-blue-400 sepfoll-hr mx-auto" />
                    </div>


                    <div className="row pt-3 align-items-center">
                        <div className='col-lg-6 col-12'>

                            <img src={about4} alt='our_journey_banner' className="rounded-2xl full-w position-relative z-10" />
                            <div className='text-right'>
                                <img src={toplayer} alt='dots' className='dotstp d-inline-block right'></img>
                            </div>
                        </div>
                        <div className="col-lg-6 col-12 text-center text-lg-left mt-lg-0 pt-lg-4 position-relative z-10">
                            <div className="row">

                                <div className='col-xl-10 col-12 mx-auto'>
                                    <div className='row mb-3'>
                                        <div className="col-sm-6 col-12 mb-4">
                                            <div className='shadow-0'>
                                                <h2 className="text-blue-500 sitblu-clrsite font-bold text-4xl md:text-5xl ">
                                                    <div className='d-inline-block'><AnimatedNumbers animateToNumber={60} configs={[{ mass: 1, tension: 220, friction: 100 }, { mass: 1, tension: 180, friction: 130 }, { mass: 1, tension: 280, friction: 90 }, { mass: 1, tension: 180, friction: 135 }, { mass: 1, tension: 260, friction: 100 }, { mass: 1, tension: 210, friction: 180 },]}></AnimatedNumbers></div> +
                                                </h2>
                                                <p className="text-gray-700 text-lg lg:text-xl font-semibold">
                                                    Countries
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-12 mb-4">
                                            <div className='shadow-0'>
                                                <h2 className="text-blue-500 sitblu-clrsite font-bold text-4xl md:text-5xl ">
                                                    <div className='d-inline-block'><AnimatedNumbers animateToNumber={253851} configs={[{ mass: 1, tension: 220, friction: 100 }, { mass: 1, tension: 180, friction: 130 }, { mass: 1, tension: 280, friction: 90 }, { mass: 1, tension: 180, friction: 135 }, { mass: 1, tension: 260, friction: 100 }, { mass: 1, tension: 210, friction: 180 },]}></AnimatedNumbers></div>
                                                </h2>
                                                <p className="text-gray-700 text-lg lg:text-xl font-semibold">
                                                    {' '}
                                                    Users
                                                </p>
                                            </div>
                                        </div>

                                        <div className="col-sm-6 col-12 mb-4">
                                            <div className='shadow-0'>
                                                <h2 className="text-blue-500 sitblu-clrsite font-bold text-4xl md:text-5xl ">
                                                    <div className='d-inline-block'><AnimatedNumbers animateToNumber={29} configs={[{ mass: 1, tension: 220, friction: 100 }, { mass: 1, tension: 180, friction: 130 }, { mass: 1, tension: 280, friction: 90 }, { mass: 1, tension: 180, friction: 135 }, { mass: 1, tension: 260, friction: 100 }, { mass: 1, tension: 210, friction: 180 },]}></AnimatedNumbers></div>
                                                </h2>
                                                <p className="text-gray-700 text-lg lg:text-xl font-semibold">
                                                    Career Path
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-12 mb-4">
                                            <div className='shadow-0'>
                                                <h2 className="text-blue-500 sitblu-clrsite font-bold text-4xl md:text-5xl ">
                                                    <div className='d-inline-block'><AnimatedNumbers animateToNumber={146} configs={[{ mass: 1, tension: 220, friction: 100 }, { mass: 1, tension: 180, friction: 130 }, { mass: 1, tension: 280, friction: 90 }, { mass: 1, tension: 180, friction: 135 }, { mass: 1, tension: 260, friction: 100 }, { mass: 1, tension: 210, friction: 180 },]}></AnimatedNumbers></div>
                                                </h2>
                                                <p className="text-gray-700 text-lg lg:text-xl font-semibold">
                                                    {' '}
                                                    Courses
                                                </p>
                                            </div>
                                        </div>

                                        <div className="col-sm-6 col-12 mb-4">
                                            <div className='shadow-0'>
                                                <h2 className="text-blue-500 sitblu-clrsite font-bold text-4xl md:text-5xl ">
                                                    <div className='d-inline-block'><AnimatedNumbers animateToNumber={1054} configs={[{ mass: 1, tension: 220, friction: 100 }, { mass: 1, tension: 180, friction: 130 }, { mass: 1, tension: 280, friction: 90 }, { mass: 1, tension: 180, friction: 135 }, { mass: 1, tension: 260, friction: 100 }, { mass: 1, tension: 210, friction: 180 },]}></AnimatedNumbers></div>
                                                </h2>
                                                <p className="text-gray-700 text-lg lg:text-xl font-semibold">
                                                    Upcoming Classes
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-12">
                                            <div className='shadow-0'>
                                                <h2 className="text-blue-500 sitblu-clrsite font-bold text-4xl md:text-5xl ">
                                                    <div className='d-inline-block'><AnimatedNumbers animateToNumber={47} configs={[{ mass: 1, tension: 220, friction: 100 }, { mass: 1, tension: 180, friction: 130 }, { mass: 1, tension: 280, friction: 90 }, { mass: 1, tension: 180, friction: 135 }, { mass: 1, tension: 260, friction: 100 }, { mass: 1, tension: 210, friction: 180 },]}></AnimatedNumbers></div>
                                                </h2>
                                                <p className="text-gray-700 text-lg lg:text-xl font-semibold">
                                                    {' '}
                                                    E-Learning
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>


                        </div>
                    </div>
                </div>
                <div className='overflow-hidden ppt-clistaff'>
                    <div className="shape-bottom top-2-relativeminus">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                            <path className="shape-fill" fill="#fff" d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7  c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4  c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"></path>
                        </svg>
                    </div>
                </div>
            </div>



            <div className="container py-16">
                <div className="row align-items-center">
                    <div className='col-lg-6 col-12 order-2 order-lg-1  mt-4 mt-lg-0'>
                        <div className="sec_title">
                            <h2 className="text-2xl md:text-3xl font-bold">
                                From Our <span className="orange-clrsite"> Blog</span>
                            </h2>
                            <hr className="w-20 hr mb-4 bg-blue-400 sepfoll-hr" />
                        </div>
                        <div className='blog_bxrow'>
                            {

                                blogsts ?
                                    <>
                                        {Blog.length > 0 && Blog.slice(0, 2).map((item, index) => {
                                            return (
                                                <div className='mb-5' key={item.id}>
                                                    <Link class="decoration-0 font-semibold mb-3 text-xl md:text-2xl" to={'/blog/' + item.url} > {item.title} </Link>
                                                    <p className="text-gray-500 pt-2 sm:text-lg mtetx-medium mb-0" dangerouslySetInnerHTML={{ __html: item.Discription }}>
                                                    </p>
                                                </div>
                                            )
                                        })}

                                        <Link to="/blog" className="md:h-12 btn-site invert no-underline d-inline-flex justify-content-center align-items-center btnlg-learn">
                                            <span>VIEW ALL</span>
                                        </Link>

                                    </>
                                    : <div className="text-center py-20">
                                        <Spinner animation="border" role="status">
                                            <span className="visually-hidden">Loading...</span>
                                        </Spinner>
                                    </div>
                            }
                        </div>

                    </div>
                    <div className='col-lg-6 col-12 order-1 order-lg-2'>
                        <img src={about5} alt='From Our Blog' className="mx-auto" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default About
