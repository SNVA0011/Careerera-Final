import React, { useEffect, useState } from "react";
import Accordion from 'react-bootstrap/Accordion'
import { Link } from "react-router-dom";
import { base } from '../Base'


const CityFooterCourse = (props) => {
  const [data, setdata] = useState([])
  const [load, setload] = useState([])

  async function CallApi() {
    await fetch(base, {
      method: 'POST',
      body: JSON.stringify({ "apiurl": "https://my.careerera.com/admin/admins/api/city1.php?service="+props.title.replace(/\s/g, '-')+"&state="+props.id2+"&county="+props.id }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }, []).then((response) => response.json()).then((json) => setdata(json.cityList)).catch((error) => {
      setdata(''); 
  });
 
    setload(true)
  }


  useEffect(() => {
    CallApi()
    window.scrollTo(0, 0);
  }, [])


  return (
    <>
      {load?<div className='our_faq_sec custom_locationall scroll-spbx'>
        <div className='container py-16'>

          <div className="pt-1">
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                <span className="capitalize" dangerouslySetInnerHTML={{__html: props.title}}></span>, this Course and batch also available in other locations <div className="btn-site invert ml-3"><span>View</span></div></Accordion.Header>
                <Accordion.Body>
                  <ul className='list-disc text-base row'>
                    {data.length > 0 && data.map((items, i) => (
                      <>
                        <li className='col-xxl-3 col-lg-6 col-12' key={i}><Link to={items.url}>{items.city}</Link></li>
                      </>
                    ))}

                  </ul>
                </Accordion.Body>
              </Accordion.Item>

            </Accordion>
          </div>
        </div>
      </div>:"Loading"}
    </>
  )
}

export default CityFooterCourse;