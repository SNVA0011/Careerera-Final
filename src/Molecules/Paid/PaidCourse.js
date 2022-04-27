import React, { useContext } from 'react'
import { Context, Provider } from '../../Api' 
import { Link } from 'react-router-dom'
import fun from '../../Images/fun4.gif'
import { CurrencyContxt } from "../../Atoms/Contextcurrency";
import ScrollAnimation from 'react-animate-on-scroll';

const PaidCourse = () => {
    // All courses Api
    const { value9, value10 } = useContext(Context)
    const [allfreeCour, setallFreeCour] = value9
    const [allfreeCourLoad, setallFreeCourLoad] = value10

    // groupdata (Live Online Api)
    const freeAllbatch = []
    if (allfreeCourLoad) {
        const groups = allfreeCour[0].LVC.reduce((groups, game) => {
            const date = game.date.split('-')[1] + '-' + game.date.split('-')[2]
            if (!groups[date]) {
                groups[date] = []
            }
            groups[date].push(game)
            return groups
        }, {})
        const groupArrays = Object.keys(groups).map((date) => {
            return {
                date,
                groupdata: groups[date],
            }
        })
        freeAllbatch.push(groupArrays)
       
     
        freeAllbatch.push(groupArrays)
    }
   


    // currency inr/usd
    const [contextcur, setContextCur] = useContext(CurrencyContxt);


    return (
        <div className='all-batches full-w'>
            {allfreeCourLoad ? (
                <>
                    <div className="container py-16"> 
                        {freeAllbatch[0]?.length > 0 && freeAllbatch[0].map((items, i) => (
                            <>

                                <div className="shadow-md bg-light px-4 py-3 text-2xl border font-semibold mb-4 text-white disclaimer-bx rounded-md">
                                    {items.date}
                                </div>

                                <div className={"row" + (i === freeAllbatch[0]?.length - 1 ? '' : ' pb-20')}>
                                    {items.groupdata?.length > 0 && items.groupdata
                                        .filter((dats) => dats.New_price !== '0.00')
                                        .map((dats, da) => (
                                            <ScrollAnimation className='col-lg-6 col-12 mb-4'animateIn='fadeInUpscrl' animateOut='fadeInUpscrlout'  delay={6 * da} animateOnce={true} key={da}>
                                                <div className="d-flex border-2 shadow px-3 py-3 h-100 flex-column flex-sm-row">
                                                    <div className="">
                                                        <div className="bg-red-600 p-3 text-center text-xs text-white date_freec">
                                                            <span className="text-4xl font-bold">
                                                                {
                                                                    dats.date.split(
                                                                        '-'
                                                                    )[0]
                                                                }
                                                            </span>
                                                            <br />{' '}
                                                            {
                                                                dats.date.split(
                                                                    '-'
                                                                )[1]
                                                            }
                                                        </div>
                                                    </div>

                                                    <div className="flex-grow-1 pl-sm-4 d-flex flex-column mt-3 mt-sm-0">
                                                        <div className='flex-grow-1 pb-2'>
                                                            <h5 className="text-xl sm:text-2xl font-bold" dangerouslySetInnerHTML={{ __html: dats.CourseTitel }} />

                                                            {contextcur.currency === 'Asia/Kolkata' ?
                                                                <p className="font-semibold mb-1">
                                                                    <i className="bi bi-cash text-gray-500 mr-2"></i>
                                                                    {' '}
                                                                    <span className="line-through text-gray-500 font-semibold mr-1">
                                                                        ₹{dats.INR_Old_price}
                                                                    </span>{' '}
                                                                    ₹{dats.INR_New_price}

                                                                    <span className='mr-2'></span>
                                                                    <span className='text-gray-500 text-xs'>(INCLUSIVE OF ALL TAXES)</span>
                                                                </p>
                                                                :
                                                                <p className="font-semibold mb-1">
                                                                    <i className="bi bi-cash text-gray-500 mr-2"></i>
                                                                    {' '}
                                                                    <span className="line-through text-gray-500 font-semibold mr-1">
                                                                        ${dats.Old_price}
                                                                    </span>{' '}
                                                                    ${dats.New_price}
                                                                </p>
                                                            }

                                                            <p className="font-semibold mb-1">
                                                                <i className="bi bi-building text-gray-500 mr-2"></i>
                                                                Careerera{' '}
                                                                {dats.workshop_id}{' '}
                                                            </p>
                                                            <p className="font-semibold mb-1">
                                                            <i className="bi bi-calendar4-event text-gray-500 mr-2"></i>
                                                                {dats.date}
                                                            </p>
                                                            <p className="font-semibold mb-1">
                                                                <i className="bi bi-clock-history text-gray-500 mr-2"></i>
                                                                {dats.batch_duration}
                                                            </p>
                                                            <p className="font-semibold mb-1">
                                                                <i className="bi bi-camera-video-fill text-gray-500 mr-2"></i>
                                                                {dats.batch_category}
                                                            </p>
                                                            {contextcur.currency === 'Asia/Kolkata' ?
                                                                <p className="font-semibold orange-clrsite">
                                                                   <i className="bi bi-mortarboard-fill"></i> 
                                                                   <i className="bi bi-chevron-compact-right mx-1"></i> Scholarships Available
                                                                </p>
                                                            : ''}
                                                        </div>

                                                        <p className="mb-0">
                                                            <Link
                                                                to={"/"+dats.BatchURL}
                                                                className="no-underline btn-site invert mr-3">
                                                                <span>
                                                                    Read More
                                                                </span>
                                                            </Link>

                                                            {contextcur.currency === 'Asia/Kolkata'?<a href={"https://my.careerera.com/signup.php?batchid="+dats.workshop_id+"&currency=Rs"}
                                                                className="no-underline btn-site gray">
                                                                <span>
                                                                    Enroll Now
                                                                </span>
                                                            </a>:<a href={"https://my.careerera.com/signup.php?batchid="+dats.workshop_id}
                                                                className="no-underline btn-site gray">
                                                                <span>
                                                                    Enroll Now
                                                                </span>
                                                            </a>}
                                                            
                                                        </p>
                                                    </div>
                                                </div>
                                            </ScrollAnimation>
                                        ))}
                                </div>
                            </>
                        ))}
                    </div>
                </>
            ) : (
                <img src={fun} className="w-screen" alt="careerera-loader-image"/>
            )}
        </div>
    )
}
export default PaidCourse
