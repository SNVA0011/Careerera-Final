import React, { useState, useContext } from 'react';
import { Context, Provider } from "../../Api";
import { CurrencyContxt } from '../../Atoms/Contextcurrency';
import logo from "../../Images/logo.svg"
import Forms from '../../Atoms/Form'


const Sign = (props) => {

  const { value11, value12 } = useContext(Context);
  const [cntry, setcntry] = value11;
  const [cntryLoad, setcntryLoad] = value12;


  const [selectphoneval, setselectphoneval] = useState([])

  function setvalPhone(e) {
    setselectphoneval(e.target.value)
  }

  if (selectphoneval == 'Please select your country') {
    setselectphoneval('')
  }

  const [phoneSetvalue, Updatephonevalue] = useState()
  const [contextcur, setContextCur] = useContext(CurrencyContxt)



  return (
    <div className="student-coursepopup pop-back scroll-spbx" id="query">
      <div className='container'>
        <div className="row">
          <div className="col-md-5 col-12 p-0">
            <div className="pop_body_content text-center d-flex text-white py-5">
              <div className="my-auto w-100 px-3">
                <img src={logo} className='logo-full' alt='logo' />
                <p className='mb-0'>
                  {props.Downloadprospectus ?
                    <>
                      <span className="lgfont font-bold enrol">Download</span> the Course  <br></br>
                      <span>Prospectus of</span><br></br>
                    </>
                    : ''}
                  <strong className='lgfont font-bold enrol' dangerouslySetInnerHTML={{ __html: props.title }}></strong>
                </p>
               
                
                

                <p className="call_box mb-0">
                  OR<br></br>
                  Call Us at
                  {props.nasscompupupmobile ?
                    <div className='text-center'>
                      <a href='tel:+919250004000' className="btn-site invert orangebtn no-underline">
                        <span className='text-base font-semibold'><i className="bi bi-telephone text-xl align-middle mr-1"></i> +91-92-5000-4000</span>
                      </a>
                    </div>
                    :
                    <div className='text-center'>
                      <a href={"tel:" + contextcur.title} className="btn-site invert orangebtn no-underline">
                        <span className='text-base font-semibold'><i className="bi bi-telephone text-xl align-middle mr-1"></i> {contextcur.title}</span>
                      </a>
                    </div>
                  }
                </p>

              </div>
            </div>
          </div>

          <div className="col-md-7 col-12 px-4">
            <Forms
             prospectusfile={props.Downloadprospectus}
             messageboxnone={props.Popmsgboxnone}
             Popnasscomagree={props.Popnasscomagree}
             />
          </div>

        </div>
      </div>
    </div>
  )
}
export default Sign;