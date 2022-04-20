import React from "react"; 
 
const Light = (props) => {

    return (
        <div className="alumni-highlights bg-blue-50">
            <div className="container py-16">

                <div className="sec_title">
                    <h2 className="text-2xl md:text-3xl font-bold">
                        {props.customizelight ?
                            <>
                                {props.customizelight1} <span className="orange-clrsite">{props.customizelight2}</span>
                            </>
                            :
                            <>
                                Alumni <span className="orange-clrsite">Highlights</span>
                            </>
                        }
                    </h2>
                    <hr className="w-20 hr mb-5 mb-lg-0 bg-blue-400 sepfoll-hr" />
                </div>


                <div className="row align-items-center">

                    {props.customizeleftcontent ?
                        <div className="col-lg-4 col-12">
                            <div>
                                <span className='text-red-500 text-2xl font-semibold'>{props.titlehigh1}</span>
                                <p className='text-gray-600 text-base sm:text-lg font-medium'>{props.parahigh1}</p><div className="w-100 border-1 mb-3 border-dashed border-gray-300" />
                            </div>
                            <div>
                                <span className='text-blue-500 text-2xl font-semibold'>{props.titlehigh2} </span>
                                <p className='text-gray-600 text-base sm:text-lg font-medium'>{props.parahigh2}</p><div className="w-100 border-1 mb-3 border-dashed border-gray-300" />
                            </div>
                            <div>
                                <span className='text-yellow-500 text-2xl font-semibold'>{props.titlehigh3}</span>
                                <p className='text-gray-600 text-base sm:text-lg font-medium'>{props.parahigh3}</p><div className="w-100 border-1 mb-3 border-dashed border-gray-300" />
                            </div>
                            <div>
                                <span className='text-green-500 text-2xl font-semibold'>{props.titlehigh4}</span>
                                <p className='text-gray-600 text-base sm:text-lg font-medium '>{props.parahigh4}</p>
                            </div>
                        </div>
                        :
                        <div className="col-lg-4 col-12">
                            <div>
                                <span className='text-red-500 text-2xl font-semibold'>200+</span>
                                <p className='text-gray-600 text-base sm:text-lg font-medium'>Global Companies</p><div className="w-100 border-1 mb-3 border-dashed border-gray-300" />
                            </div>
                            <div>
                                <span className='text-blue-500 text-2xl font-semibold'>$122K PA </span>
                                <p className='text-gray-600 text-base sm:text-lg font-medium'>Average CTC</p><div className="w-100 border-1 mb-3 border-dashed border-gray-300" />
                            </div>
                            <div>
                                <span className='text-yellow-500 text-2xl font-semibold'>$250K PA</span>
                                <p className='text-gray-600 text-base sm:text-lg font-medium'>Highest CTC</p><div className="w-100 border-1 mb-3 border-dashed border-gray-300" />
                            </div>
                            <div>
                                <span className='text-green-500 text-2xl font-semibold'>87%</span>
                                <p className='text-gray-600 text-base sm:text-lg font-medium '>Average Salary Hike</p>
                            </div>
                        </div>
                    }
                    <div className="col-lg-8 col-12">
                        <img src={props.image} alt='roles_offer_cyber_security' className='mx-auto d-block' />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Light;

