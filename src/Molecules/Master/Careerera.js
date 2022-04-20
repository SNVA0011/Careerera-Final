import React from "react"; 

const Careerera = (props) => {

    return (
        <>

            <div className="full-w enroll-sduwhy scroll-spbx" id="Careera">

                {props.customizefaculty ?
                    <div className="container py-16">
                        <div className="text-left">
                            <p className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 text-capitalize'>Why <span className="text-blue-500 sitblu-clrsite">Careerera</span></p>
                            <p className='text-base md:text-lg font-semibold text-gray-600'>{props.facultysubtitle}</p>
                        </div>
                        <hr className="w-20 hr mb-4 bg-blue-400 sepfoll-hr" />

                        <div className="row pt-1 px-2 text-uppercase">
                            {/* first */}
                            <div className="justify-items-center col-xl-3 col-md-6 col-12 text-center bg-blue-100  border-solid border-2 border-white">
                                <i className="fas fa-users fa-2x border-1 border-white rounded-full bg-blue-500 p-4 text-white "></i>
                                <div className="py-10 text-white ">
                                    <h3 className='text-gray-700 font-bold text-lg'>{props.facultyhead1}</h3>
                                    <p className='text-blue-500 font-bold font-italic text-3xl xl:text-4xl mb-0 mt-0'>{props.facultypara1}</p>
                                </div>
                            </div>

                            {/* second */}
                            <div className="justify-items-center col-xl-3 col-md-6 col-12 text-center bg-red-100  border-solid border-2 border-white">
                                <i className="fas fa-trophy fa-2x border-1 border-white rounded-full bg-red-500 p-4 text-white "></i>
                                <div className="py-10 text-white ">
                                    <h3 className='text-gray-700 font-bold text-lg'>{props.facultyhead2}</h3>
                                    <p className='text-red-500 font-bold font-italic text-3xl xl:text-4xl mb-0 mt-0'>{props.facultypara2}</p>
                                </div>
                            </div>
                            {/* third */}
                            <div className="justify-items-center col-xl-3 col-md-6 col-12 text-center bg-green-100  border-solid border-2 border-white">
                                <i className="fas fa-user-shield fa-2x border-1 border-white rounded-full bg-green-500 p-4 text-white "></i>
                                <div className="py-10 text-white ">
                                    <h3 className='text-gray-700 font-bold text-lg'>{props.facultyhead3}</h3>
                                    <p className='text-green-500 font-bold font-italic text-3xl xl:text-4xl mb-0 mt-0'>{props.facultypara3}</p>
                                </div>
                            </div>
                            {/* fourth */}
                            <div className="justify-items-center col-xl-3 col-md-6 col-12 text-center bg-purple-100  border-solid border-2 border-white">
                                <i className="fas fa-medal fa-2x border-1 border-white rounded-full bg-purple-500 p-4 text-white "></i>
                                <div className="py-10 text-white ">
                                    <h3 className='text-gray-700 font-bold text-lg'>{props.facultyhead4}</h3>
                                    <p className='text-purple-500 font-bold font-italic text-3xl xl:text-4xl mb-0 mt-0'>{props.facultypara4}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    :
                    <div className="container py-16">
                        <div className="text-left">
                            <p className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 text-capitalize'>Why <span className="text-blue-500 sitblu-clrsite">Careerera</span></p>
                            <p className='text-base md:text-lg font-semibold text-gray-600'>Enrol with the leading global online educational course provider.</p>
                        </div>
                        <hr className="w-20 hr mb-4 bg-blue-400 sepfoll-hr" />

                        <div className="row pt-1 text-uppercase">
                            {/* first */}
                            <div className="justify-items-center col-xl-3 col-md-6 col-12 text-center bg-blue-100  border-solid border-2 border-white">
                                <i className="fas fa-users fa-2x border-1 border-white rounded-full bg-blue-500 p-4 text-white "></i>
                                <div className="py-10 text-white ">
                                    <h3 className='text-gray-700 font-bold text-lg'>USERS</h3>
                                    <p className='text-blue-500 font-bold font-italic text-3xl xl:text-4xl mb-0 mt-0'>250000+</p>
                                </div>
                            </div>

                            {/* second */}
                            <div className="justify-items-center col-xl-3 col-md-6 col-12 text-center bg-red-100  border-solid border-2 border-white">
                                <i className="fas fa-trophy fa-2x border-1 border-white rounded-full bg-red-500 p-4 text-white "></i>
                                <div className="py-10 text-white ">
                                    <h3 className='text-gray-700 font-bold text-lg'>TOP RANKING</h3>
                                    <p className='text-red-500 font-bold font-italic text-3xl xl:text-4xl mb-0 mt-0'>10</p>
                                </div>
                            </div>
                            {/* third */}
                            <div className="justify-items-center col-xl-3 col-md-6 col-12 text-center bg-green-100  border-solid border-2 border-white">
                                <i className="fas fa-user-shield fa-2x border-1 border-white rounded-full bg-green-500 p-4 text-white "></i>
                                <div className="py-10 text-white ">
                                    <h3 className='text-gray-700 font-bold text-lg'>INDUSTRY EXPERT</h3>
                                    <p className='text-green-500 font-bold font-italic text-3xl xl:text-4xl mb-0 mt-0'>500+</p>
                                </div>
                            </div>
                            {/* fourth */}
                            <div className="justify-items-center col-xl-3 col-md-6 col-12 text-center bg-purple-100  border-solid border-2 border-white">
                                <i className="fas fa-medal fa-2x border-1 border-white rounded-full bg-purple-500 p-4 text-white "></i>
                                <div className="py-10 text-white ">
                                    <h3 className='text-gray-700 font-bold text-lg'>EXPERT FACILITIES</h3>
                                    <p className='text-purple-500 font-bold font-italic text-3xl xl:text-4xl mb-0 mt-0'>1000+</p>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </>
    )
}
export default Careerera;

