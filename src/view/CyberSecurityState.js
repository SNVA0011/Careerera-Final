import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import certificate from '../Images/Certificate.svg' 
import UserformsApplication from '../Molecules/Course/UserformsApplication';
import { Helmet } from 'react-helmet' 
import EnquireNowForm from '../Molecules/Course/EnquireNowForm'; 
import { useParams } from 'react-router';
import CityFooterCourse from '../Atoms/CityFooterCourse';
import Careerera from "../Molecules/Master/Careerera";
import Profile from "../Molecules/Master/Profile";
import roles from "../Images/roles_offer.png";
import CareerAssistance from '../Atoms/CareerAssistance';
import Light from "../Molecules/Master/Light";
import { base } from '../Base'
import fun from '../Images/fun4.gif'

export default function CyberSecurityState() {
    const [conthide, setconthide] = useState(false);
    const cyberstate = useParams()
 
    function showMorecont() {
        setconthide((conthide) => (!conthide))
    }

    const [data, setData] = useState([])
    const [load, setLoad] = useState(false)
    async function CallData() {

        const state = cyberstate.cyberCoutry.replace("-", "%20")
        const county = cyberstate.cyberstate.replace("-", "%20")

        await fetch(base, {
            method: 'POST',
            body: JSON.stringify({ "apiurl": "https://my.careerera.com/admin/admins/api/countyDetail.php?service=cyber-security&state=" + state + "&county=" + county }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        }, []).then((response) => response.json()).then((json) => setData(json.countyDetail)).catch((error) => {
            setData(''); 
        }); 
 
        setLoad(true);
    }




    useEffect(() => {
        CallData()
        window.scrollTo(0, 0);
    }, [cyberstate.cyberstate]);

    return (

        <>

            {load ? <div>

                {data[0] ?
                    <Helmet>
                        <title>{data[0].meta_title ? data[0].meta_title : ""}</title>
                        <meta name="description" content={data[0].meta_desc} />
                        <meta name="keyword" content={data[0].keywords} />
                        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
                        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                        <link rel="canonical" href={"https://www.careerera.com/cyber-security/certification-course/" + cyberstate.cyberCoutry + "/" + cyberstate.cyberstate} />
                    </Helmet>
                    : ''}

                
                <div className='certification-courses full-w staticsyber p-0'>
                    <div className="container">
                        <div className="row py-16 align-items-center">
                            <div className="col-xxl-8 col-xl-7 col-lg-6 col-12 pb-3 pb-xl-0">
                                <h1 className="text-2xl sm:text-3xl xl:text-4xl font-bold text-white uppercase">
                                    Cyber Security <span className="orange-lgclr d-inline"> CERTIFICATION COURSE IN {cyberstate.cyberstate.replace('-', ' ')}</span>
                                </h1>
                                <span className="heading-border-line d-block left-0  mt-3 mb-4"></span>

                                <p className="text-base sm:text-lg md:text-xl text-white my-8 font-medium  tracking-wide">
                                    Align your skills and interest with an impactful comprehensive Careerera's Cyber security course in <span className='capitalize'>{cyberstate.cyberstate.replace('-', ' ') + ', ' + cyberstate.cyberCoutry}</span>. Careerera presents immersive training by industry professionals available through course packages that are carefully crafted to expose students to hands-on practical and real-world projects. Delve in-depth into investigating the influence of information security on our lives, individual citizens' privacy concerns, business, and government security hazards, and the impact of laws and public policies. Get into a personalized catalog of cyber security certification programs in <span className='capitalize'>{cyberstate.cyberstate.replace('-', ' ') + ', ' + cyberstate.cyberCoutry.replace('-', ' ')}</span>, suitable to your aspirations and eligibility. Fast-track your information security career with a holistic pedagogy designed to meet the industry demands, making you job-ready with excellence. Master the art of securing systems and applications and get a thorough grasp of the legal requirements for cyber security. Become a pro in leading, managing, and contributing to the development of robust cyber security solutions upon completion of a Cyber security course in <span className='capitalize'>{cyberstate.cyberstate.replace('-', ' ') + ', ' + cyberstate.cyberCoutry.replace('-', ' ')}</span>.
                                </p>

                            </div>

                            
                            <EnquireNowForm />
                        </div>
                    </div>
                </div>




                <div className='dataccience-pagecat'>
                    <div className='discription_sec scroll-spbx' id='Description'>
                        <div className='container py-16'>
                            <div className="sec_title">
                            <h2 className='text-2xl md:text-3xl font-bold text-capitalize'>Careerera’s  <span className='orange-clrsite'>Cyber Security</span> Course In {cyberstate.cyberstate.replace('-', ' ')}</h2>
                            <p className='text-gray-500 text-base md:text-lg fw-medium'>Accelerate your career in cyber security</p>
                                <hr className="w-20 hr mb-4 bg-blue-400 sepfoll-hr"></hr>
                            </div>

                            {data[0] ?
                                <div className="blog-detials-single">
                                    <div className="content st data-scinece-othercer" dangerouslySetInnerHTML={{ __html: data[0].county_desc }}>
                                    </div>
                                </div> : ''}


                        </div>
                    </div>


                    <div className='explore_Data_science scroll-spbx' id='explore'>
                        <div className='container py-16'>
                            <div className="sec_title">
                                <h2 className='text-2xl md:text-3xl font-bold'>Explore our <span className='orange-clrsite'>Cyber Security Courses</span></h2>
                                <p className='text-gray-500 text-base md:text-lg fw-medium'>See which benefits you can derive from joining this program.</p>
                                <hr className="w-20 hr mb-4 bg-blue-400 sepfoll-hr"></hr>
                            </div>


                            <div className="row megamenu-wrapper">
                                <div className="col-12">
                                    <div className="row pt-1">


                                        <div className="col-xl-4 col-md-6 col-12 mb-4">
                                            <div className="cards h-100 d-flex flex-column">
                                                <div className="pt-2 pl-4 rounded-lg">
                                                    <div className="eiml-shadow red" />
                                                    <img src={certificate} alt="certificate-program" className="w-28 relative top-4 border rounded-full" />
                                                </div>
                                                <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                                                    <div className="flex-grow-1">
                                                        

                                                        <h5 className='font-bold text-gray-600 course-title mb-2'>Post Graduate Program in Cyber Security</h5>

                                                        <p className='text-gray-500 mb-4 text-base sm:text-base'>
                                                            Upskill, upgrade, and earn a Post Graduate Certification in Cyber
                                                            security. Keep your organization resilient from cyber attacks. Delve
                                                            into assessing risk and enhancing cyber security measures with
                                                            Careerera.
                                                        </p>

                                                    </div>
                                                    <div className="mt-auto">
                                                        <div className='row'>
                                                            <div className='col-lg-6 col-12'>
                                                                <Link to={'/cyber-security/' + 'post-graduate-program-in-cyber-security/batch'} className='btn-site invert no-underline text-sm w-100'>
                                                                    <span>
                                                                        Upcoming Batches
                                                                    </span>
                                                                </Link>
                                                            </div>
                                                            <div className='ml-auto col-lg-6 col-12 mt-1 mt-lg-0'>
                                                                <Link to={'/cyber-security/' + 'post-graduate-program-in-cyber-security'} className='btn-site no-underline text-sm w-100'>
                                                                    <span>
                                                                        Learn More
                                                                        <i className="fas fa-chevron-right ml-2 align-middle"></i>
                                                                    </span>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-xl-4 col-md-6 col-12 mb-4">
                                            <div className="cards h-100 d-flex flex-column">
                                                <div className="pt-2 pl-4 rounded-lg">
                                                    <div className="eiml-shadow red" />
                                                    <img src={certificate} alt="certificate-program" className="w-28 relative top-4 border rounded-full" />
                                                </div>
                                                <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                                                    <div className="flex-grow-1">
                                                        

                                                        <h5 className='font-bold text-gray-600 course-title mb-2'>Cyber Security Professional</h5>

                                                        <p className='text-gray-500 mb-4 text-base sm:text-base'>
                                                            Get into an intensive accumulation of foundational knowledge blended
                                                            with the industry's hottest trends, current practices.
                                                        </p>

                                                    </div>
                                                    <div className="mt-auto">
                                                        <div className='row'>
                                                            <div className='col-lg-6 col-12'>
                                                                <Link to={'/cyber-security/' + 'cyber-security-professional/batch'} className='btn-site invert no-underline text-sm w-100'>
                                                                    <span>
                                                                        Upcoming Batches
                                                                    </span>
                                                                </Link>
                                                            </div>
                                                            <div className='ml-auto col-lg-6 col-12 mt-1 mt-lg-0'>
                                                                <Link to={'/cyber-security/' + 'cyber-security-professional'} className='btn-site no-underline text-sm w-100'>
                                                                    <span>
                                                                        Learn More
                                                                        <i className="fas fa-chevron-right ml-2 align-middle"></i>
                                                                    </span>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                        
                                        <div className="col-xl-4 col-md-6 col-12 mb-4">
                                            <div className="cards h-100 d-flex flex-column">
                                                <div className="pt-2 pl-4 rounded-lg">
                                                    <div className="eiml-shadow red" />
                                                    <img src={certificate} alt="certificate-program" className="w-28 relative top-4 border rounded-full" />
                                                </div>
                                                <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                                                    <div className="flex-grow-1">
                                                        

                                                        <h5 className='font-bold text-gray-600 course-title mb-2'>Certified Information Systems Security Professional (CISSP)</h5>

                                                        <p className='text-gray-500 mb-4 text-base sm:text-base'>
                                                            Fast-track your cybersecurity métier with&nbsp;CISSP certification.
                                                            Get unlimited access to specialized training involving curation,
                                                            organization, management.
                                                        </p>

                                                    </div>
                                                    <div className="mt-auto">
                                                        <div className='row'>
                                                            <div className='col-lg-6 col-12'>
                                                                <Link to={'/cyber-security/' + 'certified-information-systems-security-professional-cissp/batch'} className='btn-site invert no-underline text-sm w-100'>
                                                                    <span>
                                                                        Upcoming Batches
                                                                    </span>
                                                                </Link>
                                                            </div>
                                                            <div className='ml-auto col-lg-6 col-12 mt-1 mt-lg-0'>
                                                                <Link to={'/cyber-security/' + 'certified-information-systems-security-professional-cissp'} className='btn-site no-underline text-sm w-100'>
                                                                    <span>
                                                                        Learn More
                                                                        <i className="fas fa-chevron-right ml-2 align-middle"></i>
                                                                    </span>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-xl-4 col-md-6 col-12 mb-4">
                                            <div className="cards h-100 d-flex flex-column">
                                                <div className="pt-2 pl-4 rounded-lg">
                                                    <div className="eiml-shadow red" />
                                                    <img src={certificate} alt="certificate-program" className="w-28 relative top-4 border rounded-full" />
                                                </div>
                                                <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                                                    <div className="flex-grow-1">
                                                        

                                                        <h5 className='font-bold text-gray-600 course-title mb-2'>CISA Certification Training</h5>

                                                        <p className='text-gray-500 mb-4 text-base sm:text-base'>
                                                            Be a CISA certified professional and stand out amongst the sea of
                                                            professionals with Careerera. Get into comprehensive training and
                                                            prove your mastery over auditing in Information Technology and
                                                            Information security.
                                                        </p>

                                                    </div>
                                                    <div className="mt-auto">
                                                        <div className='row'>
                                                            <div className='col-lg-6 col-12'>
                                                                <Link to={'/cyber-security/' + 'cisa-certification-training/batch'} className='btn-site invert no-underline text-sm w-100'>
                                                                    <span>
                                                                        Upcoming Batches
                                                                    </span>
                                                                </Link>
                                                            </div>
                                                            <div className='ml-auto col-lg-6 col-12 mt-1 mt-lg-0'>
                                                                <Link to={'/cyber-security/' + 'cisa-certification-training'} className='btn-site no-underline text-sm w-100'>
                                                                    <span>
                                                                        Learn More
                                                                        <i className="fas fa-chevron-right ml-2 align-middle"></i>
                                                                    </span>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-xl-4 col-md-6 col-12 mb-4">
                                            <div className="cards h-100 d-flex flex-column">
                                                <div className="pt-2 pl-4 rounded-lg">
                                                    <div className="eiml-shadow red" />
                                                    <img src={certificate} alt="certificate-program" className="w-28 relative top-4 border rounded-full" />
                                                </div>
                                                <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                                                    <div className="flex-grow-1">
                                                        

                                                        <h5 className='font-bold text-gray-600 course-title mb-2'>CISM Certification Training</h5>

                                                        <p className='text-gray-500 mb-4 text-base sm:text-base'>
                                                            Careerera brings you top-class training for professionals vying for
                                                            CISM certification. Become an Enterprise Security Leader with a
                                                            Strategic Approach as Careerera brings you top-class security
                                                            management.
                                                        </p>

                                                    </div>
                                                    <div className="mt-auto">
                                                        <div className='row'>
                                                            <div className='col-lg-6 col-12'>
                                                                <Link to={'/cyber-security/' + 'cism-certification-training/batch'} className='btn-site invert no-underline text-sm w-100'>
                                                                    <span>
                                                                        Upcoming Batches
                                                                    </span>
                                                                </Link>
                                                            </div>
                                                            <div className='ml-auto col-lg-6 col-12 mt-1 mt-lg-0'>
                                                                <Link to={'/cyber-security/' + 'cism-certification-training'} className='btn-site no-underline text-sm w-100'>
                                                                    <span>
                                                                        Learn More
                                                                        <i className="fas fa-chevron-right ml-2 align-middle"></i>
                                                                    </span>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                        
                                        <div className="col-xl-4 col-md-6 col-12 mb-4">
                                            <div className="cards h-100 d-flex flex-column">
                                                <div className="pt-2 pl-4 rounded-lg">
                                                    <div className="eiml-shadow red" />
                                                    <img src={certificate} alt="certificate-program" className="w-28 relative top-4 border rounded-full" />
                                                </div>
                                                <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                                                    <div className="flex-grow-1">
                                                        

                                                        <h5 className='font-bold text-gray-600 course-title mb-2'>Masters in Cyber Security</h5>

                                                        <p className='text-gray-500 mb-4 text-base sm:text-base'>
                                                            Major the dynamic skill sets of Cyber security Practitioner through
                                                            a Masters in Cyber Security program. The well-formulated hands-on
                                                            course is developed aligning to the industry's latest trends.
                                                        </p>

                                                    </div>
                                                    <div className="mt-auto">
                                                        <div className='row'>
                                                            <div className='col-lg-6 col-12'>
                                                                <Link to={'/cyber-security/' + 'masters-in-cyber-security/batch'} className='btn-site invert no-underline text-sm w-100'>
                                                                    <span>
                                                                        Upcoming Batches
                                                                    </span>
                                                                </Link>
                                                            </div>
                                                            <div className='ml-auto col-lg-6 col-12 mt-1 mt-lg-0'>
                                                                <Link to={'/cyber-security/' + 'masters-in-cyber-security'} className='btn-site no-underline text-sm w-100'>
                                                                    <span>
                                                                        Learn More
                                                                        <i className="fas fa-chevron-right ml-2 align-middle"></i>
                                                                    </span>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-xl-4 col-md-6 col-12 mb-4">
                                            <div className="cards h-100 d-flex flex-column">
                                                <div className="pt-2 pl-4 rounded-lg">
                                                    <div className="eiml-shadow red" />
                                                    <img src={certificate} alt="certificate-program" className="w-28 relative top-4 border rounded-full" />
                                                </div>
                                                <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                                                    <div className="flex-grow-1">
                                                        

                                                        <h5 className='font-bold text-gray-600 course-title mb-2'>Checkpoint Certification Training</h5>

                                                        <p className='text-gray-500 mb-4 text-base sm:text-base'>
                                                            GLearn Industry's spearheading firewall protection system and obtain
                                                            validation through a Checkpoint Certification training at Careerera.
                                                        </p>

                                                    </div>
                                                    <div className="mt-auto">
                                                        <div className='row'>
                                                            <div className='col-lg-6 col-12'>
                                                                <Link to={'/cyber-security/' + 'checkpoint-certification-training/batch'} className='btn-site invert no-underline text-sm w-100'>
                                                                    <span>
                                                                        Upcoming Batches
                                                                    </span>
                                                                </Link>
                                                            </div>
                                                            <div className='ml-auto col-lg-6 col-12 mt-1 mt-lg-0'>
                                                                <Link to={'/cyber-security/' + 'checkpoint-certification-training'} className='btn-site no-underline text-sm w-100'>
                                                                    <span>
                                                                        Learn More
                                                                        <i className="fas fa-chevron-right ml-2 align-middle"></i>
                                                                    </span>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-xl-4 col-md-6 col-12 mb-4">
                                            <div className="cards h-100 d-flex flex-column">
                                                <div className="pt-2 pl-4 rounded-lg">
                                                    <div className="eiml-shadow red" />
                                                    <img src={certificate} alt="certificate-program" className="w-28 relative top-4 border rounded-full" />
                                                </div>
                                                <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                                                    <div className="flex-grow-1">
                                                        

                                                        <h5 className='font-bold text-gray-600 course-title mb-2'>Trend Micro Certification Training</h5>

                                                        <p className='text-gray-500 mb-4 text-base sm:text-base'>
                                                            Become a certified Trained-Micro practitioner. Learn how to deploy
                                                            and take charge of dominant security solutions at Careerera.
                                                        </p>

                                                    </div>
                                                    <div className="mt-auto">
                                                        <div className='row'>
                                                            <div className='col-lg-6 col-12'>
                                                                <Link to={'/cyber-security/' + 'trend-micro-certification-training/batch'} className='btn-site invert no-underline text-sm w-100'>
                                                                    <span>
                                                                        Upcoming Batches
                                                                    </span>
                                                                </Link>
                                                            </div>
                                                            <div className='ml-auto col-lg-6 col-12 mt-1 mt-lg-0'>
                                                                <Link to={'/cyber-security/' + 'trend-micro-certification-training'} className='btn-site no-underline text-sm w-100'>
                                                                    <span>
                                                                        Learn More
                                                                        <i className="fas fa-chevron-right ml-2 align-middle"></i>
                                                                    </span>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                        
                                        <div className="col-xl-4 col-md-6 col-12 mb-4">
                                            <div className="cards h-100 d-flex flex-column">
                                                <div className="pt-2 pl-4 rounded-lg">
                                                    <div className="eiml-shadow red" />
                                                    <img src={certificate} alt="certificate-program" className="w-28 relative top-4 border rounded-full" />
                                                </div>
                                                <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                                                    <div className="flex-grow-1">
                                                        

                                                        <h5 className='font-bold text-gray-600 course-title mb-2'>Implementing the NIST Standards using COBIT 5</h5>

                                                        <p className='text-gray-500 mb-4 text-base sm:text-base'>
                                                            Learn about the context and nature of cybersecurity risks, and
                                                            manage them by deploying the NIST Cybersecurity Framework and COBIT
                                                            5.
                                                        </p>

                                                    </div>
                                                    <div className="mt-auto">
                                                        <div className='row'>
                                                            <div className='col-lg-6 col-12'>
                                                                <Link to={'/cyber-security/' + 'implementing-the-nist-standards-using-cobit-5/batch'} className='btn-site invert no-underline text-sm w-100'>
                                                                    <span>
                                                                        Upcoming Batches
                                                                    </span>
                                                                </Link>
                                                            </div>
                                                            <div className='ml-auto col-lg-6 col-12 mt-1 mt-lg-0'>
                                                                <Link to={'/cyber-security/' + 'implementing-the-nist-standards-using-cobit-5'} className='btn-site no-underline text-sm w-100'>
                                                                    <span>
                                                                        Learn More
                                                                        <i className="fas fa-chevron-right ml-2 align-middle"></i>
                                                                    </span>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-xl-4 col-md-6 col-12 mb-4">
                                            <div className="cards h-100 d-flex flex-column">
                                                <div className="pt-2 pl-4 rounded-lg">
                                                    <div className="eiml-shadow red" />
                                                    <img src={certificate} alt="certificate-program" className="w-28 relative top-4 border rounded-full" />
                                                </div>
                                                <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                                                    <div className="flex-grow-1">
                                                        

                                                        <h5 className='font-bold text-gray-600 course-title mb-2'>COBIT5 Certification Training</h5>

                                                        <p className='text-gray-500 mb-4 text-base sm:text-base'>
                                                            Leverage your skills and knowledge of Cybersecurity and safeguard
                                                            your organization from sophisticated attacks with COBIT5
                                                            certification training and validate your technical skills.
                                                        </p>

                                                    </div>
                                                    <div className="mt-auto">
                                                        <div className='row'>
                                                            <div className='col-lg-6 col-12'>
                                                                <Link to={'/cyber-security/' + 'cobit5-certification-training/batch'} className='btn-site invert no-underline text-sm w-100'>
                                                                    <span>
                                                                        Upcoming Batches
                                                                    </span>
                                                                </Link>
                                                            </div>
                                                            <div className='ml-auto col-lg-6 col-12 mt-1 mt-lg-0'>
                                                                <Link to={'/cyber-security/' + 'cobit5-certification-training'} className='btn-site no-underline text-sm w-100'>
                                                                    <span>
                                                                        Learn More
                                                                        <i className="fas fa-chevron-right ml-2 align-middle"></i>
                                                                    </span>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-xl-4 col-md-6 col-12 mb-4">
                                            <div className="cards h-100 d-flex flex-column">
                                                <div className="pt-2 pl-4 rounded-lg">
                                                    <div className="eiml-shadow red" />
                                                    <img src={certificate} alt="certificate-program" className="w-28 relative top-4 border rounded-full" />
                                                </div>
                                                <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                                                    <div className="flex-grow-1">
                                                        

                                                        <h5 className='font-bold text-gray-600 course-title mb-2'>COBIT 5 Implementation Certification Training</h5>

                                                        <p className='text-gray-500 mb-4 text-base sm:text-base'>
                                                            Learn how to apply COBIT 5 to your company's specific business
                                                            challenges, pain spots, cause events, and risk scenarios. Learn how
                                                            to implement COBIT 5 in your company and how to use it effectively
                                                            for customer projects.
                                                        </p>

                                                    </div>
                                                    <div className="mt-auto">
                                                        <div className='row'>
                                                            <div className='col-lg-6 col-12'>
                                                                <Link to={'/cyber-security/' + 'cobit-5-implementation-certification-training/batch'} className='btn-site invert no-underline text-sm w-100'>
                                                                    <span>
                                                                        Upcoming Batches
                                                                    </span>
                                                                </Link>
                                                            </div>
                                                            <div className='ml-auto col-lg-6 col-12 mt-1 mt-lg-0'>
                                                                <Link to={'/cyber-security/' + 'cobit-5-implementation-certification-training'} className='btn-site no-underline text-sm w-100'>
                                                                    <span>
                                                                        Learn More
                                                                        <i className="fas fa-chevron-right ml-2 align-middle"></i>
                                                                    </span>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                        
                                        <div className="col-xl-4 col-md-6 col-12 mb-4">
                                            <div className="cards h-100 d-flex flex-column">
                                                <div className="pt-2 pl-4 rounded-lg">
                                                    <div className="eiml-shadow red" />
                                                    <img src={certificate} alt="certificate-program" className="w-28 relative top-4 border rounded-full" />
                                                </div>
                                                <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                                                    <div className="flex-grow-1">
                                                        

                                                        <h5 className='font-bold text-gray-600 course-title mb-2'>COBIT 5 Assessor for Security Certification Training</h5>

                                                        <p className='text-gray-500 mb-4 text-base sm:text-base'>
                                                            Avail yourself of this comprehensive trading about the use of
                                                            technology in support of managerial goals benefit from the COBIT 5
                                                            Assessor for Security Certification Training.
                                                        </p>

                                                    </div>
                                                    <div className="mt-auto">
                                                        <div className='row'>
                                                            <div className='col-lg-6 col-12'>
                                                                <Link to={'/cyber-security/' + 'cobit-5-assessor-for-security-certification-training/batch'} className='btn-site invert no-underline text-sm w-100'>
                                                                    <span>
                                                                        Upcoming Batches
                                                                    </span>
                                                                </Link>
                                                            </div>
                                                            <div className='ml-auto col-lg-6 col-12 mt-1 mt-lg-0'>
                                                                <Link to={'/cyber-security/' + 'cobit-5-assessor-for-security-certification-training'} className='btn-site no-underline text-sm w-100'>
                                                                    <span>
                                                                        Learn More
                                                                        <i className="fas fa-chevron-right ml-2 align-middle"></i>
                                                                    </span>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-xl-4 col-md-6 col-12 mb-4">
                                            <div className="cards h-100 d-flex flex-column">
                                                <div className="pt-2 pl-4 rounded-lg">
                                                    <div className="eiml-shadow red" />
                                                    <img src={certificate} alt="certificate-program" className="w-28 relative top-4 border rounded-full" />
                                                </div>
                                                <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                                                    <div className="flex-grow-1">
                                                        

                                                        <h5 className='font-bold text-gray-600 course-title mb-2'>COBIT 5 Assessor Certification Training</h5>

                                                        <p className='text-gray-500 mb-4 text-base sm:text-base'>
                                                            With great benefits for Managers and anyone in charge of making
                                                            decisions about the use of technology in support of business goals.
                                                        </p>

                                                    </div>
                                                    <div className="mt-auto">
                                                        <div className='row'>
                                                            <div className='col-lg-6 col-12'>
                                                                <Link to={'/cyber-security/' + 'cobit-5-assessor-certification-training/batch'} className='btn-site invert no-underline text-sm w-100'>
                                                                    <span>
                                                                        Upcoming Batches
                                                                    </span>
                                                                </Link>
                                                            </div>
                                                            <div className='ml-auto col-lg-6 col-12 mt-1 mt-lg-0'>
                                                                <Link to={'/cyber-security/' + 'cobit-5-assessor-certification-training'} className='btn-site no-underline text-sm w-100'>
                                                                    <span>
                                                                        Learn More
                                                                        <i className="fas fa-chevron-right ml-2 align-middle"></i>
                                                                    </span>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-xl-4 col-md-6 col-12 mb-4">
                                            <div className="cards h-100 d-flex flex-column">
                                                <div className="pt-2 pl-4 rounded-lg">
                                                    <div className="eiml-shadow red" />
                                                    <img src={certificate} alt="certificate-program" className="w-28 relative top-4 border rounded-full" />
                                                </div>
                                                <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                                                    <div className="flex-grow-1">
                                                        

                                                        <h5 className='font-bold text-gray-600 course-title mb-2'>CSF (Cyber Security Fundamental)</h5>

                                                        <p className='text-gray-500 mb-4 text-base sm:text-base'>
                                                            Enhance your skills and get closer to your dream of becoming an
                                                            expert Cybersecurity professional.
                                                        </p>

                                                    </div>
                                                    <div className="mt-auto">
                                                        <div className='row'>
                                                            <div className='col-lg-6 col-12'>
                                                                <Link to={'/cyber-security/' + 'csf-cyber-security-fundamental/batch'} className='btn-site invert no-underline text-sm w-100'>
                                                                    <span>
                                                                        Upcoming Batches
                                                                    </span>
                                                                </Link>
                                                            </div>
                                                            <div className='ml-auto col-lg-6 col-12 mt-1 mt-lg-0'>
                                                                <Link to={'/cyber-security/' + 'csf-cyber-security-fundamental'} className='btn-site no-underline text-sm w-100'>
                                                                    <span>
                                                                        Learn More
                                                                        <i className="fas fa-chevron-right ml-2 align-middle"></i>
                                                                    </span>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>



                    <div className="why-pgpedu">
                        <Careerera customizefaculty="true"
                            facultysubtitle='Enrol with leading global online educational course provider.'
                            facultyhead1='Users'
                            facultypara1='250000+'
                            facultyhead2='Top Ranked Programs'
                            facultypara2='10'
                            facultyhead3='Industry Experts'
                            facultypara3='500+'
                            facultyhead4='Expert Faculties'
                            facultypara4='1000+' />
                    </div>

                    <Profile title="Data Science" />


                    <CareerAssistance
                        title='Career'
                        titlesub='Assistance'
                        titleheading='Take advantage of Careerera’s partnerships with Global leading IT companies.'
                        box1='Learn Insights on Futuristic Approaches'
                        box2='Workshops on Resume Review & Interview Preparation'
                        box3='Career Guidance and Mentorship by Careerera and Industry Leaders' />

                    <Light image={roles} />

                    
                    <div className='showprocess-Only'>
                        <UserformsApplication />
                    </div>
 

                    <CityFooterCourse id={cyberstate.cyberstate} id2={cyberstate.cyberCoutry} title="Cyber Security" />
                </div>
            </div> :
 <img src={fun} className="w-screen" alt="careerera-loader-image"/>}
        </>
    )
}
