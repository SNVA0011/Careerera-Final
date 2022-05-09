import React, { useContext, useState } from 'react' 
import Forms from '../../Atoms/Form';
 

const CertificateNasscom = (props) => { 
 
    const [selectphoneval, setselectphoneval] = useState([]);
    function setvalPhone(e) {
        setselectphoneval(e.target.value)
    }
    if (selectphoneval == 'Please select your country') {
        setselectphoneval('')
    }
   

    return (
        <div className='certification-courses full-w partner-marketing-affiliates would full-w'>
            <div className="container bankingcxc">
                <div className="row py-16 align-items-center">
                    <div className="col-xxl-8 col-xl-7 col-12 pb-16 pb-xl-0"> 
                            <h2 className="text-2xl sm:text-3xl xl:text-4xl mb-4 font-bold text-white uppercase mastercnhero">
                                POST GRADUATE PROGRAM  <span className="orange-lgclr d-inline-block">IN DATA SCIENCE</span>
                            </h2>
                          
                        <span className="heading-border-line d-block left-0  mt-3 mb-4"></span> 

                        <div className="row mb-4 text-white">
                            <div className="col-md-6 col-12">
                                <ul className="px-0 mb-0">
                                    <li className="sm:text-lg mb-3 font-semibold tracking-wide d-flex">
                                        <div className="mr-2">
                                            <i className="shadow bi bi-check2 text-dark text-lg mr-1 bg-yellow-400 rounded px-1" />
                                        </div>

                                       12-Months Online Program
                                    </li>
                                    <li className="sm:text-lg mb-3 font-semibold tracking-wide d-flex">
                                        <div className="mr-2">
                                            <i className="shadow bi bi-check2 text-dark text-lg mr-1 bg-yellow-400 rounded px-1" />
                                        </div>
                                        Multiple Live Projects
                                    </li>
                                    <li className="sm:text-lg mb-3 font-semibold tracking-wide d-flex">
                                        <div className="mr-2">
                                            <i className="shadow bi bi-check2 text-dark text-lg mr-1 bg-yellow-400 rounded px-1" />
                                        </div>
                                       Career Assistance 
                                    </li>
                                    <li className="sm:text-lg mb-3 font-semibold tracking-wide d-flex">
                                        <div className="mr-2">
                                            <i className="shadow bi bi-check2 text-dark text-lg mr-1 bg-yellow-400 rounded px-1" />
                                        </div>
                                        Live Online Sessions 
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-6 col-12">
                                <ul className="px-0">
                                    <li className="sm:text-lg mb-3 font-semibold tracking-wide d-flex">
                                        <div className="mr-2">
                                            <i className="shadow bi bi-check2 text-dark text-lg mr-1 bg-yellow-400 rounded px-1" />
                                        </div>
                                       Capstone Projects
                                    </li>
                                    <li className="sm:text-lg mb-3 font-semibold tracking-wide d-flex">
                                        <div className="mr-2">
                                            <i className="shadow bi bi-check2 text-dark text-lg mr-1 bg-yellow-400 rounded px-1" />
                                        </div>
                                       Industry  Internship
                                    </li>
                                    <li className="sm:text-lg mb-3 font-semibold tracking-wide d-flex">
                                        <div className="mr-2">
                                            <i className="shadow bi bi-check2 text-dark text-lg mr-1 bg-yellow-400 rounded px-1" />
                                        </div>
                                       Globally Renowned Trainers
                                    </li>
                                    <li className="sm:text-lg mb-3 font-semibold tracking-wide d-flex">
                                        <div className="mr-2">
                                            <i className="shadow bi bi-check2 text-dark text-lg mr-1 bg-yellow-400 rounded px-1" />
                                        </div>
                                       25+ Industry Graded Projects
                                    </li>
                                </ul>
                            </div>
                        </div>


                        <div className="mt-5 mt-lg-4">
                            <button aria-label="DOWNLOAD PROSPECTUS" data-toggle="modal" data-target="#query" 
                             className="md:h-12 btn-site invert mr-4 no-underline d-inline-flex justify-content-center align-items-center btnlg-learn text-sm">
                                <span><i class="bi bi-download pr-1 text-lg"></i> DOWNLOAD PROSPECTUS</span>
                            </button> 
                        </div>
 
                    </div>

                    <div className='col-xxl-4 col-xl-5 col-lg-6 col-12 align-self-center'>
                    <Forms 
                    titlemasterfalse='empty'
                    countriesboxnone='empty'
                    messageboxnone='empty'
                    />
                    </div>

                    
                </div>
            </div>
        </div>
    )
}
export default CertificateNasscom


 