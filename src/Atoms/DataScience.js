import React from "react";

const DataScience = (props) => {
        const final = props.data;

        return (
                <>
                        {final ?
                                <div className="full-w data-scinece-othercer scroll-spbx" id="description">
                                        <div className="container py-16">
                                                <div className="full-w">
                                                        <div className="sec_title">
                                                                <h2 className="text-2xl md:text-3xl font-bold mt-0" dangerouslySetInnerHTML={{ __html: props.title }} />
                                                                <p className="text-gray-500 text-base md:text-lg fw-medium" dangerouslySetInnerHTML={{ __html: 'Know your way around the ' + props.title + '.' }} />
                                                                <hr className="w-20 hr mb-4 bg-blue-400 sepfoll-hr" />
                                                        </div>

                                                        <div className="blog-detials-single">
                                                                <div className="content st" dangerouslySetInnerHTML={{ __html: final }} />
                                                        </div> 
                                                </div>
                                        </div>
                                </div>
                                : " "}
                </>
        )
}
export default DataScience;

