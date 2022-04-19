import React, { useContext } from "react";
import { Context } from "../../Api";
import data2 from "../../Images/Datascience1.png";
import "../../style.css"
const Completition = (props) => {

    return (
        <div className='completion-program'>
            <div className="container py-16">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-12">
                        <div className="sec_title">
                            <h2 className="text-2xl md:text-3xl font-bold">
                            {props.customizable ?
                                <>{props.completiontitle}</>
                                :
                                <>On the completion of this program,</>
                            }
                                <span className="orange-clrsite d-inline-block">you will:</span></h2>
                            <hr className="w-20 hr mb-4 bg-blue-400 sepfoll-hr" />
                        </div>

                        <ul className='list p-0 mt-10'>
                            {props.title1}
                        </ul>
                    </div>
                    <div className="col-lg-6 col-12">
                        {props.customizable ?
                            <img src={props.completionimg} alt='data2' />
                            :
                            <img src={data2} alt='data2' />
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Completition;

