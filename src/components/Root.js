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


class Root extends React.Component {
  render() {
    return (
      <>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">
            <img alt="logo" className="logo" src={logo} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <NavDropdown title="CUSTOMER MENU" bg="gold" id="basic-nav-dropdown">
                <NavDropdown.Item href="/home">HOME</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/services">SERVICES</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/events">EVENTS</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/appointment">
                  BOOK APPOINTMENT
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/gallery">GALLERY</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/about">ABOUT US</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="PHOTOGRAPHER'S MENU" bg="gold" id="basic-nav-dropdown">
                <NavDropdown.Item href="/home">HOME</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/services">LEAVE REVIEW</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/gallery">OUR TEAM</NavDropdown.Item>
              </NavDropdown>
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
}
export default Root;
