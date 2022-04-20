import React from 'react'
import application from '../../Images/interview.png'
import discuss from '../../Images/ai.png'
import schedule from '../../Images/tp.png'
import meet from '../../Images/st.png'
import pen from '../../Images/ct.png'
import tool from '../../Images/ca.png' 
import AnimatedNumbers from "react-animated-numbers";

const How = () => {
    return (
        <div className='full-w how-tobecome-teach certification-courseslight full-w whyobject-sc exc text-center text-black'>
            <div className='py-16'>
                <div className="container">
                    <div className="mt-0">
                        <h1 className="font-bold text-3xl md:text-4xl text-center mb-3 text-black text-capitalize">
                            How to Become a{' '}
                            <span className="sitblu-clrsite">
                                Careerera Instructor
                            </span>
                        </h1>

                        <p className='text-gray-700 mb-2 md:text-lg font-semibold'>
                            Careerera requires excellent communication skills and
                            hands-on technical experience and expertise. A degree, plus
                            advanced training and teaching experience are highly
                            desired. You must be able to teach a minimum of 6 weeks per
                            year, with a commitment of 8-14 weeks preferred.
                        </p>
                        <h4 className="font-semibold text-base sitblu-clrsite bg-white d-inline-block px-3 py-1 rounded-2xl mb-3">
                            Our Selection and Training Process
                        </h4>

                        <hr className="w-20 hr mb-4 bg-blue-400 sepfoll-hr mx-auto weeksz" />
                    </div>

                    <div className="row pt-10">
                        <div className="col-xl-4 col-md-6 col-12 mb-3 rounded-2xl">
                            <div className="justify-content-center flex">
                                <img alt='Interview' src={application} className="" width="80" />
                            </div>
                            <div className="text-center partner  rounded-2xl p-4">
                                <h4 className="font-bold  ">Interview</h4>
                                <p className="leading-relaxed font-medium  md:text-lg">
                                    First, we interview candidates to ensure they have
                                    strong communication skills so they can pass along
                                    their expertise effectively.
                                </p>
                            </div>
                        </div>

                        <div className="col-xl-4 col-md-6 col-12 mb-3 rounded-2xl ">
                            <div className="justify-content-center flex">
                                <img alt='Author Interview' src={schedule} className="" width="80" />
                            </div>
                            <div className="text-center partner  rounded-2xl p-4">
                                <h4 className="font-bold  ">Author Interview</h4>
                                <p className="leading-relaxed font-medium  md:text-lg">
                                    Next, the course author takes all candidates through
                                    a detailed checklist to make sure they have both the
                                    technical expertise and practical work experience
                                    necessary to teach the course.
                                </p>
                            </div>
                        </div>

                        <div className="col-xl-4 col-md-6 col-12 mb-3 rounded-2xl">
                            <div className="justify-content-center flex">
                                <img alt='Train-the-Trainer Program' src={discuss} className="" width="80" />
                            </div>
                            <div className="text-center partner  rounded-2xl p-4">
                                <h4 className="font-bold  ">Train-the-Trainer Program</h4>
                                <p className="leading-relaxed font-medium  md:text-lg">
                                    All candidates then go through our intensive
                                    Train-the-Trainer program where they learn the
                                    latest techniques in Active Learning. To graduate,
                                    they must deliver three course presentations and
                                    receive excellent evaluations.
                                </p>
                            </div>
                        </div>

                        <div className="col-xl-4 col-md-6 col-12 mb-3 rounded-2xl   ">
                            <div className="justify-content-center flex">
                                <img alt='Course Audit' src={tool} className="" width="80" />
                            </div>
                            <div className="text-center partner  rounded-2xl p-4">
                                <h4 className="font-bold  ">Course Audit</h4>
                                <p className="leading-relaxed font-medium  md:text-lg">
                                    Successful candidates next audit the course they
                                    will teach, and present part of the course for
                                    evaluation by the senior instructor for an
                                    assessment.
                                </p>
                            </div>
                        </div>

                        <div className="col-xl-4 col-md-6 col-12 mb-3 rounded-2xl ">
                            <div className="justify-content-center flex">
                                <img alt='Co-Teach' src={pen} className="" width="80" />
                            </div>
                            <div className="text-center partner  rounded-2xl p-4">
                                <h4 className="font-bold  ">Co-Teach</h4>
                                <p className="leading-relaxed font-medium  md:text-lg">
                                    The most successful candidates then co-teach a
                                    course with an experienced instructor acting as
                                    their mentor. They present half or more of the
                                    course for evaluation by the senior instructor.
                                </p>
                            </div>
                        </div>

                        <div className="col-xl-4 col-md-6 col-12 mb-3  rounded-2xl  ">
                            <div className="justify-content-center flex">
                                <img alt='Solo Teac' src={meet} className="" width="80" />
                            </div>
                            <div className="text-center partner  rounded-2xl p-4">
                                <h4 className="font-bold  ">Solo Teach</h4>
                                <p className="leading-relaxed font-medium  md:text-lg">
                                    Finally, the candidate is assigned to a solo teach.
                                    Course attendees complete detailed evaluations of
                                    all instructors, and these are used to pinpoint
                                    ongoing development activities that constantly
                                    improve their scores.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className='training-room'>
            <div className="scroll-spbx certification-courses">
                    <div className="container pt-24 pb-12  text-capitalize">
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <div className="main_heading heading_center mb-5">
                                <h2 className="font-bold text-3xl md:text-4xl text-center text-white">
                                        What we have <span className='orange-clrsite d-inline-block'>Achieved so far</span></h2>
                                    <span class="heading-border-line d-block left-0 mt-4 mb-4 mx-auto"></span>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-6 col-lg-3">
                                <ul className="counter_number px-0 mb-5">
                                    <li className="font-bold text-4xl md:text-5xl mb-1 text-blue-300">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-full mb-3  text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>
                                        <div className='animated_numberscenter w-100'>
                                            <AnimatedNumbers animateToNumber={253851}></AnimatedNumbers>
                                        </div>
                                    </li>
                                    <li className=" text-lg md:text-lg  font-semibold text-white tracking-wide">Registered Users</li>
                                </ul>
                            </div>
                            <div className="col-xs-12 col-sm-6 col-lg-3">
                                <ul className="counter_number px-0 mb-5">
                                    <li className="font-bold text-4xl md:text-5xl mb-1 text-blue-300">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-full mb-3 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path d="M12 14l9-5-9-5-9 5 9 5z" />
                                            <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                                        </svg>
                                        <div className='animated_numberscenter w-100'>
                                            <AnimatedNumbers animateToNumber={146}></AnimatedNumbers>
                                        </div>
                                    </li>
                                    <li className=" text-lg md:text-lg  font-semibold text-white tracking-wide">Courses Available</li>
                                </ul>
                            </div>
                            <div className="col-xs-12 col-sm-6 col-lg-3">
                                <ul className="counter_number px-0 mb-5">
                                    <li className="font-bold text-4xl md:text-5xl mb-1 text-blue-300">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-full mb-3 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                                        </svg>
                                        <div className='animated_numberscenter w-100'>
                                            <AnimatedNumbers animateToNumber={1054}></AnimatedNumbers>
                                        </div>
                                    </li>
                                    <li className=" text-lg md:text-lg  font-semibold text-white tracking-wide">Upcoming Classes</li>
                                </ul>
                            </div>
                            <div className="col-xs-12 col-sm-6 col-lg-3">
                                <ul className="counter_number px-0 mb-5">
                                    <li className="font-bold text-4xl md:text-5xl mb-1 text-blue-300">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-full mb-3 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 13v-1m4 1v-3m4 3V8M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                                        </svg>
                                        <div className='animated_numberscenter w-100'>
                                            <AnimatedNumbers animateToNumber={47}></AnimatedNumbers>
                                        </div>
                                    </li>
                                    <li className=" text-lg md:text-lg  font-semibold text-white tracking-wide">E-Learning</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className='overflow-hidden ppt-clistaff d-none'>
                        <div className="shape-bottom">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                                <path className="shape-fill" fill="#efefef" d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7  c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4  c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"></path>
                            </svg>
                        </div>
                    </div>
                </div>


            </div>

        </div>
    )
}
export default How




