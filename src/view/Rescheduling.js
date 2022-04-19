import React,{useEffect} from 'react'
import Hero from '../Atoms/Hero'
import disclaimer from '../Images/Datascience4.png'
import { Helmet } from 'react-helmet'
import { Link } from "react-router-dom";


 
const Rescheduling = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <div className='rescheduling-policy blog-detials-single'>

            <Helmet>
                <title>Rescheduling Policy</title>
                <meta name="description" content="" />
                <meta name="keywords" content="" />
                <link rel="canonical" href="https://www.careerera.com/rescheduling-policy"/>
            </Helmet>

            <Hero
                title="Rescheduling  "
                detail="Policy"
                batch={<> <Link to="/" className="no-underline badge bg-info">Home</Link>
        <span className="mx-2"> / </span>Rescheduling </>} 
                img={disclaimer}
            />

            <div className='container py-20'>
                <div className="text-left">
                    <h3 className="text-center font-bold">Rescheduling Policy</h3>
                    <div className="border-t-2 border-gray-500 w-14 my-3 mx-auto"></div>

                    <div className='content normal'>
                    <p className="mt-10">
                        In case 'Careerera / SNVA LLC. ' reschedules the training
                        event, the options available to the delegates are:
                        <br /> <br />
                        100% refund, if the rescheduled dates do not fit into the
                        delegate's schedule.
                        <br /> <br />
                        The delegate would have the privilege of rescheduling and
                        attending a class in future at his/her convenience, at any
                        location, on any date of a scheduled training.
                        <br /> <br />
                        The delegates, if they so wish, can send a replacement.
                        However, this should be intimated to 'Careerera/ SNVA LLC. '
                        at least 3 days prior to the event.
                        <br /> <br />
                        Whereas, if for some unforeseen reasons, a delegate wishes
                        to reschedule his/her registration to a future date, a
                        rescheduling fee is charged as mentioned below:
                        <br /> <br />
                        If the rescheduling request is received 7 days prior (or
                        more), 10% of registration fee will be charged.
                        <br /> <br />
                        Please note that rescheduling will be subject to
                        availability of seats.
                        <br /> <br />
                        If the request of rescheduling is received within 7 days or
                        less, no rescheduling will be allowed. However, the delegate
                        can send a replacement instead.
                    </p>
                </div>
            </div>
            </div>
        </div>
    )
}
export default Rescheduling
