import React, { useContext  } from 'react'
import { Context, Provider } from '../../Api' 
import fun from '../../../Images/fun4.gif'
import { CurrencyContxt } from "../../Atoms/Contextcurrency"; 

const PaidCourse = () => {
    // All courses Api
    const { value15, value16 } = useContext(Context)
    const [allbatches, setallbatches] = value15
    const [allbatchesLoad, allBatchesLoad] = value16


    // currency inr/usd
    const [contextcur, setContextCur] = useContext(CurrencyContxt);

 

    return (
        <div className='all-batches full-w'>
            {allbatchesLoad ? (
                <>
                    <div className="container py-16">
                        {
                            allbatches != '' ?
                            allbatches?.length > 0 && allbatches.map((items, i) => (
                                    <>
                                        <h4 key={i}>
                                            Yes, API have the data of all batches
                                        </h4>
                                    </>
                                ))
                                :
                                <div className="row py-8 alsobenefitthose"></div>
                        }
                    </div>
                </>
            ) : (
                <img src={fun} className="w-screen" alt="careerera-loader-image" />
            )}
        </div>
    )
}
export default PaidCourse
