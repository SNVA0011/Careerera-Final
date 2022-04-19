import React from 'react'
import online from '../../Images/online.jpg'
import toplayer from '../../Images/mocktest/top-layer.png'

const Online = () => {
    return (
        <div className='online-education-opp'>
            <div className="container py-16">

                <div className="sec_title text-center">
                    <h2 className="text-2xl md:text-3xl font-bold uppercase">
                        Online Education <span className='orange-clrsite'>Opportunity</span>
                    </h2>
                    <p className="text-gray-700 text-lg md:text-xl lg:text-2xl fw-medium">
                        - An Overview 2016 vs {(new Date().getFullYear()+1)} -
                    </p>
                    <hr className="w-20 hr mb-4 bg-blue-400 sepfoll-hr mx-auto" />
                </div>

                <div className="row pt-4">
                    <div className='col-lg-3 col-12'>
                        <img src={toplayer} className='dotstp' alt='dots-texture'></img>
                        <img src={online} alt='online_education' className="rounded-2xl full-w position-relative z-10  shadow-image-lg" />
                        <div className='text-right'>
                            <img src={toplayer} alt='dots-texture' className='dotstp d-inline-block right'></img>
                        </div>
                    </div>
                    <div className="col-lg-9 col-12 font-semibold">



                        <div className="verview-tmline">
                            <div className="row align-items-center how-it-works d-flex">
                                <div className="col-2 text-center bottom d-inline-flex justify-content-center align-items-start">
                                    <div className="circle font-weight-bold">1</div>
                                </div>
                                <div className="col-9">
                                    <p className='md:text-lg text-gray-700 font-semibold my-3'>
                                        In 2016 online education market was at 1800 cores which
                                        by {(new Date().getFullYear()+1)} will be 14,000 crore at 52% CAGR.
                                    </p>
                                </div>
                            </div>
                            <div className="row timeline">
                                <div className="col-2">
                                    <div className="corner top-right" />
                                </div>
                                <div className="col-8">
                                    <hr />
                                </div>
                                <div className="col-2">
                                    <div className="corner left-bottom" />
                                </div>
                            </div>
                            <div className="row align-items-center justify-content-end how-it-works d-flex">
                                <div className="col-9 text-right">
                                    <p className='md:text-lg text-gray-700 font-semibold my-3'>
                                        In 2016 Re-skilling & online certification was at 696
                                        crore by {(new Date().getFullYear()+1)} will be at 3400 crore at 
                                        CAGR of 38%.
                                    </p>
                                </div>
                                <div className="col-2 text-center full d-inline-flex justify-content-center align-items-center">
                                    <div className="circle font-weight-bold">2</div>
                                </div>
                            </div>
                            <div className="row timeline">
                                <div className="col-2">
                                    <div className="corner right-bottom" />
                                </div>
                                <div className="col-8">
                                    <hr />
                                </div>
                                <div className="col-2">
                                    <div className="corner top-left" />
                                </div>
                            </div>
                            <div className="row align-items-center how-it-works d-flex">
                                <div className="col-2 text-center top d-inline-flex justify-content-center align-items-center">
                                    <div className="circle font-weight-bold">3</div>
                                </div>
                                <div className="col-9">
                                    <p className='md:text-lg text-gray-700 font-semibold my-3'>
                                        This increase in market size is primarily driven by
                                        increase in number of students pursuing higher education
                                        and professional courses..
                                    </p>
                                </div>
                            </div>
                            <div className="row timeline">
                                <div className="col-2">
                                    <div className="corner top-right" />
                                </div>
                                <div className="col-8">
                                    <hr />
                                </div>
                                <div className="col-2">
                                    <div className="corner left-bottom" />
                                </div>
                            </div>
                            <div className="row align-items-center justify-content-end how-it-works d-flex">
                                <div className="col-9 text-right">
                                    <p className='md:text-lg text-gray-700 font-semibold my-3'>A recession-proof industry.</p>
                                </div>
                                <div className="col-2 text-center full d-inline-flex justify-content-center align-items-center">
                                    <div className="circle font-weight-bold">4</div>
                                </div>
                            </div>
                            <div className="row timeline">
                                <div className="col-2">
                                    <div className="corner right-bottom" />
                                </div>
                                <div className="col-8">
                                    <hr />
                                </div>
                                <div className="col-2">
                                    <div className="corner top-left" />
                                </div>
                            </div>
                            <div className="row align-items-center how-it-works d-flex">
                                <div className="col-2 text-center top d-inline-flex justify-content-center align-items-center">
                                    <div className="circle font-weight-bold">5</div>
                                </div>
                                <div className="col-9">
                                    <p className='md:text-lg text-gray-700 font-semibold my-3'>
                                        With 1.3 billion population and an average age of 29
                                        years.
                                    </p>
                                </div>
                            </div>
                            <div className="row timeline">
                                <div className="col-2">
                                    <div className="corner top-right" />
                                </div>
                                <div className="col-8">
                                    <hr />
                                </div>
                                <div className="col-2">
                                    <div className="corner left-bottom" />
                                </div>
                            </div>
                            <div className="row align-items-center justify-content-end how-it-works d-flex">
                                <div className="col-9 text-right">
                                    <p className='md:text-lg text-gray-700 font-semibold my-3'>
                                        29% of the Indian population is under 18 age group
                                        (26.6% in the 0 to 14 years age bracket).
                                    </p>
                                </div>
                                <div className="col-2 text-center full d-inline-flex justify-content-center align-items-center">
                                    <div className="circle font-weight-bold">6</div>
                                </div>
                            </div>
                            <div className="row timeline">
                                <div className="col-2">
                                    <div className="corner right-bottom" />
                                </div>
                                <div className="col-8">
                                    <hr />
                                </div>
                                <div className="col-2">
                                    <div className="corner top-left" />
                                </div>
                            </div>
                            <div className="row align-items-center how-it-works d-flex">
                                <div className="col-2 text-center top d-inline-flex justify-content-center align-items-end">
                                    <div className="circle font-weight-bold">7</div>
                                </div>
                                <div className="col-9">
                                    <p className='md:text-lg text-gray-700 font-semibold my-3'>
                                        There are about 23.65 crores (in the age group of 0 to
                                        14 years) which is the target audience for tutoring,
                                        basic IT skilling, aptitude tests, and foundation
                                        courses aimed for professionals.
                                    </p>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}
export default Online













