import React from 'react'
import Requirement from '../Partner/Requirement'

export default function Aboutpartner() {
    return (
        <div className="discription_sec">
            <div className="container pb-16 pt-12">
                <div className='row'>
                    <div className='col-xl-6 col-12 reqhelp-mn'>
                    <div className="sec_title">
                            <h3 className="text-2xl md:text-3xl font-bold">
                                About <span className="orange-clrsite">Us </span>
                            </h3>
                            <hr className="w-20 hr mb-4 bg-blue-400 sepfoll-hr" />
                        </div>
                        <div className="course_content_area pt-2 md:text-lg text-gray-700 font-medium">
                            <p>
                                Careerera is one of the leading providers of Higher Education
                                Professional Certification Training, and other skill training for
                                graduates and working professionals in the field of IT, Management,
                                Software Development, Project Management, Quality Assurance, and the
                                list goes on.
                            </p>
                            <p>
                                Being a partner to some of the top universities and certification
                                bodies, the organization aims at facilitating quality training to
                                professionals worldwide. Careerera has its online learners in 60
                                countries including America, Canada, Europe, and Asia Pacific region. It
                                has a track record of training thousands of professionals successfully
                                via classroom and online training. Careerera welcomes you to join one of
                                the largest live online education systems.
                            </p>
                            <p>
                                Since its beginning, the organization is dedicated to developing
                                state-of-the-art learning methodologies by engaging learners and
                                experienced faculty and facilitating the individuals and Corporate with
                                high-quality training materials, which in turn has helped professionals
                                to accomplish their career objectives and become a professional.
                            </p>
                        </div>
                    </div>
                    <div className='col-xl-6 col-12 reqhelp bg-gray-50 mt-4 mt-xl-0'>
                        <Requirement />
                    </div>
                </div>

            </div>
        </div>

    )
}
