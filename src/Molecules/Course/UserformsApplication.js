import React, { useState } from 'react';
import genpact from './../../Images/partner_logo/genpact.png'
import hcl from './../../Images/partner_logo/hcl.png'
import honeywell from './../../Images/partner_logo/honeywell.png'
import isro from './../../Images/partner_logo/isro.png'
import ibm from './../../Images/partner_logo/ibm.png'
import kpmg from './../../Images/partner_logo/kpmg.png'
import mckinsey from './../../Images/partner_logo/mckinsey.png'
import mu from './../../Images/partner_logo/mu-sigma.png'
import pwc from './../../Images/partner_logo/pwc.png'
import samsung from './../../Images/partner_logo/samsung.png'
import maersk from './../../Images/partner_logo/maersk.png'
import tech from './../../Images/partner_logo/tech-mahindra.png'
import thomson from './../../Images/partner_logo/thomson-reuters.png'
import verizon from './../../Images/partner_logo/verizon.png'
import wipro from './../../Images/partner_logo/wipro.png'
import accenture from './../../Images/partner_logo/accenture.png'
import adove from './../../Images/partner_logo/adove.png'
import amazon from './../../Images/partner_logo/amazon.png'
import american from './../../Images/partner_logo/american-express.png'
import aonhewitt from './../../Images/partner_logo/aonhewitt.png'
import barclasys from './../../Images/partner_logo/barclasys.png'
import capgemini from './../../Images/partner_logo/capgemini.png'
import cisco from './../../Images/partner_logo/cisco.png'
import citigroup from './../../Images/partner_logo/citigroup.png'
import csc from './../../Images/partner_logo/csc.png'
import cognizant from './../../Images/partner_logo/cognizant.png'
import dell from './../../Images/partner_logo/dell.png'
import doloittle from './../../Images/partner_logo/doloittle.png'
import ey from './../../Images/partner_logo/ey.png'
import gartner from './../../Images/partner_logo/gartner.png'
import fidelity from './../../Images/partner_logo/fidelity.png'
import Applybyfilling from './../../Images/Apply-by-filling.png'
import Admissions from './../../Images/Admissions.png'
import Shortlisted from './../../Images/Shortlisted.png'
import Screeningcall from './../../Images/Screening-call.png'

