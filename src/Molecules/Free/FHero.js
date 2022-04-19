import React from 'react'
import Hero from '../../Atoms/Hero'
import pic1 from '../../Images/Datascience4.png'
import { Link } from "react-router-dom";

const FHero = () => {
    return (
        <>
            <Hero
                title="FREE UPCOMING"
                detail="Batchs"
                batch={<> <Link to="/" className="no-underline badge bg-info">Home</Link>
                <span className="mx-2"> / </span>Free </>} 
                img={pic1}
            />
        </>
    )
}
export default FHero
