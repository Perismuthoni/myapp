import React from "react";
//import { Link } from "react-router-dom";
import { Whatsapp} from 'react-bootstrap-icons';
import "bootstrap/dist/css/bootstrap.css";
import {
  Navbar,
  Nav,
  NavDropdown,
} from "react-bootstrap";
import "../static/Root.css"; 
import logo from "../images/logo.png";


function Root() { 
    return (
      <>
      <div className="root">
        <Navbar className="navbar" expand="lg">
          <img alt="logo" className="logo" src={logo} />
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
         
            {/* <Nav className="nav"> */}
              <Nav.Link href="/home">HOME</Nav.Link>
              <NavDropdown title="SERVICES" className="dropdown-content">
                <NavDropdown.Item href="/photography">
                  Photography & Videography
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/audio">
                  Audio Recording
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/music">
                  School of Music
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/video">
                  School of Photography & Videography
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/advertisement">
                  Advertisement
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/emanagement">
                  Event Management
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/profile">PROFILE</Nav.Link>
              <Nav.Link href="/events">EVENTS</Nav.Link>
              <Nav.Link href="/gallery">GALLERY</Nav.Link>
              <Nav.Link href="/about">CONTACT US</Nav.Link>           
            </Navbar>
           
           
            <a href="https://wa.me/254710424010"><button className="whatsapp"><Whatsapp/></button></a>  
            </div>
      </>
    );
    }
export default Root;
