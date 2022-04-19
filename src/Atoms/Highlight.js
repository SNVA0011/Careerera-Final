import React from "react";

const Highlight = (props) => {
    return (
        <div className="which-benefits-derive full-w scroll-spbx shadow-sm border-top border-bottom bg-blue-100" id="highlight">

            <div className="container py-16">


                <div className="sec_title">
                    <h2 className="text-2xl md:text-3xl font-bold">
                        Program <span className="orange-clrsite">Highlights</span>
                    </h2>
                    {props.customizable ?
                        <p className="text-gray-500 text-base md:text-lg fw-medium">
                            {props.subtitle}
                        </p>
                        :
                        <p className="text-gray-500 text-base md:text-lg fw-medium">
                            See which benefits you can derive from joining this program.
                        </p>
                    }
                    <hr className="w-20 hr mb-4 bg-blue-400 sepfoll-hr" />
                </div>


                <div className="mt-10"></div>
                <div className="full-w start-yourcareer relatedcr">
                    <div className="row">

                        {props.head1 ?
                            <div className="col-lg-6 col-12 mb-4">
                                <div className="h-100 cards bg-white p-4">
                                    <h4 className='font-bold text-lg sm:text-xl mb-2'>Online Program</h4>
                                    <div className="content">{props.head1}</div>
                                </div>
                            </div>
                            : ''}

                        {props.head2 ?
                            <div className="col-lg-6 col-12 mb-4">
                                <div className="h-100 cards bg-white p-4">
                                    <h4 className='font-bold text-lg sm:text-xl mb-2'>Collaborations</h4>
                                    <div className="content">{props.head2}</div>
                                </div>
                            </div>
                            : ''}


                        {props.head3 ?
                            <div className="col-lg-6 col-12 mb-4">
                                <div className="h-100 cards bg-white p-4">
                                    {props.customipgpdigitalteam ?
                                        <h4 className='font-bold text-lg sm:text-xl mb-2'>Dedicated Placement Team</h4>
                                        :
                                        <h4 className='font-bold text-lg sm:text-xl mb-2'>Dedicated Support Team for your Academic Journey</h4>
                                    }
                                    <div className="content">{props.head3}</div>
                                </div>
                            </div>
                            : ''}

                        {props.head4 ?
                            <div className="col-lg-6 col-12 mb-4">
                                <div className="h-100 cards bg-white p-4">
                                    <h4 className='font-bold text-lg sm:text-xl mb-2'>Become Job-ready</h4>
                                    <div className="content">{props.head4}</div>
                                </div>
                            </div>
                            : ''}

                        {props.head5 ?
                            <div className="col-lg-6 col-12 mb-4">
                                <div className="h-100 cards bg-white p-4">
                                    <h4 className='font-bold text-lg sm:text-xl mb-2'>Top Skills You Will learn</h4>
                                    <div className="content">{props.head5}</div>
                                </div>
                            </div>
                            : ''}

                        {props.head6 ?
                            <div className="col-lg-6 col-12 mb-4">
                                <div className="h-100 cards bg-white p-4">
                                    <h4 className='font-bold text-lg sm:text-xl mb-2'>Certified Trainers</h4>
                                    <div className="content">{props.head6}</div>
                                </div>
                            </div>
                            : ''}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Highlight;


