import React from 'react'
import requiremnet1 from '../../Images/requirement-1.png'
import requiremnet2 from '../../Images/requirement-2.png'
import requiremnet3 from '../../Images/requirement-3.png'

const Requirement = () => {
    return (
        <div className='indexhome'>
            <div className="regiavail full-w regiavail-eligi">


                <div className="sec_title">
                    <h2 className="orange-clrsite text-base text-xl font-semibold ">
                        Eligibility
                    </h2>
                    <p className='text-2xl lg:text-3xl font-bold'>To qualify as an authorized Channel Partner, for Careerera for business:</p>
                    <span className="heading-border-line d-block left-0 mt-3 mb-5"></span>
                </div>

                <ul className="p-0 text-gray-700 leading-relaxed m-0">
                    <li className="font-medium text-base mb-5">
                        <div className='d-flex'>
                            <i class="bi bi-people text-5xl mr-3 text-blue-500"></i>
                            <div>
                                <h4 className='pt-1 font-bold text-xl capitalize mb-1'>Large business network</h4>
                                <p className=' text-gray-500 font-medium mb-0 text-lg'>A large business network with enterprises</p>
                            </div>
                        </div>
                    </li>
                    <li className="font-medium text-base mb-5">
                        <div className='d-flex'>
                            <i class="bi bi-shield-fill-check text-5xl mr-3 text-blue-500"></i>
                            <div><h4 className='pt-1 font-bold text-xl capitalize mb-1'>A qualified and credible business</h4>
                                <p className=' text-gray-500 font-medium mb-0 text-lg'>Running for a minimum of 3-4 years.</p></div>
                        </div>
                    </li>
                    <li className="font-medium text-base">
                        <div className='d-flex'>
                            <i class="bi bi-graph-up-arrow text-5xl mr-3 text-blue-500"></i>
                            <div><h4 className='pt-1 font-bold text-xl capitalize mb-1'>Experience with handling businesses</h4>
                                <p className=' text-gray-500 font-medium mb-0 text-lg'>Deals above INR 25 lacs.</p></div>
                        </div>
                    </li>
                </ul>




            </div>

        </div>

    )
}
export default Requirement
