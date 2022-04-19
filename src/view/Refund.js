import React, { useEffect } from 'react'
import Hero from '../Atoms/Hero'
import disclaimer from '../Images/Datascience4.png'
import { Helmet } from 'react-helmet'
import { Link } from "react-router-dom";

const Refund = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className='full-w refund-policy blog-detials-single'>
            <Helmet>
                <title>Refund Policy</title>
                <meta name="description" content="" />
                <meta name="keywords" content="" />
                <link rel="canonical" href="https://www.careerera.com/refund-policy" />
            </Helmet>


            <Hero
                title="Refund  "
                detail="Policy"
                batch={<> <Link to="/" className="no-underline badge bg-info">Home</Link>
                    <span className="mx-2"> / </span>Refund </>}
                img={disclaimer}
            />
            <div className="container py-16">
                <h1 className="text-center font-bold">Refund Policy</h1>
                <div className="border-t-2 border-gray-500 w-14 my-3 mx-auto"></div>

                <div className='content normal'>

                    <p className="mt-10">
                        Thank you for buying our courses. We want to make sure that
                        our users have a rewarding experience while they are
                        discovering information, assessing, and purchasing our
                        training courses, whether it may be for online or classroom
                        training courses.<br></br><br></br>

                        As with any online purchase experience,
                        the below are the terms and conditions that govern the
                        Refund Policy. When you buy a training course on the
                        'Careerera' website you agree to our Privacy Policy, Terms
                        of Use and the points below.
                    </p>
                    <div>
                        <h3 className="text-2xl mt-5 mb-0 font-semibold">
                            Careerera Information Practices
                        </h3>
                        <p className="mt-2">
                            'Careerera'.com provides online and classroom training
                            for PMP, CAPM, Six Sigma, ITIL, Primavera, MS
                            SharePoint, PMI-ACP, PMI-RMP, Minitab, MS Project using
                            this website. Our courses are designed to help project
                            managers in professional certification exam preparation.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-2xl mt-5 mb-0 font-semibold">
                            Cancellation & Refunds: Classroom Training/Instructor
                            led online training
                        </h3>
                        <p className="mt-3">
                            Careerera'/ SNVA LLC. , reserves the right to
                            postpone/cancel an event, or change the location of an
                            event because of insufficient enrolments, instructor
                            illness or force-majeure events (like floods,
                            earthquakes, political instability, etc.)
                        </p>
                        <ul>
                            <li className=" mt-3">
                                In case 'Careerera'/ SNVA LLC. cancels an event, 100%
                                refund will be paid to the delegate.{' '}
                            </li>
                            <li className=" mt-2">
                                If a cancellation is done by a delegate 7 days or more,
                                prior to the event, 10% of total paid fee will be
                                deducted and the remaining amount will be refunded back
                                to the delegate.
                            </li>
                            <li className=" mt-2">
                                If a cancellation is done by a delegate 7 days or less,
                                prior to the event, no refunds will be made.
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-2xl mt-5 mb-0 font-semibold">
                            Cancellation & Refunds: Online Training
                        </h3>

                        <ul>
                            <li className=" mt-3">
                                If the cancellation is done by the delegate within 48
                                hours of subscribing, 5% of total paid fee will be
                                deducted as administration fee.{' '}
                            </li>
                            <li className=" mt-2">
                                If the cancellation is done by the delegate after 48
                                hours of subscribing no refund will be made.
                            </li>
                            <li className=" mt-2">
                                In case of third party courses (eg. MS Project and MS
                                Share point), 50% of total paid fee will be levied as
                                administration and cancellation charges will be levied
                                on the total fee paid by the delegate and the remaining
                                amount will be paid if the cancelation is done within 48
                                hours of subscription.
                            </li>
                            <li className=" mt-2">
                                No refund will be made to the delegate after 48 hours of
                                subscribing to the course.
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-2xl mt-5 mb-0 font-semibold">
                            Refunds: Duplicate payment
                        </h3>
                        <p className="mt-3">
                            Refund of the duplicate payment made by the delegate
                            will be processed via same source (original method of
                            payment) within 5 to 7 working days after intimation by
                            the customer.
                            <br />
                            <br />
                            <b> Note 1:</b> All refunds will be processed within 30
                            days of receipt of the refund request.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Refund
