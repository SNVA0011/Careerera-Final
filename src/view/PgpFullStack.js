import React from "react";
import Blog from "../Atoms/Blog";
import DescriptionStatic from "../Atoms/DescriptionStatic";
import Faq from "../Atoms/Faq";
import Highlight from "../Atoms/Highlight";
import NavStatic from "../Atoms/NavStatic";
import Testimonial from "../Atoms/Testimonial";
import Sign from "../Molecules/Course/Sign";
import UserformsApplication from "../Molecules/Course/UserformsApplication";
import Application from "../Molecules/Master/Application";
import Capstone from "../Molecules/Master/Capstone";
import Careerera from "../Molecules/Master/Careerera";
import Completition from "../Molecules/Master/Completition";
import Hero from "../Molecules/Master/Hero";
import Light from "../Molecules/Master/Light";
import MWhy from "../Molecules/Master/MWhy";
import Why from "../Atoms/Why";
import Navs from "../Molecules/Master/Nav";
import Profile from "../Molecules/Master/Profile";
import csr from "../Images/full-stack-roles-offer.png";
import ProgramCarriculum from "../Atoms/ProgramCarriculum";
import CountryFooter from "../Atoms/CountryFooter";
import CareerAssistance from '../Atoms/CareerAssistance';
import { Helmet } from "react-helmet";
import PopUp from "../Atoms/PopUp";

import fullSimg from "../Images/full-stack-img.jpg";
import full_stack_batch_profile2 from "../Images/full_stack_batch_profile_2.svg";
import full_stack_education_bg2 from "../Images/full_stack_education_bg_2.svg";

import fullStContent from "../Images/data-science-icon/Content-management-system.png"
import fullStA from "../Images/data-science-icon/A-client-services.png"
import fullStAutomotive from "../Images/data-science-icon/Automotive-parts.png"
import fullStFood from "../Images/data-science-icon/Food-delivery-application.png"
import fullStPortal from "../Images/data-science-icon/Portal-of-e-commerce.png"
import fullStMotor from "../Images/data-science-icon/Motor-servicing.png"
import fullStProject from "../Images/data-science-icon/Project-management.png"
import fullStNews from "../Images/data-science-icon/News-aggregator.png"
import fullStBoilerplate from "../Images/data-science-icon/Boilerplate-application.png"
import fullStItem from "../Images/data-science-icon/Item-catalog-application.png"



