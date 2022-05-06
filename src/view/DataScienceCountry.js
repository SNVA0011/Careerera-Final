import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import certificate from '../Images/Certificate.svg' 
import UserformsApplication from '../Molecules/Course/UserformsApplication';
import { Helmet } from 'react-helmet' 
import EnquireNowForm from '../Molecules/Course/EnquireNowForm';
import { useParams } from 'react-router'; 
import StateFooterCourse from '../Atoms/StateFooterCourse';
import Careerera from "../Molecules/Master/Careerera";
import Profile from "../Molecules/Master/Profile";
import roles from "../Images/roles_offer.png";
import CareerAssistance from '../Atoms/CareerAssistance';
import Light from "../Molecules/Master/Light";
import { base } from '../Base'
import fun from '../Images/fun4.gif'

export default function DataScienceCountry() {

  const countrycourse = useParams()
  const [conthide, setconthide] = useState(false);
  function showMorecont() {
    setconthide((conthide) => (!conthide))
  }
  const url = useParams()

  const [data, setData] = useState([])
  const [load, setLoad] = useState(false)


  async function CallData() {
    const isuue = url.countrycourse;
    const fixed = isuue.replace("-", "%20")
    await fetch(base, {
      method: 'POST',
      body: JSON.stringify({ "apiurl": stateDetailData + fixed }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }, []).then((response) => response.json()).then((json) => setData(json.stateDetail)).catch((error) => {
      setData(''); 
  }); 
 
    setLoad(true);
  }

  useEffect(() => {
    CallData()
    window.scrollTo(0, 0);
  }, [url.countrycourse]);

  return (
    <>
      {load ? <div> <Helmet>
        <title>{data[0].meta_title ? data[0].meta_title : ""}</title>
        <meta name="description" content={data[0].meta_desc} />
        <meta name="keyword" content={data[0].keywords} />
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <link rel="canonical" href={"https://www.careerera.com/data-science/certification-course/" + countrycourse.countrycourse} />
      </Helmet>

        
        <div className='certification-courses full-w staticsyber p-0'>
          <div className="container">
            <div className="row py-16 align-items-center">
              <div className="col-xxl-8 col-xl-7 col-lg-6 col-12 pb-3 pb-xl-0">
                <h1 className="text-2xl sm:text-3xl xl:text-4xl font-bold text-white uppercase">
                  Data Science <span className="orange-lgclr d-inline">CERTIFICATION COURSE IN {countrycourse.countrycourse.replace('-', ' ')} </span>
                </h1>
                <span className="heading-border-line d-block left-0  mt-3 mb-4"></span>

                <p className="text-base sm:text-lg md:text-xl text-white my-8 font-medium  tracking-wide">
                  Go beyond the basics and leverage your decision-making abilities while you navigate through the vast metrics and visualizations with Careerera's Data Science certification course in {countrycourse.countrycourse}. Get into immersive training by industry experts with course programs curated conscientiously giving students exposure to hands-on practical projects and key technologies. Unriddle the data ecosystem and foster actionable recommendations by creating a data-driven framework for your organization and yourself. Reading code to comprehend syntax is made easy and quick with the Data Science course at Careerera. Learn, grow and inspire to act based n facts with this world-class Data Science course in <span className='capitalize'>{countrycourse.countrycourse.replace('-', ' ')}</span>, and propel your Data science career to the next level.

                </p>


              </div>

              
              <EnquireNowForm />
            </div>
          </div>
        </div>


        <div className='dataccience-pagecat'>
          <div className='discription_sec scroll-spbx' id='Description'>
            <div className='container py-16'>
              <div className="sec_title">
                <h2 className="text-2xl md:text-3xl font-bold text-capitalize">
                  Careerera’s  <span className='orange-clrsite'>Data Science</span> Course In {countrycourse.countrycourse.replace('-', ' ')}
                </h2>
                <p className='text-gray-500 text-base md:text-lg fw-medium'>Accelerate your career in data science</p>
                <hr className="w-20 hr mb-4 bg-blue-400 sepfoll-hr" />
              </div>

              {data[0] ?
                <div className="blog-detials-single">
                  <div className="content st data-scinece-othercer" dangerouslySetInnerHTML={{ __html: data[0].state_desc }}>
                  </div>
                </div>
                : ''}

            </div>
          </div>


          <div className='explore_Data_science scroll-spbx' id='explore'>
            <div className='container py-16'>
              <div className="sec_title">
                <h2 className='text-2xl md:text-3xl font-bold'>Explore our Data   <span className='orange-clrsite'>Science Courses</span></h2>
                <p className='text-gray-500 text-base md:text-lg fw-medium'>See which benefits you can derive from joining this program.</p>
                <hr className="w-20 hr mb-4 bg-blue-400 sepfoll-hr"></hr>
              </div>

              <div className="row megamenu-wrapper">
                <div className="col-12">
                  <div className="row pt-1">

                    
                    <div className="col-xl-4 col-md-6 col-12 mb-4">
                      <div className="cards h-100 d-flex flex-column">
                        <div className="pt-2 pl-4 rounded-lg">
                          <div className="eiml-shadow red" />
                          <img src={certificate} alt="certificate-program" className="w-28 relative top-4 border rounded-full" />
                        </div>
                        <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                          <div className="flex-grow-1">
                            
                            <h5 className="font-bold text-gray-600 course-title mb-2">
                              Post Graduate Program in Data Science
                            </h5>

                            <p className='text-gray-500 mb-4 text-base sm:text-base'>
                              Gain expertise in the field of data science by learning practical
                              skills and techniques blended with thorough theoretical concepts and
                              core fundamentals.
                            </p>
                          </div>
                          <div className="mt-auto">
                            <div className='row'>
                              <div className='col-lg-6 col-12'>
                                <Link to={'/data-science/' + 'post-graduate-program-in-data-science/batch'} className='btn-site invert no-underline text-sm w-100'>
                                  <span>
                                    Upcoming Batches
                                  </span>
                                </Link>
                              </div>
                              <div className='ml-auto col-lg-6 col-12 mt-1 mt-lg-0'>
                                <Link to={'/data-science/' + 'post-graduate-program-in-data-science'} className='btn-site no-underline text-sm w-100'>
                                  <span>
                                    Learn More
                                    <i className="fas fa-chevron-right ml-2 align-middle"></i>
                                  </span>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-xl-4 col-md-6 col-12 mb-4">
                      <div className="cards h-100 d-flex flex-column">
                        <div className="pt-2 pl-4 rounded-lg">
                          <div className="eiml-shadow red" />
                          <img src={certificate} alt="certificate-program" className="w-28 relative top-4 border rounded-full" />
                        </div>
                        <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                          <div className="flex-grow-1">
                            
                            <h5 className="font-bold text-gray-600 course-title mb-2">
                              Data Science Professional Certification
                            </h5>

                            <p className='text-gray-500 mb-4 text-base sm:text-base'>
                              Get ahead on data-driven techniques with a Data Science Professional
                              Certification and master the art of executing various tools,
                              languages, and libraries that professional data scientists use.
                            </p>
                          </div>
                          <div className="mt-auto">
                            <div className='row'>
                              <div className='col-lg-6 col-12'>
                                <Link to={'/data-science/' + 'data-science-professional-certification/batch'} className='btn-site invert no-underline text-sm w-100'>
                                  <span>
                                    Upcoming Batches
                                  </span>
                                </Link>
                              </div>
                              <div className='ml-auto col-lg-6 col-12 mt-1 mt-lg-0'>
                                <Link to={'/data-science/' + 'data-science-professional-certification'} className='btn-site no-underline text-sm w-100'>
                                  <span>
                                    Learn More
                                    <i className="fas fa-chevron-right ml-2 align-middle"></i>
                                  </span>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-xl-4 col-md-6 col-12 mb-4">
                      <div className="cards h-100 d-flex flex-column">
                        <div className="pt-2 pl-4 rounded-lg">
                          <div className="eiml-shadow red" />
                          <img src={certificate} alt="certificate-program" className="w-28 relative top-4 border rounded-full" />
                        </div>
                        <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                          <div className="flex-grow-1">
                            
                            <h5 className="font-bold text-gray-600 course-title mb-2">
                              Post Graduate Program In Business Analytics
                            </h5>

                            <p className='text-gray-500 mb-4 text-base sm:text-base'>
                              Tailor your learning process to your data science career with a PGP
                              in Business Analytics. Attain analytics proficiency and the edge to
                              become a top influence in key business decisions.
                            </p>
                          </div>
                          <div className="mt-auto">
                            <div className='row'>
                              <div className='col-lg-6 col-12'>
                                <Link to={'/data-science/' + 'post-graduate-program-in-business-analytics/batch'} className='btn-site invert no-underline text-sm w-100'>
                                  <span>
                                    Upcoming Batches
                                  </span>
                                </Link>
                              </div>
                              <div className='ml-auto col-lg-6 col-12 mt-1 mt-lg-0'>
                                <Link to={'/data-science/' + 'post-graduate-program-in-business-analytics'} className='btn-site no-underline text-sm w-100'>
                                  <span>
                                    Learn More
                                    <i className="fas fa-chevron-right ml-2 align-middle"></i>
                                  </span>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>


                    
                    <div className="col-xl-4 col-md-6 col-12 mb-4">
                      <div className="cards h-100 d-flex flex-column">
                        <div className="pt-2 pl-4 rounded-lg">
                          <div className="eiml-shadow red" />
                          <img src={certificate} alt="certificate-program" className="w-28 relative top-4 border rounded-full" />
                        </div>
                        <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                          <div className="flex-grow-1">
                            
                            <h5 className="font-bold text-gray-600 course-title mb-2">
                              DSAP (Data Science Analytics Professionals)
                            </h5>

                            <p className='text-gray-500 mb-4 text-base sm:text-base'>
                              Jumpstart your Data science Career with a solid foundational
                              program. DSAP is your threshold to becoming a leading Business
                              Analytics professional.
                            </p>
                          </div>
                          <div className="mt-auto">
                            <div className='row'>
                              <div className='col-lg-6 col-12'>
                                <Link to={'/data-science/' + 'dsap-data-science-analytics-professionals/batch'} className='btn-site invert no-underline text-sm w-100'>
                                  <span>
                                    Upcoming Batches
                                  </span>
                                </Link>
                              </div>
                              <div className='ml-auto col-lg-6 col-12 mt-1 mt-lg-0'>
                                <Link to={'/data-science/' + 'dsap-data-science-analytics-professionals'} className='btn-site no-underline text-sm w-100'>
                                  <span>
                                    Learn More
                                    <i className="fas fa-chevron-right ml-2 align-middle"></i>
                                  </span>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-xl-4 col-md-6 col-12 mb-4">
                      <div className="cards h-100 d-flex flex-column">
                        <div className="pt-2 pl-4 rounded-lg">
                          <div className="eiml-shadow red" />
                          <img src={certificate} alt="certificate-program" className="w-28 relative top-4 border rounded-full" />
                        </div>
                        <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                          <div className="flex-grow-1">
                            
                            <h5 className="font-bold text-gray-600 course-title mb-2">
                              Data Science with Python
                            </h5>

                            <p className='text-gray-500 mb-4 text-base sm:text-base'>
                              Get into the data science world with the most popular tool Python.
                              Learn how to utilize computation to achieve a variety of goals
                              through Data Science with Python Program.
                            </p>
                          </div>
                          <div className="mt-auto">
                            <div className='row'>
                              <div className='col-lg-6 col-12'>
                                <Link to={'/data-science/' + 'data-science-with-python/batch'} className='btn-site invert no-underline text-sm w-100'>
                                  <span>
                                    Upcoming Batches
                                  </span>
                                </Link>
                              </div>
                              <div className='ml-auto col-lg-6 col-12 mt-1 mt-lg-0'>
                                <Link to={'/data-science/' + 'data-science-with-python'} className='btn-site no-underline text-sm w-100'>
                                  <span>
                                    Learn More
                                    <i className="fas fa-chevron-right ml-2 align-middle"></i>
                                  </span>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-xl-4 col-md-6 col-12 mb-4">
                      <div className="cards h-100 d-flex flex-column">
                        <div className="pt-2 pl-4 rounded-lg">
                          <div className="eiml-shadow red" />
                          <img src={certificate} alt="certificate-program" className="w-28 relative top-4 border rounded-full" />
                        </div>
                        <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                          <div className="flex-grow-1">
                            
                            <h5 className="font-bold text-gray-600 course-title mb-2">
                              Machine Learning With Python
                            </h5>

                            <p className='text-gray-500 mb-4 text-base sm:text-base'>
                              Get started with Supervised as well as Unsupervised learning with a
                              course in Machine Learning with Python. This course is your one-stop
                              track to learning the tools to head on with ML and Python.
                            </p>
                          </div>
                          <div className="mt-auto">
                            <div className='row'>
                              <div className='col-lg-6 col-12'>
                                <Link to={'/data-science/' + 'machine-learning-with-python/batch'} className='btn-site invert no-underline text-sm w-100'>
                                  <span>
                                    Upcoming Batches
                                  </span>
                                </Link>
                              </div>
                              <div className='ml-auto col-lg-6 col-12 mt-1 mt-lg-0'>
                                <Link to={'/data-science/' + 'machine-learning-with-python'} className='btn-site no-underline text-sm w-100'>
                                  <span>
                                    Learn More
                                    <i className="fas fa-chevron-right ml-2 align-middle"></i>
                                  </span>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>


                    
                    <div className="col-xl-4 col-md-6 col-12 mb-4">
                      <div className="cards h-100 d-flex flex-column">
                        <div className="pt-2 pl-4 rounded-lg">
                          <div className="eiml-shadow red" />
                          <img src={certificate} alt="certificate-program" className="w-28 relative top-4 border rounded-full" />
                        </div>
                        <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                          <div className="flex-grow-1">
                            
                            <h5 className="font-bold text-gray-600 course-title mb-2">
                              Deep Learning Certification Training
                            </h5>

                            <p className='text-gray-500 mb-4 text-base sm:text-base'>
                              Get into the world of building, training, and deploying variants of
                              Deep Architecture from convolutional networks to Autoencoders to
                              Recurrent Networks with Deep Learning Certification training.
                            </p>
                          </div>
                          <div className="mt-auto">
                            <div className='row'>
                              <div className='col-lg-6 col-12'>
                                <Link to={'/data-science/' + 'deep-learning-certification-training/batch'} className='btn-site invert no-underline text-sm w-100'>
                                  <span>
                                    Upcoming Batches
                                  </span>
                                </Link>
                              </div>
                              <div className='ml-auto col-lg-6 col-12 mt-1 mt-lg-0'>
                                <Link to={'/data-science/' + 'deep-learning-certification-training'} className='btn-site no-underline text-sm w-100'>
                                  <span>
                                    Learn More
                                    <i className="fas fa-chevron-right ml-2 align-middle"></i>
                                  </span>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-xl-4 col-md-6 col-12 mb-4">
                      <div className="cards h-100 d-flex flex-column">
                        <div className="pt-2 pl-4 rounded-lg">
                          <div className="eiml-shadow red" />
                          <img src={certificate} alt="certificate-program" className="w-28 relative top-4 border rounded-full" />
                        </div>
                        <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                          <div className="flex-grow-1">
                            
                            <h5 className="font-bold text-gray-600 course-title mb-2">
                              Time Series Forecasting
                            </h5>

                            <p className='text-gray-500 mb-4 text-base sm:text-base'>
                              Build a robust foundational knowledge with this Time Series
                              Forecasting course and be empowered with the in-demand skills.
                            </p>
                          </div>
                          <div className="mt-auto">
                            <div className='row'>
                              <div className='col-lg-6 col-12'>
                                <Link to={'/data-science/' + 'time-series-forecasting/batch'} className='btn-site invert no-underline text-sm w-100'>
                                  <span>
                                    Upcoming Batches
                                  </span>
                                </Link>
                              </div>
                              <div className='ml-auto col-lg-6 col-12 mt-1 mt-lg-0'>
                                <Link to={'/data-science/' + 'time-series-forecasting'} className='btn-site no-underline text-sm w-100'>
                                  <span>
                                    Learn More
                                    <i className="fas fa-chevron-right ml-2 align-middle"></i>
                                  </span>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-xl-4 col-md-6 col-12 mb-4">
                      <div className="cards h-100 d-flex flex-column">
                        <div className="pt-2 pl-4 rounded-lg">
                          <div className="eiml-shadow red" />
                          <img src={certificate} alt="certificate-program" className="w-28 relative top-4 border rounded-full" />
                        </div>
                        <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                          <div className="flex-grow-1">
                            
                            <h5 className="font-bold text-gray-600 course-title mb-2">
                              Natural Language Processing
                            </h5>

                            <p className='text-gray-500 mb-4 text-base sm:text-base'>
                              Dive into the world of building scalable algorithms powered by AI
                              and ML. The NLP (Natural Language Processing) course will power you
                              with experiential learning.
                            </p>
                          </div>
                          <div className="mt-auto">
                            <div className='row'>
                              <div className='col-lg-6 col-12'>
                                <Link to={'/data-science/' + 'natural-language-processing/batch'} className='btn-site invert no-underline text-sm w-100'>
                                  <span>
                                    Upcoming Batches
                                  </span>
                                </Link>
                              </div>
                              <div className='ml-auto col-lg-6 col-12 mt-1 mt-lg-0'>
                                <Link to={'/data-science/' + 'natural-language-processing'} className='btn-site no-underline text-sm w-100'>
                                  <span>
                                    Learn More
                                    <i className="fas fa-chevron-right ml-2 align-middle"></i>
                                  </span>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>


                    
                    <div className="col-xl-4 col-md-6 col-12 mb-4">
                      <div className="cards h-100 d-flex flex-column">
                        <div className="pt-2 pl-4 rounded-lg">
                          <div className="eiml-shadow red" />
                          <img src={certificate} alt="certificate-program" className="w-28 relative top-4 border rounded-full" />
                        </div>
                        <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                          <div className="flex-grow-1">
                            
                            <h5 className="font-bold text-gray-600 course-title mb-2">
                              Database Management System
                            </h5>

                            <p className='text-gray-500 mb-4 text-base sm:text-base'>
                              Become a Pro at DBMS by mastering the basics of programming
                              languages, delving into the database literature, and learning how to
                              construct, manipulate, and generate reports from database tables
                              using SQL.
                            </p>
                          </div>
                          <div className="mt-auto">
                            <div className='row'>
                              <div className='col-lg-6 col-12'>
                                <Link to={'/data-science/' + 'data-base-management-system/batch'} className='btn-site invert no-underline text-sm w-100'>
                                  <span>
                                    Upcoming Batches
                                  </span>
                                </Link>
                              </div>
                              <div className='ml-auto col-lg-6 col-12 mt-1 mt-lg-0'>
                                <Link to={'/data-science/' + 'data-base-management-system'} className='btn-site no-underline text-sm w-100'>
                                  <span>
                                    Learn More
                                    <i className="fas fa-chevron-right ml-2 align-middle"></i>
                                  </span>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-xl-4 col-md-6 col-12 mb-4">
                      <div className="cards h-100 d-flex flex-column">
                        <div className="pt-2 pl-4 rounded-lg">
                          <div className="eiml-shadow red" />
                          <img src={certificate} alt="certificate-program" className="w-28 relative top-4 border rounded-full" />
                        </div>
                        <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                          <div className="flex-grow-1">
                            
                            <h5 className="font-bold text-gray-600 course-title mb-2">
                              Introduction of Python for IEM-UTeMSS
                            </h5>

                            <p className='text-gray-500 mb-4 text-base sm:text-base'>
                              Navigate your way around Python and Machine Learning as we introduce
                              you to the essential ideas of Machine Learning (ML) as well as
                              developing ML bots using the Python Programming Language.
                            </p>
                          </div>
                          <div className="mt-auto">
                            <div className='row'>
                              <div className='col-lg-6 col-12'>
                                <Link to={'/data-science/' + 'introduction-of-python-for-iem-utemss/batch'} className='btn-site invert no-underline text-sm w-100'>
                                  <span>
                                    Upcoming Batches
                                  </span>
                                </Link>
                              </div>
                              <div className='ml-auto col-lg-6 col-12 mt-1 mt-lg-0'>
                                <Link to={'/data-science/' + 'introduction-of-python-for-iem-utemss'} className='btn-site no-underline text-sm w-100'>
                                  <span>
                                    Learn More
                                    <i className="fas fa-chevron-right ml-2 align-middle"></i>
                                  </span>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-xl-4 col-md-6 col-12 mb-4">
                      <div className="cards h-100 d-flex flex-column">
                        <div className="pt-2 pl-4 rounded-lg">
                          <div className="eiml-shadow red" />
                          <img src={certificate} alt="certificate-program" className="w-28 relative top-4 border rounded-full" />
                        </div>
                        <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                          <div className="flex-grow-1">
                            
                            <h5 className="font-bold text-gray-600 course-title mb-2">
                              Data Visualization in Python
                            </h5>

                            <p className='text-gray-500 mb-4 text-base sm:text-base'>
                              This course on Data Visualization will help you transform from a
                              beginner to a pro. Get to learn how to generate intriguing visuals
                              and charts using Python.
                            </p>
                          </div>
                          <div className="mt-auto">
                            <div className='row'>
                              <div className='col-lg-6 col-12'>
                                <Link to={'/data-science/' + 'data-visualization-in-python/batch'} className='btn-site invert no-underline text-sm w-100'>
                                  <span>
                                    Upcoming Batches
                                  </span>
                                </Link>
                              </div>
                              <div className='ml-auto col-lg-6 col-12 mt-1 mt-lg-0'>
                                <Link to={'/data-science/' + 'data-visualization-in-python'} className='btn-site no-underline text-sm w-100'>
                                  <span>
                                    Learn More
                                    <i className="fas fa-chevron-right ml-2 align-middle"></i>
                                  </span>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>


                    
                    <div className="col-xl-4 col-md-6 col-12 mb-4">
                      <div className="cards h-100 d-flex flex-column">
                        <div className="pt-2 pl-4 rounded-lg">
                          <div className="eiml-shadow red" />
                          <img src={certificate} alt="certificate-program" className="w-28 relative top-4 border rounded-full" />
                        </div>
                        <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                          <div className="flex-grow-1">
                            
                            <h5 className="font-bold text-gray-600 course-title mb-2">
                              Masters in Data Science Engineering
                            </h5>

                            <p className='text-gray-500 mb-4 text-base sm:text-base'>
                              Delve into the world of predictive modeling and engineering systems
                              with data-driven designs and gain a thorough understanding of
                              scientific and practical data science and analytics expertise.
                            </p>
                          </div>
                          <div className="mt-auto">
                            <div className='row'>
                              <div className='col-lg-6 col-12'>
                                <Link to={'/data-science/' + 'masters-in-data-science-engineering/batch'} className='btn-site invert no-underline text-sm w-100'>
                                  <span>
                                    Upcoming Batches
                                  </span>
                                </Link>
                              </div>
                              <div className='ml-auto col-lg-6 col-12 mt-1 mt-lg-0'>
                                <Link to={'/data-science/' + 'masters-in-data-science-engineering'} className='btn-site no-underline text-sm w-100'>
                                  <span>
                                    Learn More
                                    <i className="fas fa-chevron-right ml-2 align-middle"></i>
                                  </span>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-xl-4 col-md-6 col-12 mb-4">
                      <div className="cards h-100 d-flex flex-column">
                        <div className="pt-2 pl-4 rounded-lg">
                          <div className="eiml-shadow red" />
                          <img src={certificate} alt="certificate-program" className="w-28 relative top-4 border rounded-full" />
                        </div>
                        <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                          <div className="flex-grow-1">
                            
                            <h5 className="font-bold text-gray-600 course-title mb-2">
                              Masters in Data Science and Analytics
                            </h5>

                            <p className='text-gray-500 mb-4 text-base sm:text-base'>
                              Be a Business top-runner through this Data science and analytics
                              Masters's Program. Get immersed into this rigorous training that
                              offers hands-on experience.
                            </p>
                          </div>
                          <div className="mt-auto">
                            <div className='row'>
                              <div className='col-lg-6 col-12'>
                                <Link to={'/data-science/' + 'masters-in-data-science-and-analytics/batch'} className='btn-site invert no-underline text-sm w-100'>
                                  <span>
                                    Upcoming Batches
                                  </span>
                                </Link>
                              </div>
                              <div className='ml-auto col-lg-6 col-12 mt-1 mt-lg-0'>
                                <Link to={'/data-science/' + 'masters-in-data-science-and-analytics'} className='btn-site no-underline text-sm w-100'>
                                  <span>
                                    Learn More
                                    <i className="fas fa-chevron-right ml-2 align-middle"></i>
                                  </span>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-xl-4 col-md-6 col-12 mb-4">
                      <div className="cards h-100 d-flex flex-column">
                        <div className="pt-2 pl-4 rounded-lg">
                          <div className="eiml-shadow red" />
                          <img src={certificate} alt="certificate-program" className="w-28 relative top-4 border rounded-full" />
                        </div>
                        <div className="px-3 pb-2 pt-6 d-flex flex-column flex-grow-1 overflow-hidden">
                          <div className="flex-grow-1">
                            
                            <h5 className="font-bold text-gray-600 course-title mb-2">
                              DSF (Data Science Fundamental)
                            </h5>

                            <p className='text-gray-500 mb-4 text-base sm:text-base'>
                              This crisp and solid foundational course is an ideal start for data
                              science enthusiasts that equips prospective data science
                              practitioners with key data science concepts, practices, techniques,
                              and concepts.
                            </p>
                          </div>
                          <div className="mt-auto">
                            <div className='row'>
                              <div className='col-lg-6 col-12'>
                                <Link to={'/data-science/' + 'dsf-data-science-fundamental/batch'} className='btn-site invert no-underline text-sm w-100'>
                                  <span>
                                    Upcoming Batches
                                  </span>
                                </Link>
                              </div>
                              <div className='ml-auto col-lg-6 col-12 mt-1 mt-lg-0'>
                                <Link to={'/data-science/' + 'dsf-data-science-fundamental'} className='btn-site no-underline text-sm w-100'>
                                  <span>
                                    Learn More
                                    <i className="fas fa-chevron-right ml-2 align-middle"></i>
                                  </span>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>


                  </div>
                </div>
              </div>

            </div>
          </div>



          <div className="why-pgpedu">
            <Careerera customizefaculty="true"
              facultysubtitle='Enrol with leading global online educational course provider.'
              facultyhead1='Users'
              facultypara1='250000+'
              facultyhead2='Top Ranked Programs'
              facultypara2='10'
              facultyhead3='Industry Experts'
              facultypara3='500+'
              facultyhead4='Expert Faculties'
              facultypara4='1000+' />
          </div>

          <Profile title="Data Science" />


          <CareerAssistance
            title='Career'
            titlesub='Assistance'
            titleheading='Take advantage of Careerera’s partnerships with Global leading IT companies.'
            box1='Learn Insights on Futuristic Approaches'
            box2='Workshops on Resume Review & Interview Preparation'
            box3='Career Guidance and Mentorship by Careerera and Industry Leaders' />
         
          <Light image={roles} />

          
          <div className='showprocess-Only'>
          <UserformsApplication  />
          </div>
 

          <StateFooterCourse id={countrycourse.countrycourse} title="data-science" />

        </div></div> : 
 <img src={fun} className="w-screen" alt="careerera-loader-image"/>}

    </>
  )
}















