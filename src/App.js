import React, { useState, useEffect, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Provider } from './Api'
import { CurrencyContxt } from './Atoms/Contextcurrency'
import { menuCloseMob } from './Atoms/Contextcurrency'
import loadable from '@loadable/component'

const Master = loadable(() => import('./view/Master'))
const Course = loadable(() => import('./view/Course'))
const Free = loadable(() => import('./view/Free'))
const Paid = loadable(() => import('./view/Paid'))
const Footer = loadable(() => import('./Molecules/Index/Footer'))
const Icon = loadable(() => import('./Atoms/Icon'))
const Partner = loadable(() => import('./view/Partner'))
const Instructor = loadable(() => import('./view/Instructor'))
const Blog = loadable(() => import('./view/Blog'))
const News = loadable(() => import('./view/News'))
const BlogDetail = loadable(() => import('./view/BlogDetail'))
const NewsDetail = loadable(() => import('./view/NewsDetail'))
const Help = loadable(() => import('./view/Help'))
const Payment = loadable(() => import('./view/Payment'))
const Disclaimer = loadable(() => import('./view/Disclaimer'))
const Terms = loadable(() => import('./view/Terms'))
const Privacy = loadable(() => import('./view/Privacy'))
const Refund = loadable(() => import('./view/Refund'))
const TermsandCondition = loadable(() => import('./view/TermsandCondition'))
const Rescheduling = loadable(() => import('./view/Rescheduling'))
const Contact = loadable(() => import('./view/Contact'))
const About = loadable(() => import('./view/About'))
const DataScienceStatic = loadable(() => import('./view/DataScienceStatic'))
const CyberSecurityStatic = loadable(() => import('./view/CyberSecurityStatic'))
const NotFound = loadable(() => import('./view/NotFound'))
const CategoryUpcomingBatch = loadable(() => import('./view/CategoryUpcomingBatch'))
const PostGraduation = loadable(() => import('./view/PostGraduation'))
const Certificate = loadable(() => import('./view/Certificate'))
const Language = loadable(() => import('./view/Language'))
const StaffingSolution = loadable(() => import('./view/StaffingSolution'))
const TrainingRoom = loadable(() => import('./view/TrainingRoom'))
const Mocktest = loadable(() => import('./view/Mocktest'))
const Media = loadable(() => import('./view/Media'))
const PartnerAll = loadable(() => import('./view/PartnerAll'))
const FullTestimonial = loadable(() => import('./view/FullTestimonial'))
const PgpDataScience = loadable(() => import('./view/PgpDataScience'))
const PgpArtificalIntelligence = loadable(() => import('./view/PgpArificialIntelligence'))
const PgpCyberSecurity = loadable(() => import('./view/PgpCyberSecurity'))
const PgpDigitalMarketing = loadable(() => import('./view/PgpDigitalMarketing'))
const PgpFullStack = loadable(() => import('./view/PgpFullStack'))
const PgpUi = loadable(() => import('./view/PgpUi'))
const MocktestRegisterForm = loadable(() => import('./view/MocktestRegisterForm'))
const MasterCountry = loadable(() => import('./view/MasterCountry'))
const Job = loadable(() => import('./view/Job'))
const InnerJob = loadable(() => import('./view/InnerJob'))
const MasterState = loadable(() => import('./view/MasterState'))
const MasterCity = loadable(() => import('./view/MasterCity'))
const DataScienceCountry = loadable(() => import('./view/DataScienceCountry'))
const DataScienceState = loadable(() => import('./view/DataScienceState'))
const DataScienceCity = loadable(() => import('./view/DataScienceCity'))
const CyberSecurityContry = loadable(() => import('./view/CyberSecurityCountry'))
const CyberSecurityState = loadable(() => import('./view/CyberSecurityState'))
const CyberSecurityCity = loadable(() => import('./view/CyberSecurityCity'))
const CyberSecurityZip = loadable(() => import('./view/CyberSecurityzip'))
const BatchDetail = loadable(() => import('./view/BatchDetail'))
const DetailBatch = loadable(() => import('./view/DetailBatch'))
const BlogArabic = loadable(() => import('./view/BlogArabic'))
const BlogDetailArabic = loadable(() => import('./view/BlogDetailArabic'))
const PgpDataScienceNasscom = loadable(() => import('./view/PgpDataScienceNasscom'))
const Header = loadable(() => import('./Molecules/Index/Header'))
const Navbars = loadable(() => import('./Molecules/Index/Navbar'))
const Index = loadable(() => import('./view/Index'))

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
            <CurrencyContxt.Provider value={[contextcur, setContextCur]}>
                <Icon />
            </CurrencyContxt.Provider>

            <div className='header-top fixed-top bg-white'>
                <Suspense fallback={<div />}>
                    <Header />
                </Suspense>

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
                    <Footer />
                </Provider>
            </CurrencyContxt.Provider>


        </div>
    )
}
export default App
