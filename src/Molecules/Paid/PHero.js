import React from 'react'
import Hero from '../../Atoms/Hero'
import pic1 from '../../Images/Datascience4.png'
import { Link } from "react-router-dom";

const PHero = (props) => {
    return (
        <>
            <Hero
                title="MOST POPULAR UPCOMING"
                detail=" BATCHES"
                batch={<> <Link to="/" className="no-underline badge bg-info">Home</Link>
                <span className="mx-2"> / </span>All Batches </>} 
                img={pic1}
            />
        </>
    )
}
export default PHero
