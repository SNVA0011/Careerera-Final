import React, { useState, useContext } from 'react';
import { Context, Provider } from "../../Api";
import Form from 'react-bootstrap/Form' 

export default function BecomeInsForm() {
 
    const { value11, value12 } = useContext(Context);
    const [cntry, setcntry] = value11;
    const [cntryLoad, setcntryLoad] = value12;
 
    const [selectphoneval, setselectphoneval] = useState([]);
    function setvalPhone(e) {
        setselectphoneval(e.target.value)
    }

    return (
        <div className='mocktestregister-form becomeins-form'>

            {cntryLoad ?
                <div className='w-100 form-annum talwin-formstyle services-movingr bg-white'>
                         <div className="position-relative">
                    <p className="text-3xl font-bold text-gray-700 mb-0 sitblu-clrsite">Sign Up</p>
                    <div className="border-t-2 border-gray-300 w-14 mt-2 mb-2"></div>
                    <div className="pt-4">

                        <div className="row pb-2">
                            <div className="col-12">
                                <input type="text" placeholder="Name" className=" placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-3 pr-3 
         h-12 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 text-base" />
                            </div>
                        </div>

                        <div className="row py-2">
                            <div className="col-12">
                                <input type="text" placeholder="User Email" className=" placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-3 pr-3 
         h-12 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 text-base" />
                            </div>
                        </div>


                        <div className="row">
                            <div className="col-md-6 col-12 py-2">
                                <input type="password" placeholder="User Password" className=" placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-3 pr-3 
         h-12 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 text-base" />
                            </div>

                            <div className="col-md-6 col-12 py-2">
                                <input type="password" placeholder="Confirm Password" className=" placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-3 pr-3 
         h-12 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 text-base" />
                            </div>
                        </div>

                        <div className="row py-2">
                            <div className="col-12">
                                <input type="text" placeholder="User Contact" className=" placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-3 pr-3 
         h-12 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 text-base" />
                            </div>
                        </div>

                        <div className="row py-2">
                            <div className="col-12">
                                <Form.Select onChange={setvalPhone} value={selectphoneval} className=" placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-3 pr-3 
         h-12 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 text-base">
                                    <option selected>Please select your country</option>
                                    {cntry?.length > 0 && cntry.map((item, i) =>
                                        <option value={[item.phonecode, item.country_title]} key={i}>{item.country_title}</option>
                                    )}
                                </Form.Select>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-12 col-12">
                                <button aria-label="Sign Up" className="h-12 btn-site w-100 mt-4 invert">
                                    <span className='text-lg btn-widelettspc'>Sign Up</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>


                : <div className="col-xxl-8 col-xl-10 col-12 mx-auto text-center align-self-center">
                    <div className="p-5">
                        <button aria-label="Loading" className="btn btn-dark pt-2 shadow-lg" type="button" disabled>
                            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true" style={{ width: '2rem', height: '2rem' }}></span>
                            <span className="sr-only">Loading...</span>
                        </button>
                    </div>
                </div>}


        </div>
    )
}
