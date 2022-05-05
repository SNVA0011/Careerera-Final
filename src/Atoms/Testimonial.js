import React, { useContext, useEffect, useState } from 'react'
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'
import '../style.css'
import { Link } from 'react-router-dom'
import { base } from '../Base'
import Spinner from 'react-bootstrap/Spinner'
import Moment from 'react-moment'

//Owl Carousel Settings
const options = {
    items: 3,
    margin: 20,
    loop: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    dots: true,
    nav: true,
    responsive: {
        0: {
            items: 1,
        },
        575: {
            items: 2,
        },
        992: {
            items: 3,
        },
        1200: {
            items: 3,
        },
    },
}


// const options = {
//     items: 3,
//     loop: true,
//     video: true,
//     autoplay: true,
//     autoplayTimeout: 1800,
//     autoplayHoverPause: true,
//     smartSpeed: 400,
//     center: true,
//     dots: true,
//     nav: false,
//     responsive: {
//         0: {
//             items: 1,
//             margin: 0,
//             startPosition: 0,
//             stagePadding: 40,
//         },
//         575: {
//             items: 2,
//             margin: 15,
//             startPosition: 0,
//             stagePadding: 30,
//         },
//         992: {
//             items: 3,
//             margin: 50,
//             startPosition: 0,
//             stagePadding: 0,
//         },
//         1200: {
//             items: 3,
//             margin: 50,
//             startPosition: 1,
//             stagePadding: 0,
//         },
//     },
// }


const Testimonial = (props) => {


    const [data, setdata] = useState([])
    const [load, setload] = useState(false)
    const [You, setYou] = useState([])
    const [loadYou, setloadYou] = useState(false)

    async function CallApi() {
        const testimonials = await fetch(
            'https://my.careerera.com/API/course/HomepageComment.php'
        )
        const review = await testimonials.json()
        setdata(review.records[0].Comments)
        setload(true)
    }

    async function CallYoutube() {
        const youtube = await fetch(
            'https://my.careerera.com/API/common/reviewlinks.php'
        )
        const youData = await youtube.json()
        setYou(youData.records)
        setloadYou(true)
    }

    useEffect(() => {
        CallApi()
        CallYoutube()
    }, [])



    return (
        <div>
            {loadYou ?
                You?.length > 0 ?
                    <div className='scroll-spbx reviewqueries' id="review">

                        <div className='indexhome'>
                            <div className='testimonials-areamock'>
                                <div className='partner-spkrat text-center bg-white'>
                                    <div className="container-xxl py-20 media-prtslider ">


                                        {/* <p className="text-center text-6xl font-bold text-gray-600 mb-6">In The Media</p> */}
                                        <p className="text-3xl md:text-4xl  lg:text-5xl  font-bold text-gray-700 mb-3  softwarelike">
                                            Our {props.title1} <span className="text-blue-500 sitblu-clrsite"> {props.title2}</span>
                                        </p>
                                        <div className='clearfix w-100'></div>


                                        {/* Reviews by Comments */}
                                        <div className='ourclient-staffing'>
                                            <div className='full-w position-relative comment-viewslide'>
                                                <OwlCarousel className="slider-items owl-carousel" {...options}>
                                                    {data?.length > 0 && data.map((item, i) => (
                                                        <div className="itemss">
                                                            <div className='mt-4 mb-2 shadow-md bg-white p-6 text-left w-full border-2 border-white rounded-3xl slidebg-h'>
                                                                <div className="d-flex justify-content-between">
                                                                    <i className="bi bi-person-circle text-blue-200 text-3xl usercomment-sh"></i>
                                                                    <div className="flex-grow-1 pl-3">
                                                                        <div className="d-flex justify-content-between">
                                                                            <h2 className="font-semibold capitalize text-xl sm:text-2xl text-gray-700 pr-3">
                                                                                {item.title}
                                                                            </h2>
                                                                         </div>

                                                                        <div className="post-total-rating text-sm">
                                                                            {new Array(parseInt(item.rate)).fill().map((_, i) =>
                                                                                <i className="bi bi-star-fill text-yellow-400 mr-1" key={i}></i>
                                                                            )}
                                                                            {item.rate < 5 ?
                                                                                new Array(5 - parseInt(item.rate)).fill().map((_, n) =>
                                                                                    <i className="bi bi-star mr-1" key={n}></i>
                                                                                )
                                                                                : ''}

                                                                            <span className="ml-2 text-black">{item.rate}</span>
                                                                        </div>
                                                                    </div>
                                                                </div>


                                                                <div className="text-gray-700 text-lg mt-4 mb-1">
                                                                    <i className="text-gray-300 text-2xl d-inline-block fas fa-quote-left mr-3"></i>
                                                                    <div className='py-2'>{item.comment}</div>
                                                                    <div className='text-right'>
                                                                        <i className="text-gray-300 text-2xl d-inline-block fas fa-quote-right ml-3"></i>
                                                                    </div>
                                                                </div>

                                                                <div className="position-relative mt-2 border-top pt-4 d-flex flex-xl-row align-items-center justify-content-between">
                                                                    <div className='font-semibold text-gray-600 text-sm mt-1'>
                                                                        <i className='bi bi-calendar2 mr-2'></i>
                                                                        <Moment format="D-MMM-YYYY">{item.date}</Moment>
                                                                    </div>

                                                                    {item.linkedin.includes('linkedin') ?
                                                                        <div className="rounded-social-buttons m-0"> <a
                                                                            className="social-button linkedin m-0"
                                                                            href={item.linkedin}
                                                                            target='_blank' rel='noreferrer' >
                                                                            <i className="fab fa-linkedin"></i>
                                                                        </a>
                                                                        </div>
                                                                        : ''}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))}

                                                </OwlCarousel>

                                            </div>
                                        </div>


                                        {/* Reviews by video */}


                                        {/* <div className='row'>
                                            <div className='full-w media-prtslider px-0 pt-2'>
                                                <div className="w-full explore_Data_science ourclient-staffing">


                                                    <OwlCarousel className="slider-items owl-carousel" {...options}>
                                                        {You.map((items, i) => {
                                                            return (
                                                                <>
                                                                    <div className="item" key={i}>
                                                                        <div className="embed-responsive embed-responsive-16by9 rounded-lg overflow-hidden">
                                                                            <iframe className="embed-responsive-item" src={items.video_url}></iframe>
                                                                        </div>
                                                                    </div>
                                                                </>
                                                            )
                                                        })}
                                                    </OwlCarousel>

                                                </div>
                                            </div>
                                        </div> */}

                                        <div className='mt-6'>
                                            <Link to="/review" className='btn-site invert capitalize no-underline py-3'>
                                                <span>View all</span>
                                            </Link>
                                        </div>
                                    </div>


                                </div>

                            </div>
                        </div>

                    </div>
                    : ''

                : <div className="testimonials-areamock overflow-hidden text-center py-5">
                    <Spinner animation="border" variant="secondary" role="status"><span className="visually-hidden">Loading...</span></Spinner>
                </div>}
        </div>
    )
}
export default Testimonial
