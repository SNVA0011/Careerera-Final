import React, { useState, useContext, useEffect } from "react";
import logo from "../../../Images/logo.svg";
import { Provider } from "../../Api";
import { Link } from "react-router-dom";
import Flag from "../../Atoms/Flag";
import SearchCourses from "./SearchCourses";
import Offcanvas from 'react-bootstrap/Offcanvas'
import Header from '../../Molecules/Index/Header'
import { menuCloseMob } from './../../Atoms/Contextcurrency'
import { Helmet } from "react-helmet";

const Navbars = () => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true)
    setMobmenuclose(true)
  }

  const [mobmenuclose, setMobmenuclose] = useContext(menuCloseMob);
  useEffect(() => {
    if (mobmenuclose == false) {
      setShow(false)

    }



  });


  return (
    <div className="full-w">
      <Helmet>
        <link rel="canonical" href=""></link>
      </Helmet>
      <div className="container py-2">


        <Offcanvas show={show} onHide={handleClose} placement={'end'} className="offcanvas-menumob">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title><Link to="/es/" className="position-absolute h-100 w-100" onClick={handleClose}></Link></Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body >

        
            <div className="footer">
              <div className="container">
                <Link
                  onClick={handleClose}
                  to="/es/courses-list"
                  className="no-underline">
                  <span className="text-sm xl:text-xs font-semibold text-gray-700">
                    Cursos
                  </span>
                </Link>

                <Link
                  onClick={handleClose}
                  to="/es/all-batches"
                  className="no-underline">
                  <span className="text-sm xl:text-xs font-semibold text-gray-700">
                    Próximos lotes
                  </span>
                </Link>
              </div>
              <hr></hr>
              <div onClick={handleClose}>
                <Header />
              </div>




            </div>
          </Offcanvas.Body>

          <div class="offcanvas-footer">
          <div className="footer-bottom">
              <Provider>
                <Flag />
              </Provider>
            </div>
          </div>
        </Offcanvas>

        <div className="row align-items-center">
          <div className="col-2 d-block d-lg-none">
            <button aria-label="bi-text-left" className="btn-site bars-sidemenu" onClick={handleShow}>
              <span><i className="bi bi-text-left"></i></span>
            </button>
          </div>

          <div className="col-lg-4 col-8 mainlogo-dblock">
            <div className="d-inline-block align-middle mr-10">
              <Link to="/es/">
                <img src={logo} className="w-40 mainlogo" alt="logo" />
              </Link>
            </div>
           
          </div>

          <div className="col d-none d-lg-block allcour-batchcol">
            <ul className="d-flex flex-wrap justify-content-center align-items-center m-0 p-0">
              <li className="nav-item">
                <Link
                  to="/es/courses-list"
                  className="no-underline text-md font-semibold nav-link"
                  style={{ color: "rgb(23 35 60)" }}>
                  <span>Cursos</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/es/all-batches"
                  className="no-underline text-md font-semibold nav-link"
                  style={{ color: "rgb(23 35 60)" }}>
                  <span>Próximos lotes</span>
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-lg-4 col-2 d-flex align-items-center justify-content-end">
            <div className="d-none d-lg-block">
              <Provider>
                <Flag />
              </Provider>
            </div>

            <div className=" ml-4 pr-lg-2 text-right text-lg-left">
              <Provider>
                <SearchCourses />
              </Provider>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
export default Navbars;



