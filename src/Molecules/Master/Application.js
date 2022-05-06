import React  from "react"; 
import Applybyfilling from './../../Images/Apply-by-filling.png'
import Admissions from './../../Images/Admissions.png'
import Shortlisted from './../../Images/Shortlisted.png'
import Screeningcall from './../../Images/Screening-call.png'

const Application = () => {
    return (
        <>
 
            <div className='application_process_sec scroll-spbx bg-gray-50' id='application'>
                <div className='container py-16'>
                    <div className="sec_title">
                        <h2 className="text-2xl md:text-3xl font-bold">Application  <span className="orange-clrsite">Process</span></h2>
                        <p className="text-gray-500 text-base md:text-lg fw-medium">Enroll in the program with a simple online form.</p>
                        <hr className="w-20 hr mb-4 bg-blue-400 sepfoll-hr" />
                    </div>

                    <div className="pt-0">
                        <div className="row pt-1">
                            
                            <div className="justify-items-center  col-lg-3 col-md-6 col-12 text-center py-4 rounded-lg mb-4">
                               <div className='tt-iconbox-customimg'>
                                   <img className="img-round" src={Applybyfilling}/>
                               </div>
                                <div className="full-w">
                                    <h4 className='text-gray-700 font-bold text-base mb-0'>Apply by filling a
                                        simple online
                                        application form</h4>
                                </div>
                            </div>

                            
                            <div className="justify-items-center  col-lg-3 col-md-6 col-12 text-center py-4 rounded-lg mb-4">
                               <div className='tt-iconbox-customimg'>
                                   <img className="img-round" src={Admissions}/>
                               </div>
                                <div className="full-w">
                                    <h4 className='text-gray-700 font-bold text-base mb-0'>Admissions
                                        committee will
                                        review and
                                        shortlist.</h4>

                                </div>
                            </div>
                           
                            <div className="justify-items-center  col-lg-3 col-md-6 col-12 text-center py-4 rounded-lg mb-4">
                               <div className='tt-iconbox-customimg'>
                                   <img className="img-round" src={Shortlisted}/>
                               </div>
                                <div className="full-w">
                                    <h4 className='text-gray-700 font-bold text-base mb-0'>Shortlisted
                                        candidates need
                                        to appear for an
                                        online aptitude
                                        test.</h4>

                                </div>
                            </div>
                            
                            <div className="justify-items-center  col-lg-3 col-md-6 col-12 text-center py-4 rounded-lg mb-4">
                               <div className='tt-iconbox-customimg'>
                                   <img className="img-round" src={Screeningcall}/>
                               </div>
                                <div className="full-w">
                                    <h4 className='text-gray-700 font-bold text-base mb-0'>Screening call with Alumni/ Faculty</h4>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
export default Application;

