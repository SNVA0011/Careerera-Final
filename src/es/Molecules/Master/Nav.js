import React from "react"; 
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


const Navs = () => {


  return (
    <div className="full-w navbar-highcr background1 z-0 sticky top-28 z-10 des-explornav">
      <div className="container">
        <Navbar variant="dark" className="shadow-0">
          <Nav className="me-auto">
            <Nav.Link href="#description">Descripción</Nav.Link>
            <Nav.Link href="#carriculum">Plan de estudios</Nav.Link>
            <Nav.Link href="#Careera">Por qué careerera</Nav.Link>
            <Nav.Link href="#HiringPartner">Socios de contratación</Nav.Link>
            <Nav.Link href="#query">Inscribirse</Nav.Link>
            <Nav.Link href="#FAQ">Preguntas Más Frecuentes</Nav.Link> 
            <Nav.Link href="#review">Reseñas</Nav.Link>
          </Nav>
        </Navbar>
      </div>
    </div>
  )
}
export default Navs;
 