import React from 'react'
import 'tailwindcss/tailwind.css' 
import { Link } from 'react-router-dom'
const Header = () => {
    return (
        <>
            <div className="bg-gray-200 d-none d-lg-block">
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-5 col-12 pb-2 pt-1'>
                            <Link to="/partner-marketing-affiliates" className="no-underline">
                                <span className=" text-sm xl:text-xs font-semibold text-gray-600 capitalize">
                                Partner With Us<span className='px-2'>|</span>
                                </span>
                            </Link>
                            <Link to="/become-an-instructor" className="no-underline">
                                <span className="text-sm xl:text-xs font-semibold text-gray-600 capitalize">
                                    Become An Instructor
                                </span>
                            </Link>
                        </div>
                        <div className='col-lg-7 col-12 pb-2 pt-1 text-right'>
                            <a href="https://payment.careerera.com/" target="_blank" className="no-underline">
                                <span className="text-sm xl:text-xs font-semibold text-gray-600 capitalize">
                                    Online Payment<span className='px-2'>|</span>
                                </span>
                            </a>

                            <Link to="/jobs"
                                 className="no-underline">
                                <span className="text-sm xl:text-xs font-semibold text-gray-600 capitalize">
                                    Jobs<span className='px-2'>|</span></span>
                            </Link>

                            <a href="https://news.careerera.com/"
                            target="_blank"
                                 className="no-underline">
                                <span className="text-sm xl:text-xs font-semibold text-gray-600 capitalize">
                                    Career News<span className='px-2'>|</span></span>
                            </a>

                            <Link to="/help" className="no-underline">
                                <span className="text-sm xl:text-xs font-semibold text-gray-600 capitalize">
                                    Help<span className='px-2'>|</span>
                                </span>
                            </Link>

                            <a href="https://my.careerera.com/signup.php"
                                target="_blank"
                                className="no-underline">
                                <span className=" text-sm xl:text-xs font-semibold text-gray-600 capitalize">
                                    Registration<span className='px-2'>|</span>
                                </span>{' '}
                            </a>

                            <a href="https://my.careerera.com/" target="_blank" className="no-underline">
                                <span className="text-sm xl:text-xs font-semibold text-gray-600 capitalize">
                                    Login
                                </span>
                            </a>
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}
export default Header
