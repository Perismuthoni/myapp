import React from "react";
//import { Link } from "react-router-dom";
import {FacebookShareButton, FacebookIcon,
  EmailShareButton, EmailIcon,
  LinkedinShareButton, LinkedinIcon,
  WhatsappShareButton, WhatsappIcon,
  TwitterShareButton, TwitterIcon, 
  //InstagramShareButton, InstagramIcon,
 // YoutubeShareButton, YoutubeIcon
} from "react-share";

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
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">
            <img alt="logo" className="logo" src={logo} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/home">HOME</Nav.Link>
              <NavDropdown title="SERVICES" bg="gold" id="basic-nav-dropdown">
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
                <NavDropdown.Item href="/advertisement">
                  Advertisement
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/emanagement">
                  Event Management
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/appointment">MY PROFILE</Nav.Link>
              <Nav.Link href="/events">EVENTS</Nav.Link>
              <Nav.Link href="/gallery">GALLERY</Nav.Link>
              <Nav.Link href="/about">ABOUT US</Nav.Link>
              <Nav.Item>
                <FacebookShareButton
                  url={"https://web.facebook.com/SeedTonic/"}
                  quote={"Seedtonic -The home of talents"}
                  hashtag="#SEEDTONIC"
                />
                <FacebookIcon size={36} />
              </Nav.Item>
              <Nav.Item>
                <TwitterShareButton url={"https://twitter.com/SeedTonic"} />
                <TwitterIcon size={36} />
              </Nav.Item>
              <Nav.Item>
                <WhatsappShareButton url={"0701103"} />{" "}
                <WhatsappIcon size={36} />
              </Nav.Item>
              <Nav.Item>
                <LinkedinShareButton
                  url={"https://www.linkedin.com/in/seed-tonic-5a53481a3/"}
                />
                <LinkedinIcon size={36} />
              </Nav.Item>
              <Nav.Item>
                <EmailShareButton url={"hey"} />
                <EmailIcon size={36} />
              </Nav.Item>
            </Nav>
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </>
    );
    }
export default Root;
