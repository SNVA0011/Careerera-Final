import React, { useContext } from "react";
import Accordion from 'react-bootstrap/Accordion';
import "../../style.css";
import { Context } from "../../Api";
const Courses = () => {
  const { value5, value6 } = useContext(Context);
  const [Catfinal, Catsetfinal] = value5;
  const [Catsts, Catloadsts] = value6;
  return (
    <>
      {Catsts ?
        <div id="FAQ">
          <div className="lg:pl-40 lg:pr-40 pl-8 pr-8 pt-8  pb-8">
            <h1 className="font-bold text-4xl">Course on Data Science   <span className="text-blue-500 sitblu-clrsite"> Certification </span></h1>
            <p className="text-gray-700 font-semibold mt-2">About Data Science Certification Course</p>
            <div className="grid grid-cols-1 gap-4">
              <div>
                <Accordion defaultActiveKey="null">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Q1 : What is the PGP in Data Science course from Careerera and what makes it different from individual courses?</Accordion.Header>
                    <Accordion.Body>
                      <div className="pl-8 text-gray-800">
                        <span>A : Post Graduate Program in Data Science is a carefully designed learning path that has been created by some of the leading industry experts. The structure of the course curriculum has been set up in a way that even a complete beginner to Data Science will be able to follow the course progression and understand all the course materials clearly. Our world-class instructors will ensure that you become a master of Data Science by the time you complete the course.</span>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>Q2 : Can Careerera provide the PGP in Data Science course at a location near me?</Accordion.Header>
                    <Accordion.Body>
                      <div className="pl-8 text-gray-800">
                        <span>A : Our course content is intended to reach learners globally. Whether you reside in any country be it India, Canada, USA, Philippines, Singapore, Malaysia, Australia, or European countries like UK, Germany, Netherlands, Germany or somewhere else, you will be able to access our content 24/7, at any time of the day. The reason for this is that our content is available 100% online. You can access all of our content sitting at your home or office.</span>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>


                  <Accordion.Item eventKey="2">
                    <Accordion.Header>Q3 : Can I ask for a support and doubt clearing session if I want to understand the topics at a deeper level?</Accordion.Header>
                    <Accordion.Body>
                      <div className="pl-8 text-gray-800">
                        <span>

                          A : Careerera offers 24/7 query resolution and you can file a ticket with a dedicated support team at any time. We provide both email and video chat support for all the queries. If your query does not get resolved in a suitable amount of time through email, we will arrange live one on one sessions with our world-class instructors who would be more than happy to guide you through your doubts.

                          You may be happy to learn that Careerera does not stop its learners from contacting the instructors even after they have completed the course. They can create as many support tickets as they want; we do not place any limit on the number of tickets they can create.
                        </span>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>


                  <Accordion.Item eventKey="3">
                    <Accordion.Header>Q4 : Which kind of projects are assigned as part of the training?</Accordion.Header>
                    <Accordion.Body>
                      <div className="pl-8 text-gray-800">
                        <span>

                          A : Careerera assigns the most up to date, relevant, and practical high-value projects to its learners. They carry a lot of real world value as they are designed carefully by our world-class instructors to provide practical and hands-on experience to the learners as they complete them. We provide you with a safe and trusted route through which you can implement the learning and knowledge you have acquired in a real-world industrial environment. These projects are a part of every course at Careerera and they will thoroughly test your learning, skills, and practical knowledge, making you fully and comprehensively ready for the industry jobs.

                          You will have the opportunity to work on extremely exciting and demanding projects in the fields of hi-tech IT, Marketing, Sales, Ecommerce, Insurance, Banking, Networking etc. After completing the projects successfully your skills will be equivalent to 6 full months of painstaking and rigorous industry experience.
                        </span>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="4">
                    <Accordion.Header>Q5 : Does Careerera provide any kind of job assistance?</Accordion.Header>
                    <Accordion.Body>
                      <div className="pl-8 text-gray-800">
                        <span>

                          Careerera supports its learners by providing placement assistance to all learners who successfully complete the course and pass all the exams, projects, and assignments. We have partnerships with lots of MNCs and other top employers around the world. Through our networks of contacts, you can successfully land a job in several outstanding organizations and equally great enterprises. We also conduct several free seminars and workshops on how to create one’s resume and how to prepare for job interviews. We will also conduct counselling sessions which will be for Career mentoring and participating in Career fairs.
                        </span>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>


                  <Accordion.Item eventKey="5">
                    <Accordion.Header>Q6 : What is the definition of Data Science? What makes it so important?</Accordion.Header>
                    <Accordion.Body>
                      <div className="pl-8 text-gray-800">
                        <span>



                          A : Data science is a field to unify data analysis, statistics, and their related methods in order to understand and analyze actual phenomena with data. It uses techniques and theories drawn from many fields within the context of statistics, computer science, mathematics, domain knowledge and information science. The field involves extracting, visualizing, analyzing, storing, and managing data to create insights. These insights assist the companies in making effective data-driven decisions.

                          Every organization needs to evaluate and analyze data to fathom sales performance, marketing focus, customer behaviour, operational performance, and so on. In the case of financial service companies, banks, e-commerce companies, manufacturing units, and healthcare companies, the leaders seek to derive useful and incisive insights from all the data they have collected over the years. All these companies are assembling Data Science teams or hiring Data Science consultants to resolve their business issues or identify new opportunities which they can exploit. Data is becoming more and more important each day and so are Data Scientist or Data Analyst roles.

                        </span>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>


                  <Accordion.Item eventKey="6">
                    <Accordion.Header>Q7 : Is Data Scientist a good Career choice?</Accordion.Header>
                    <Accordion.Body>
                      <div className="pl-8 text-gray-800">
                        <span>

                          A : Data Science is in huge demand in many industries, ranging from IT to Finance to Ecommerce to Manufacturing to Healthcare to Retail. It is the fastest growing job on Linkedin and is predicted to create 11.5 million jobs by 2026. This makes Data Science a very lucrative career choice. Also, the number of people who actually possess the requisite skillsets to become a complete Data Scientist is very little. Thus, there is a high demand of Data Scientists but a low supply of qualified people. So Data Scientists can demand as big a salary as they want and the companies will have to comply with their demands.
                        </span>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>


                  <Accordion.Item eventKey="7">
                    <Accordion.Header>Q8 : What are the skills required to start a job in the field of Data Science?</Accordion.Header>
                    <Accordion.Body>
                      <div className="pl-8 text-gray-800">
                        <span>

                          A : The skills you will require to land a job in the field of Data Science are - Python Coding, Hadoop platform knowledge, SQL Database/Coding, working domain-specific knowledge of Machine Learning and AI, Data Visualization skills, Statistics, Multivariable Calculus and Linear Algebra.
                        </span>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>


                  <Accordion.Item eventKey="8">
                    <Accordion.Header>Q9 : Who is eligible for taking the PGP in Data Science course from Careerera?</Accordion.Header>
                    <Accordion.Body>
                      <div className="pl-8 text-gray-800">
                        <span>



                          A : Companies who will seek to hire Data Scientists will look for the following degrees -

                          For fresh graduates or college students - A degree in B.Tech/M.Tech (Any Trade), BCA, MCA or B.Sc (Statistics or Mathematics), BA (Maths or Economics or Stats), B.Com.

                          For working professionals - Professional experience of 1+ years in Python, R, SAS, Business intelligence, Data warehousing, SQL. If your professional experience is not related to data analytics, you can still make a switch to a career in Data Science provided that you hold any of the degrees specified above.

                          To enroll in the PGP in Data Science course however you don’t need any technical or programming experience. We teach all the modules from scratch.

                        </span>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>


                  <Accordion.Item eventKey="9">
                    <Accordion.Header>Q10 : What are the tools and technologies used to teach this PGP in Data Science course from Careerera?</Accordion.Header>
                    <Accordion.Body>
                      <div className="pl-8 text-gray-800">
                        <span>

                          A : Python, Tableau, SQL.
                        </span>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="10">
                    <Accordion.Header>Q11 : What is the duration of this PGP in Data Science course from Careerera?</Accordion.Header>
                    <Accordion.Body>
                      <div className="pl-8 text-gray-800">
                        <span>

                          A : The PGP in Data Science course from Careerera is a 12 month long online program.
                        </span>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="11">
                    <Accordion.Header>Q12 : Which topics are covered in the course curriculum of the PGP in Data Science course from Careerera?</Accordion.Header>
                    <Accordion.Body>
                      <div className="pl-8 text-gray-800">
                        <span>

                          A : There are several topics pertinent to the field of Data Science which are covered in this PGP in Data Science course. Some of them are as follows – Regression, Predictive modelling, Clustering, Time Series Forecasting, Classification etc. There are exercises which require one to structure a business problem into an analytics framework using Statistics and Data Modelling. There are also data cleaning, data transformation, Deep learning, and Natural Language Processing (NLP) topics.
                        </span>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>


                  <Accordion.Item eventKey="12">
                    <Accordion.Header>Q13 : Which sectors are the capstone projects based on?</Accordion.Header>
                    <Accordion.Body>
                      <div className="pl-8 text-gray-800">
                        <span>

                          A : Retail, Web and Social Media, Supply Chain, Entrepreneurship, E-commerce, Banking, Healthcare, Insurance, Finance and Accounts etc.
                        </span>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>


                  <Accordion.Item eventKey="13">
                    <Accordion.Header>Q14 : Is there any guarantee of placement after the completion of the PGP in Data Science course?</Accordion.Header>
                    <Accordion.Body>
                      <div className="pl-8 text-gray-800">
                        <span>

                          A : We provide dedicated placement assistance after the program completion. we give guidance on resume writing, Conduct Workshops on Interview Preparation.
                        </span>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="14">
                    <Accordion.Header>Q15 : Why should one choose Careerera?</Accordion.Header>
                    <Accordion.Body>
                      <div className="pl-8 text-gray-800">
                        <span>
                          <li>As an education provider, Careerera aims at developing the overall personality of an individual so that they can progress into becoming highly skilled working professionals.</li>
                          <li>Careerera’s faculty utilize contemporary tactics in order to deliver training sessions which include one-to-one interaction between the participants and the instructor.</li>
                          <li>The trainers appointed for Careerera’s courses possess a very high level of expertise in their subjects and fields. Therefore Careerera can easily guarantee positive results for all the participants.</li>
                          <li>24x7 guidance is provided to those who need it via call, email, or video call.</li>
                          <li>Candidates can opt for demo classes in order to get a good idea of the actual training sessions.</li>
                          <li>Careerera provides the online live virtual classroom training model in order to make it easier for working professionals to attend the sessions on one hand while balancing their work on the other.</li>
                        </span>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>



                </Accordion>
              </div>
            </div>
          </div>
        </div>
        : <div className="text-center align-self-center">
        <div className="p-5">
        <button aria-label="Loading" className="btn btn-dark pt-2 shadow-lg" type="button" disabled>
        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true" style={{width: '2rem', height: '2rem'}}></span>
        <span className="sr-only">Loading...</span>
        </button>
        </div>
    </div>}

    </>
  )
}
export default Courses;