const PgpFullStack = () => {
   return (
      <div className="static-pgpintell">
         <Helmet>
            <title>Post Graduate Program(PGP) & Certification in UI & UX Design</title>

            <title>Post Graduate Program in Full Stack Development | PGP in Full Stack | Careerera</title>

            <meta name="description" content="Post Graduate Program in full stack development is designed by industry experts. PGP in full stack at Careerera expertise you in technologies like Java, Angular, Spring Boot, Hibernate, and JSPs, MVC, and web services." />
            <meta name="keywords" content="PGP in Full Stack Development, Post Graduate Program in Full Stack Development, Full Stack Post Graduate Program, PGP in Full Stack Development Course, PGP in Full Stack, Post Graduate Certification in Full Stack, PGP certification in Full Stack" />
            <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <link rel="canonical" href="https://www.careerera.com/software-development/pgp-in-full-stack-development" />

            <script type="application/ld+json">
               {`{"@context":"https://schema.org","@type":"Course",
"@id":"https://www.careerera.com/software-development/pgp-in-full-stack-development",
"name":"Post Graduate Program In Full Stack Development",
"description":"Post Graduate Program in full stack development is designed by industry experts. PGP in full stack at Careerera expertise you in technologies like Java, Angular, Spring Boot, Hibernate, and JSPs, MVC, and web services.",
"provider":{"@type":"Organization",
"name":"Careerera"},
"aggregateRating":{"@type":"AggregateRating",
"ratingValue":4.5,
"reviewCount":1250},
"outcome":"","audience":{"@type":"Audience",
"audienceType":["The instructors have done a splendid job in creating the content of this Full Stack Development course and stringing it all together. I did not have any programming experience from before taking the course but regardless, I was able to understand everything taught in the course in a crystal clear manner simply by following the instructor’s instructions at every turn. I am especially with the way in which my assignments have been graded and how the instructors have given detailed feedback about every mistake I have made in them..
"]}}`}</script>


         </Helmet>
         <PopUp title="Post Graduate Program in Full Stack " />
         <Hero
            categoryUrl="Full Stack Development"
            duration="12-Months Online Program"
            point2="6 Month Internship"
            point3="Job Assistance "
            point4="Industrial Projects"
            point1="Course Completion Certificate"
            point5="Multiple Live Projects"
            point6="Industry Based Trainers "
            title="POST GRADUATE PROGRAM IN Full Stack Development"
         />
         

         <NavStatic
            about="Full Stack"
            Why='Why Full Stack'
            Program="Program Highlights"
            WhyC="Why Careerera"
            assistanceGlobal="Placement"
            Application="Application"
            faq="FAQ"
            Review="Reviews"
         />


         <DescriptionStatic
            title="Full Stack Development"
            heading="Know your way around the full stack, front to back."
            data={<>
               <p>Technologies are becoming increasingly complex today. Every software application has numerous moving parts. All those parts have to be conjoined together to produce fully functioning pieces of software. As the world is becoming more and more digital, businesses and organizations find themselves having to invest more and more in producing software and hiring software developers. Writing and producing working software is not a simple affair. It requires a lot of planning, projection, mockups, careful design, and difficult to follow schedules. Producing software can cut deeply into a company’s budget and entail astronomically high costs if the company is not careful, especially if the software project is a large scale one and large teams are involved in its development. This is why companies seek to hire skilled and talented full stack developers. This is also the reason why <strong>PGP in Full Stack Development courses</strong> have become so popular. </p>
            </>}
            data2={<>
               <h3>Why Hire Full Stack Developers?</h3>
               <p>A full stack developer is a software developer who has the ability to develop both client and server software on his own, independently. He possesses a wide range of skills and has experience with many different technologies under both the front end and back end categories. He can work with a full stack of tools and technologies the structure of which he has prepared beforehand. Fullstack developers are very valuable to businesses and organizations around the world. Through them, the organizations can rest assured that their entire software application development will be carried out by one person only. They do not have to rely on large software development teams with the associated costs of managing them. They don’t have to establish long and complicated lines of communication between multiple teams for the various parts of the software since all the development is being carried out by one developer only. They don’t have to concern themselves over multiple points of failure since they only have to concentrate their management and logistics efforts on a single point only. One will be able to harness these advantages by enrolling in the <strong>Post Graduate Program in Full Stack Development course.</strong></p>
               <p>A full stack developer has the ability to develop a browser, a server, a database, or any other large scale application software out of a wide range of software categories. There are several other advantages to hiring a full stack developer. The organization can have the full stack developer develop prototypes very rapidly since he doesn’t have to collaborate with many other team members. The total cost of the project is reduced dramatically since there is no need to hire a large number of developers. They can switch between front end and back end tasks at will since they are familiar with the entire stack. These abilities will be developed automatically in anyone who completes the <strong>Full Stack Post Graduate Program.</strong>
               </p>
               <h4><strong>Why Choose Careerera For The PGP in Full Stack Development Certification Training?</strong></h4>

               <p>Careerera’s <strong>Post graduate program in Full stack development</strong> is a high-quality certification course having a duration of 12 months. It has been designed very carefully and painstakingly by the instructors to be a balanced course. It is neither a cakewalk nor prohibitively difficult. The course curriculum contains topics from the whole spectrum of full stack development. There is HTML5, CSS, Javascript, Bootstrap, jQuery, AngularJS, Java, J2EE, JSP, Hibernate, Spring, DevOps, Agile, Git, Node.js, Linux, Cloud computing, and many other relevant and current topics. The course instructors have been selected after a rigorous and meticulous screening process. All of them are trained experts and possess decades of experience from working in the industry. Thus it is very beneficial to take the <strong>PGP in Full Stack</strong> course.
               </p>
               <p>The instructors make use of the most current and contemporary teaching methodologies while teaching the course. They make all the necessary course study materials available to the students such as videos, lectures, notes, assignments, surprise quizzes, and capstone projects. They have all been crafted to help the learners revise and review the core concepts and topics of the course effectively. This will help them to strengthen the weak areas of their knowledge. So one who obtains this <strong>Post Graduate Certification in Full Stack</strong> or <strong>PGP certification in Full Stack</strong> will be able to take the help of such qualified instructors.
               </p>

            </>}

         />


         <Why customizable='true'
            customiztitle1='Why Full Stack'
            customiztitle2='Development?'
            customizsubtitle='Become multitalented and well-versed in all programming facets.'
            customizhead1='13.3% CAGR'
            customizpara1='during the forecast period from 2018 to 2026'
            customizhead2='25% Job Growth'
            customizpara2='estimated for Software Developer roles by 2028'
            customizhead3='1.7 MILLION'
            customizpara3='The 2020 global estimate calls for 1.7 million job postings for Software Development Roles.'
            customizhead4='4,535.5 million'
            customizpara4='Is Expected by the global task management for software market size'
            customizhead5='2026'
            customizpara5='India to become one of the top three market for Software Development.' />



         <Completition
            customizable='true'
            completiontitle='On completing this program,'
            completionimg={fullSimg}
            title1={<>
               <p><i className="fa fa-check-circle" aria-hidden="true"></i> Be well versed in Front-end and Back-end technologies such a <strong>Python, JAVA, JavaScript, HTML, CSS</strong></p>
               <p><i className="fa fa-check-circle" aria-hidden="true"></i> Apply industry relevant Full stack skills such as <strong>Agile, Spring Core,
                  Hibernate and JPA, Servlets, SOAP and REST, etc.</strong></p>
               <p><i className="fa fa-check-circle" aria-hidden="true"></i> Be well versed in using full stack tools such as
                  <strong>Angular,
                     Docker, MongoDB, etc.</strong> </p>
               <p><i className="fa fa-check-circle" aria-hidden="true"></i> Develop the required Software using several tools and techniques</p>
               <p><i className="fa fa-check-circle" aria-hidden="true"></i> Present yourself as an ideal candidate for <strong>Full Stack Developer roles
                  within leading Software companies.</strong></p>
            </>}
         />


         <Highlight
            customipgpdigitalteam='true'
            customizable='true'
            subtitle='Find out the benefits you will gain from this program.'
            head1={<div className="height_light_box">
               <p><i className="fa fa-check-circle" aria-hidden="true"></i>
                  <span>12-month online program </span>
               </p>
               <p><i className="fa fa-check-circle" aria-hidden="true"></i> <span>Online Lab Sessions</span></p>
            </div>}

            head2={<div className="height_light_box">
               <p><i className="fa fa-check-circle" aria-hidden="true"></i> <span>Careerera has collaboration with many eminent
                  Universities and Organisations across the Globe to
                  exchange the knowledge.</span></p>

            </div>}
            head3={<div className="height_light_box">
               <p><i className="fa fa-check-circle" aria-hidden="true"></i> <span>Career guidance and mentorship by Careerera's faculty
                  and industry leaders</span></p>
               <p><i className="fa fa-check-circle" aria-hidden="true"></i> <span>Resume review and interview preparation sessions</span></p>
               <p><i className="fa fa-check-circle" aria-hidden="true"></i> <span>Access to opportunities with leading companies</span></p>
            </div>}
            head4={<div className="height_light_box">
               <p><i className="fa fa-check-circle" aria-hidden="true"></i> <span>Real-world case studies to build practical skills</span></p>
               <p><i className="fa fa-check-circle" aria-hidden="true"></i> <span>Hands-on exposure to Full Stack tools &amp; techniques such
                  as Python, JAVA, JavaScript, HTML, CSS, Angular.</span></p>
               <p><i className="fa fa-check-circle" aria-hidden="true"></i> <span>Learn industry insights through multiple industry
                  knowledge sessions</span></p>
            </div>}
         />




         <div id="cariculum" className="scroll-spbx cariculum-overview our_faq_sec profcourmore">
            <div className="container py-16 data-scinece-othercer onlycontent-accr">
               <div className="sec_title">
                  <h2 className="text-2xl md:text-3xl font-bold">
                     Program <span className="orange-clrsite">Curriculum</span>
                  </h2>
                  <p className="text-gray-800 text-base md:text-lg fw-medium">
                     See which topics you will have to assimilate.
                  </p>
                  <hr className="w-20 hr mb-4 bg-blue-400 sepfoll-hr" />
               </div>


               <h4 className="font-bold text-lg sm:text-xl mb-3 ">Front-end Course Modules  <span className="heading-border-line"></span></h4>

               <div className="row">
                  <div className="col-lg-6 col-12 mb-3">
                     <h6 className="font-semibold text-lg mb-1 text-gray-500">Module 1</h6>
                     <ProgramCarriculum
                        topic1='Hyper Text Mark-up Language (HTML5)'
                        detail1={<div className="accord_body_content">
                           <ul>
                              <li>Introduction HTML</li>
                              <li>HTML Basics</li>
                              <li>HTML Elements</li>
                              <li>HTML5 Semantic</li>
                              <li>HTML Attributes</li>
                              <li>HTML Headings</li>
                              <li>HTML Paragraph</li>
                              <li>HTML Styles</li>
                              <li>HTML Formatting</li>
                              <li>HTML Quotations &ZeroWidthSpace;</li>
                              <li>HTML Computer Code</li>
                              <li>HTML Comments &amp; Colours</li>
                              <li>HTML CSS, Links and Images &ZeroWidthSpace;</li>
                              <li>HTML Lists</li>
                              <li>HTML Blocks</li>
                              <li>HTML Classes</li>
                              <li>HTML Layout</li>
                              <li>HTML Responsive</li>
                              <li>HTML iframes</li>
                              <li>HTML JavaScript</li>
                              <li>HTML Head</li>
                              <li>HTML Entities and URI Code</li>
                              <li>HTML Symbols and XHTML</li>
                              <li>HTML Charset and Forms</li>
                              <li>Quiz</li>
                              <li>Assignment</li>

                           </ul>

                        </div>} />
                  </div>
                  <div className="col-lg-6 col-12 mb-3">
                     <h6 className="font-semibold text-lg mb-1 text-gray-500">Module 2</h6>
                     <ProgramCarriculum
                        topic1='Cascading Style Sheets (CSS3)'
                        detail1={<div className="accord_body_content">
                           <ul>
                              <li>Introduction CSS3</li>
                              <li>CSS3 Syntax</li>
                              <li>CSS3 How To</li>
                              <li>CSS3 Colours</li>
                              <li>CSS3 Backgrounds</li>
                              <li>CSS3 Boarders</li>
                              <li>CSS Padding</li>
                              <li>CSS Height/Width</li>
                              <li>CSS3 Gradients</li>
                              <li>CSS3 Shadows</li>
                              <li>CSS3 Text</li>
                              <li>CSS3 Fonts</li>
                              <li>CSS3 2D Transforms</li>
                              <li>CSS3 3D Transforms</li>
                              <li>CSS Links</li>
                              <li>CSS Lists</li>
                              <li>CSS Tables</li>
                              <li>CSS Box Model</li>
                              <li>CSS Outline</li>
                              <li>CSS Display</li>
                              <li>CSS Max-width</li>
                              <li>CSS Position</li>
                              <li>CSS Float</li>
                              <li>CSS Inline-block</li>
                              <li>CSS Align</li>
                              <li>CSS Combinators</li>
                              <li>CSS Pseudo-class</li>
                              <li>CSS Pseudo-element</li>
                              <li>CSS Navigation Bar</li>
                              <li>CSS Dropdowns</li>
                              <li>CSS Tooltips</li>
                              <li>CSS3 Images</li>
                              <li>CSS Attr Selectors</li>
                              <li>CSS Forms</li>
                              <li>CSS Counters</li>
                              <li>CSS3 Animations</li>
                              <li>CSS3 Buttons</li>
                              <li>CSS3 Pagination</li>
                              <li>CSS3 Multiple Columns</li>
                              <li>CSS3 User Interface</li>
                              <li>CSS3 Box Sizing</li>
                              <li>CSS3 Filters</li>
                              <li>CSS3 Media Queries</li>
                              <li>CSS3 Responsive</li>
                              <li>Quiz</li>
                              <li>Assignment</li>
                           </ul>

                        </div>} />
                  </div>

                  <div className="col-lg-6 col-12 mb-3">
                     <h6 className="font-semibold text-lg mb-1 text-gray-500">Module 3</h6>
                     <ProgramCarriculum
                        topic1='Bootstrap'
                        detail1={<div className="accord_body_content">
                           <ul>
                              <li>Introduction to Bootstrap</li>
                              <li>Bootstrap Basics</li>
                              <li>Bootstrap Grids</li>
                              <li>Bootstrap Themes</li>
                              <li>Bootstrap CSS</li>
                              <li>Bootstrap JS</li>
                              <li>Quiz</li>
                              <li>Assignment</li>
                           </ul>

                        </div>} />
                  </div>
                  <div className="col-lg-6 col-12 mb-3">
                     <h6 className="font-semibold text-lg mb-1 text-gray-500">Module 4</h6>
                     <ProgramCarriculum
                        topic1='JavaScript'
                        detail1={<div className="accord_body_content">
                           <ul>
                              <li>Introduction to JavaScript</li>
                              <li>Java Script Language Basics</li>
                              <li>JavaScript Objects</li>
                              <li>JavaScript Scope</li>
                              <li>JavaScript Events</li>
                              <li>JavaScript Strings</li>
                              <li>JavaScript Numbers</li>
                              <li>JavaScript Math</li>
                              <li>JavaScript Arrays</li>
                              <li>JavaScript Boolean</li>
                              <li>JavaScript Comparisons</li>
                              <li>JavaScript Conditions</li>
                              <li>JavaScript Switch</li>
                              <li>JavaScript Loops</li>
                              <li>JavaScript Type Conversion</li>
                              <li>JavaScript RegExp</li>
                              <li>JavaScript Errors</li>
                              <li>JavaScript Debugging</li>
                              <li>JavaScript Hoisting</li>
                              <li>JavaScript Strict Mode</li>
                              <li>JavaScript Functions</li>
                              <li>JavaScript Objects</li>
                              <li>JavaScript Forms</li>
                              <li>JavaScript HTML DOM</li>
                              <li>JavaScript BOM</li>
                              <li>Quiz</li>
                              <li>Assignment</li>
                           </ul>

                        </div>} />
                  </div>

                  <div className="col-lg-6 col-12 mb-3">
                     <h6 className="font-semibold text-lg mb-1 text-gray-500">Module 5</h6>
                     <ProgramCarriculum
                        topic1='jQuery'
                        detail1={<div className="accord_body_content">
                           <ul>
                              <li>Introduction to jQuery</li>
                              <li>jQuery Syntax</li>
                              <li>jQuery Selectors</li>
                              <li>jQuery Events</li>
                              <li>jQuery Effects</li>
                              <li>jQuery HTML</li>
                              <li>jQuery Traversing</li>
                              <li>jQuery AJAX &amp; Misc</li>
                              <li>Quiz</li>
                              <li>Assignment</li>
                           </ul>

                        </div>} />
                  </div>
                  <div className="col-lg-6 col-12 mb-3">
                     <h6 className="font-semibold text-lg mb-1 text-gray-500">Module 6</h6>
                     <ProgramCarriculum
                        topic1='jQuery-Mobile'
                        detail1={<div className="accord_body_content">
                           <ul>
                              <li>Introduction to jQuery Mobile</li>
                              <li>jQuery Mobile Pages</li>
                              <li>jQuery Mobile Transitions</li>
                              <li>jQuery Mobile Buttons</li>
                              <li>jQuery Mobile Icons</li>
                              <li>jQuery Mobile Popups</li>
                              <li>jQuery Mobile Toolbars</li>
                              <li>jQuery Mobile Navbars</li>
                              <li>jQuery Mobile Panels</li>
                              <li>jQuery Mobile Collapsibles</li>
                              <li>jQuery Mobile Tables</li>
                              <li>jQuery Mobile Grids</li>
                              <li>jQuery Mobile Lists</li>
                              <li>jQuery Mobile Forms</li>
                              <li>jQuery Mobile Themes</li>
                              <li>jQuery Mobile Events</li>
                              <li>Quiz</li>
                              <li>Assignment</li>
                           </ul>

                        </div>} />
                  </div>

                  <div className="col-lg-6 col-12 mb-3">
                     <h6 className="font-semibold text-lg mb-1 text-gray-500">Module 7</h6>
                     <ProgramCarriculum
                        topic1='Angular JS'
                        detail1={<div className="accord_body_content">
                           <ul>
                              <li>Introduction to AngularJS</li>
                              <li>AngularJS Expressions</li>
                              <li>AngularJS Modules</li>
                              <li>AngularJS Data Binding</li>
                              <li>AngularJS Scopes</li>
                              <li>AngularJS Directives &amp; Events</li>
                              <li>AngularJS Controllers</li>
                              <li>AngularJS Filters</li>
                              <li>AngularJS Services</li>
                              <li>AngularJS HTTP</li>
                              <li>AngularJS Tables</li>
                              <li>AngularJS Select</li>
                              <li>Fetching Data from MySQL</li>
                              <li>AngularJS Validation</li>
                              <li>AngularJS API</li>
                              <li>AngularJS Animations</li>
                              <li>AngularJS i18n and i10n</li>
                              <li>Quiz</li>
                              <li>Assignment</li>
                           </ul>

                        </div>} />
                  </div>
                  <div className="col-lg-6 col-12 mb-3">
                     <h6 className="font-semibold text-lg mb-1 text-gray-500">Module 8</h6>
                     <ProgramCarriculum
                        topic1='Node.js'
                        detail1={<div className="accord_body_content">
                           <ul>
                              <li>Getting started</li>
                              <li>Node Core</li>
                              <li>Node Modules</li>
                              <li>File System</li>
                              <li>Debugger</li>
                              <li>Automation and Deployment</li>
                              <li>Quiz</li>
                              <li>Assignment</li>
                           </ul>

                        </div>} />
                  </div>
               </div>


               <h4 className="font-bold text-lg sm:text-xl mb-3 mt-4">Back-end Course Modules  <span className="heading-border-line"></span></h4>

               <div className="row">
                  <div className="col-lg-6 col-12 mb-3">
                     <h6 className="font-semibold text-lg mb-1 text-gray-500">Module 9</h6>
                     <ProgramCarriculum
                        topic1='JAVA LANGUAGE'
                        detail1={<div class="accord_body_content">
                           <ul>
                              <li>Working With Java Variables</li>
                              <li>Using Operators and Decision Constructs</li>
                              <li>Using Loop Constructs</li>
                              <li>Creating and Using Arrays</li>
                              <span class="module_list_hding reward-leftborder mt-4 d-block font-semibold mtdef">Lesson 1: Working with Methods and Encapsulation</span>
                              <li>Create methods with arguments and return values; including overloaded methods</li>
                              <li>Apply the static keyword to methods and fields</li>
                              <li>Create and overload constructors; differentiate between default and user defined
                                 constructors</li>
                              <li>Apply access modifiers</li>
                              <li>Apply encapsulation principles to a class</li>
                              <li>Determine the effect upon object references and primitive values when they are passed into</li>
                              <li>methods that change the values</li>
                              <span class="module_list_hding reward-leftborder mt-4 d-block font-semibold mtdef">Lesson 2: Working with Inheritance</span>
                              <li>Describe inheritance and its benefits</li>
                              <li>Develop code that makes use of polymorphism; develop code that overrides methods;</li>
                              <li>differentiate between the type of a reference and the type of an object</li>
                              <li>Determine when casting is necessary</li>
                              <li>Use super and this to access objects and constructors</li>
                              <li>Use abstract classes and interface</li>
                              <li>Strings</li>
                              <li>Multithreading</li>
                              <li>Collections</li>
                              <li>Iostreams</li>
                              <span class="module_list_hding reward-leftborder mt-4 d-block font-semibold mtdef">Lesson 3: Handling Exceptions</span>
                              <li>Differentiate among checked exceptions, unchecked exceptions, and Errors</li>
                              <li>Create a try-catch block and determine how exceptions alter normal program flow</li>
                              <li>Describe the advantages of Exception handling</li>
                              <li>Create and invoke a method that throws an exception</li>
                              <li>Recognize common exception classes (such as NullPointerException, ArithmeticException,</li>
                              <li>ArrayIndexOutOfBoundsException, ClassCastException)</li>
                              <span class="module_list_hding reward-leftborder mt-4 d-block font-semibold mtdef">Lesson 4: JDBC</span>
                              <li>Need for JDBC</li>
                              <li>JDBC architecture</li>
                              <li>Driver and Application API of JDBC</li>
                              <li>Types of drivers</li>
                              <li>To set up an a project for JDBC usage</li>
                              <li>Setting up a connection using JDBC</li>
                              <li>Executing queries with JDBC API</li>
                              <li>Transaction management using JDBC</li>
                              <li>Summary and quizzes</li>
                              <span class="module_list_hding reward-leftborder mt-4 d-block font-semibold mtdef">Lesson 5: Lambda Expressions</span>
                              <li>What is Lambda Expression?</li>
                              <li>Default Methods</li>
                              <li>Functional Interfaces</li>
                              <li>Method References</li>
                              <li>Stream vs. Lambda Expression</li>
                              <span class="module_list_hding reward-leftborder mt-4 d-block font-semibold mtdef">Lesson 6: Servlets Fundamentals</span>
                              <li>Introduction to J2EE</li>
                              <li>Client Server architecture</li>
                              <li>URL, Port Number, Request, Response</li>
                              <li>Need for servlets</li>
                              <li>Servlet fundamentals</li>
                              <li>Setting up a web project in Eclipse</li>
                              <li>Configuring and running the web app with servlets</li>
                              <li>GET and POST request in web application with demo</li>
                              <li>Servlet lifecycle</li>
                              <li>Forwarding and redirection</li>
                              <li>Idempotent requests</li>
                              <li>Initialization parameters and attributes</li>
                              <li>Need for conversational state between client and server</li>
                              <li>Session management basics</li>
                              <li>Cookies to exchange session information</li>
                              <li>URL Rewriting to exchange session information</li>
                              <li>Session object APIs</li>
                              <li>Listeners in J2EE</li>
                              <li>Filters in J2EE</li>
                              <li>Summary and quizzes</li>
                              <span class="module_list_hding reward-leftborder mt-4 d-block font-semibold mtdef">Lesson 7: JSP</span>
                              <li>Need of JSP</li>
                              <li>Creating a JSP and running in a web application</li>
                              <li>JSP lifecycle</li>
                              <li>JSP elements: Scriptlets, expressions, declaration</li>
                              <li>JSP standard actions</li>
                              <li>JSP directives</li>
                              <li>JSTL overview and usage</li>
                              <li>Summary and quizzes</li>
                              <span class="module_list_hding reward-leftborder mt-4 d-block font-semibold mtdef">Lesson 8: Introduction to Hibernate</span>
                              <li>Paradigm mismatch problem</li>
                              <li>Introduction to ORM</li>
                              <li>ORM features</li>
                              <li>Hibernate as an ORM framework</li>
                              <li>Hibernate features</li>
                              <li>Setting up a project with Hibernate framework</li>
                              <li>Basic APIs needed to do CRUD operations with Hibernate</li>
                              <li>Summary and quizzes</li>
                              <span class="module_list_hding reward-leftborder mt-4 d-block font-semibold mtdef">Lesson 9: Hibernate Queries and Relationships</span>
                              <li>Hibernate Query Language(HQL)</li>
                              <li>Criteria queries</li>
                              <li>Native SQL queries</li>
                              <li>Mapping relationships with Hibernate</li>
                              <li>One to One relationship</li>
                              <li>One to Many relationship</li>
                              <li>Many to Many relationship</li>
                              <li>Caching overview in Hibernate</li>
                              <li>Summary and quizzes</li>
                              <span class="module_list_hding reward-leftborder mt-4 d-block font-semibold mtdef">Lesson 10: Introduction to Spring</span>
                              <li>Introduction to Spring framework</li>
                              <li>Spring Dependency Injection/Bean Wiring</li>
                              <li>Types of Dependency Injection: Setter and Constructor Injection</li>
                              <li>Collections mapping wiring</li>
                              <li>Bean scopes in Spring</li>
                              <li>Bean life cycle in Spring</li>
                              <li>Overview of Spring Expression Language</li>
                              <span class="module_list_hding reward-leftborder mt-4 d-block font-semibold mtdef">Lesson 11: Spring AOP</span>
                              <li>AOP introduction</li>
                              <li>AOP nomenclature</li>
                              <li>To configure AOP in a Java application - classic approach</li>
                              <li>To configure AOP in a Java application – Annotations - AspectJ approach</li>
                              <li>Summary and quizzes</li>
                              <span class="module_list_hding reward-leftborder mt-4 d-block font-semibold mtdef">Lesson 12: Spring JDBC and Transaction Management</span>
                              <li>JDBCTemplate and Transaction Management Fundamentals overview</li>
                              <li>Spring JDBCTemplate implementation in an application</li>
                              <li>Spring Transaction Management APIs in an application</li>
                              <li>Spring ORM with HibernateTemplate and Transaction Management</li>
                              <li>Summary and quizzes</li>
                              <span class="module_list_hding reward-leftborder mt-4 d-block font-semibold mtdef">Lesson 13: Spring MVC</span>
                              <li>Introduction to MVC architecture and Spring WEB MVC with DispatcherServlet</li>
                              <li>Steps to build a Spring MVC application</li>
                              <li>Spring Web MVC Annotations</li>
                              <li>Handling HTML Forms using Spring MVC</li>
                              <li>Summary and quizzes</li>
                              <span class="module_list_hding reward-leftborder mt-4 d-block font-semibold mtdef">Lesson 14: SOA and Web Services</span>
                              <li>Understand SOA architecture</li>
                              <li>Understand web services and its types</li>
                              <li>Understand WSDL, XSD, top-down and bottom-up approach to web service implementation</li>
                              <li>Create a SOAP based web service</li>
                              <li>Create a RESTful web service</li>
                              <li>Summary and quizzes</li>
                           </ul>

                        </div>} />
                  </div>
                  <div className="col-lg-6 col-12 mb-3">
                     <h6 className="font-semibold text-lg mb-1 text-gray-500">Module 10</h6>
                     <ProgramCarriculum
                        topic1='LINUX Basics'
                        detail1={<div class="accord_body_content">
                           <ul>
                              <li>Unix and linux difference</li>
                              <li>Linux File system structure</li>
                              <li>Basic linux/unix commands</li>
                              <li>Changing file permissions and ownership</li>
                              <li>Types of links soft and hard link</li>
                              <li>Filter commands</li>
                              <li>Simple filter and advance filter commands</li>
                              <li>Start and stop services</li>
                              <li>Find and kill the process with id and name</li>
                              <li>Package installation using RPM and YUM</li>
                           </ul>

                        </div>} />
                  </div>

                  <div className="col-lg-6 col-12 mb-3">
                     <h6 className="font-semibold text-lg mb-1 text-gray-500">Module 11</h6>
                     <ProgramCarriculum
                        topic1='Devops'
                        detail1={<div class="accord_body_content">
                           <ul>
                              <li>Continuous Integration</li>
                              <li>Continuous Deployment</li>
                              <li>Continuous Monitoring</li>
                              <li>Dark Launching Technique</li>
                              <li>The DevOps Ecosystem</li>
                              <li>The Various DevOps Tools</li>
                              <li>Important terminology</li>
                              <li>Devops perspective</li>
                              <li>Devops and Agile</li>
                              <li>Devops Tools</li>
                              <li>Configuration management</li>
                              <li>Continuous Integration and Deployment</li>
                           </ul>

                        </div>} />
                  </div>
                  <div className="col-lg-6 col-12 mb-3">
                     <h6 className="font-semibold text-lg mb-1 text-gray-500">Module 12</h6>
                     <ProgramCarriculum
                        topic1='Cloud Computing'
                        detail1={<div class="accord_body_content">
                           <ul>
                              <li>What is cloud computing</li>
                              <li>Characteristics of cloud computing</li>
                              <li>Cloud implementation models</li>
                              <li>Cloud service models</li>
                              <li>Advantages of cloud computing</li>
                              <li>Concerns of cloud computing</li>
                           </ul>

                        </div>} />
                  </div>

                  <div className="col-lg-6 col-12 mb-3">
                     <h6 className="font-semibold text-lg mb-1 text-gray-500">Module 13</h6>
                     <ProgramCarriculum
                        topic1='GIT: Version Control'
                        detail1={<div class="accord_body_content">
                           <ul>
                              <li>Introduction</li>
                              <li>What is Git</li>
                              <li>About Version Control System and Types</li>
                              <li>Difference between CVCS and DVCS</li>
                              <li>A short history of GIT</li>
                              <li>GIT Basics</li>
                              <li>GIT Command Line</li>
                              <li>Installing Git</li>
                              <li>Installing on Linux</li>
                              <li>Installing on Windows</li>
                              <li>Initial setup</li>
                              <li>Git Essentials</li>
                              <li>Creating repository</li>
                              <li>Cloning, check-in and committing</li>
                              <li>Fetch pull and remote</li>
                              <li>Branching</li>
                              <li>Creating the Branches, switching the branches, merging the branches.</li>
                              <li>Automated Testing and Test Driven</li>
                              <li>Development</li>
                              <li>Automated Testing and Test Driven Development</li>
                              <li>Integrated Development Environments</li>
                              <li>Test Driven Development Approach</li>
                              <li>Behavior Driven Development</li>
                              <li>Integration Testing and Mocking</li>
                              <li>Software Integration Tools</li>
                              <li>Code Quality Principles</li>
                              <li>Code Quality Tools</li>
                              <li>Continuous Code Quality</li>
                           </ul>

                        </div>} />
                  </div>
                  <div className="col-lg-6 col-12 mb-3">
                     <h6 className="font-semibold text-lg mb-1 text-gray-500">Module 14</h6>
                     <ProgramCarriculum
                        topic1='Chef for configuration management Overview of Chef'
                        detail1={<div class="accord_body_content">
                           <ul>
                              <li>Common Chef Terminology (Server,Workstation, Client, Repository etc.)</li>
                              <li>Servers and Nodes</li>
                              <li>Chef Configuration Concepts</li>
                              <span class="module_list_hding reward-leftborder mt-4 d-block font-semibold mtdef">Workstation Setup</span>
                              <li>How to configure knife</li>
                              <li>Execute some commands to test connection between knife and workstation</li>
                              <span class="module_list_hding reward-leftborder mt-4 d-block font-semibold mtdef">Organization Setup</span>
                              <li>Create organization</li>
                              <li>Add yourself and node to organization</li>
                              <span class="module_list_hding reward-leftborder mt-4 d-block font-semibold mtdef">Test Node Setup</span>
                              <li>Create a server and add to organization</li>
                              <li>Check node details using knife</li>
                              <span class="module_list_hding reward-leftborder mt-4 d-block font-semibold mtdef">Node Objects and Search</span>
                              <li>How to Add Run list to Node</li>
                              <li>Check node Details</li>
                              <span class="module_list_hding reward-leftborder mt-4 d-block font-semibold mtdef">Environments</span>
                              <li>How to create Environments</li>
                              <li>Add servers to environments</li>
                              <span class="module_list_hding reward-leftborder mt-4 d-block font-semibold mtdef">Roles</span>
                              <li>Create roles</li>
                              <li>Add Roles to organization</li>
                              <span class="module_list_hding reward-leftborder mt-4 d-block font-semibold mtdef">Attributes</span>
                              <li>Understanding of Attributes</li>
                              <li>Creating Custom Attributes</li>
                              <li>Defining in Cookbook</li>
                              <span class="module_list_hding reward-leftborder mt-4 d-block font-semibold mtdef">Data bags</span>
                              <li>Understanding the data bags</li>
                              <li>Creating and managing the data bags</li>
                              <li>Creating the data bags using CLI and Chef Console</li>
                              <li>Sample data bags for Creating Users.</li>
                              <span class="module_list_hding reward-leftborder mt-4 d-block font-semibold mtdef">AWS:</span>
                              <li>Creating AWS account</li>
                              <li>Free tier Eligible services</li>
                              <li>Understanding AWS Regions and availability zones</li>
                              <span class="module_list_hding reward-leftborder mt-4 d-block font-semibold mtdef">EC2 (Elastic Compute Cloud)</span>
                              <li>About EC2 and types , Pricing</li>
                              <li>EIP ( Elastic IP address), Allocating, associating , releasing</li>
                              <li>Launch windows and Linux Instances in AWS</li>
                              <li>Connecting windows and Linux instances from windows desktop and Linux machines</li>
                              <span class="module_list_hding reward-leftborder mt-4 d-block font-semibold mtdef">S3 (Simple Storage Service)</span>
                              <li>About AWS Storage services, EBS and S3</li>
                              <li>Creating S3 Buckets and putting objects in bucket</li>
                              <li>Discussion about Bucket Properties</li>
                              <li>S3 Pricing</li>
                              <li>About S3 glecier</li>
                              <span class="module_list_hding reward-leftborder mt-4 d-block font-semibold mtdef">EBS (Elastic Block Storage)</span>
                              <li>Types of EBS Volumes</li>
                              <li>Creation, attaching and Detaching volumes</li>
                              <span class="module_list_hding reward-leftborder mt-4 d-block font-semibold mtdef">ELB ( Elastic Load Balancer)</span>
                              <li>Understanding the load balancing</li>
                              <li>Configuring ELB and adding the webservers under ELB</li>
                              <span class="module_list_hding reward-leftborder mt-4 d-block font-semibold mtdef">Auto Scaling</span>
                              <li>Types of Scaling ( Horizontal and Vertical)</li>
                              <li>Configuring Launch Configuration</li>
                              <li>Creating and defining the auto scaling group policy</li>
                              <span class="module_list_hding reward-leftborder mt-4 d-block font-semibold mtdef">IAM (Identity Access Management)</span>
                              <li>Understanding of AWS Security using IAM</li>
                              <li>Definition of Roles, policies and Groups</li>
                              <li>Creating IAM Users and managing password policies</li>
                              <span class="module_list_hding reward-leftborder mt-4 d-block font-semibold mtdef">RDS (Relational Database server)</span>
                              <li>About RDS and available RDS Engines in AWS</li>
                              <li>Configuring MYSQL RDS service</li>
                              <li>Connecting EC2 Instance to RDS Instance</li>
                              <span class="module_list_hding reward-leftborder mt-4 d-block font-semibold mtdef">Puppet for configuration management</span>
                              <li>What is Puppet?</li>
                              <li>How puppet works</li>
                              <li>Puppet Architecture</li>
                              <li>Master and Agents</li>
                              <li>Puppet terminology and about Manifests</li>
                              <span class="module_list_hding reward-leftborder mt-4 d-block font-semibold mtdef">Installation and Configuration</span>
                              <li>Installing Puppet</li>
                              <li>Configuring Puppet Master and Agent</li>
                              <li>Connecting Agents</li>
                              <span class="module_list_hding reward-leftborder mt-4 d-block font-semibold mtdef">Puppet Master</span>
                              <li>Puppet configuration files</li>
                              <span class="module_list_hding reward-leftborder mt-4 d-block font-semibold mtdef">Puppet Language Basics</span>
                              <li>The declarative language</li>
                              <li>Resources</li>
                              <li>Using Basic resources like file,exec,package service</li>
                              <li>Resource Collectors</li>
                              <li>Virtual Resources</li>
                              <li>Exported Resources</li>
                              <li>Manifests</li>
                              <li>Modules and Classes</li>
                              <li>Class Parameters</li>
                              <li>Defined Type</li>
                              <span class="module_list_hding reward-leftborder mt-4 d-block font-semibold mtdef">Templates</span>
                              <li>Static Contents Explosion</li>
                              <li>Using Dynamic Content with Templates</li>
                              <li>Templates Overview</li>
                              <li>ERB</li>
                              <span class="module_list_hding reward-leftborder mt-4 d-block font-semibold mtdef">Example Code Manifests/Modules</span>
                              <li>NTP Module</li>
                              <li>Users Module</li>
                              <li>SSH</li>
                              <li>Sudo</li>
                              <span class="module_list_hding reward-leftborder mt-4 d-block font-semibold mtdef">Puppet Forge</span>
                              <li>Understanding the Puppet Forge</li>
                              <li>Module structure</li>
                              <li>Install LAMP with preexisting modules</li>
                              <li>Installing Apache Tomcat with Puppet Modules</li>
                              <span class="module_list_hding reward-leftborder mt-4 d-block font-semibold mtdef">Introduction.</span>
                              <li>Understanding continuous integration</li>
                              <li>Introduction about Jenkins</li>
                              <li>Build Cycle</li>
                              <li>Jenkins Architecture</li>
                              <span class="module_list_hding reward-leftborder mt-4 d-block font-semibold mtdef">Installation.</span>
                              <li>Obtaining and installing Jenkins</li>
                              <li>Installing and configuring Jenkins using WAR and RPM</li>
                              <li>Java installation and configuration</li>
                              <li>Maven Installation</li>
                              <li>Exploring Jenkins Dashboard</li>
                              <span class="module_list_hding reward-leftborder mt-4 d-block font-semibold mtdef">Jobs</span>
                              <li>Creating Jobs</li>
                              <li>Running the Jobs</li>
                              <li>Setting up the global environments for Jobs</li>
                              <li>Adding and updating Plugins</li>
                              <li>Disabling and deleting jobs</li>
                              <span class="module_list_hding reward-leftborder mt-4 d-block font-semibold mtdef">Build Deployments</span>
                              <li>Understanding Deployment.</li>
                              <li>Tomcat installation and configuration</li>
                              <span class="module_list_hding reward-leftborder mt-4 d-block font-semibold mtdef">Securing Jenkins</span>
                              <li>Authentication</li>
                              <li>Jenkins Plugin</li>
                              <li>Authorization</li>
                              <li>Confidentiality</li>
                              <li>Creating users</li>
                              <li>Best Practices for Jenkins</li>
                              <span class="module_list_hding reward-leftborder mt-4 d-block font-semibold mtdef">Docker– Containers.</span>
                              <li>Introduction</li>
                              <li>What is a Docker</li>
                              <li>Use case of Docker</li>
                              <li>Platforms for Docker</li>
                              <li>Dockers vs. Virtualization</li>
                              <span class="module_list_hding reward-leftborder mt-4 d-block font-semibold mtdef">Architecture</span>
                              <li>Docker Architecture.</li>
                              <li>Understanding the Docker components</li>
                              <span class="module_list_hding reward-leftborder mt-4 d-block font-semibold mtdef">Installation</span>
                              <li>Installing Docker on Linux.</li>
                              <li>Understanding Installation of Docker on windows.</li>
                              <li>Some Docker commands.</li>
                              <li>Provisioning</li>
                              <span class="module_list_hding reward-leftborder mt-4 d-block font-semibold mtdef">Docker Hub.</span>
                              <li>Downloading Docker images.</li>
                              <li>Uploading the images in Docker Registry and AWS ECS</li>
                              <li>Understanding the containers</li>
                              <li>Running commands in container.</li>
                              <li>Running multiple containers.</li>
                              <span class="module_list_hding reward-leftborder mt-4 d-block font-semibold mtdef">Custom images</span>
                              <li>Creating a custom image.</li>
                              <li>Running a container from the custom image.</li>
                              <li>Publishing the custom image.</li>
                              <span class="module_list_hding reward-leftborder mt-4 d-block font-semibold mtdef">Docker Networking</span>
                              <li>Accessing containers</li>
                              <li>Linking containers</li>
                              <li>Exposing container ports</li>
                              <li>Container Routing</li>
                              <span class="module_list_hding reward-leftborder mt-4 d-block font-semibold mtdef">Docker Compose</span>
                              <li>Installing The Docker compose</li>
                              <li>Terminology in Docker compose</li>
                              <li>Build word press site using Docker compose</li>
                              <span class="module_list_hding reward-leftborder mt-4 d-block font-semibold mtdef">Vagrant</span>
                              <span class="module_list_hding reward-leftborder mt-4 d-block font-semibold mtdef">Introduction</span>
                              <li>Why and what is Vagrant</li>
                              <li>Uses of Vagrant in an environment</li>
                              <li>Alternatives of Vagrant</li>
                              <li>Vagrant versions</li>
                              <span class="module_list_hding reward-leftborder mt-4 d-block font-semibold mtdef">Installation and Configuration</span>
                              <li>Installing Virtual box</li>
                              <li>How to install Vagrant on Windows and Linux</li>
                              <li>Configuring Vagrant</li>
                              <span class="module_list_hding reward-leftborder mt-4 d-block font-semibold mtdef">Provisioning with Vagrant</span>
                              <li>Creating first VM with Vagrant</li>
                              <li>Operations on the VM</li>
                              <li>Connecting to the VM</li>
                              <li>Add required Images to Vagrant</li>
                              <li>Creating network and port forwarding using Vagrant</li>
                              <span class="module_list_hding reward-leftborder mt-4 d-block font-semibold mtdef">New Relic</span>
                              <span class="module_list_hding reward-leftborder mt-4 d-block font-semibold mtdef">Introduction</span>
                              <li>About Monitoring tools</li>
                              <li>About New Relic</li>
                              <li>Installing and Configuring New Relic</li>
                              <li>Application Monitoring using New Relic</li>
                              <li>Server Monitoring using New Relic</li>
                              <li>Alerts policies</li>
                              <span class="module_list_hding reward-leftborder mt-4 d-block font-semibold mtdef">ELK</span>
                              <span class="module_list_hding reward-leftborder mt-4 d-block font-semibold mtdef">Introduction</span>
                              <li>What is ELK?</li>
                              <li>ELK Installation</li>
                              <li>ElasticSearch</li>
                              <li>Logstash</li>
                              <li>Configuring Logstashand Kibana</li>
                           </ul>

                        </div>} />
                  </div>

               </div>





            </div>
         </div>


         <Capstone
            capsimgbg='true'
            subheadingbx='Try your hand at the real world with a project.'

            capsimg1={fullStContent}
            title1='Content Management System for a Blog'
            data1={<>Measure and monitor customer satisfaction for digital
               marketing agencies by conducting customer surveys. Customers prefer instant
               gratification for money spent; provide them that in a practical way.</>}

            capsimg2={fullStA}
            title2='A Client Services Multi-client Website'
            data2={<>Bringing a website to the top of the search
               results in the Google search engine. You will use various SEO and marketing
               strategies to improve the page rankings of your chosen website and analyze the caste
               study of its journey to the top.</>}

            capsimg3={fullStAutomotive}
            title3='Automotive Parts Related E-commerce Website'
            data3={<>Contact different companies
               and comprehend their budgets for various marketing approaches. Carry out thorough
               analysis of the returns that the company expect in various metrics such as Future
               Value, Net Present Value, and Internal Rate of Return.</>}

            capsimg4={fullStFood}
            title4='Food Delivery Application'
            data4={<>Develop a flair for writing and post as many blog posts as
               can be written creatively. Implement various digital marketing strategies on the blog
               and make it more attractive to visitors. Practice creating backlings and content design
               through the medium of the blog.</>}

            capsimg5={fullStPortal}
            title5='Portal of E-commerce For used Furniture Sales'
            data5={<>Use your skills to create and
               develop a seamless digital marketing project which revolves around social media.
               Target customers who have built shopping carts but haven’t checked them out through
               social media remarketing strategies.</>}

            capsimg6={fullStMotor}
            title6='Motor Servicing at Home Webportal'
            data6={<>Analyze and
               compare traditional marketing strategies to the modern digital marketing strategies.
               Evaluate the returns that a company receives from various components of digital
               marketing – RoI, conversion ratio, feedback, audience interaction.</>}

            capsimg7={fullStProject}
            title7='Project Management Application'
            data7={<>Track viewers who have viewed ads on
               Facebook across all Facebook channels such as Facebook lite, Messenger, Desktop,
               Mobile app etc. with the help of Facebook analytics. Target users with advertisements
               at a completely granular level.</>}

            capsimg8={fullStNews}
            title8='News Aggregator'
            data8={<>On the basis of coupon codes,
               obtain valuable data about customer behaviour and feed it into different AI-based e-
               commerce algorithms to predict customer behaviour with greater accuracy and
               improve customer loyalty.</>}

            capsimg9={fullStBoilerplate}
            title9='Boilerplate Application'
            data9={<>Evaluate, imitate, and outperform a
               company’s competitors in the field of Digital Marketing. Explore the various tools which
               are available to analyze competitor operations and strategies such as Google
               Analytics, Facebook Analytics, SpyFu, SimilarWeb, SEMrush etc.</>}

            capsimg10={fullStItem}
            title10='Item Catalog Application'
            data10={<>Collect and make use of a plethora of keyword analysis
               tools which have the capability to connect to search engine APIs, retrieve most of the
               data associated with organic searches, perform evaluation and analysis, and deliver
               the best results to the users.</>}
         />

         <div className="why-pgpedu">
            <Careerera
               customizefaculty="true"
               facultysubtitle='Learn from the greatest faculty around the world.'
               facultyhead1='Users'
               facultypara1='250000+'
               facultyhead2='Top Ranked Programs'
               facultypara2='10'
               facultyhead3='Hiring partners'
               facultypara3='200+'
               facultyhead4='India’s Best Full Stack Faculty '
               facultypara4='25+' />
         </div>


         <Profile title="Full Stack"
            profimg='true'
            profimg1={full_stack_batch_profile2}
            profimg2={full_stack_education_bg2}
         />

         <CareerAssistance
            title='Placement'
            titlesub='Guarantee'
            titleheading='Leverage Careerera’s tieups with India’s top IT companies.'
            box1='Access to Opportunities with Leading Companies'
            box2='Workshops on Resume Review &amp; Interview Preparation'
            box3='Career Guidance and Mentorship by Careerera and Industry Leaders' />



         <Light image={csr} customizelight='true'
            customizelight1='Placement'
            customizelight2='Highlight'

            customizeleftcontent='true'
            titlehigh1='200+'
            parahigh1='Participating Companies'

            titlehigh2='$122K PA '
            parahigh2='Average CTC'

            titlehigh3='$250K'
            parahigh3='Highest CTC'

            titlehigh4='87%'
            parahigh4='Average Salary Hike'
         />


         <UserformsApplication
            customizeheading='true'
            cantitle='Hiring'
            cansubtitle='Partners'
            cantitleheading='Get a secure job at the end of the program.'
            fullstcys='Get started with a single online form.'
            fullstcysalu='Screening call with Alumni/ Program Director/ Faculty'
         />

         <Sign />

         <Faq
            customizeheading='true'
            cantitle='Get the answers to your questions here.'

            ques1='Q1 : What is the PGP in Full Stack Development course from Careerera and what makes it different from individual courses?'
            ans1='<div class="accord_body_content">
                <p>A : Post Graduate Program in Full Stack Development is a carefully designed learning path that has been created by some of the leading industry experts. The structure of the course curriculum has been set up in a way that even a complete beginner to Full Stack Development will be able to follow the course progression and understand all the course materials clearly. Our world-class instructors will ensure that you become a master of Full Stack Development by the time you complete the course.</p>

              </div>'
            ques2='Q2 : Can Careerera provide the PGP in Full Stack Development course at a location near me?'
            ans2='<div class="accord_body_content">
                  <p>A : Our course content is intended to reach learners globally. Whether you reside in any country be it India, Canada, USA, Philippines, Singapore, Malaysia, Australia, or European countries like UK, Germany, Netherlands, Germany or somewhere else, you will be able to access our content 24/7, at any time of the day. The reason for this is that our content is available 100% online. You can access all of our content sitting at your home or office.</p>
               
              </div>'
            ques3='Q3 : Can I ask for a support and doubt clearing session if I want to understand the topics at a deeper level?'
            ans3='<div class="accord_body_content">
                <p>A : Careerera offers 24/7 query resolution and you can file a ticket with a dedicated support team at any time. We provide both email and video chat support for all the queries. If your query does not get resolved in a suitable amount of time through email, we will arrange live one on one sessions with our world-class instructors who would be more than happy to guide you through your doubts.</p>
                <p>You may be happy to learn that Careeerera does not stop its learners from contacting the instructors even after they have completed the course. They can create as many support tickets as they want; we do not place any limit on the number of tickets they can create.</p>

              </div>'
            ques4='Q4 : Which kind of projects are assigned as part of the training?'
            ans4='<div class="accord_body_content">
                <p>A : Careerera assigns the most up to date, relevant, and practical high-value projects to its learners. They carry a lot of real world value as they are designed carefully by our world-class instructors to provide practical and hands-on experience to the learners as they complete them. We provide you with a safe and trusted route through which you can implement the learning and knowledge you have acquired in a real-world industrial environment. These projects are a part of every course at Careerera and they will thoroughly test your learning, skills, and practical knowledge, making you fully and comprehensively ready for the industry jobs.</p>
                <p>You will have the opportunity to work on extremely exciting and demanding projects in the fields of hi-tech IT, Marketing, Sales, Ecommerce, Insurance, Banking, Networking etc. After completing the projects successfully your skills will be equivalent to 6 full months of painstaking and rigorous industry experience.</p>

              </div>'
            ques5='Q5 : Does Careerera provide any kind of job assistance?'
            ans5='<div class="accord_body_content">
                <p>Careerera supports its learners by providing placement assistance to all learners who successfully complete the course and pass all the exams, projects, and assignments. We have partnerships with lots of MNCs and other top employers around the world. Through our networks of contacts, you can successfully land a job in several outstanding organizations and equally great enterprises. We also conduct several free seminars and workshops on how to create one’s resume and how to prepare for job interviews. We will also conduct counselling sessions which will be for Career mentoring and participating in Career fairs.</p>

              </div>'
            ques6='Q6 : What is the definition of Full Stack Development? What makes it so important?'
            ans6='<div class="accord_body_content">
                <p>A : Full Stack Development is a field to unify all ends of development in a non-trivial application, both front-end and back-end. It is the process of developing both client side and server side software. A Full Stack Developer, in addition to mastering HTML and CSS, can also program a browser,  program a server, and program a database. There are many advantages to being a full stack developer. You can master most of the techniques involved in a development project, you can design and develop prototypes very rapidly, you can be of great assistance to all the team members, you can decrease the total cost of the project etc. You will have the ability to create and design complete web applications and websites.</p>
                <p>The front end is the front part of the website or the most visible part of the website or web application which is the main factor that drives user experience. The front end is designed using front end languages such as HTML, CSS, Javascript etc. The front end frameworks are AngularJS, React.js, Bootstrap, jQuery etc. The back end refers to the server-side components of a web application or website with a greater focus on how the website works. It carries the responsibility of managing the database with the help of queries and APIs through client-side commands.</p>

              </div>'
            ques7='Q7 : Is a Full Stack developer a good Career choice?'
            ans7='<div class="accord_body_content">
                <p>A : Full Stack Development is in huge demand in many industries, ranging from IT to Finance to Ecommerce to Manufacturing to Healthcare to Retail.  It is the fastest growing job on Linkedin and is predicted to create 11.5 million jobs by 2026. This makes Full Stack Developer a very lucrative career choice. Also, the number of people who actually possess the requisite skillsets to become a complete Full Stack developers is very little. Thus, there is a high demand of Full Stack Developers but a low supply of qualified people. So Full Stack Developers can demand as big a salary as they want and the companies will have to comply with their demands.</p>

              </div>'
            ques8='Q8 : What are the skills required to start a job in the field of Full Stack Development?'
            ans8='<div class="accord_body_content">
                <p>A : The skills you will require to land a job in the field of Full Stack Development are – HTML, CSS, Javascript, Python Coding, Hadoop platform knowledge, SQL Database/Coding, working domain-specific knowledge of C and C++, Website design skills, Database management skills, knowledge of various front end and back end platforms etc.</p>

              </div>'
            ques9='Q9 : Who is eligible for taking the PGP in Full Stack Development course from Careerera?'
            ans9='<div class="accord_body_content">
                <p>A : Companies who will seek to hire Full Stack Developers will look for the following degrees -  </p>
                <p>12th pass from the Science stream or IT stream.</p>
                <p>For fresh graduates or college students - A degree in B.Tech/M.Tech (Any Trade), IT, BCA, MCA or B.Sc (Statistics or Mathematics), For working professionals -  Professional experience of 1+ years in any programming language.  If your professional experience is not related to Full Stack Development, you can still make a switch to a career in Full Stack Development provided that you hold any of the degrees specified above.</p>
                <p>To enroll in the PGP in Full Stack Development course however you don’t need any technical or programming experience. We teach all the modules from scratch.</p>

              </div>'
            ques10='Q10 : What are the tools and technologies used to teach this PGP in Full Stack Development course from Careerera?'
            ans10='<div class="accord_body_content">
                <p>A : HTML, CSS, Javascript, SQL, AngularJS, React.js, Bootstrap, jQuery, PHP, C++, Java, Python, Node.js, Express, Django, Rails, MongoDB, SQL.</p>

              </div>'
            ques11='Q11 : What is the duration of this PGP in Full Stack Development course from Careerera?'
            ans11='<div class="accord_body_content">
                <p>A : The PGP in Full Stack Development course from Careerera is a 12 month long online program.</p>

              </div>'
            ques12='Q12 : Which topics are covered in the course curriculum of the PGP in Full Stack Development course from Careerera?'
            ans12='<div class="accord_body_content">
                <p>A : There are several topics pertinent to the field of Full Stack Development which are covered in this PGP in Full Stack Development course. Some of them are as follows – HTML Basics, HTML Elements, HTML Attributes, CSS3 Syntax, CSS3 Colours, CSS3 Backgrounds, CSS3 Boarders, Javascript Objects, Javascript Events, Javascript Arrays, jQuery syntax, jQuery selectors, jQuery Events, AngularJS HTTP etc.</p>

              </div>'
            ques13='Q13 : Which sectors are the capstone projects based on?'
            ans13='<div class="accord_body_content">
                <p>A : Retail, Web and Social Media, Supply Chain, Entrepreneurship, E-commerce, Banking, Healthcare, Insurance, Finance and Accounts etc.</p>

              </div>'
            ques14='Q14 : Is there any guarantee of placement after the completion of the PGP in Full Stack Development course?'
            ans14='<div class="accord_body_content">
                <p>A : Yes, there is a 100% guarantee of placement after the completion of the course.</p>

              </div>'
            ques15='Q15 : Is there a refund of the course fees in case I do not get placed after the completion of the course?'
            ans15='<div class="accord_body_content">
                <p>A : It is not likely to happen given our past success rate with the placements of our learners. However, if it so happens that one of our learners does not get placed, we will provide a full refund of the course fees directly into the learner’s bank account with no questions asked. </p>

              </div>'
            ques16='Q16 : Why should one choose Careerera?'
            ans16='<div class="accord_body_content">
                <ul class="faq_ul_list">
                  <li> As an education provider, Careerera aims at developing the overall personality of an individual so that they can progress into becoming highly skilled working professionals.</li>
<li>Careerera’s faculty utilize contemporary tactics in order to deliver training sessions which include one-to-one interaction between the participants and the instructor.</li>
<li> The trainers appointed for Careerera’s courses possess a very high level of expertise in their subjects and fields. Therefore Careerera can easily guarantee positive results for all the participants.</li>
<li>24x7 guidance is provided to those who need it via call, email, or video call.</li>
<li> Candidates can opt for demo classes in order to get a good idea of the actual training sessions.</li>
<li>• Careerera provides the online live virtual classroom training model in order to make it easier for working professionals to attend the sessions on one hand while balancing their work on the other.</li>
                </ul>

              </div>'
         />
         {/* <Blog
            heading="Blogs"
            heading2="And Articles"

            title1="Is Full Stack Development Hard?   "
            url1="https://my.careerera.com/eventimages/Newsid_373_images0.jpg"
            redirect1="/blog/is-full-stack-development-hard"

            title2="Is it worth becoming a full-stack developer?    "
            url2="https://my.careerera.com/eventimages/Newsid_335_images0.jpg"
            redirect2="/blog/is-it-worth-becoming-a-full-stack-developer"

            title3="Do full-stack developers get paid more?  "
            url3="https://my.careerera.com/eventimages/Newsid_332_images0.jpg"
            redirect3="/blog/do-full-stack-developers-get-paid-more"
         /> */}
         <Testimonial title1="STUDENT'S"
            title2="Review" />
         {/* <CountryFooter pagetitle="Full Stack" /> */}
      </div>
   )
}

export default PgpFullStack;




