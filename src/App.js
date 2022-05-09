import React, { useState, useEffect, Suspense,lazy} from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Provider } from './Api'
import { CurrencyContxt } from './Atoms/Contextcurrency'
import { menuCloseMob } from './Atoms/Contextcurrency'
import loadable from '@loadable/component'
import fun from "./Images/fun4.gif"

const Master = lazy(() => import('./view/Master'))
const Course = lazy(() => import('./view/Course'))
const Free = lazy(() => import('./view/Free'))
const Paid = lazy(() => import('./view/Paid'))
const Footer = lazy(() => import('./Molecules/Index/Footer'))
const Icon = lazy(() => import('./Atoms/Icon'))
const Partner = lazy(() => import('./view/Partner'))
const Instructor = lazy(() => import('./view/Instructor'))
const Blog = lazy(() => import('./view/Blog'))
const News = lazy(() => import('./view/News'))
const BlogDetail = lazy(() => import('./view/BlogDetail'))
const NewsDetail = lazy(() => import('./view/NewsDetail'))
const Help = lazy(() => import('./view/Help'))
const Payment = lazy(() => import('./view/Payment'))
const Disclaimer = lazy(() => import('./view/Disclaimer'))
const Terms = lazy(() => import('./view/Terms'))
const Privacy = lazy(() => import('./view/Privacy'))
const Refund = lazy(() => import('./view/Refund'))
const TermsandCondition = lazy(() => import('./view/TermsandCondition'))
const Rescheduling = lazy(() => import('./view/Rescheduling'))
const Contact = lazy(() => import('./view/Contact'))
const About = lazy(() => import('./view/About'))
const DataScienceStatic = lazy(() => import('./view/DataScienceStatic'))
const CyberSecurityStatic = lazy(() => import('./view/CyberSecurityStatic'))
const NotFound = lazy(() => import('./view/NotFound'))
const CategoryUpcomingBatch = lazy(() => import('./view/CategoryUpcomingBatch'))
const PostGraduation = lazy(() => import('./view/PostGraduation'))
const Certificate = lazy(() => import('./view/Certificate'))
const Language = lazy(() => import('./view/Language'))
const StaffingSolution = lazy(() => import('./view/StaffingSolution'))
const TrainingRoom = lazy(() => import('./view/TrainingRoom'))
const Mocktest = lazy(() => import('./view/Mocktest'))
const Media = lazy(() => import('./view/Media'))
const PartnerAll = lazy(() => import('./view/PartnerAll'))
const FullTestimonial = lazy(() => import('./view/FullTestimonial'))
const PgpDataScience = lazy(() => import('./view/PgpDataScience'))
const PgpArtificalIntelligence = lazy(() => import('./view/PgpArificialIntelligence'))
const PgpCyberSecurity = lazy(() => import('./view/PgpCyberSecurity'))
const PgpDigitalMarketing = lazy(() => import('./view/PgpDigitalMarketing'))
const PgpFullStack = lazy(() => import('./view/PgpFullStack'))
const PgpUi = lazy(() => import('./view/PgpUi'))
const MocktestRegisterForm = lazy(() => import('./view/MocktestRegisterForm'))
const MasterCountry = lazy(() => import('./view/MasterCountry'))
const Job = lazy(() => import('./view/Job'))
const InnerJob = lazy(() => import('./view/InnerJob'))
const MasterState = lazy(() => import('./view/MasterState'))
const MasterCity = lazy(() => import('./view/MasterCity'))
const DataScienceCountry = lazy(() => import('./view/DataScienceCountry'))
const DataScienceState = lazy(() => import('./view/DataScienceState'))
const DataScienceCity = lazy(() => import('./view/DataScienceCity'))
const CyberSecurityContry = lazy(() => import('./view/CyberSecurityCountry'))
const CyberSecurityState = lazy(() => import('./view/CyberSecurityState'))
const CyberSecurityCity = lazy(() => import('./view/CyberSecurityCity'))
const CyberSecurityZip = lazy(() => import('./view/CyberSecurityzip'))
const BatchDetail = lazy(() => import('./view/BatchDetail'))
const DetailBatch = lazy(() => import('./view/DetailBatch'))
const BlogArabic = lazy(() => import('./view/BlogArabic'))
const BlogDetailArabic = lazy(() => import('./view/BlogDetailArabic'))
const PgpDataScienceNasscom = lazy(() => import('./view/PgpDataScienceNasscom'))
const Header = lazy(() => import('./Molecules/Index/Header'))
const Navbars = lazy(() => import('./Molecules/Index/Navbar'))
const Index = lazy(() => import('./view/Index'))

