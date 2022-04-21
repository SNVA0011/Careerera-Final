import React, { useContext ,useEffect} from 'react' 
import PHero from '../Molecules/Paid/PHero' 
import PaidCourse from '../Molecules/Paid/PaidCourse' 
import { Context, Provider } from '../Api' 
import fun from '../Images/fun4.gif'
import { Helmet } from 'react-helmet'


const Paid = () => {
    // E-Learning Api
    const { value7, value8 } = useContext(Context)
    const [freeCour, setFreeCour] = value7
    const [freeCourLoad, setFreeCourLoad] = value8

    // Live Online Api
    const { value9, value10 } = useContext(Context)
    const [allfreeCour, setallFreeCour] = value9
    const [allfreeCourLoad, setallFreeCourLoad] = value10

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
        <>
            {freeCourLoad ? (
                <>
                   <Helmet>
                   <title>List of Courses and Programs offered by Careerera</title>
                    <meta name="description" content="This webpage content list of all professional courses and programs which are offered by Careerera Company."/>
                    <meta name="keywords" content="Careerera Courses List, Careerera Programs List"/>
                    <link rel="canonical" href="https://www.careerera.com/all-batches"/>
                    
                    </Helmet>

                    <Provider>
                        <PHero />
                        <PaidCourse />
                    </Provider>
                </>
            ) : (
                <img src={fun} className="w-screen" alt="careerera-loader-image"/>
            )}
        </>
    )
}
export default Paid
