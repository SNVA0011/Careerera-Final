import React from 'react'
import instructor from '../../../Images/instructor_banner.png' 
import BecomeInsForm from "./BecomeInsForm";

const Hero = () => {
    return (
        <div className='react-worldcour  certification-courseslight full-w'>
        <div className="container py-16">
            <div className="row text-left text-black align-items-center allreact-row">
                <div className="col-xxl-8 col-xl-7 col-12 pb-16 pb-xl-0">
                <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl mb-0 text-uppercase">
                            Llegue a estudiantes de todo el mundo con sus cursos
                        </h1>
                        <span className="mt-3 block text-base md:text-lg lg:text-xl text-gray-600 font-medium">
                            Conviértete en parte de la creciente comunidad de Careera Únete a la era tecnológica de la educación con Careera
                        </span>
                       
                    </div>
                    <div className="col-xxl-4 col-xl-5 col-12 align-self-center">
                       <BecomeInsForm />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Hero
