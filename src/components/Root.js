import React from "react";
//import { Link } from "react-router-dom";
import { Facebook,Instagram,Linkedin,Whatsapp,Twitter, Mailbox} from 'react-bootstrap-icons';
import "bootstrap/dist/css/bootstrap.css";
import {
  Button,
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
} from "react-bootstrap";
import "../static/Home.css"; 
import logo from "../images/logo.png";


function Root() { 
    return (
      <>
        <Navbar className="navbar" expand="lg">
          <img alt="logo" className="logo" src={logo} />
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
         
            {/* <Nav className="nav"> */}
              <Nav.Link href="/home">HOME</Nav.Link>
              <NavDropdown title="SERVICES">
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
              <Nav.Item>
                <a href="https://web.facebook.com/SeedTonic/"><button className="icon-i"> <Instagram/></button></a>              
              </Nav.Item>
              <Nav.Item>
                <a href="https://web.facebook.com/SeedTonic/"><button className="icon-f"><Facebook/></button></a>              
              </Nav.Item>
              <Nav.Item>
                <a href="https://twitter.com/SeedTonic"><button className="icon-t"><Twitter/></button></a>                
              </Nav.Item>          
              <Nav.Item>
                <a href="https://www.linkedin.com/in/seed-tonic-5a53481a3/"><button className="icon-l"><Linkedin/></button></a>              
              </Nav.Item>              
              <Nav.Item>
                <a href="mailto:seedtonic@gmail.com"><button className="icon-m"><Mailbox/></button></a>                
              </Nav.Item>
            {/* </Nav> */}
            <Form inline className="form">
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
            </Navbar>
            <div className="marquee"><b> <marquee> HOME OF TALENT</marquee></b></div>
            <a href="https://wa.me/254701103297"><button className="whatsapp"><Whatsapp/></button></a>  
      </>
    );
    }
export default Root;
