import React, { useContext } from 'react' 
import logo from '../../Images/logo.svg'
import '../../style.css'
import Flag from '../../Atoms/Flag'
import { CurrencyContxt } from '../../Atoms/Contextcurrency'
import { Link } from 'react-router-dom'
const Footer = () => {
    // currency inr/usd
    const [contextcur, setContextCur] = useContext(CurrencyContxt)
    return (
        <div className='footer-bottom full-w'>
            <div className="container pt-10">
                {/* section 1 */}
                <div className="row">
                    {/* first */}
                    <div className="col-xl-3 col-sm-6 col-12">
                        <Link to="/" className='mb-4 d-inline-block' >
                            <img src={logo} alt='logo' width={169} />
                        </Link>
                    
                        <p className="text-sm font-semibold mb-3">
                            {contextcur.currency === 'Asia/Kolkata' ? (
                                <a target='_blank' rel='noreferrer'  href="mailto:support@careerera.com"
                                    className="mailto-footer">
                                    <i className="far fa-envelope"></i>
                                    support@careerera.com
                                </a>
                            ) : (
                                ''
                            )}

                            {contextcur.currency === 'Asia/Singapore' ? (
                                <a target='_blank' rel='noreferrer'  href="mailto:support@careerera.com"
                                    className="mailto-footer">
                                    <i className="far fa-envelope"></i>
                                    support@careerera.com
                                </a>
                            ) : (
                                ''
                            )}

                            {contextcur.currency === 'America/New_York' ? (
                                <a target='_blank' rel='noreferrer'  href="mailto:info@careerera.com"
                                    className="mailto-footer">
                                    <i className="far fa-envelope"></i>
                                    info@careerera.com
                                </a>
                            ) : (
                                ''
                            )}

                            {contextcur.currency === 'SGT' ? (
                                <a target='_blank' rel='noreferrer'  href="mailto:support@careerera.com"
                                    className="mailto-footer">
                                    <i className="far fa-envelope"></i>
                                    support@careerera.com
                                </a>
                            ) : (
                                ''
                            )}

                            {contextcur.currency === 'Europe/London' ? (
                                <a target='_blank' rel='noreferrer'  href="mailto:info@careerera.com"
                                    className="mailto-footer">
                                    <i className="far fa-envelope"></i>
                                    info@careerera.com
                                </a>
                            ) : (
                                ''
                            )}

                            {contextcur.currency === 'Asia/Dubai' ? (
                                <a target='_blank' rel='noreferrer'  href="mailto:info@careerera.com"
                                    className="mailto-footer">
                                    <i className="far fa-envelope"></i>
                                    info@careerera.com
                                </a>
                            ) : (
                                ''
                            )}

                            {contextcur.currency === 'Asia/Dhaka' ? (
                                <a target='_blank' rel='noreferrer'  href="mailto:support@careerera.com"
                                    className="mailto-footer">
                                    <i className="far fa-envelope"></i>
                                    support@careerera.com
                                </a>
                            ) : (
                                ''
                            )}
                        </p>


                        <Flag />


                        <div className="rounded-social-buttons mt-4">
                            <a
                                className="social-button facebook text-center"
                                href="https://www.facebook.com/careerera"
                                target='_blank' rel='noreferrer' >

                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a
                                className="social-button twitter"
                                href="https://twitter.com/Careerera1"
                                target='_blank' rel='noreferrer' >

                                <i className="fab fa-twitter"></i>
                            </a>
                            <a
                                className="social-button linkedin"
                                href="https://www.linkedin.com/company/careerera"
                                target='_blank' rel='noreferrer' >

                                <i className="fab fa-linkedin"></i>
                            </a>
                            <a
                                className="social-button instagram"
                                href="https://www.instagram.com/careereraonline/ "
                                target='_blank' rel='noreferrer' >

                                <i className="fab fa-instagram"></i>
                            </a>
                            <a
                                className="social-button youtube"
                                href="https://www.youtube.com/channel/UCQaNKS04OqIjTs9oJaMWbuQ?view_as=subscriber"
                                target='_blank' rel='noreferrer' >
                                <i className="fab fa-youtube"></i>
                            </a>
                        </div>

                    </div>

                    {/* second  */}
                    <div className="col-xl-3 col-sm-6 col-12 hoveff">
                        <p className="text-2xl md:text-3xl font-semibold mt-4 mb-1 mb-md-2">
                            Quick Links
                        </p>
                        <ul className='p-0'>
                            <li className='mb-2'>
                                <Link to="/post-graduate-program" className="no-underline text-black text-sm font-semibold">
                                    Post Graduation & Master Program
                                </Link>
                            </li>
                            <li className='mb-2'>
                                <Link to="/certification-program" className="no-underline text-black text-sm font-semibold">
                                    Certificate Program
                                </Link>
                            </li>
                            <li className='mb-2'>
                                <Link to="/language-program" className="no-underline text-black text-sm font-semibold">
                                    Language Program
                                </Link>
                            </li>

                            <li className='mb-2'>
                                <Link to="/mocktest" className="no-underline text-black text-sm font-semibold">
                                    Mock Test
                                </Link>
                            </li>

                            <li className='mb-2'>
                                <Link to="/training-room" className="no-underline text-black text-sm font-semibold">
                                    Training Rooms
                                </Link>
                            </li>
                            <li className='mb-2'>
                                <Link to="/staffing-solution" className="no-underline text-black text-sm font-semibold">
                                    Staffing Solutions
                                </Link>
                            </li>
                        </ul>


                        <hr className="d-sm-none" />
                    </div>

                    {/* third */}
                    <div className="col-xl-3 col-sm-6 col-12 hoveff">

                        <p className="text-2xl md:text-3xl font-semibold mt-4 mb-1 mb-md-2">
                            Legal Links
                        </p>
                        <ul className='p-0'>
                            <li className='mb-2'>
                                <Link to="/disclaimer" className="no-underline text-black text-sm font-semibold">
                                    Disclaimer
                                </Link>
                            </li>
                            <li className='mb-2'>
                                <Link to="/terms-of-use" className="no-underline text-black text-sm font-semibold">
                                    Terms of Use
                                </Link>
                            </li>
                            <li className='mb-2'>
                                <Link to="/privacy-policy" className="no-underline text-black text-sm font-semibold">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li className='mb-2'>
                                <Link to="/refund-policy" className="no-underline text-black text-sm font-semibold">
                                    Refund Policy
                                </Link>
                            </li>
                            <li className='mb-2'>
                                <Link to="/terms-and-conditions" className="no-underline text-black text-sm font-semibold">
                                    Terms & Conditions
                                </Link>
                            </li>
                            <li className='mb-2'>
                                <Link to="/rescheduling-policy" className="no-underline text-black text-sm font-semibold">
                                    Rescheduling Policy
                                </Link>
                            </li>
                        </ul>
                        <hr className="d-sm-none" />
                    </div>

                    {/* fourth */}
                    <div className="col-xl-3 col-sm-6 col-12 hoveff">

                        <p className="text-2xl md:text-3xl font-semibold mt-4 mb-1 mb-md-2">Others</p>

                        <ul className='p-0'>
                            <li className='mb-2'>
                                <Link to="/about" className="no-underline text-black text-sm font-semibold">
                                    About Us
                                </Link>
                            </li>
                            <li className='mb-2'>
                                <Link to="/contact" className="no-underline text-black text-sm font-semibold">
                                    Contact Us
                                </Link>
                            </li>
                            <li className='mb-2'>
                                <Link to="/news-events" className="no-underline text-black text-sm font-semibold">
                                    News & Event
                                </Link></li>
                            <li className='mb-2'>
                                <Link to="/blog" className="no-underline text-black text-sm font-semibold">

                                    Blogs & Article
                                </Link>
                            </li>
                            <li className='mb-2'>
                                <a href={"https://my.sappmail.net/account/"} target='_blank' rel='noreferrer'  className="no-underline text-black text-sm font-semibold">
                                    Trainer Email
                                </a>
                            </li>
                            <li className='mb-2'>
                                <a href={"https://my.sappmail.net/account/"} target='_blank' rel='noreferrer'  className="no-underline text-black text-sm font-semibold">
                                    Partner Email
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* section 2 */}
                <div className="row text-black mt-4">
                    <div className="col-12">

                        <hr />
                        <p className=" text-lg font-semibold">
                            Post Graduate & Master Programs
                        </p>
                        <p className="text-gray-500 lg:text-sm text-xs brand-courseslist">
                            <Link to="/data-science/post-graduate-program-in-data-science"
                                className="no-underline">
                                PGP in Data Science
                            </Link>
                            <span className='sep'>|</span>
                            <Link to="/data-science/post-graduate-program-in-business-analytics"
                                className="no-underline">
                                PGP in Business Analytics
                            </Link>
                            <span className='sep'>|</span>
                            <Link to="/artificial-intelligence-and-machine-learning/post-graduate-program-in-artificial-intelligence-machine-learning"
                                className="no-underline">
                                PGP in AI &amp; Machine Learning
                            </Link>
                            <span className='sep'>|</span>
                            <Link to="/cyber-security/post-graduate-program-in-cyber-security"
                                className="no-underline">
                                PGP in Cyber Security
                            </Link>
                            <span className='sep'>|</span>
                            <Link to="/software-development/post-graduate-program-in-full-stack-development"
                                className="no-underline">
                                PGP in Full Stack Development
                            </Link>
                            <span className='sep'>|</span>
                            <Link to="/software-development/post-graduate-program-in-ui-and-ux-design"
                                className="no-underline">
                                PGP in UI &amp; UX Design
                            </Link>
                            <span className='sep'>|</span>
                            <Link to="/data-science/masters-in-data-science-and-analytics"
                                className="no-underline">
                                Masters In Data Science And Analytics
                            </Link>
                            <span className='sep'>|</span>
                            <Link to="/cloud-and-virtualization/masters-in-cloud-computing"
                                className="no-underline">
                                Masters In Cloud Computing
                            </Link>
                            <span className='sep'>|</span>
                            <Link to="/software-development/masters-in-mobile-app-development"
                                className="no-underline">
                                Masters In Mobile App Development
                            </Link>
                            <span className='sep'>|</span>
                            <Link to="/cyber-security/masters-in-cyber-security"
                                className="no-underline">
                                Masters In Cyber Security
                            </Link>
                        </p>
                        <br />

                        <p className="text-lg font-semibold">Professional Programs</p>
                        <p className="text-gray-500 lg:text-sm text-xs brand-courseslist">
                            <Link to="/data-science/dsap-data-science-analytics-professionals"
                                className="no-underline">
                                DSAP (Data Science Analytics Professionals)
                            </Link>
                            <span className='sep'>|</span>
                            <Link to="/artificial-intelligence-and-machine-learning/aiml-artificial-intelligence-and-machine-learning-professional"
                                className="no-underline">
                                AI &amp; ML (Artificial Intelligence And Machine
                                Learning Professional)
                            </Link>
                            <span className='sep'>|</span>
                            <Link to="/cyber-security/cyber-security-professional"
                                className="no-underline">
                                Cyber Security Professional Course
                            </Link>
                            <span className='sep'>|</span>
                            <Link to="/cyber-security/certified-information-systems-security-professional-cissp"
                                className="no-underline">
                                Certified Information Systems Security Professional
                                (CISSP)
                            </Link>
                            <span className='sep'>|</span>
                            <Link to="/cloud-and-virtualization/aws-certified-solutions-architect-professional"
                                className="no-underline">
                                AWS Certified Solutions Architect - Professional
                            </Link>
                            <span className='sep'>|</span>
                            <Link to="/agile-and-scrum/scrum-product-owner-professional-by-scrumversity"
                                className="no-underline">
                                Scrum Product Owner Professional By Scrumversity
                            </Link>
                            <span className='sep'>|</span>
                            <Link to="/agile-and-scrum/advanced-scrum-product-owner-professional-aspop"
                                className="no-underline">
                                Advanced Scrum Product Owner Professional (ASPOP)
                            </Link>
                            <span className='sep'>|</span>
                            <Link to="/agile-and-scrum/scrum-fundamental-professional-by-scrumversity"
                                className="no-underline">
                                Scrum Fundamental Professional By Scrumversity
                            </Link>
                            <span className='sep'>|</span>
                            <Link to="/software-development/uiux-design-professional"
                                className="no-underline">
                                UI/UX Design Professional
                            </Link>
                            <span className='sep'>|</span>
                            <Link to="/software-development/full-stack-development-professional"
                                className="no-underline">
                                Full Stack Development Professional
                            </Link>
                        </p>
                        <br />

                        <p className="text-lg font-semibold">Certificate Programs</p>
                        <p className="text-gray-500 lg:text-sm text-xs brand-courseslist">
                            <Link to="/project-management/pmp-certification-training"
                                className="no-underline">
                                PMP® Certification Training
                            </Link>
                            <span className='sep'>|</span>
                            <Link to="/data-science/data-science-professional-certification"
                                className="no-underline">
                                Data Science Professional Certification
                            </Link>
                            <span className='sep'>|</span>
                            <Link to="/cyber-security/certified-information-systems-security-professional-cissp"
                                className="no-underline">
                                Certified Information Systems Security Professional
                            </Link>
                            <span className='sep'>|</span>
                            <Link to="/cyber-security/cisa-certification-training"
                                className="no-underline">
                                CISA Certification Training
                            </Link>
                            <span className='sep'>|</span>
                            <Link to="/cyber-security/cism-certification-training"
                                className="no-underline">
                                CISM Certification Training
                            </Link>
                            <span className='sep'>|</span>
                            <Link to="/cloud-and-virtualization/aws-certified-solutions-architect-associate"
                                className="no-underline">
                                AWS Certified Solutions Architect - ASSOCIATE
                            </Link>
                            <span className='sep'>|</span>
                            <Link to="/cloud-and-virtualization/aws-certified-developer-associate"
                                className="no-underline">
                                AWS Certified Developer - ASSOCIATE
                            </Link>
                            <span className='sep'>|</span>
                            <Link to="/cloud-and-virtualization/aws-certified-sysops-administrator-associate"
                                className="no-underline">
                                AWS Certified SYSOPS Administrator - ASSOCIATE
                            </Link>
                            <span className='sep'>|</span>
                            <Link to="/project-management/cbap-certification-training"
                                className="no-underline">
                                CBAP Certification Training
                            </Link>
                            <span className='sep'>|</span>
                            <Link to="/project-management/program-management-professional-certification-training-pgmp"
                                className="no-underline">
                                Program Management Professional Certification Training
                                PGMP
                            </Link>
                            <span className='sep'>|</span>
                            <Link to="/agile-and-scrum/safe-5-advanced-scrum-master-certification-training"
                                className="no-underline">
                                SAFE® 5 Advanced Scrum Master Certification Training
                            </Link>
                            <span className='sep'>|</span>
                            <Link to="/agile-and-scrum/cspo-certification-training"
                                className="no-underline">
                                CSPO® Certification Training
                            </Link>
                            <span className='sep'>|</span>
                            <Link to="/software-development/react-jscertificationcourse"
                                className="no-underline">
                                React JS Certification Course
                            </Link>
                            <span className='sep'>|</span>
                            <Link to="/software-development/blockchain-certification-training"
                                className="no-underline">
                                Blockchain Certification Training
                            </Link>
                        </p>
                        <br />

                        <p className="text-lg font-semibold">Language Programs</p>
                        <p className="text-gray-500 lg:text-sm text-xs brand-courseslist mb-0">
                            <Link to="/languages/korean-language-training-b1b2"
                                className="no-underline">
                                Korean Language Training (B1&amp;B2)
                            </Link>
                            <span className='sep'>|</span>
                            <Link to="/languages/german-language-training-b1-b2"
                                className="no-underline">
                                German Language Training (B1&amp; B2)
                            </Link>
                            <span className='sep'>|</span>
                            <Link to="/languages/french-language-trainingb1b2"
                                className="no-underline">
                                French Language Training(B1&amp;B2)
                            </Link>
                            <span className='sep'>|</span>
                            <Link to="/languages/german-language-training-c1-c2"
                                className="no-underline">
                                German Language Training (C1&amp; C2)
                            </Link>
                            <span className='sep'>|</span>
                            <Link to="/languages/korean-language-training-c1-c2"
                                className="no-underline">
                                Korean Language Training (C1&amp; C2)
                            </Link>
                            <span className='sep'>|</span>
                            <Link to="/languages/french-language-trainingc1c2"
                                className="no-underline">
                                French Language Training(C1&amp;C2)
                            </Link>
                            <span className='sep'>|</span>
                            <Link to="/languages/spanish-language-trainingc1c2"
                                className="no-underline">
                                Spanish Language Training(C1&amp;C2)
                            </Link>
                            <span className='sep'>|</span>
                            <Link to="/languages/mandarin-language-trainingb1b2"
                                className="no-underline">
                                Mandarin Language Training(B1&amp;B2)
                            </Link>
                            <span className='sep'>|</span>
                            <Link to="/languages/mandarin-language-traininga1a2"
                                className="no-underline">
                                Mandarin Language Training(A1&amp;A2)
                            </Link>
                            <span className='sep'>|</span>
                            <Link to="/languages/english-language-traininga1a2"
                                className="no-underline">
                                English Language Training(A1&amp;A2)
                            </Link>
                            <span className='sep'>|</span>
                            <Link to="/languages/english-language-trainingb1b2"
                                className="no-underline">
                                English Language Training(B1&amp;B2)
                            </Link>
                        </p>
                    </div>

                </div>

                <hr />

                <div className="text-black text-center pb-4 pt-2 text-sm font-semibold">
                    © 2013-{(new Date().getFullYear())}
                    {contextcur.currency === 'Asia/Kolkata' ? (
                        <> SNVA Ventures </>
                    ) : (
                        ''
                    )}
                    {contextcur.currency === 'Asia/Singapore' ? (
                        <> SNVA LLC (USA) </>
                    ) : (
                        ''
                    )}
                    {contextcur.currency === 'America/New_York' ? (
                        <> SNVA LLC (USA) </>
                    ) : (
                        ''
                    )}
                    {contextcur.currency === 'SGT' ? <> SNVA LLC (USA) </> : ''}
                    {contextcur.currency === 'Europe/London' ? (
                        <> SNVA EduTech UK </>
                    ) : (
                        ''
                    )}
                    {contextcur.currency === 'Asia/Dubai' ? (
                        <> AV Ventures FZC LLC </>
                    ) : (
                        ''
                    )}
                    {contextcur.currency === 'Asia/Dhaka' ? (
                        <> SNVA LLC (USA) </>
                    ) : (
                        ''
                    )}
                    All Rights Reserved
                </div>
            </div>
        </div>
    )
}
export default Footer





