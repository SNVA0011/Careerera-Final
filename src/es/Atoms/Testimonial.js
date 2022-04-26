import React, { useEffect, useState } from 'react'
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'
import '../style.css'
import { Link } from 'react-router-dom'
import { base } from '../../Base'


//Owl Carousel Settings
const options = {
    items: 3,
    loop: true,
    video: true,
    autoplay: true,
    autoplayTimeout: 1800,
    autoplayHoverPause: true,
    smartSpeed: 400,
    center: true,
    dots: true,
    nav: false,
    responsive: {
        0: {
            items: 1,
            margin: 0,
            startPosition: 0,
            stagePadding: 40,
        },
        575: {
            items: 2,
            margin: 15,
            startPosition: 0,
            stagePadding: 30,
        },
        992: {
            items: 3,
            margin: 50,
            startPosition: 0,
            stagePadding: 0,
        },
        1200: {
            items: 3,
            margin: 50,
            startPosition: 1,
            stagePadding: 0,
        },
    },
}


const Testimonial = (props) => {

    const [You, setYou] = useState([])
    const [loadYou, setloadYou] = useState(false)

    async function CallYoutube() {
        await fetch(base, {
            method: 'POST',
            body: JSON.stringify({ "apiurl": 'https://my.careerera.com/API/common/reviewlinks.php' }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        }, []).then((response) => response.json()).then((json) => setYou(json.records)).catch((error) => {
            setYou('');
        });
        setloadYou(true)
    }

    useEffect(() => { 
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
                                            Nuestra {props.title1} <span className="text-blue-500 sitblu-clrsite"> {props.title2}</span>
                                        </p>
                                        <div className='clearfix w-100'></div>


                                        {/* Reviews by Comments */}
                                        {/* <div className='full-w position-relative'>
                            <OwlCarousel className="slider-items owl-carousel" {...options}>
                                {data.length > 0 && data.map((item, i) => (
                                    <div className="itemss">
                                        <div className='mt-4 mb-2 shadow-md bg-white p-6 text-left w-full border-2 border-white rounded-3xl slidebg-h'>
                                            <h2 className="font-semibold capitalize text-2xl text-gray-700">
                                                {item.title}
                                            </h2>
                                            <div className="post-total-rating text-sm">
                                                <i className="fas fa-star text-yellow-400"></i>
                                                <i className="fas fa-star text-yellow-400"></i>
                                                <i className="fas fa-star text-yellow-400"></i>
                                                <i className="fas fa-star text-yellow-400"></i>
                                                <i className="fas fa-star text-yellow-400"></i>
                                                <span className="ml-2 text-black">5.0</span>
                                            </div>


                                            <div className="text-gray-700 text-lg mt-4 mb-1">
                                                <i className="orange-lgclr text-lg d-inline-block fas fa-quote-left mr-3"></i>
                                                {item.comment}
                                                <i className="orange-lgclr text-lg d-inline-block fas fa-quote-right ml-3"></i>
                                            </div>


                                            <div className="mt-4 d-flex flex-xl-row align-items-center justify-content-between">
                                                <a href={item.linkedin} target='_blank' rel='noreferrer' >
                                                    <i className="fab fa-linkedin fa-2x"></i>
                                                </a>

                                                <div className='font-semibold text-gray-400 text-base mt-1'>
                                                    <i className='bi bi-clock mr-2'></i>
                                                    {item.date}</div>
                                            </div>
                                        </div>
                                    </div>
                                ))}

                            </OwlCarousel>


                        </div> */}


                                        {/* Reviews by video */}
                                        <div className='row'>
                                            <div className='full-w media-prtslider px-0 pt-2'>
                                                <div className="w-full explore_Data_science ourclient-staffing">
                                                    <OwlCarousel className="slider-items owl-carousel" {...options}>
                                                        {You.length > 0 && You.map((items, i) => {
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
                                        </div>

                                        <div className='mt-6'>
                                            <Link to="/es/review" className='btn-site invert capitalize no-underline py-3'>
                                                <span>Ver todo</span>
                                            </Link>
                                        </div>
                                    </div>


                                </div>

                            </div>
                        </div>

                    </div>
                    : ''

                : <div className="testimonials-areamock overflow-hidden text-center py-5 my-20">
                    <div className="lds-ellipsis">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>}

        </div>
    )
}
export default Testimonial
