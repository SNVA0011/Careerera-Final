import React, { useContext } from "react";
import { Context } from "../../Api";
import Accordion from 'react-bootstrap/Accordion';
import "../../style.css";
import DemoCertificateOne from "../Certificate/DemoCertificateOne";

const Faq = (props) => {

  const final = props.data;

  return (
    <>
      {final ?
        <div className="scroll-spbx our_faq_sec bg-blue-50 scroll-spbx" id="FAQ">

          <div className="container py-16">

            <div className="text-left">
              <div className="sec_title">
                <h2 className="text-2xl md:text-3xl font-bold">
                  FAQ
                </h2>
                <p className="text-gray-800 text-base md:text-lg fw-medium">
                  Get the answers to your questions here. 
                </p>
                <hr className="w-20 hr mb-4 bg-blue-400 sepfoll-hr" />
              </div>

              <div className="row pt-3 alsobenefitthose">
                <div className="col-12">
                  {
                    final ?
                      <Accordion defaultActiveKey="0">
                        {
                          final.length > 0 && final.map((values, item) =>
                            <Accordion.Item eventKey={item} key={item}>
                              <Accordion.Header className="">
                                <div className="d-flex">
                                  <div className="atful-ans">
                                    Q{item + 1} :
                                  </div>
                                  <div className="flex-grow-1 mr-1">
                                    {values.Question}
                                  </div>
                                </div>



                              </Accordion.Header>
                              <Accordion.Body className="leading-loose font-medium pb-4" dangerouslySetInnerHTML={{ __html: values.Answer }}></Accordion.Body>
                            </Accordion.Item>
                          )
                        }
                      </Accordion>
                      : ''
                  }

                </div>

                {/* <div className="col-lg-6 col-12">
                 <DemoCertificateOne />
                </div> */}

              </div>

            </div>


          </div>

        </div>
        : ''
      }
    </>

  )
}
export default Faq;

