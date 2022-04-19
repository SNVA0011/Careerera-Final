import React, { useContext } from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Context, Provider } from '../../Api'

const Navs = () => {
  const { value5, value6 } = useContext(Context)
  const [Catfinal, Catsetfinal] = value5
  const [Catsts, Catloadsts] = value6
 

  return (
    Catsts ?
    <div className="full-w navbar-highcr background1 z-0 sticky top-28 z-10 des-explornav">
      <div className="container">
        <Navbar variant="dark" className="shadow-0">
          <Nav className="me-auto">
            <Nav.Link href="#Description">Description</Nav.Link>
            <Nav.Link href="#explore">Explore Courses</Nav.Link>
            <Nav.Link href="#why">Why {Catfinal[0].category_title}</Nav.Link>
            <Nav.Link href="#FAQ">FAQ</Nav.Link>
            <Nav.Link href="#HiringPartner">Users From</Nav.Link>
            <Nav.Link href="#ApplicationProcess">Application Process</Nav.Link>
          </Nav>
        </Navbar>
      </div>
    </div>
    :''
  )
}
export default Navs;




