import React from "react"; 
import batch from "../../Images/batch_profile_2.png";
import education from "../../Images/education_bg_2.png";

const Profile = (props) => {
 

    return (
        <div className="certification-courseslight full-w" id="profile">
            <div className="container py-16">
                <div className="row align-item-center">
                    <div className="col-lg-6 col-12 mb-5 mb-lg-4">
                        <div className="sec_title">
                            <h2 className="text-2xl md:text-3xl font-bold">
                                {props.title} <span className="orange-clrsite">Batch Profile</span>
                            </h2>
                            <hr className="w-20 hr mb-5 bg-blue-400 sepfoll-hr" />
                        </div>
                        <img src={props.profimg? props.profimg1 : batch} alt={'batch'} className='' width={props.profimg? 387 : ''} />
                    </div>
                    <div className="col-lg-6 col-12 mb-4">
                        <p className='font-semibold text-gray-700 text-lg text-center mb-4'>Our students include freshers and experienced professionals from across industries, functions and backgrounds.</p>
                        <img src={props.profimg? props.profimg2 : education} alt={'education'} className='mx-auto d-block' width={props.profimg? 404 : ''} />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Profile;

