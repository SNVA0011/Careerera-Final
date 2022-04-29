import React from "react";
import DescriptionStatic from "../Atoms/DescriptionStatic";
import Faq from "../Atoms/Faq";
import Highlight from "../Atoms/Highlight";
import NavStatic from "../Atoms/NavStatic";
import ProgramCarriculum from "../Atoms/ProgramCarriculum";
import Testimonial from "../Atoms/Testimonial";
import Sign from "../Molecules/Course/Sign";
import UserformsApplication from "../Molecules/Course/UserformsApplication";
import Capstone from "../Molecules/Master/Capstone";
import Careerera from "../Molecules/Master/Careerera";
import Completition from "../Molecules/Master/Completition";
import Hero from "../Molecules/Master/Hero";
import Light from "../Molecules/Master/Light";
import Why from "../Atoms/Why";
import Profile from "../Molecules/Master/Profile";
import CareerAssistance from '../Atoms/CareerAssistance';
import { Helmet } from "react-helmet";
import PopUp from "../Atoms/PopUp";
import fullSimg from "../Images/ai-ml-img.jpg";
import { useParams } from 'react-router'
import csr from "../Images/ai-ml-roles-offer.png";
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


const PgpArtificalIntelligence = () => {
    let { dats } = useParams()

    return (
        <div className='static-pgpintell'>
            <Helmet>
                <title>Post Graduate (PG) Program in AI and Machine Learning | Careerera</title>
                <meta name="description" content="Get PG Diploma in Machine Learning and Artificial Intelligence courses at Careerera. PGP in AI and ML give the learners exposure to all the important developments from the industry." />
                <meta name="keywords" content="PG Program in Artificial Intelligence and Machine Learning, pg diploma in machine learning and ai, machine learning courses online, ai and machine learning course, artificial intelligence training, artificial intelligence course online, artificial intelligence certification, post graduate program in machine learning & ai, post graduate, program in machine learning & artificial intelligence, pgp in machine learning & ai, pgp in machine learning & artificial intelligence" />
                <link rel="canonical" href="https://www.careerera.com/artificial-intelligence-and-machine-learning/post-graduate-program-in-artificial-intelligence-machine-learning" />
            </Helmet>

            <PopUp title="PGP in Artificial Intelligence and Machine Learning" urlpath={dats} />

            <Hero
                categoryUrl="ARTIFICIAL INTELLIGENCE & MACHINE LEARNING"
                duration="12-Months Online Program"
                point2="Student Handouts"
                point3="Industrial Projects  "
                point4="Multiple Simulation Exams"
                point1="Course Completion Certificate"
                point5="Solid Foundation"
                point6="Industry Based Trainers "
                title="POST GRADUATE PROGRAM IN ARTIFICIAL INTELLIGENCE & MACHINE LEARNING"
            />


            <NavStatic
                containerleftbox='true'
                about='AI &amp; ML'
                Why='Why AI &amp; ML'
                Program="Program Highlights"
                WhyC="Why Careerera"
                assistanceGlobal="Placement"
                Application="Application"
                faq="FAQ"
                Review="Reviews"
            />

            <DescriptionStatic
                title="Artificial Intelligence & Machine Learning"
                heading="Build smarter and more intelligent systems."
                data={<>
                    <div className="blog-detials-single">
                        <div className="des_content content st">
                            <p>Artificial Intelligence is perhaps the most popular word in general usage which has its origins
                                in the Computer Science field. This is because of all the science fiction movies containing
                                robots which can speak and spaceships which have automated guidance and defense
                                systems. Due to this misappropriation by the media the word has been widely misunderstood.
                                But anyone who takes an <strong>Artificial Intelligence course online</strong> will learn what the real
                                meaning of Artificial Intelligence is.</p>
                            <p>This <strong>Artificial Intelligence certification</strong> will teach the learners that Artificial Intelligence is a
                                field of computer science in which the programmer attempts to impart human-like intelligence
                                to machines. They use techniques and algorithms which give machines the ability to engage
                                in reasoning processes and processes of logic quite similar to what a rational human being
                                would follow. <strong>Artificial Intelligence training</strong> will let programmers give machines the ability to
                                understand complex relationships, interpret them meaningfully, and take actionable decisions
                                on the basis of those calculations. Such machines, if left alone in a navigable environment,
                                will be able to interpret the elements present in the environment and be able to take certain
                                paths of actions based on their observations. So Artificial Intelligence lets programmers
                                impart such powers of perception to machines. Not only will they be able to interpret the
                                environment, but they will also be able to detect their mistakes, record them, and process
                                them to learn how to perform better the next time they are in the same environment.</p>



                        </div>
                    </div>
                </>}

                data2={<><p>Machine learning is a branch of Artificial Intelligence which aims to teach machines to learn
                    from their environment on their own without any outside aid or interference. The method they
                    use is that they supply the machines with massive data sets as inputs. Then they program
                    specific machine learning algorithms into the machines which give them the ability to analyze
                    the massive data sets and accept them as their own past experiences. Thus a new machine
                    can be given the memory of a used machine. They then extract patterns from these data sets
                    and use these patterns to form new knowledge. This course is one of the <strong>Machine learning
                        courses online</strong> which will teach a learner how to do so.</p>
                    <p>Initially the programmers have to program specific algorithms into the machines to teach them
                        how to learn, to put it simply. But after the machines are supplied with massive data sets as
                        inputs, they are able to draw upon these banks of past experience and draw new conclusions.
                        So one can take this <strong>PG diploma in Machine learning and AI</strong> to gain the knowledge and
                        skills required to perform this feat. Our <strong>AI and Machine learning course</strong> includes topics such
                        as Data preprocessing, Data wrangling, Typecasting, Labor hours comparison, Time series
                        modeling, Removal of non-stationarity, Text mining, Lemmatization, Rendering syntax trees,
                        structuring sentences with chunking and chunk parsing, Context-free grammar etc.</p>
                    <h4><b>Why go with Careerera’s Post Graduate Program in Machine Learning and AI?</b></h4>
                    <p>Careerera’s <strong>Post Graduate Program in Machine Learning and AI</strong> is a very well-designed
                        course intended for learners from all categories, from complete beginners to professionals
                        with prior experience. It will give one a thorough grounding in all the core concepts and
                        relevant topics of Artificial Intelligence and Machine Learning. The course curriculum has
                        been especially crafted to give the learners exposure to all the important developments from
                        the industry. Careerera’s instructors are all of world-class quality. They have all been

                        subjected to a very rigorous screening process and have been chosen for their teaching skills
                        and subject matter expertise.</p>
                    <p>All kinds of course study materials are made available in this <strong>Post graduate program in
                        Machine learning and Artificial intelligence</strong> to the learners including videos, audio lectures,
                        notes, surprise quizzes, assignments, and capstone projects. The instructors also provide
                        24/7 support to the learners in the form of doubt clearing sessions on video, call, email, and
                        chat.</p></>}
            />

            <Why customizable='true'
                customiztitle1='Why Artificial Intelligence &'
                customiztitle2='Machine Learning?'
                customizsubtitle='Learn how to transfer human roles to machines.'
                customizhead1='13.3% CAGR'
                customizpara1='during the forecast period from 2018 to 2026'
                customizhead2='25% Job Growth'
                customizpara2='estimated for Software Developer roles by 2028'
                customizhead3='1.7 MILLION'
                customizpara3='The 2020 global estimate calls for 1.7 million job postings for Software Development Roles.'
                customizhead4='4,535.5 million'
                customizpara4='Is Expected by the global task management for software market size'
                customizhead5='2026'
                customizpara5='Globally to become one of the top three skills for jobs.' />



            <Completition
                customizable='true'
                completiontitle='On completing this program,'
                completionimg={fullSimg}
                title1={<><p><i className="fa fa-check-circle" aria-hidden="true"></i> Develop expertise in popular AI &amp; ML technologies and problem-solving
                    methodologies</p>
                    <p><i className="fa fa-check-circle" aria-hidden="true"></i> Develop the ability to independently solve business problems using AI &amp;
                        ML</p>
                    <p><i className="fa fa-check-circle" aria-hidden="true"></i> Learn to use popular AI &amp; ML technologies like Python, Tensor flow and
                        Keras to develop applications</p>
                    <p><i className="fa fa-check-circle" aria-hidden="true"></i> Develop a verified portfolio with 12+ projects that will showcase the new
                        skills acquired</p>
                    <p><i className="fa fa-check-circle" aria-hidden="true"></i> Build expertise in AI &amp; ML which are quickly becoming the most sought-
                        after skills around the world</p> </>} />


            <Highlight
                customipgpdigitalteam='true'
                customizable='true'
                subtitle='This program will provide you with many great benefits.'

                head1={<> <p><i className="fa fa-check-circle" aria-hidden="true"></i>
                    <span>12-month online program </span>
                </p>
                    <p><i className="fa fa-check-circle" aria-hidden="true"></i> <span>Online Lab Sessions</span></p> </>}
                head2={<>
                    <p><i className="fa fa-check-circle" aria-hidden="true"></i> <span>Careerera has collaboration with many eminent
                        Universities and Organisations across the Globe to
                        exchange the knowledge.</span></p> </>}
                head3={<><p><i className="fa fa-check-circle" aria-hidden="true"></i> <span>Career guidance and mentorship by Careerera's faculty
                    and industry leaders</span></p>
                    <p><i className="fa fa-check-circle" aria-hidden="true"></i> <span>Resume review and interview preparation sessions</span></p>
                    <p><i className="fa fa-check-circle" aria-hidden="true"></i> <span>Access to opportunities with leading companies</span></p> </>}
                head4={<> <p><i className="fa fa-check-circle" aria-hidden="true"></i> <span>Real-world case studies to build practical skills</span></p>
                    <p><i className="fa fa-check-circle" aria-hidden="true"></i> <span>Hands -on Exposure to Ai&amp;ml Tools &amp;Techniques such as python, keras.</span></p>
                    <p><i className="fa fa-check-circle" aria-hidden="true"></i> <span>Learn industry insights through multiple industry
                        knowledge sessions</span></p> </>}

            />


            <div id="cariculum" className="scroll-spbx cariculum-overview our_faq_sec profcourmore">
                <div className="container py-16 data-scinece-othercer onlycontent-accr">
                    <div className="sec_title">
                        <h2 className="text-2xl md:text-3xl font-bold">
                            Program <span className="orange-clrsite">Curriculum</span>
                        </h2>
                        <p className="text-gray-800 text-base md:text-lg fw-medium">
                            An overview of what you will learn from this program.
                        </p>
                        <hr className="w-20 hr mb-4 bg-blue-400 sepfoll-hr" />
                    </div>

                    <div className="row">


                        <div className="col-12"><h4 className="font-bold text-lg sm:text-xl mb-3 ">Foundations <span className="heading-border-line"></span></h4>
                        </div>

                        <div className="col-lg-6 col-12 mb-1">
                            <ProgramCarriculum
                                topic1='Python for AI &amp; ML'
                                detail1={<div className="accord_body_content">
                                    <ul>
                                        <li>Python Basics</li>
                                        <li>Python Functions and Packages</li>
                                        <li>Working with Data Structures,
                                            Arrays, Vectors &amp; Data Frames</li>
                                        <li>Jupyter Notebook – Installation &amp;
                                            function</li>
                                        <li>Pandas, NumPy, Matplotlib,
                                            Seaborn</li>

                                    </ul>

                                </div>}

                            />
                        </div>

                        <div className="col-lg-6 col-12 mb-1">
                            <ProgramCarriculum
                                topic1='Applied Statistics'
                                detail1={<div className="accord_body_content">
                                    <ul>
                                        <li>Descriptive Statistics</li>
                                        <li>Probability &amp; Conditional
                                            Probability</li>
                                        <li>Hypothesis Testing</li>
                                        <li>Inferential Statistics</li>
                                        <li>Probability Distributions</li>
                                    </ul>

                                </div>}

                            />
                        </div>


                        <div className="col-12 mt-3"><h4 className="mt-12 font-bold text-lg sm:text-xl mb-3  ">Machine Learning  <span className="heading-border-line"></span></h4>
                        </div>


                        <div className="col-lg-6 col-12 mb-1">
                            <ProgramCarriculum
                                topic1='Supervised learning'
                                detail1={<div className="accord_body_content">
                                    <ul>
                                        <li>Linear Regression</li>
                                        <li>Multiple Variable Linear Regression</li>
                                        <li>Logistic Regression</li>
                                        <li>Naive Bayes Classifiers</li>
                                        <li>K-NN Classification</li>
                                        <li>Support Vector Machines</li>
                                    </ul>

                                </div>}
                            />
                        </div>



                        <div className="col-lg-6 col-12 mb-1">
                            <ProgramCarriculum
                                topic1='Unsupervised learning'
                                detail1={<div className="accord_body_content">
                                    <ul>
                                        <li>K-means Clustering</li>
                                        <li>Hierarchical Clustering</li>
                                        <li>Dimension Reduction-PCA</li>
                                    </ul>

                                </div>}

                            />
                        </div>




                        <div className="col-lg-6 col-12 mb-1">
                            <ProgramCarriculum
                                topic1='Ensemble Techniques'
                                detail1={<div className="accord_body_content">
                                    <ul>
                                        <li>Decision Trees</li>
                                        <li>Bagging</li>
                                        <li>Random Forests</li>
                                        <li>Boosting</li>
                                    </ul>

                                </div>}

                            />
                        </div>




                        <div className="col-lg-6 col-12 mb-1">
                            <ProgramCarriculum
                                topic1='Recommendation Systems'
                                detail1={<div className="accord_body_content">
                                    <ul>
                                        <li>Introduction to
                                            Recommendation Systems</li>
                                        <li>Popularity based model</li>
                                        <li>Content based
                                            RecommendationSystem</li>
                                        <li>Collaborative Filtering (User
                                            similarity &amp; Item similarity)</li>
                                        <li>Hybrid Models</li>
                                    </ul>

                                </div>}
                            />
                        </div>


                        <div className="col-12 mt-3"><h4 className="mt-12 font-bold text-lg sm:text-xl mb-3  ">Artificial Intelligence  <span className="heading-border-line"></span></h4>
                        </div>
                        <div className="col-lg-6 col-12 mb-1">
                            <ProgramCarriculum
                                topic1='Introduction to Neural Networks and Deep Learning '
                                detail1={<div className="accord_body_content">
                                    <ul>
                                        <li>Introduction to Perceptron &amp; Neural Networks Activation and Loss functions Gradient Descent Batch Normalization TensorFlow &amp; Keras for Neural Networks Hyper Parameter Tuning Sequential Models and NLP </li>
                                    </ul>

                                </div>}
                            />
                        </div>

                        <div className="col-lg-6 col-12 mb-1">
                            <ProgramCarriculum
                                topic1='Introduction to Sequential data '
                                detail1={<div className="accord_body_content">
                                    <ul>
                                        <li>RNNs and its mechanisms Vanishing &amp; Exploding gradients in RNNs LSTMs - Long short-term memory GRUs - Gated recurrent unit LSTMs Applications Time series analysis LSTMs with attention mechanism Neural Machine Translation Advanced Language Models: Transformers, BERT, XLNet Computer vision </li>
                                    </ul>

                                </div>}
                            />
                        </div>


                        <div className="col-lg-6 col-12 mb-1">
                            <ProgramCarriculum
                                topic1='Introduction to Convolutional Neural Networks Convolution, Pooling'
                                detail1={<div className="accord_body_content">
                                    <ul>
                                        <li>Padding &amp; its mechanisms Forward Propagation &amp; Backpropagation for CNNs </li>
                                        <li>CNN architectures like AlexNet, VGGNet, InceptionNet &amp; ResNet  </li>
                                        <li>Transfer Learning NLP Basics(Natural Language Processing) </li>
                                        <li> Introduction to NLP Stop Words Tokenization Stemming and lemmatization Bag of Words Model Word Vectorizer TF-IDF POS Tagging Named Entity Recognition  </li>
                                        <li>Advanced Computer Vision Object Detection YOLO, R-CNN,  </li>
                                        <li>SSD Semantic Segmentation U-Net Face Recognition using Siamese Networks Instance Segmentation Introduction to GANs (Generative adversarial networks)  </li>

                                    </ul>

                                </div>}

                            />
                        </div>


                        <div className="col-lg-6 col-12 mb-1">
                            <ProgramCarriculum
                                topic1='Introduction to GANs -Generative Networks Adversarial Networks '
                                detail1={<div className="accord_body_content">
                                    <ul>
                                        <li>How GANs work? </li>
                                        <li>DCGANs - Deep Convolution GANs </li>
                                    </ul>

                                </div>}
                            />
                        </div>

                        <div className="col-lg-6 col-12 mb-1">
                            <ProgramCarriculum
                                topic1='Applications of GANs '
                                detail1={<div className="accord_body_content">
                                    <ul>
                                        <li>Introduction to Reinforcement Learning (RL) RL Framework Component of RL Framework Examples of RL Systems Types of RL Systems Q-learning </li>
                                        <li>LANGUAGES AND TOOLS- Python ,Python ML library ,Scikit-learn ,NLP library ,NLTK ,Keras, Pandas Numpy ,Scipy, Matplotlib ,TensorFlow  </li>

                                    </ul>

                                </div>}

                            />
                        </div>
                    </div>


                </div>
            </div>


            <Capstone
                capsimgbg='true'
                subheadingbx='Test your skills and knowledge on practical projects.'

                capsimg1={fullStContent}
                title1='Handwritten Digits Recognition'
                data1={<div className="caps_p_content">

                    <p>Human beings write digits in different ways and in different
                        handwritings. Handwritten digits can vary a lot in shapes and sizes as they use many distinct
                        curves and straight lines. So for machines to read and comprehend the digits that humans
                        have written will take a lot of finetuning. The learner’s task is to develop a Handwritten Digits
                        Recognition algorithm and create an application based on the same. It should be able to
                        identify, comprehend, and recognize handwritten digits and produce an output for the same. It
                        should be fast and accurate.</p>
                </div>}

                capsimg2={fullStA}
                title2='Lane Line Detection'
                data2={<div className="caps_p_content">

                    <p>In today’s world the idea of self-driving cars is no longer a mere dream.
                        Google’s self-driving cars have clocked thousands of miles on the roads of North America and
                        have shown that drivers are no longer necessary to drive cars. The learner’s task is to
                        develop a Lane Line Detection algorithm which can identify, pinpoint, and detect lines in the
                        middle of the road demarcating new lanes. They should be able to detect them at a distance
                        of at least a 100 metres and comprehend from the markings whether the lanes are high-
                        speed or slow.</p>
                </div>}

                capsimg3={fullStAutomotive}
                title3='Spoiler Blocker Extension'
                data3={<div className="caps_p_content">

                    <p>When a new movie or show comes out, mischievous people
                        always try to remove the thrill and anticipation from it by posting information about it online
                        which reveals all the important events that take place in the movie or show. These pieces of
                        information are known as spoilers. The learner’s task is to develop a browser extension which
                        will accept input from the user related to their favourite new movies or shows. It will then
                        detect any mentions of them in advance and black out those mentions by overlaying other
                        text or images on top of them.</p>
                </div>}

                capsimg4={fullStFood}
                title4='Spam Classifier Extension'
                data4={<div className="caps_p_content">

                    <p>Most email users receive dozens of emails every day. A large
                        percentage of those emails are spam in the form of advertisements, promotional material, or
                        plain jokes. They are very distracting, clutter the inbox, and deleting them individually is too
                        time-consuming. The learner’s task is to create a browser extension which can classify email
                        as spam or regular non-spam email on the basis of the contents of the email alone. It should
                        use the open source known spammers lists to identify spam emails without having to even
                        scan the emails.</p>
                </div>}

                capsimg5={fullStPortal}
                title5='Optimal Path Specifier Map'
                data5={<div className="caps_p_content">

                    <p>A huge business problem today is to discover which is the
                        shortest and least time consuming route from one location to another. There are several
                        products available in the market which attempt to solve this problem to varying degrees of
                        success. The learner’s task is to develop a piece of software which uses advanced artificial
                        intelligence and machine learning algorithms to discover the optimal route between two points
                        on a map. It should consider traffic, weather, and whether the user has travelled through that
                        route before too. The learner has to create an application using those algorithms.</p>
                </div>}

                capsimg6={fullStMotor}
                title6='Game of Chess AI'
                data6={<div className="caps_p_content">

                    <p>The game of chess is extremely popular among human beings who like
                        mentally demanding tasks. It is a game very well-suited to the application of artificial
                        intelligence and machine learning concepts and techniques. The learner’s task is to create a
                        chess game application which is fully equipped with sophisticated AI opponents who can
                        predict and counter human players’ chess moves in advance. It should be able to take inputs
                        of chess matches data sets and simulate the matches while displaying what its own AI
                        opponents would have done from either side.</p>
                </div>}

                capsimg7={fullStProject}
                title7='Fire Detection and Localization Using Surveillance Cameras'
                data7={<div className="caps_p_content">

                    <p>A huge threat in households
                        across the world today is the threat of unexpected fires breaking out. A house fire can do
                        massive amounts of property damage and claim the lives of any occupants within the house.
                        The learner’s task is to use house surveillance cameras to detect and pinpoint whether a fire
                        has broken out and the location. The fire detection application should use image classification
                        and computer vision algorithms to perform this feat. It should have built-in reporting features
                        to alert the residents of the house about the fire.</p>
                </div>}

                capsimg8={fullStNews}
                title8='Website Evaluation Using Opinion Mining'
                data8={<div className="caps_p_content">

                    <p>A big challenge that search engines around the
                        world face today is the presence of low-effort websites with poor content or websites that are
                        fronts for other larger websites and only exist to host backlinks for them. It will be very helpful
                        to have a rating or scoring system for all websites on the internet. The learner’s task is to
                        create an application which the users can use to browse the internet and leave reviews and
                        ratings on the different websites they encounter. There should be a ‘Website category’ option
                        for sorting them too.</p>
                </div>}

                capsimg9={fullStBoilerplate}
                title9='Fake Product Review Monitoring System'
                data9={<div className="caps_p_content">

                    <p>A common strategy that many companies around
                        the world follow is to post fake reviews on the internet praising their products or services.
                        Fake product reviews skew the search results in favour of the fraudulent company and
                        mislead prospective customers about their quality and performance. The learner’s task is to
                        create a fake product review monitoring system. It should use Artificial Intelligence and
                        Machine Learling algorithms to track and identify fraudulent IP addresses which are posting
                        multiple reviews from the same IP address. It should also use an opinion mining and rating
                        system.</p>

                </div>}

                capsimg10={fullStItem}
                title10='Automatic Attendance System'
                data10={<div className="caps_p_content">

                    <p>In schools a large amount of time is spent in taking the rollcall
                        and attendance of students. Teachers can use the same time in revising important concepts
                        from the subject study matter with the students or in checking their assignments more
                        painstakingly. The learner’s task is to create an Automatic attendance system that automates
                        the process of taking attendance. It should use AI and ML algorithms related to computer
                        vision to recognize and identify the faces of the incoming students and check their names
                        against a school database.</p>
                </div>}
            />

            <div className="why-pgpedu">
                <Careerera customizefaculty="true"
                    facultysubtitle='Enrol with leading global online educational course provider.'
                    facultyhead1='Users'
                    facultypara1='250000+'
                    facultyhead2='Top Ranked Programs'
                    facultypara2='10'
                    facultyhead3='Industry Experts'
                    facultypara3='500+'
                    facultyhead4='Best Cloud Faculty '
                    facultypara4='25+' />
            </div>


            <Profile title="AI & ML"
                profimg='true'
                profimg1={full_stack_batch_profile2}
                profimg2={full_stack_education_bg2}
            />

            <CareerAssistance
                title='Placement'
                titlesub='Assistance'
                titleheading='We help you to prepare for interviews with major companies.'
                box1='Access to Opportunities with Leading Companies'
                box2='Workshops on Resume Review & Interview Preparation'
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

            <UserformsApplication customizeheading='true'
                cantitle='Hiring'
                cansubtitle='Partners'
                cantitleheading='We Assure You Job Assitance at the End of the Program.'
                fullstcys='Start by filling a simple online form.'
                fullstcysalu='Screening call with Alumni/ Program Director/ Faculty' />

            <Sign title="PGP in Artificial Intelligence and Machine Learning" />

            <Faq
                customizeheading='true'
                cantitle='Get your queries and doubts cleared here.'

                ques1='1 : What is the PGP in Artificial Intelligence and Machine Learning course from Careerera and
      what makes it different from individual courses?'
                ans1='<div className="accord_body_content">
        <p>A : Post Graduate Program in Artificial Intelligence and Machine Learning is a carefully
          designed learning path that has been created by some of the leading industry experts. The
          structure of the course curriculum has been set up in a way that even a complete beginner to
          Artificial Intelligence and Machine Learning will be able to follow the course progression and
          understand all the course materials clearly. Our world-class instructors will ensure that you
          become a master of Artificial Intelligence and Machine Learning by the time you complete the
          course.</p>

      </div>'
                ques2='Q2 : Can Careerera provide the PGP in Artificial Intelligence and Machine Learning course at
      a location near me?'
                ans2='<div className="accord_body_content">
        <p>A : Our course content is intended to reach learners globally. Whether you reside in any
          country be it India, Canada, USA, Philippines, Singapore, Malaysia, Australia, or European
          countries like UK, Germany, Netherlands, Germany or somewhere else, you will be able to
          access our content 24/7, at any time of the day. The reason for this is that our content is
          available 100% online. You can access all of our content sitting at your home or office.</p>

      </div>'
                ques3='Q3 : Can I ask for a support and doubt clearing session if I want to understand the topics at a
      deeper level?'
                ans3='<div className="accord_body_content">
        <p>A : Careerera offers 24/7 query resolution and you can file a ticket with a dedicated support
          team at any time. We provide both email and video chat support for all the queries. If your
          query does not get resolved in a suitable amount of time through email, we will arrange live
          one on one sessions with our world-class instructors who would be more than happy to guide
          you through your doubts.</p>
        <p>You may be happy to learn that Careeerera does not stop its learners from contacting the
          instructors even after they have completed the course. They can create as many support
          tickets as they want; we do not place any limit on the number of tickets they can create.</p>

      </div>'
                ques4='Q4 : Which kind of projects are assigned as part of the training?'
                ans4='<div className="accord_body_content">
        <p>A : Careerera assigns the most up to date, relevant, and practical high-value projects to its
          learners. They carry a lot of real world value as they are designed carefully by our world-class
          instructors to provide practical and hands-on experience to the learners as they complete
          them. We provide you with a safe and trusted route through which you can implement the
          learning and knowledge you have acquired in a real-world industrial environment. These
          projects are a part of every course at Careerera and they will thoroughly test your learning,
          skills, and practical knowledge, making you fully and comprehensively ready for the industry
          jobs.</p>
        <p>You will have the opportunity to work on extremely exciting and demanding projects in the
          fields of hi-tech IT, Marketing, Sales, Ecommerce, Insurance, Banking, Networking etc. After

          completing the projects successfully your skills will be equivalent to 6 full months of
          painstaking and rigorous industry experience.</p>

      </div>'
                ques5='Q5 : Does Careerera provide any kind of job assistance?'
                ans5='<div className="accord_body_content">
        <p>Careerera supports its learners by providing placement assistance to all learners who
          successfully complete the course and pass all the exams, projects, and assignments. We
          have partnerships with lots of MNCs and other top employers around the world. Through our
          networks of contacts, you can successfully land a job in several outstanding organizations
          and equally great enterprises. We also conduct several free seminars and workshops on how
          to create one’s resume and how to prepare for job interviews. We will also conduct
          counselling sessions which will be for Career mentoring and participating in Career fairs.</p>

      </div>'
                ques6='Q6 : What is the definition of Artificial Intelligence and Machine Learning? What makes it so
      important?'
                ans6='<div className="accord_body_content">
        <p>A : Artificial Intelligence and Machine learning are a very important part of Computer Science.
          They are quite interrelated with each other and have many points in common. Artificial
          Intelligence is at its most basic level a technology which enables machines to exhibit
          simulations of human behaviour. The main goal of AI is to develop intelligent computer
          systems which can solve complex problems of the world in a human-like manner. Machine
          Learning and Deep learning are two major components of AI. AI is a vast field and has a very
          diverse range of applications and scope. AI systems are more concerned with using the
          science of probability and prediction to maximize the chances of success of a system in
          solving a problem. Artificial intelligence has 3 main stages of operation – learning, reasoning,
          and self-correction. Often humans have to deal with not only structured data but semi-
          structured and unstructured data as well. Therefore any AI system should be fully equipped to
          handle not only structured data but semi-structured and unstructured data as well.</p>
        <p>Machine learning is a subset of artificial intelligence. It is heavily dependent on past data. It is
          a science which allows machines to learn about new patterns and new courses of action on
          the basis of past data related to the same problem domain. Computer systems are taught
          how to proceed along certain lines of action and how to take certain decisions when faced
          with a certain matrix of choices and problems. This is why this field is called Machine
          “learning.” Machine learning is much narrower in scope than the broad scope of Artificial
          Intelligence. Computer systems trained by machine learning can only perform actions and
          tasks for which they have been explicitly taught the appropriate lines of response. They can
          not predict problems and solution sets in advance like the “intelligent” machines from the
          wider scope of Artificial Intelligence can.</p>

      </div>'
                ques7='Q7 : Is Artificial Intelligence and Machine Learning expert a good Career choice?'
                ans7='<div className="accord_body_content">
        <p>A : Artificial Intelligence and Machine Learning is in huge demand in many industries, ranging
          from IT to Finance to Ecommerce to Manufacturing to Healthcare to Retail. It is the fastest
          growing job on Linkedin and is predicted to create 20 million jobs by 2026. This makes
          Artificial Intelligence and Machine Learning a very lucrative career choice. Also, the number of
          people who actually possess the requisite skillsets to become a complete Artificial Intelligence
          and Machine Learning expert is very little. Thus, there is a high demand of Artificial
          Intelligence and Machine Learning experts but a low supply of qualified people. So Artificial

          Intelligence and Machine Learning experts can demand as big a salary as they want and the
          companies will have to comply with their demands.</p>

      </div>'
                ques8='Q8 : What are the skills required to start a job in the field of Artificial Intelligence and Machine
      Learning?'
                ans8='<div className="accord_body_content">
        <p>A : The skills you will require to land a job in the field of Artificial Intelligence and Machine
          Learning are – Testing and iterating skills, Python functions, packages, and routines
          knowledge, Mathematical knowledge, Physics knowledge, Mechanics knowledge, cognitive
          learning theory knowledge, language processing knowledge, Critical thinking skills, Curiosity,
          Out-of-the-box thinking skills, Technical skills, Signal processing techniques knowledge.</p>

      </div>'
                ques9='Q9 : Who is eligible for taking the PGP in Artificial Intelligence and Machine Learning course
        from Careerera?'
                ans9='<div className="accord_body_content">
          <p>A : Companies who will seek to hire Artificial Intelligence and Machine Learningers will look
            for the following degrees - </p>
          <p>12 th pass from the Science stream or IT stream.</p>
          <p>For fresh graduates or college students - A degree in B.Tech/M.Tech (Any Trade), IT, BCA,
            MCA or B.Sc</p>
          <p>For working professionals - Professional experience of 1+ years in any programming
            language. If your professional experience is not related to Artificial Intelligence and Machine
            Learning, you can still make a switch to a career in Artificial Intelligence and Machine
            Learning provided that you hold any of the degrees specified above.</p>

        </div>'
                ques10='Q10 : What are the tools and technologies used to teach this PGP in Artificial Intelligence and
        Machine Learning course from Careerera?'
                ans10='<div className="accord_body_content">
          <p>A : Pandas, Numpy, Matplotlib, Seaborn, Sci-kit, Anaconda, Jupyter, NLTK, Python, Keras.</p>

        </div>'
                ques11='Q11 : What is the duration of this PGP in Artificial Intelligence and Machine Learning course
        from Careerera?'
                ans11='<div className="accord_body_content">
          <p>A : The PGP in Artificial Intelligence and Machine Learning course from Careerera is a 12
            month long online program.</p>

        </div>'
                ques12='Q12 : Which topics are covered in the course curriculum of the PGP in Artificial Intelligence
        and Machine Learning course from Careerera?'
                ans12='<div className="accord_body_content">
          <p>A : There are several topics pertinent to the field of Artificial Intelligence and Machine
            Learning which are covered in this PGP in Artificial Intelligence and Machine Learning course.
            Some of them are as follows – NLP, Deep learning, Reinforcement learning, Graphical
            Models together with Predictive Analytics and Statistics, Statistical analysis concepts,
            Introduction to probability and Bayes theorem, Python functions, packages, and routines,
            Linear regression (both univariate and multivariate), Polynomial regression (both univariate
            and multivariate), K-NN classification, Support vector machines etc.</p>

        </div>'
                ques13='Q13 : Which sectors are the capstone projects based on?'
                ans13='<div className="accord_body_content">
          <p>A : Retail, Web and Social Media, Supply Chain, Entrepreneurship, E-commerce, Banking,
            Healthcare, Insurance, Finance and Accounts etc.</p>

        </div>'
                ques14='Q14 : What is the target audience of this course?'
                ans14='<div className="accord_body_content">
          <p>Audience Profile :</p>
          <p className="mb-1">The intended audience for the PG Program in Artificial Intelligence and Machine Learning are:</p>
          <ul>
          <li>IT Professionals</li>
          <li>Data Professionals</li>
          <li>Individuals with basic programming skills interested in the AI &amp; ML</li>
          <li>Data Scientists viewing to get a big boost in their careers</li>
          <li>Professionals looking for a career shift into AI &amp; ML</li>
          </ul>
        </div>'
                ques15='Q15 : Why should one choose Careerera?'
                ans15='<div className="accord_body_content"><ul>
          <li>As an education provider, Careerera aims at developing the overall personality of an
            individual so that they can progress into becoming highly skilled working professionals.</li>
          <li>Careerera’s faculty utilize contemporary tactics in order to deliver training sessions
            which include one-to-one interaction between the participants and the instructor.</li>
          <li>The trainers appointed for Careerera’s courses possess a very high level of expertise
            in their subjects and fields. Therefore Careerera can easily guarantee positive results
            for all the participants.</li>
          <li>24x7 guidance is provided to those who need it via call, email, or video call.</li>
          <li>Candidates can opt for demo classes in order to get a good idea of the actual training
            sessions.</li>
          <li>Careerera provides the online live virtual classroom training model in order to make it
            easier for working professionals to attend the sessions on one hand while balancing
            their work on the other.</li></ul>


        </div>'/>

            {/* <Blog
                heading="Blogs"
                heading2="And Articles"

                title1="Is ARTIFICIAL INTELLIGENCE & MACHINE LEARNING Hard?"
                url1="https://my.careerera.com/eventimages/Newsid_367_images0.jpg"
                redirect1="/blog/is-it-hard-to-learn-data-science"

                title2="Is data scientist a good career in India? "
                url2="https://my.careerera.com/eventimages/Newsid_365_images0.jpg"
                redirect2="/blog/is-data-scientist-a-good-career-in-india"

                title3="How can I become a data scientist in Delhi? "
                url3="https://my.careerera.com/eventimages/Newsid_362_images0.jpg"
                redirect3="/blog/how-can-i-become-a-data-scientist-in-delhi"
            /> */}

            <Testimonial title1="STUDENT'S"
                title2="Review" />

            {/* 
            <CountryFooter pagetitle="Atificial Intelligence" /> */}
        </div>
    )
}

export default PgpArtificalIntelligence;




