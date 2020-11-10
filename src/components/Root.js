import React from "react";
import { Link } from "react-router-dom";
import {FacebookShareButton, FacebookIcon,
  EmailShareButton, EmailIcon,
  LinkedinShareButton, LinkedinIcon,
  WhatsappShareButton, WhatsappIcon,
  TwitterShareButton, TwitterIcon, 
  //InstagramShareButton, InstagramIcon,
 // YoutubeShareButton, YoutubeIcon
} from "react-share";

import "bootstrap/dist/css/bootstrap.css";
import "../static/Home.css"; 
import logo from "../images/logo.png";


class Root extends React.Component {
  render() {
    return (
      <>
        <nav className="navbar">
          <Link to="#">
            <img alt="logo" className="logo" src={logo} />
          </Link>
          <Link to="/home">HOME</Link>
          <Link to="/services">STUDIO</Link>
          <Link to="/events">EVENTS</Link>
          <Link to="/appointment">BOOK APPOINTMENT</Link>
          <Link to="/gallery">GALLERY</Link>
          <Link to="/about">ABOUT US</Link>
        </nav>
        <div class="some-page-wrapper"></div>
        <nav className="navbar fixed-bottom navbar-light" role="navigation">
          <FacebookShareButton
            url={"https://web.facebook.com/SeedTonic/"}
            quote={"Seedtonic -The home of talents"}
            hashtag="#SEEDTONIC"
          />
          <FacebookIcon size={36} />
          <TwitterShareButton url={"https://twitter.com/SeedTonic"} />
          <TwitterIcon size={36} />
          <WhatsappShareButton url={"0701103"} /> <WhatsappIcon size={36} />
          <LinkedinShareButton
            url={"https://www.linkedin.com/in/seed-tonic-5a53481a3/"}
          />{" "}
          <LinkedinIcon size={36} />
          <EmailShareButton url={"hey"} />
          <EmailIcon size={36} />
        </nav>
      </>
    );
  }
}
export default Root;
