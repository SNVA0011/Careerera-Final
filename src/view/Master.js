import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import Navs from '../Molecules/Master/Nav'
import Cariculam from '../Molecules/Master/Cariculam'
import Cariculambyid from '../Molecules/Master/Cariculambyid'
import Careerera from '../Molecules/Master/Careerera'
import Faq from '../Molecules/Master/Faq'
import Blog from '../Molecules/Master/Blog'
import Hero from '../Molecules/Master/Hero'
import { Helmet } from 'react-helmet'
import DataScience from '../Atoms/DataScience'
import Testimonial from '../Atoms/Testimonial'
import fun from '../Images/fun4.gif'
import UserformsApplication from '../Molecules/Course/UserformsApplication'
import Sign from '../Molecules/Course/Sign'
import CountryFooter from '../Atoms/CountryFooter'
import PopUp from '../Atoms/PopUp'
import NotFound from './NotFound'
// import {  } from "react-router-dom";
import { base } from '../Base'


const Master = () => {
    let { dats } = useParams()
    const country = useParams()
    const [final, setfinal] = useState([])
    const [sts, loadsts] = useState(false)

    async function getMaster() {
        await fetch(base, {
            method: 'POST',
            body: JSON.stringify({ "apiurl": 'https://my.careerera.com/API/course/AboutCourse.php?course_url=' + dats }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        }, []).then((response) => response.json()).then((json) => {
            setfinal(json.records);
        }).catch((error) => {
            setfinal(''); 
        });

        loadsts(true)
    }

    function randomIntFromInterval(min, max) { // min and max included 
        return Math.random() * (max - min + 1) + min
    }


    const rndInt = randomIntFromInterval(8, 9)
    const Random = rndInt / 2;
    const realRandom = Random.toFixed(1)



    function randomIntFromInterva(min, max) { // min and max included 
        return Math.random() * (max - min + 1) + min
    }

    const counter = randomIntFromInterva(1600, 2100)
    const realCounter = counter.toFixed(0)



    useEffect(() => {
        loadsts(false)
        getMaster()
        window.scrollTo(0, 0);
    }, [dats])

    return (
        <div className='master-progsection'>
            

            {sts ?
                <div>
                    {final[0] ?
                        <>

                            <Helmet>
                                <title>{final[0].meta_title}</title>
                                <meta name="description" content={final[0].meta_description} />
                                <meta name="keywords" content={final[0].meta_keywords} />
                                <link rel="canonical" href={"https://www.careerera.com/" + country.id + "/" + country.dats}></link>

                                <script type="application/ld+json">{`
                {"@context":"https://schema.org","@type":"Course",
                "@id":"https://www.careerera.com/${country.id}/${country.dats}",
                "name":"${final[0].category_url}",
                "description":"${final[0].meta_description}",
                "provider":{"@type":"Organization",
                "name":"Careerera"},
                "aggregateRating":{"@type":"AggregateRating",
                "ratingValue":${realRandom},
                "reviewCount":${realCounter}},
                "outcome":"","audience":{"@type":"Audience",
                "audienceType":["${final[0].comments ? final[0].comments[0].comment : ""}"]
                
                }}
                `}</script>


                                <script type="application/ld+json">
                                    {`
                "@context": "https://schema.org/",
                "@type": "WebPa{couge",
                "name": "${final[0].meta_title}",
                "speakable": {
                "@type": "SpeakableSpecification",
                "xpath": [
                "/html/head/title",
                "/html/head/meta[@name='description']/@content"
                ]
                },
                "url": "https://www.careerera.com/${country.id}/${country.dats}"`
                                    }
                                </script>

                            </Helmet>
                            <Hero
                                categoryUrl={final[0].category_url}
                                duration={final[0].duration}
                                point2={final[0].Point_2}
                                point3={final[0].Point_3}
                                point4={final[0].Point_4}
                                point1={final[0].Point_1}
                                point5={final[0].Point_5}
                                point6={final[0].Point_6}
                                title={final[0].CourseTitel}
                            />

                            <Navs
                                faqShow={final[0].faq_List ? true : false}
                                blogShow={final[0].blog_List ? true : false}
                            />


                            <DataScience data={final[0].course_about} title={final[0].CourseTitel} />


                            <div className={'Cariculam-pageid-' + final[0].course_id}></div>
                            {(() => {
                                switch (final[0].course_id) {
                                    case '166': return <Cariculambyid data={[{ 'filename': 'pgp-in-ai-and-machine-learning-Curriculum.php', 'curriculum_id': 166 }]} />;
                                    case '167': return <Cariculambyid data={[{ 'filename': 'masters-in-Data-Science-Curriculum.php', 'curriculum_id': 167 }]} />;
                                    case '114': return <Cariculambyid data={[{ 'filename': 'pgp-in-cloud-computing-Curriculum.php', 'curriculum_id': 114 }]} />;
                                    case '118': return <Cariculambyid data={[{ 'filename': 'pgp-in-digital-marketing-Curriculum.php', 'curriculum_id': 118 }]} />;
                                    case '168': return <Cariculambyid data={[{ 'filename': 'pgp-in-cyber-security-Curriculum.php', 'curriculum_id': 168 }]} />;
                                    case '169': return <Cariculambyid data={[{ 'filename': 'pgp-in-business-analytics-Curriculum.php', 'curriculum_id': 169 }]} />;
                                    case '170': return <Cariculambyid data={[{ 'filename': 'executive-mba-Curriculum.php', 'curriculum_id': 170 }]} />;
                                    case '171': return <Cariculambyid data={[{ 'filename': 'masters-in-full-stack-development-curriculum.php', 'curriculum_id': 171 }]} />;
                                    case '223': return <Cariculambyid data={[{ 'filename': 'masters-in-full-stack-development-curriculum.php', 'curriculum_id': 223 }]} />;
                                    case '267': return <Cariculambyid data={[{ 'filename': 'php-Curriculum.php', 'curriculum_id': 267 }]} />;
                                    case '1': return <Cariculambyid data={[{ 'filename': 'pmp-Curriculum.php', 'curriculum_id': 1 }]} />;
                                    case '182': return <Cariculambyid data={[{ 'filename': 'Digital-Marketing-Professional-(DMP-by-DMVersity)-curriculum.php', 'curriculum_id': 182 }]} />;
                                    case '111': return <Cariculambyid data={[{ 'filename': 'Artificial-Intelligence-Curriculum.php', 'curriculum_id': 111 }]} />;
                                    default: return <Cariculam data={final[0].Curriculum} />
                                }
                            })()}



                            <div className="why-pgpedu">
                                <Careerera customizefaculty="true"
                                    facultysubtitle='Learn from the greatest faculty around the world.'
                                    facultyhead1='Users'
                                    facultypara1='250000+'
                                    facultyhead2='Top Ranked Programs'
                                    facultypara2='10'
                                    facultyhead3='Hiring partners'
                                    facultypara3='200+'
                                    facultyhead4='Best Faculty'
                                    facultypara4='1000+'
                                />
                            </div>

                            <UserformsApplication title="Hiring" subtitle="Partners" titleheading="We Assure You Job Assitance at the End of the Program." />


                            <Sign title={final[0].CourseTitel} />


                            <Faq data={final[0].faq_List} />


                            <Blog data={final[0].blog_List} />
                            <Testimonial title1="STUDENT'S"
                                title2="Speak" urlpath={dats} />

                            <CountryFooter pagetitle={final[0].CourseTitel} urlpath={dats} />
                            <PopUp title={final[0].CourseTitel} urlpath={dats} />
                        </>
                        : <NotFound />}

                </div>
                :
                <>
                    <img src={fun} />
                </>}
        </div>
    )
}
export default Master

