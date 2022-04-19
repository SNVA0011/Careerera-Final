import React from 'react'
import application from '../../Images/formpen.png'
import discuss from '../../Images/network.png'
import schedule from '../../Images/workforce.png'
import meet from '../../Images/calculate.png'
import pen from '../../Images/way.png'
import tool from '../../Images/skill.png'
import Testimonial from '../../Atoms/Testimonial'
import deepak from '../../Images/deepak.png'

const Reason = () => {
    return (
        <div className='full-w greatan-instructor'>
        
            <div className="container py-16">
            <h1 className="font-bold text-3xl md:text-4xl text-center mb-5 text-black">
                        Great Reasons to Become a{' '}
                        <span className="text-blue-500 sitblu-clrsite">
                            Careerera Instructor
                        </span>
                        <div className="border-t-2 border-gray-400 w-14 mt-3 mb-2 mx-auto"></div>
                    </h1>
                  

                <div className="row">
                    <div className='col-xl-4 col-lg-6 col-12 mb-4'>
                        <div className=" bg-white-fullw h-100 d-flex">
                            <div className="justify-content-center">
                                <span className="rotateme"></span>
                                <img
                                    src={application}
                                    alt='Realize big rewards for a part-time assignment'
                                    className="bg-red-500 card-img-top"
                                />
                            </div>
                            <div className="text-left pl-5">
                                <h4 className="font-semibold text-xl md:text-2xl mb-2">
                                    Realize big rewards for a part-time assignment.
                                </h4>
                                <p className="text-base">
                                    As a Careerera instructor, you'll teach 4-14+ weeks
                                    per year. You're free to spend the majority of your
                                    time pursuing other professional opportunities and
                                    goals.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='col-xl-4 col-lg-6 col-12 mb-4'>
                        <div className="bg-white-fullw h-100 d-flex">
                            <div className="justify-content-center">
                                <span className="rotateme"></span>
                                <img
                                    src={schedule}
                                    alt='Network with top IT professionals from Fortune 1000  companies'
                                    className="bg-blue-500  card-img-top"
                                />
                            </div>
                            <div className="text-left pl-5">
                                <h4 className="font-semibold text-xl md:text-2xl mb-2">
                                    Network with top IT professionals from Fortune 1000
                                    companies.
                                </h4>
                                <p className="text-base">
                                    Grow your consulting practice from the classroom.
                                    Gain new clients while demonstrating expertise and
                                    teaching skills that showcase your consulting
                                    talents.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='col-xl-4 col-lg-6 col-12 mb-4'>
                        <div className=" bg-white-fullw h-100 d-flex">
                            <div className="justify-content-center">
                                <span className="rotateme"></span>
                                <img
                                    src={discuss}
                                    alt='Enjoy full logistical and operational support for flawless course execution'
                                    className="bg-green-500  card-img-top"
                                />
                            </div>
                            <div className="text-left pl-5">
                                <h4 className="font-semibold text-xl md:text-2xl mb-2">
                                    Enjoy full logistical and operational support for
                                    flawless course execution.
                                </h4>
                                <p className="text-base">
                                    Concentrate on what you do best in the classroom
                                    ...teaching! Careerera manages course development,
                                    ships hardware, software and course notes, plus
                                    coordinates travel and lodging, and we handle all
                                    the details necessary to ensure your success in the
                                    classroom.
                                </p>
                            </div>
                        </div>
                    </div>


                    <div className='col-xl-4 col-lg-6 col-12 mb-4'>
                        <div className="bg-white-fullw  h-100 d-flex">
                            <div className="justify-content-center">
                                <span className="rotateme"></span>
                                <img
                                    src={tool}
                                    alt='Expand your skills'
                                    className="bg-purple-500  card-img-top"
                                />
                            </div>
                            <div className="text-left pl-5">
                                <h4 className="font-semibold text-xl md:text-2xl mb-2">
                                    Expand your skills.
                                </h4>
                                <p className="text-base">
                                    Careerera encourages your professional growth. You
                                    will have the opportunity to audit many of our
                                    courses, in or outside your field of expertise. We
                                    also provide training and mentoring programs
                                    designed to keep your teaching and presentation
                                    skills at peak levels. You may even apply to join
                                    the ranks of course authors and technical editors.
                                    We select all our authors and editors from our
                                    instructor corps.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='col-xl-4 col-lg-6 col-12 mb-4'>
                        <div className="bg-white-fullw  h-100 d-flex">
                            <div className="justify-content-center">
                                <span className="rotateme"></span>
                                <img
                                    src={pen}
                                    alt='Find scheduling flexibility'
                                    className="bg-yellow-500  card-img-top"
                                />
                            </div>
                            <div className="text-left pl-5">
                                <h4 className="font-semibold text-xl md:text-2xl mb-2">
                                    Find scheduling flexibility.
                                </h4>
                                <p className="text-base">
                                    A scheduling coordinator dedicated to your course(s)
                                    and sensitive to your individual availability will
                                    work with you on short- and long-term schedules.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='col-xl-4 col-lg-6 col-12 mb-4'>
                        <div className=" pt-10 bg-white-fullw  h-100 d-flex   ">
                            <div className="justify-content-center">
                                <span className="rotateme"></span>
                                <img
                                    src={meet}
                                    alt='Gain immediate access to the latest advances in software and hardwar'
                                    className="bg-red-500 card-img-top"
                                />
                            </div>
                            <div className="text-left pl-5">
                                <h4 className="font-semibold text-xl md:text-2xl mb-2">
                                    Gain immediate access to the latest advances in
                                    software and hardware
                                </h4>
                                <p className="text-base">
                                    Careerera begins instruction on new technologies
                                    often before the product is offered for public sale.
                                    You have access to all course-specific information,
                                    history and updates. You also have an open line of
                                    communication to course authors, technical editors
                                    and product development managers.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


        </div>
    )
}
export default Reason














                                 