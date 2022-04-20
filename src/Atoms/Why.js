import React, { useState } from "react"; 
import whysci_icon_1 from '../../src/Images/46.png'
import whysci_icon_2 from '../../src/Images/61.png'
import whysci_icon_3 from '../../src/Images/2.7-MILLION.png'
import whysci_icon_4 from '../../src/Images/33.5.png'
import whysci_icon_5 from '../../src/Images/2020.png'

const Why = (props) => {
  const [open, setOpen] = useState(false);
  return (
    <>



      {/* why-datasciencesuf */}
      <div className='why-datasciencesuf scroll-spbx bg-blue-50' id='why'>
        {props.customizable ?
          <div className='container py-16'>
            <div className="sec_title">
              <h2 className='text-2xl md:text-3xl font-bold'>{props.customiztitle1}  <span className='orange-clrsite'>{props.customiztitle2}</span></h2>
              <p className='text-gray-500 text-base md:text-lg fw-medium'>{props.customizsubtitle}</p>
              <hr className="w-20 hr mb-4 bg-blue-400 sepfoll-hr"></hr>
            </div>

            <div className="time_mid_sec mt-10">
              <ul className='row p-0'>
                <li className='col-xxl col-lg-4 col-sm-6 col-12 mb-4'>
                  <div className='text-white h-100 px-4 py-4 rounded-lg hover:bg-blue-900'>
                    <div className="border_deash">
                      <span className="border_1"></span> <span className="border_2"></span> </div>
                    <div className="time_ico">
                      <img alt={props.data} src={props.whyimgcustom ? props.whyimg1 : whysci_icon_1} />
                    </div>
                    <div className="time_content">
                      <h5 className='text-2xl md:text-3xl font-bold my-3'>{props.customizhead1}</h5>
                      <p className='mb-0 text-sm sm:text-base'>{props.customizpara1}</p>
                    </div>
                  </div>
                </li>
                <li className='col-xxl col-lg-4 col-sm-6 col-12 mb-4'>
                  <div className='text-white h-100 px-4 py-4 rounded-lg hover:bg-blue-900'>
                    <div className="border_deash">
                      <span className="border_1"></span> <span className="border_2"></span> </div>
                    <div className="time_ico">
                      <img alt={props.data} src={props.whyimgcustom ? props.whyimg2 : whysci_icon_2} />
                    </div>
                    <div className="time_content">
                      <h5 className='text-2xl md:text-3xl font-bold my-3'>{props.customizhead2}</h5>
                      <p className='mb-0 text-sm sm:text-base'>{props.customizpara2}</p>
                    </div>
                  </div>
                </li>
                <li className='col-xxl col-lg-4 col-sm-6 col-12 mb-4'>
                  <div className='text-white h-100 px-4 py-4 rounded-lg hover:bg-blue-900'>
                    <div className="border_deash">
                      <span className="border_1"></span> <span className="border_2"></span> </div>
                    <div className="time_ico">
                      <img alt={props.data} src={props.whyimgcustom ? props.whyimg3 : whysci_icon_3} />
                    </div>
                    <div className="time_content">
                      <h3 className='text-2xl md:text-3xl font-bold my-3'>{props.customizhead3}</h3>
                      <p className='mb-0 text-sm sm:text-base'>
                       {props.customizpara3}
                      </p>
                    </div>
                  </div>
                </li>
                <li className='col-xxl col-lg-4 col-sm-6 col-12 mb-4'>
                  <div className='text-white h-100 px-4 py-4 rounded-lg hover:bg-blue-900'>
                    <div className="border_deash">
                      <span className="border_1"></span> <span className="border_2"></span> </div>
                    <div className="time_ico">
                      <img alt={props.data} src={props.whyimgcustom ? props.whyimg4 : whysci_icon_4} />
                    </div>
                    <div className="time_content">
                      <h5 className='text-2xl md:text-3xl font-bold my-3'>{props.customizhead4}</h5>
                      <p className='mb-0 text-sm sm:text-base'>
                       {props.customizpara4}
                        </p>
                    </div>
                  </div>
                </li>
                <li className='col-xxl col-lg-4 col-sm-6 col-12 mb-4'>
                  <div className='text-white h-100 px-4 py-4 rounded-lg hover:bg-blue-900'>
                    <div className="border_deash">
                      <span className="border_1"></span> <span className="border_2"></span> </div>
                    <div className="time_ico">
                      <img alt={props.data} src={props.whyimgcustom ? props.whyimg5 : whysci_icon_5} />
                    </div>
                    <div className="time_content">
                      <h5 className='text-2xl md:text-3xl font-bold my-3'>{props.customizhead5}</h5>
                      <p className='mb-0 text-sm sm:text-base'>{props.customizpara5}</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          :
          <div className='container py-16'>
            <div className="sec_title">
              <h2 className='text-2xl md:text-3xl font-bold'>Why  <span className='orange-clrsite'>{props.data}?</span></h2>
              <p className='text-gray-500 text-base md:text-lg fw-medium'>{props.data} is the key to making good business decisions.</p>
              <hr className="w-20 hr mb-4 bg-blue-400 sepfoll-hr"></hr>
            </div>

            <div className="time_mid_sec mt-10">
              <ul className='row p-0'>
                <li className='col-xxl col-lg-4 col-sm-6 col-12 mb-4'>
                  <div className='text-white h-100 px-4 py-4 rounded-lg hover:bg-blue-900'>
                    <div className="border_deash">
                      <span className="border_1"></span> <span className="border_2"></span> </div>
                    <div className="time_ico">
                      <img alt={props.data} src={props.whyimgcustom ? props.whyimg1 : whysci_icon_1} />
                    </div>
                    <div className="time_content">
                      <h5 className='text-2xl md:text-3xl font-bold my-3'>650%</h5>
                      <p className='mb-0 text-sm sm:text-base'>{props.data} sector has witnessed a massive hike of 650%, far outpacing other sectors.</p>
                    </div>
                  </div>
                </li>
                <li className='col-xxl col-lg-4 col-sm-6 col-12 mb-4'>
                  <div className='text-white h-100 px-4 py-4 rounded-lg hover:bg-blue-900'>
                    <div className="border_deash">
                      <span className="border_1"></span> <span className="border_2"></span> </div>
                    <div className="time_ico">
                      <img alt={props.data} src={props.whyimgcustom ? props.whyimg2 : whysci_icon_2} />
                    </div>
                    <div className="time_content">
                      <h5 className='text-2xl md:text-3xl font-bold my-3'>61%</h5>
                      <p className='mb-0 text-sm sm:text-base'>Jobs are open for candidates with 0-5 years experience.</p>
                    </div>
                  </div>
                </li>
                <li className='col-xxl col-lg-4 col-sm-6 col-12 mb-4'>
                  <div className='text-white h-100 px-4 py-4 rounded-lg hover:bg-blue-900'>
                    <div className="border_deash">
                      <span className="border_1"></span> <span className="border_2"></span> </div>
                    <div className="time_ico">
                      <img alt={props.data} src={props.whyimgcustom ? props.whyimg3 : whysci_icon_3} />
                    </div>
                    <div className="time_content">
                      <h5 className='text-2xl md:text-3xl font-bold my-3'>2.7 MILLION</h5>
                      <p className='mb-0 text-sm sm:text-base'>
                        The 2022 global estimate calls for 2.7 million job postings for analytics and {props.data} roles.
                      </p>
                    </div>
                  </div>
                </li>
                <li className='col-xxl col-lg-4 col-sm-6 col-12 mb-4'>
                  <div className='text-white h-100 px-4 py-4 rounded-lg hover:bg-blue-900'>
                    <div className="border_deash">
                      <span className="border_1"></span> <span className="border_2"></span> </div>
                    <div className="time_ico">
                      <img alt={props.data} src={props.whyimgcustom ? props.whyimg4 : whysci_icon_4} />
                    </div>
                    <div className="time_content">
                      <h5 className='text-2xl md:text-3xl font-bold my-3'>39%</h5>
                      <p className='mb-0 text-sm sm:text-base'>The Global {props.data} market is projected to advance at a CAGR of 39% to reach $195 Billion.</p>
                    </div>
                  </div>
                </li>
                <li className='col-xxl col-lg-4 col-sm-6 col-12 mb-4'>
                  <div className='text-white h-100 px-4 py-4 rounded-lg hover:bg-blue-900'>
                    <div className="border_deash">
                      <span className="border_1"></span> <span className="border_2"></span> </div>
                    <div className="time_ico">
                      <img alt={props.data} src={props.whyimgcustom ? props.whyimg5 : whysci_icon_5} />
                    </div>
                    <div className="time_content">
                      <h5 className='text-2xl md:text-3xl font-bold my-3'>2022</h5>
                      <p className='mb-0 text-sm sm:text-base'>Globally to become one of the top five skills for jobs in 2022.</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>


          </div>
        }

      </div>

    </>
  )
}
export default Why;