export default function UserformsApplication(props) {
    const [conthide, setconthide] = useState(false);
    function showMorecont() {
        setconthide((conthide) => (!conthide))
    }



    return (
        <>

            {/* our-users-from  */}
            <div className={props.title && props.subtitle && props.titleheading ? 'training-room full-w mb-3' : 'full-w'}>
                {props.title && props.subtitle && props.titleheading ?
                    <div className='overflow-hidden ppt-clistaff top-2-relativeplus'>
                        <div className="shape-bottom">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                                <path className="shape-fill" fill="#eff6ff" d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7  c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4  c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"></path>
                            </svg>
                        </div>
                    </div>
                    : ''}

                <div className={'our-users-from scroll-spbx ' + (props.title && props.subtitle && props.titleheading ? 'dynemicprog-users' : 'staticprog-users')} id='HiringPartner'>

                    <div className={'container ' + (props.title && props.subtitle && props.titleheading ? 'py-5' : 'py-16')}>

                        {props.title && props.subtitle && props.titleheading ?
                            <div className="sec_title">
                                <h2 className="text-2xl md:text-3xl font-bold">{props.title}  <span className="orange-clrsite">{props.subtitle}</span></h2>
                                <p className="text-gray-500 text-base md:text-lg fw-medium">{props.titleheading}</p>
                                <hr className="w-20 hr mb-4 bg-blue-400 sepfoll-hr" />
                            </div>
                            :
                            <>
                                {props.customizeheading ?
                                    <div className="sec_title">
                                        <h2 className="text-2xl md:text-3xl font-bold">{props.cantitle}  <span className="orange-clrsite">{props.cansubtitle}</span></h2>
                                        <p className="text-gray-500 text-base md:text-lg fw-medium">{props.cantitleheading}</p>
                                        <hr className="w-20 hr mb-4 bg-blue-400 sepfoll-hr" />
                                    </div>
                                    :
                                    <div className="sec_title">
                                        <h2 className="text-2xl md:text-3xl font-bold">Our  <span className="orange-clrsite">Alumni</span></h2>
                                        <p className="text-gray-500 text-base md:text-lg fw-medium">We have learners for our Data Science Program From Following Companies</p>
                                        <hr className="w-20 hr mb-4 bg-blue-400 sepfoll-hr" />
                                    </div>
                                }
                            </>
                        }

                        <div className="pt-3">
                            <div className="partner_list">
                                <ul className='row p-0'>
                                    <li className="col-lg-4 col-sm-6 col-12 mb-4">
                                        <div className='border w-100 h-100 shadow-sm d-flex align-items-center justify-content-center bg-white'>
                                            <img src={genpact} alt={'genpact'} className='card-img-top' />
                                        </div>
                                    </li>
                                    <li className="col-lg-4 col-sm-6 col-12 mb-4">
                                        <div className='border w-100 h-100 shadow-sm d-flex align-items-center justify-content-center bg-white'>
                                            <img src={hcl} alt={'hcl'} className='card-img-top' />
                                        </div>
                                    </li>
                                    <li className="col-lg-4 col-sm-6 col-12 mb-4">
                                        <div className='border w-100 h-100 shadow-sm d-flex align-items-center justify-content-center bg-white'>
                                            <img src={honeywell} alt={'honeywell'} className='card-img-top' />
                                        </div>
                                    </li>
                                    <li className="col-lg-4 col-sm-6 col-12 mb-4">
                                        <div className='border w-100 h-100 shadow-sm d-flex align-items-center justify-content-center bg-white'>
                                            <img src={isro} alt={'isro'} className='card-img-top' />
                                        </div>
                                    </li>
                                    <li className="col-lg-4 col-sm-6 col-12 mb-4">
                                        <div className='border w-100 h-100 shadow-sm d-flex align-items-center justify-content-center bg-white'>
                                            <img src={ibm} alt={'ibm'} className='card-img-top' />
                                        </div>
                                    </li>
                                    <li className="col-lg-4 col-sm-6 col-12 mb-4">
                                        <div className='border w-100 h-100 shadow-sm d-flex align-items-center justify-content-center bg-white'>
                                            <img src={kpmg} alt={'kpmg'} className='card-img-top' />
                                        </div>
                                    </li>
                                    <li className="col-lg-4 col-sm-6 col-12 mb-4">
                                        <div className='border w-100 h-100 shadow-sm d-flex align-items-center justify-content-center bg-white'>
                                            <img src={mckinsey} alt={'mckinsey'} className='card-img-top' />
                                        </div>
                                    </li>
                                    <li className="col-lg-4 col-sm-6 col-12 mb-4">
                                        <div className='border w-100 h-100 shadow-sm d-flex align-items-center justify-content-center bg-white'>
                                            <img src={mu} alt={'mu'} className='card-img-top' />
                                        </div>
                                    </li>
                                    <li className="col-lg-4 col-sm-6 col-12 mb-4">
                                        <div className='border w-100 h-100 shadow-sm d-flex align-items-center justify-content-center bg-white'>
                                            <img src={pwc} alt={'pwc'} className='card-img-top' />
                                        </div>
                                    </li>
                                    <li className="col-lg-4 col-sm-6 col-12 mb-4">
                                        <div className='border w-100 h-100 shadow-sm d-flex align-items-center justify-content-center bg-white'>
                                            <img src={samsung} alt={'samsung'} className='card-img-top' />
                                        </div>
                                    </li>
                                    <div className={"p_list_show_more text-center " + (conthide ? 'd-none' : 'd-block')}>
                                        <a href={void (0)} onClick={() => { showMorecont() }}
                                            className="desc_show_more btn-site no-underline cursor-pointer invert"><span>Show More</span>
                                        </a>
                                    </div>
                                    <li className="col-lg-4 col-sm-6 col-12 mb-4">
                                        <div className='border w-100 h-100 shadow-sm d-flex align-items-center justify-content-center bg-white'>
                                            <img src={maersk} alt={'maersk'} className='card-img-top' />
                                        </div>
                                    </li>
                                    <li className="col-lg-4 col-sm-6 col-12 mb-4">
                                        <div className='border w-100 h-100 shadow-sm d-flex align-items-center justify-content-center bg-white'>
                                            <img src={tech} alt={'tech'} className='card-img-top' />
                                        </div>
                                    </li>
                                    <li className="col-lg-4 col-sm-6 col-12 mb-4">
                                        <div className='border w-100 h-100 shadow-sm d-flex align-items-center justify-content-center bg-white'>
                                            <img src={thomson} alt={'thomson'} className='card-img-top' />
                                        </div>
                                    </li>
                                    <li className="col-lg-4 col-sm-6 col-12 mb-4">
                                        <div className='border w-100 h-100 shadow-sm d-flex align-items-center justify-content-center bg-white'>
                                            <img src={verizon} alt={'verizon'} className='card-img-top' />
                                        </div>
                                    </li>
                                    <li className="col-lg-4 col-sm-6 col-12 mb-4">
                                        <div className='border w-100 h-100 shadow-sm d-flex align-items-center justify-content-center bg-white'>
                                            <img src={wipro} alt={'wipro'} className='card-img-top' />
                                        </div>
                                    </li>
                                    <div className={"show_after_click " + (conthide ? 'd-block' : 'd-none')}>
                                        <div className='row'>
                                            <li className="col-lg-4 col-sm-6 col-12 mb-4">
                                                <div className='border w-100 h-100 shadow-sm d-flex align-items-center justify-content-center bg-white'>
                                                    <img src={accenture} alt={'accenture'} className='card-img-top' />
                                                </div>
                                            </li>
                                            <li className="col-lg-4 col-sm-6 col-12 mb-4">
                                                <div className='border w-100 h-100 shadow-sm d-flex align-items-center justify-content-center bg-white'>
                                                    <img src={adove} alt={'adove'} className='card-img-top' />
                                                </div>
                                            </li>
                                            <li className="col-lg-4 col-sm-6 col-12 mb-4">
                                                <div className='border w-100 h-100 shadow-sm d-flex align-items-center justify-content-center bg-white'>
                                                    <img src={amazon} alt={'amazon'} className='card-img-top' />
                                                </div>
                                            </li>
                                            <li className="col-lg-4 col-sm-6 col-12 mb-4">
                                                <div className='border w-100 h-100 shadow-sm d-flex align-items-center justify-content-center bg-white'>
                                                    <img src={american} alt={'american'} className='card-img-top' />
                                                </div>
                                            </li>
                                            <li className="col-lg-4 col-sm-6 col-12 mb-4">
                                                <div className='border w-100 h-100 shadow-sm d-flex align-items-center justify-content-center bg-white'>
                                                    <img src={aonhewitt} alt={'aonhewitt'} className='card-img-top' />
                                                </div>
                                            </li>
                                            <li className="col-lg-4 col-sm-6 col-12 mb-4">
                                                <div className='border w-100 h-100 shadow-sm d-flex align-items-center justify-content-center bg-white'>
                                                    <img src={barclasys} alt={'barclasys'} className='card-img-top' />
                                                </div>
                                            </li>
                                            <li className="col-lg-4 col-sm-6 col-12 mb-4">
                                                <div className='border w-100 h-100 shadow-sm d-flex align-items-center justify-content-center bg-white'>
                                                    <img src={capgemini} alt={'capgemini'} className='card-img-top' />
                                                </div>
                                            </li>
                                            <li className="col-lg-4 col-sm-6 col-12 mb-4">
                                                <div className='border w-100 h-100 shadow-sm d-flex align-items-center justify-content-center bg-white'>
                                                    <img src={cisco} alt={'cisco'} className='card-img-top' />
                                                </div>
                                            </li>
                                            <li className="col-lg-4 col-sm-6 col-12 mb-4">
                                                <div className='border w-100 h-100 shadow-sm d-flex align-items-center justify-content-center bg-white'>
                                                    <img src={citigroup} alt={'citigroup'} className='card-img-top' />
                                                </div>
                                            </li>
                                            <li className="col-lg-4 col-sm-6 col-12 mb-4">
                                                <div className='border w-100 h-100 shadow-sm d-flex align-items-center justify-content-center bg-white'>
                                                    <img src={csc} alt={'csc'} className='card-img-top' />
                                                </div>
                                            </li>
                                            <li className="col-lg-4 col-sm-6 col-12 mb-4">
                                                <div className='border w-100 h-100 shadow-sm d-flex align-items-center justify-content-center bg-white'>
                                                    <img src={cognizant} alt={'cognizant'} className='card-img-top' />
                                                </div>
                                            </li>
                                            <li className="col-lg-4 col-sm-6 col-12 mb-4">
                                                <div className='border w-100 h-100 shadow-sm d-flex align-items-center justify-content-center bg-white'>
                                                    <img src={dell} alt={'dell'} className='card-img-top' />
                                                </div>
                                            </li>
                                            <li className="col-lg-4 col-sm-6 col-12 mb-4">
                                                <div className='border w-100 h-100 shadow-sm d-flex align-items-center justify-content-center bg-white'>
                                                    <img src={doloittle} alt={'doloittle'} className='card-img-top' />
                                                </div>
                                            </li>
                                            <li className="col-lg-4 col-sm-6 col-12 mb-4">
                                                <div className='border w-100 h-100 shadow-sm d-flex align-items-center justify-content-center bg-white'>
                                                    <img src={ey} alt={'ey'} className='card-img-top' />
                                                </div>
                                            </li>
                                            <li className="col-lg-4 col-sm-6 col-12 mb-4">
                                                <div className='border w-100 h-100 shadow-sm d-flex align-items-center justify-content-center bg-white'>
                                                    <img src={gartner} alt={'gartner'} className='card-img-top' />
                                                </div>
                                            </li>
                                            <li className="col-lg-4 col-sm-6 col-12 mb-4">
                                                <div className='border w-100 h-100 shadow-sm d-flex align-items-center justify-content-center bg-white'>
                                                    <img src={fidelity} alt={'fidelity'} className='card-img-top' />
                                                </div>
                                            </li>
                                        </div>
                                        <div className="p_list_show_less text-center">
                                            <a href={void (0)} onClick={() => { showMorecont() }} className="desc_show_less btn-site no-underline cursor-pointer">
                                                <span>Show Less</span>
                                            </a>
                                        </div>
                                    </div>
                                </ul>
                            </div>

                        </div>

                    </div>

                    {props.title && props.subtitle && props.titleheading ?
                        <div className='overflow-hidden ppt-clistaff top-2-relativeplus'>
                            <div className="shape-bottom">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                                    <path className="shape-fill" fill="#fff" d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7  c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4  c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"></path>
                                </svg>
                            </div>
                        </div>
                        : ''}

                </div>

            </div>



            {/* application_process_sec */}
            {props.title && props.subtitle && props.titleheading ?
                <></> :
                <div className='application_process_sec scroll-spbx bg-gray-50' id='ApplicationProcess'>
                    <div className='container py-16'>
                        <div className="sec_title">
                            <h2 className="text-2xl md:text-3xl font-bold">Application  <span className="orange-clrsite">Process</span></h2>

                            {props.fullstcys ?
                                <p className="text-gray-500 text-base md:text-lg fw-medium">{props.fullstcys}</p>
                                :
                                <p className="text-gray-500 text-base md:text-lg fw-medium">Enroll in the program with a simple online form.</p>
                            }
                            <hr className="w-20 hr mb-4 bg-blue-400 sepfoll-hr" />
                        </div>

                        <div className="pt-0">
                            <div className="row pt-1">
                                {/* first */}
                                <div className="justify-items-center  col-lg-3 col-md-6 col-12 text-center py-4 rounded-lg mb-4">
                                    <div className='tt-iconbox-customimg'>
                                        <img className="img-round" src={Applybyfilling} alt={'Applybyfilling'} />
                                    </div>
                                    <div className="full-w">
                                        <h4 className='text-gray-700 font-bold text-base mb-0'>Apply by filling a
                                            simple online
                                            application form</h4>
                                    </div>
                                </div>

                                {/* second */}
                                <div className="justify-items-center  col-lg-3 col-md-6 col-12 text-center py-4 rounded-lg mb-4">
                                    <div className='tt-iconbox-customimg'>
                                        <img className="img-round" src={Admissions} alt={'Admissions'} />
                                    </div>
                                    <div className="full-w">
                                        <h4 className='text-gray-700 font-bold text-base mb-0'>Admissions
                                            committee will
                                            review and
                                            shortlist.</h4>

                                    </div>
                                </div>
                                {/* third */}
                                <div className="justify-items-center  col-lg-3 col-md-6 col-12 text-center py-4 rounded-lg mb-4">
                                    <div className='tt-iconbox-customimg'>
                                        <img className="img-round" src={Shortlisted} alt={'Shortlisted'} />
                                    </div>
                                    <div className="full-w">
                                        <h4 className='text-gray-700 font-bold text-base mb-0'>Shortlisted
                                            candidates need
                                            to appear for an
                                            online aptitude
                                            test.</h4>

                                    </div>
                                </div>
                                {/* fourth */}
                                <div className="justify-items-center  col-lg-3 col-md-6 col-12 text-center py-4 rounded-lg mb-4">
                                    <div className='tt-iconbox-customimg'>
                                        <img className="img-round" src={Screeningcall} alt={'Screeningcall'} />
                                    </div>
                                    <div className="full-w">
                                        {props.fullstcysalu ?
                                            <h4 className='text-gray-700 font-bold text-base mb-0'>{props.fullstcysalu}</h4>
                                            :
                                            <h4 className='text-gray-700 font-bold text-base mb-0'>Screening call with Alumni/ Faculty</h4>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            }

        </>
    )
}




