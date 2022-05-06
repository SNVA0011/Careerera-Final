import React from "react";
import i1 from "../../Images/banner.svg"; 

const SideIcon = () => {
    return (
        <>
            <div className='full-w mt-3 elearn-web'>
                <div className="row m-0 align-items-center h-auto sideicon-web"> 
                    <div className="col-xxl-4 col-md-4 col-6">
                        <div className="boxrounded d-flex flex-column justify-content-center  text-white z-50 text-center third">
                        <img src={i1}/> 
                        </div>
                    </div>

                </div> 
            </div>

        </>
    )
}
export default SideIcon;