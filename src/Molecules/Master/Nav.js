import React, { useContext } from "react";
import { Context } from "../../Api";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


const Navs = (props) => {


  return (
    <div className="full-w navbar-highcr background1 z-0 sticky top-28 z-10 des-explornav">
      <div className="container">
        <Navbar variant="dark" className="shadow-0">
          <Nav className="me-auto">
            <Nav.Link href="#description">Description</Nav.Link>
            <Nav.Link href="#carriculum">Curriculum</Nav.Link>
            <Nav.Link href="#Careera">Why Careerera</Nav.Link>
            <Nav.Link href="#HiringPartner">Hiring Partner</Nav.Link>
            <Nav.Link href="#query">Sign Up</Nav.Link>
            <Nav.Link href="#FAQ">FAQ</Nav.Link> 
            {props.blogShow ? <Nav.Link href="#blog">Blog</Nav.Link> : ''}
            <Nav.Link href="#review">Review</Nav.Link>
          </Nav>
        </Navbar>
      </div>
    </div>
  )
}
export default Navs;

