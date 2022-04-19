import React, { useContext } from "react";
import { Context } from "../../Api";
import "../../style.css";
import Retail from '../../Images/data-science-icon/Retail.png'
import Ecommerce from '../../Images/data-science-icon/E-commerce.png'
import WebSocialMedia from '../../Images/data-science-icon/Web-Social-Media.png'
import Banking from '../../Images/data-science-icon/Banking.png'
import SupplyChain from '../../Images/data-science-icon/Supply-Chain.png'
import Healthcare from '../../Images/data-science-icon/Healthcare.png'
import Insurance from '../../Images/data-science-icon/Insurance.png'
import Entrepreneurship from '../../Images/data-science-icon/Entrepreneurship.png'
import FinanceAccounts from '../../Images/data-science-icon/Finance & Accounts.png'


const Capstone = (props) => {


    return (
        <div className="capstone-skills bg-blue-50 scroll-spbx " id="capstone">
            <div className="container py-16">

                <div className="sec_title">
                    <h2 className="text-2xl md:text-3xl font-bold">
                        Capstone <span className="orange-clrsite">Projects</span>
                    </h2>
                    {props.subheadingbx ?
                        <p className="text-gray-800 text-base md:text-lg fw-medium">
                            {props.subheadingbx}
                        </p>
                        :
                        <p className="text-gray-800 text-base md:text-lg fw-medium">
                            Test your skills and mettle with a capstone project.
                        </p>
                    }
                    <hr className="w-20 hr mb-5 bg-blue-400 sepfoll-hr" />
                </div>


                <div className="row">
                    {props.title1 || props.data1 ?
                        <div className="col-lg-6 col-12 mb-4">
                            <div className="d-flex application_process_sec">
                                <div className="left">
                                    <div className='tt-iconbox-customimg overflow-hidden'>
                                        <div className="rounded-circle d-block bg-red-500 h-100 w-100">
                                            <img src={props.capsimgbg ? props.capsimg1 : Retail} alt={'Retail'}></img>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-grow-1 pl-4 pt-2">
                                    <h4 className='font-bold text-xl text-red-500 '>{props.title1}</h4>
                                    {props.data1 ? <p>{props.data1}</p> : ''}
                                </div>
                            </div>
                        </div>
                        : ''}

                    {props.title2 || props.data2 ?
                        <div className="col-lg-6 col-12 mb-4">
                            <div className="d-flex application_process_sec">
                                <div className="left">
                                    <div className='tt-iconbox-customimg overflow-hidden'>
                                        <div className="rounded-circle d-block bg-green-500 h-100 w-100">
                                            <img src={props.capsimgbg ? props.capsimg2 : Ecommerce} alt={'Ecommerce'}></img>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-grow-1 pl-4 pt-2">
                                    <h4 className='font-bold text-xl text-green-500 '>{props.title2}</h4>
                                    {props.data2 ? <p>{props.data2}</p> : ''}
                                </div>
                            </div>
                        </div>
                        : ''}

                    {props.title3 || props.data3 ?
                        <div className="col-lg-6 col-12 mb-4">
                            <div className="d-flex application_process_sec">
                                <div className="left">
                                    <div className='tt-iconbox-customimg overflow-hidden'>
                                        <div className="rounded-circle d-block bg-blue-500 h-100 w-100">
                                            <img src={props.capsimgbg ? props.capsimg3 : WebSocialMedia} alt={'WebSocialMedia'}></img>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-grow-1 pl-4 pt-2">
                                    <h4 className='font-bold text-xl text-blue-500 '>{props.title3}</h4>
                                    {props.data3 ? <p>{props.data3}</p> : ''}
                                </div>
                            </div>
                        </div>
                        : ''}

                    {props.title4 || props.data4 ?
                        <div className="col-lg-6 col-12 mb-4">
                            <div className="d-flex application_process_sec">
                                <div className="left">
                                    <div className='tt-iconbox-customimg overflow-hidden'>
                                        <div className="rounded-circle d-block bg-purple-500 h-100 w-100">
                                            <img src={props.capsimgbg ? props.capsimg4 : Banking} alt={'Banking'}></img>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-grow-1 pl-4 pt-2">
                                    <h4 className='font-bold text-xl text-purple-500 '>{props.title4}</h4>
                                    {props.data4 ? <p>{props.data4}</p> : ''}
                                </div>
                            </div>
                        </div>
                        : ''}

                    {props.title5 || props.data5 ?
                        <div className="col-lg-6 col-12 mb-4">
                            <div className="d-flex application_process_sec">
                                <div className="left">
                                    <div className='tt-iconbox-customimg overflow-hidden'>
                                        <div className="rounded-circle d-block bg-gray-500 h-100 w-100">
                                            <img src={props.capsimgbg ? props.capsimg5 : SupplyChain} alt={'SupplyChain'}></img>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-grow-1 pl-4 pt-2">
                                    <h4 className='font-bold text-xl text-gray-500 '>{props.title5}</h4>
                                    {props.data5 ? <p>{props.data5}</p> : ''}
                                </div>
                            </div>
                        </div>
                        : ''}

                    {props.title6 || props.data6 ?
                        <div className="col-lg-6 col-12 mb-4">
                            <div className="d-flex application_process_sec">
                                <div className="left">
                                    <div className='tt-iconbox-customimg overflow-hidden'>
                                        <div className="rounded-circle d-block bg-yellow-500 h-100 w-100">
                                            <img src={props.capsimgbg ? props.capsimg6 : Healthcare} alt={'Healthcare'}></img>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-grow-1 pl-4 pt-2">
                                    <h4 className='font-bold text-xl text-yellow-500 '>{props.title6}</h4>
                                    {props.data6 ? <p>{props.data6}</p> : ''}
                                </div>
                            </div>
                        </div>
                        : ''}

                    {props.title7 || props.data7 ?
                        <div className="col-lg-6 col-12 mb-4">
                            <div className="d-flex application_process_sec">
                                <div className="left">
                                    <div className='tt-iconbox-customimg overflow-hidden'>
                                        <div className="rounded-circle d-block bg-red-500 h-100 w-100">
                                            <img src={props.capsimgbg ? props.capsimg7 : Retail} alt={'Retail'}></img>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-grow-1 pl-4 pt-2">
                                    <h4 className='font-bold text-xl text-red-500 '>{props.title7}</h4>
                                    {props.data7 ? <p>{props.data7}</p> : ''}
                                </div>
                            </div>
                        </div>
                        : ''}

                    {props.title8 || props.data8 ?
                        <div className="col-lg-6 col-12 mb-4">
                            <div className="d-flex application_process_sec">
                                <div className="left">
                                    <div className='tt-iconbox-customimg overflow-hidden'>
                                        <div className="rounded-circle d-block bg-green-500 h-100 w-100">
                                            <img src={props.capsimgbg ? props.capsimg8 : Insurance} alt={'Insurance'}></img>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-grow-1 pl-4 pt-2">
                                    <h4 className='font-bold text-xl text-green-500 '>{props.title8}</h4>
                                    {props.data8 ? <p>{props.data8}</p> : ''}
                                </div>
                            </div>
                        </div>
                        : ''}

                    {props.title9 || props.data9 ?
                        <div className="col-lg-6 col-12 mb-4">
                            <div className="d-flex application_process_sec">
                                <div className="left">
                                    <div className='tt-iconbox-customimg overflow-hidden'>
                                        <div className="rounded-circle d-block bg-blue-500 h-100 w-100">
                                            <img src={props.capsimgbg ? props.capsimg9 : Entrepreneurship} alt={'Entrepreneurship'}></img>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-grow-1 pl-4 pt-2">
                                    <h4 className='font-bold text-xl text-blue-500 '>{props.title9}</h4>
                                    {props.data9 ? <p>{props.data9}</p> : ''}
                                </div>
                            </div>
                        </div>
                        : ''}

                    {props.title10 || props.data10 ?
                        <div className="col-lg-6 col-12 mb-4">
                            <div className="d-flex application_process_sec">
                                <div className="left">
                                    <div className='tt-iconbox-customimg overflow-hidden'>
                                        <div className="rounded-circle d-block bg-purple-500 h-100 w-100">
                                            <img src={props.capsimgbg ? props.capsimg10 : FinanceAccounts} alt={'FinanceAccounts'}></img>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-grow-1 pl-4 pt-2">
                                    <h4 className='font-bold text-xl text-purple-500 '>{props.title10}</h4>
                                    {props.data10 ? <p>{props.data10}</p> : ''}
                                </div>
                            </div>
                        </div>
                        : ''}

                </div>

            </div>

        </div>
    )
}
export default Capstone;