const App = (props) => {
    const [mobmenuclose, setMobmenuclose] = useState();

    const [contextcur, setContextCur] = useState({
        currency: 'America/New_York',
        title: '+1-844-889-4054',
    })

 
    function RemoveConsole() {
        const noop = () => { }
        ['info', 'warn', 'error', 'assert', 'clear', 'count', 'debug', 'dir', 'dirxml',
            'exception', 'group', 'groupCollapsed', 'groupEnd', 'log',
            'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
            'timeline', 'timelineEnd', 'timeStamp', 'trace',
        ].forEach((method) => {
            window.console[method] = noop
        });  
    }
    RemoveConsole()
    useEffect(() => {
        RemoveConsole()
    })
    useEffect(() => {
        RemoveConsole()
    }, [window.location.href])


    return (
        <div className='d-flex flex-column minh-100'>

<Suspense fallback={<div><img src={fun} width={`100%`} height={`100vh`}/></div>}>
            <CurrencyContxt.Provider value={[contextcur, setContextCur]}>
                <Icon />
            </CurrencyContxt.Provider>

            <div className='header-top fixed-top bg-white'>
                {/* <Suspense fallback={<div />}> */}
                    <Header />
                {/* </Suspense> */}

                <CurrencyContxt.Provider value={[contextcur, setContextCur]}>
                    <menuCloseMob.Provider value={[mobmenuclose, setMobmenuclose]}>
                        <Suspense fallback={<div />}>
                            <Navbars />
                        </Suspense>
                    </menuCloseMob.Provider>
                </CurrencyContxt.Provider>
            </div>
            <div className='header-top-empty'></div>

            <div className='min-bxscreen w-100 flex-grow-1'>
                
                <Routes>
                    <Route path="/:id/:dats" element={
                        <CurrencyContxt.Provider
                            value={[contextcur, setContextCur]}>
                            <Provider>
                                <Master />
                            </Provider>
                        </CurrencyContxt.Provider>
                    } />

                    <Route path=":id" element={
                        <CurrencyContxt.Provider
                            value={[contextcur, setContextCur]}>
                            <Provider>
                                <Course />
                            </Provider>
                        </CurrencyContxt.Provider>
                    } />


                    <Route exact path="/free-courses" element={
                        <CurrencyContxt.Provider
                            value={[contextcur, setContextCur]}>
                            <Provider>
                                <Free />
                            </Provider>
                        </CurrencyContxt.Provider>
                    } />

                    <Route exact path="/all-batches" element={
                        <CurrencyContxt.Provider
                            value={[contextcur, setContextCur]}>
                            <Provider>
                                <Paid />
                            </Provider>
                        </CurrencyContxt.Provider>
                    } />


                    <Route exact path="/partner-marketing-affiliates" element={
                        <CurrencyContxt.Provider
                            value={[contextcur, setContextCur]}>
                            <Provider>
                                <Partner />
                            </Provider>
                        </CurrencyContxt.Provider>
                    } />
 
                    <Route exact path="/become-an-instructor" element={
                        <CurrencyContxt.Provider
                            value={[contextcur, setContextCur]}>
                            <Provider>
                                <Instructor />
                            </Provider>
                        </CurrencyContxt.Provider>
                    } />
 
                    <Route exact path="/blog" element={
                        <CurrencyContxt.Provider
                            value={[contextcur, setContextCur]}>
                            <Provider>
                                <Blog />
                            </Provider>
                        </CurrencyContxt.Provider>
                    } />

                    <Route exact path="/blog/page=:id" element={
                        <CurrencyContxt.Provider
                            value={[contextcur, setContextCur]}>
                            <Provider>
                                <Blog />
                            </Provider>
                        </CurrencyContxt.Provider>
                    } />
                    
                    <Route exact path="/ar/blog" element={<CurrencyContxt.Provider
                        value={[contextcur, setContextCur]}>
                        <Provider>
                            <BlogArabic />
                        </Provider>
                    </CurrencyContxt.Provider>} />

                    <Route exact path="/ar/blog/page=:id" element={<CurrencyContxt.Provider
                        value={[contextcur, setContextCur]}>
                        <Provider>
                            <BlogArabic />
                        </Provider>
                    </CurrencyContxt.Provider>} />
       

                    <Route exact path="/blog/:url" element={
                        <CurrencyContxt.Provider
                            value={[contextcur, setContextCur]}>
                            <Provider>
                                <BlogDetail />
                            </Provider>
                        </CurrencyContxt.Provider>
                    } />

                    <Route exact path="/ar/blog/:urlar" element={<CurrencyContxt.Provider
                        value={[contextcur, setContextCur]}>
                        <Provider>
                            <BlogDetailArabic />
                        </Provider>
                    </CurrencyContxt.Provider>} />


                    <Route exact path="/news-events" element={
                        <CurrencyContxt.Provider
                            value={[contextcur, setContextCur]}>
                            <Provider>
                                <News />
                            </Provider>
                        </CurrencyContxt.Provider>
                    } />

                    <Route exact path="/news-events/:news" element={<NewsDetail />} />

                    <Route exact path="/review" element={<FullTestimonial />} />
                    <Route exact path="/our-partners.php" element={<PartnerAll />} />
                    <Route exact path="/in-media" element={<Media />} />
                    <Route exact path="/post-graduate-program" element={<CurrencyContxt.Provider
                        value={[contextcur, setContextCur]}><Provider><PostGraduation /></Provider></CurrencyContxt.Provider>} />

                    <Route exact path="/certification-program" element={<CurrencyContxt.Provider
                        value={[contextcur, setContextCur]}><Provider><Certificate /></Provider></CurrencyContxt.Provider>} />


                    <Route exact path="/language-program" element={<CurrencyContxt.Provider
                        value={[contextcur, setContextCur]}><Provider><Language /></Provider></CurrencyContxt.Provider>} />


                    <Route exact path="/help" element={
                        <CurrencyContxt.Provider
                            value={[contextcur, setContextCur]}>
                            <Provider>
                                <Help />{' '}
                            </Provider>
                        </CurrencyContxt.Provider>
                    } />

                    <Route exact path="/payment-page" element={<Payment />} />

                    <Route exact path="/disclaimer" element={<Disclaimer />} />

                    <Route exact path="/terms-of-use" element={<Terms />} />

                    <Route exact path="/privacy-policy" element={<Privacy />} />

                    <Route exact path="/refund-policy" element={<Refund />} />

                    <Route exact path="/contact" element={<CurrencyContxt.Provider value={[contextcur, setContextCur]}>
                        <Provider>
                            <Contact />
                        </Provider>
                    </CurrencyContxt.Provider>} />


                    <Route exact path="/about" element={<About />} />

                    <Route exact path="/terms-and-conditions" element={<TermsandCondition />} />

                    <Route exact path="/rescheduling-policy" element={<Rescheduling />} />
 
                    <Route exact path="/pgp-in-data-science-for-nasscom" element={
                        <CurrencyContxt.Provider
                            value={[contextcur, setContextCur]}>
                            <Provider>
                                <PgpDataScienceNasscom />
                            </Provider>
                        </CurrencyContxt.Provider>} />
 
                    <Route exact path="/data-science/post-graduate-program-in-data-science" element={<CurrencyContxt.Provider
                        value={[contextcur, setContextCur]}>
                        <Provider>
                            <PgpDataScience />
                        </Provider>
                    </CurrencyContxt.Provider>} />

                    <Route exact path="/artificial-intelligence-and-machine-learning/post-graduate-program-in-artificial-intelligence-machine-learning" element={<CurrencyContxt.Provider
                        value={[contextcur, setContextCur]}>
                        <Provider>
                            <PgpArtificalIntelligence />
                        </Provider>
                    </CurrencyContxt.Provider>} />


                    <Route exact path="/cyber-security/post-graduate-program-in-cyber-security" element={<CurrencyContxt.Provider
                        value={[contextcur, setContextCur]}>
                        <Provider>
                            <PgpCyberSecurity />
                        </Provider>
                    </CurrencyContxt.Provider>} />


                    <Route exact path="/internet-marketing/post-graduate-program-in-digital-marketing" element={<CurrencyContxt.Provider
                        value={[contextcur, setContextCur]}>
                        <Provider>
                            <PgpDigitalMarketing />
                        </Provider>
                    </CurrencyContxt.Provider>} />


                    <Route exact path="/software-development/pgp-in-full-stack-development" element={<CurrencyContxt.Provider
                        value={[contextcur, setContextCur]}>
                        <Provider>
                            <PgpFullStack />
                        </Provider>
                    </CurrencyContxt.Provider>} />


                    <Route exact path="/software-development/post-graduate-program-in-ui-and-ux-design" element={<CurrencyContxt.Provider
                        value={[contextcur, setContextCur]}>
                        <Provider>
                            <PgpUi />
                        </Provider>
                    </CurrencyContxt.Provider>} />


                    <Route exact path="/:id/:dats/:country" element={<CurrencyContxt.Provider
                        value={[contextcur, setContextCur]}>
                        <Provider>
                            <MasterCountry />
                        </Provider>
                    </CurrencyContxt.Provider>} />

                    <Route exact path="/:id/:dats/:country/:state" element={<CurrencyContxt.Provider
                        value={[contextcur, setContextCur]}>
                        <Provider>
                            <MasterState />
                        </Provider>
                    </CurrencyContxt.Provider>} />

                    <Route exact path="/:id/:dats/:country/:state/:city" element={<CurrencyContxt.Provider
                        value={[contextcur, setContextCur]}>
                        <Provider>
                            <MasterCity />
                        </Provider>
                    </CurrencyContxt.Provider>} />


 
                    <Route exact path="/:id/certification-course/:countrycourse" element={<CurrencyContxt.Provider
                        value={[contextcur, setContextCur]}>
                        <Provider>
                            <DataScienceCountry />
                        </Provider>
                    </CurrencyContxt.Provider>} />


                    <Route exact path="/:id/certification-course/:countrycourse/:statecourse" element={<CurrencyContxt.Provider
                        value={[contextcur, setContextCur]}>
                        <Provider>
                            <DataScienceState />
                        </Provider>
                    </CurrencyContxt.Provider>} />


                    <Route exact path="/:id/certification-course/:countrycourse/:statecourse/:citycourse" element={<CurrencyContxt.Provider
                        value={[contextcur, setContextCur]}>
                        <Provider>
                            <DataScienceCity />
                        </Provider>
                    </CurrencyContxt.Provider>} />


                    <Route exact path="cyber-security/certification-course/:cyberCoutry" element={<CurrencyContxt.Provider
                        value={[contextcur, setContextCur]}>
                        <Provider>
                            <CyberSecurityContry />
                        </Provider>
                    </CurrencyContxt.Provider>} />


                    <Route exact path="cyber-security/certification-course/:cyberCoutry/:cyberstate" element={<CurrencyContxt.Provider
                        value={[contextcur, setContextCur]}>
                        <Provider>
                            <CyberSecurityState />
                        </Provider>
                    </CurrencyContxt.Provider>} />


                    <Route exact path="cyber-security/certification-course/:cyberCoutry/:cyberstate/:cybercity" element={<CurrencyContxt.Provider
                        value={[contextcur, setContextCur]}>
                        <Provider>
                            <CyberSecurityCity />
                        </Provider>
                    </CurrencyContxt.Provider>} />


                    <Route exact strict path="cyber-security/certification-course/:cyberCoutry/:cyberstate/:cybercity/:cyberzip" element={<CurrencyContxt.Provider
                        value={[contextcur, setContextCur]}>
                        <Provider>
                            <CyberSecurityZip />
                        </Provider>
                    </CurrencyContxt.Provider>} />


                    <Route exact path="/:data/liveonline/:date/:workid" element={<CurrencyContxt.Provider
                        value={[contextcur, setContextCur]}>
                        <Provider>
                            <BatchDetail />
                        </Provider>
                    </CurrencyContxt.Provider>} />


                    <Route exact path="/:data/:citys/liveonline/:date/:workid" element={<CurrencyContxt.Provider
                        value={[contextcur, setContextCur]}>
                        <Provider>
                            <DetailBatch />
                        </Provider>
                    </CurrencyContxt.Provider>} />
 

                    <Route exact path="/data-science" element={<CurrencyContxt.Provider
                        value={[contextcur, setContextCur]}>
                        <Provider>
                            <DataScienceStatic />
                        </Provider>
                    </CurrencyContxt.Provider>} />

                    <Route exact path="/cyber-security" element={<CurrencyContxt.Provider
                        value={[contextcur, setContextCur]}>
                        <Provider>
                            <CyberSecurityStatic />
                        </Provider>
                    </CurrencyContxt.Provider>} />


                  
                    <Route exact path="/:idbatchmain/:idbatch/batch" element={<CurrencyContxt.Provider
                        value={[contextcur, setContextCur]}>
                        <Provider>
                            <CategoryUpcomingBatch />
                        </Provider>
                    </CurrencyContxt.Provider>} />


                    <Route exact path="/staffing-solution" element={<StaffingSolution />} />

                    <Route exact path="/training-room" element={<TrainingRoom />} />

                    <Route exact path="/mocktest" element={<CurrencyContxt.Provider value={[contextcur, setContextCur]}>
                        <Provider>
                            <Mocktest />
                        </Provider>
                    </CurrencyContxt.Provider>} />


                    <Route exact path="/mocktest-register.php" element={<CurrencyContxt.Provider value={[contextcur, setContextCur]}>
                        <Provider>
                            <MocktestRegisterForm />
                        </Provider>
                    </CurrencyContxt.Provider>} />


                    <Route exact path="/jobs" element={
                        <CurrencyContxt.Provider value={[contextcur, setContextCur]}>
                            <Provider>
                                <Job />
                            </Provider>
                        </CurrencyContxt.Provider>} />


                    <Route exact path="/jobs/:jobs/:di" element={
                        <CurrencyContxt.Provider value={[contextcur, setContextCur]}>
                            <Provider>
                                <InnerJob />
                            </Provider>
                        </CurrencyContxt.Provider>} />
 
                    <Route path="*" element={<NotFound />} />

                    <Route exact path="/" element={
                        <CurrencyContxt.Provider
                            value={[contextcur, setContextCur]}>
                            <Suspense fallback={<div />}>
                                <Index />
                            </Suspense>
                        </CurrencyContxt.Provider>
                    } />

                </Routes>
               
            </div>

            <CurrencyContxt.Provider value={[contextcur, setContextCur]}>
                <Provider>
                    <Suspense fallback={<div>Loading..</div>}>
                    <Footer />
                    </Suspense>
                </Provider>
            </CurrencyContxt.Provider>

            </Suspense>
        </div>
    )
}
export default App
