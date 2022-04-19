import React,{useEffect} from 'react'
import Hero from '../Atoms/Hero'
import disclaimer from '../Images/Datascience4.png'
import { Helmet } from 'react-helmet'
import { Link } from "react-router-dom";

const Disclaimer = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='disclaimer-pageview blog-detials-single'>
            <Helmet>
                <title>Disclaimer</title>
                <meta name="description" content="" />
                <meta name="keywords" content="" />
                <link rel="canonical" href="https://www.careerera.com/disclaimer"/>
            </Helmet>


            <Hero
                title="Disclaimer "
                detail=""
                batch={<> <Link to="/" className="no-underline badge bg-info">Home</Link>
                <span className="mx-2"> / </span>Disclaimer </>}  
                img={disclaimer} />

                
            <div className="container py-16">
                <h1 className="text-center font-bold">Disclaimer</h1>
                <div className="border-t-2 border-gray-500 w-14 my-3 mx-auto"></div>

                <div className='content normal'>
                    <p className="mt-10">
                        "PMI®", "PMBOK®", "PMP®" and "PMI-ACP®" are registered marks
                        of the Project Management Institute, Inc.
                        <br /> <br />
                        The Swirl logoTM is a trade mark of AXELOS Limited.
                        <br /> <br />
                        ITIL® is a registered trade mark of AXELOS Limited.
                        <br /> <br />
                        PRINCE2® is a Registered Trade Mark of AXELOS Limited.
                        <br /> <br />
                        MSP® is a Registered Trade Mark of AXELOS Limited
                        <br /> <br />
                        Certified ScrumMaster® (CSM) and Certified Scrum Trainer®
                        (CST) are registered trademarks of SCRUM ALLIANCE®
                        <br /> <br />
                        COBIT® is a trademark of ISACA® registered in the United
                        States and other countries.
                        <br /> <br />
                        CISA® is a Registered Trade Mark of the Information Systems
                        Audit and Control Association (ISACA) and the IT Governance
                        Institute
                        <br /> <br />
                        CISSP is a registered mark of the The International
                        Information Systems Security Certification Consortium
                        ((ISC)2)
                        <br /> <br />
                        FRM®, GARPTM and Global Association of Risk ProfessionalsTM,
                        are trademarks owned by the Global Association of Risk
                        Professionals, Inc
                        <br /> <br />
                        Global Association of Risk Professionals, Inc. (GARPTM) does
                        not endorse, promote, review or warrant the accuracy of the
                        products or services offered by 'Careerera'/SNVA LLC.. for
                        FRM® related information, nor does it endorse any pass rates
                        claimed by the provider. Further, GARP is not responsible
                        for any fees or costs paid by the user to 'Careerera'/SNVA
                        LLC.. nor is GARP responsible for any fees or costs of any
                        person or entity providing any services to 'Careerera'/SNVA
                        LLC.. Study Program. CFA Institute does not endorse,
                        promote, or warrant the accuracy or quality of the products
                        or services offered by 'Careerera'/SNVA LLC.. CFA Institute,
                        CFA®, and Chartered Financial Analyst® are trademarks owned
                        by CFA Institute.
                        <br /> <br />
                        SAP® is the trademark or registered trademark of SAP AG.
                        'Careerera'/ SNVA LLC.. is not affiliated with or endorsed
                        by SAP AG. All training material is proprietary contents of
                        'Careerera'/ SNVA LLC.. and its Partners.
                        <br /> <br />
                        CNA®, and CCNP® are trademarks of Cisco and registered
                        trademarks in the United States and certain other countries.
                    </p>
                </div>
            </div>
        </div>
    )
}
export default Disclaimer
