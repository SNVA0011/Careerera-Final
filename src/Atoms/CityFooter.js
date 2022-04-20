import React, { useEffect, useState } from "react";
import Accordion from 'react-bootstrap/Accordion'
import { Link } from "react-router-dom";
import { useParams } from 'react-router'
import { base } from '../Base'

const CityFooter = (props) => {
  const [data, setdata] = useState([])
  const [load, setload] = useState([])



  async function CallApi() {
    const dat = await fetch(base, {
      method: 'POST',
      body: JSON.stringify({ "apiurl": "https://my.careerera.com/API/common/world_citys.php?id="+props.id }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }, [])
      .then((response) => response.json())
      .then((json) => setdata(json.records));
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
                <span dangerouslySetInnerHTML={{__html: props.pagetitle}}></span>, this Course and batch also available in other locations <div className="btn-site invert ml-3"><span>View</span></div></Accordion.Header>
                <Accordion.Body>
                  <ul className='list-disc text-base row'>
                    {data.map((items, i) => (
                      <>
                        <li className='col-xxl-3 col-lg-6 col-12'><Link to={items.cities_url}>{items.name}</Link></li>
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

export default CityFooter;