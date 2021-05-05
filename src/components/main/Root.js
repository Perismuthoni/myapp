import React, { useState } from "react";
import { Whatsapp } from "react-bootstrap-icons";
import "bootstrap/dist/css/bootstrap.css";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "../../static/Root.css";
import logo from "../../images/logo.png";

function Root() {
  const [readMore, setReadMore] = useState(false);
  const linkName=readMore? <p>SERVICES &#8593; </p> : <p>SERVICES 	
  &#8595; </p>
  const extraContent = <div>
  <p><a href="/advertisiment"> Adverts</a> </p>
  <p><a href="/photography">Music Production</a></p>
  <p><a href="/photography">Video Production</a> </p>
  <p><a href="/audio">Band</a> </p>
  <p><a href="/emananagement">Event Management</a> </p>
  <p><a href="#">Photography</a> </p>
  <p><a href="#">Dj classes</a> </p>
  <p><a href="/music">School of Music</a> </p>
  <p><a href="#">Film Production</a> </p>
  <p><a href="#">Artist Marketing</a> </p>
  <p><a href="#">Artist Management</a>  </p>
  <p><a href="#"> Marchandise</a></p>      
</div>
 

  return (
        <>
          <button
              className="menubutton"
              type="button"
              
            > MENU</button>
            
             <div className="root">

        <div className="contain">
        <img alt="logo" className="logo" src={logo} /> <br />
          <p>
            <a href="/home"> HOME</a>
          </p><br/>
          <p>
            <button
              className="testbutton"
              onClick= {() => {
                setReadMore(!readMore);
              }}
            > {linkName}</button>
            {readMore && extraContent}
          </p>
          <p> <a href="/profile">PROFILE</a></p>
          <p> <a href="/events">EVENTS</a></p>
          <p> <a href="/gallery">GALLERY</a></p>
          <p> <a href="/about">CONTACT US</a></p>

        <a href="https://wa.me/254710424010">
          <button className="whatsapp">
            <Whatsapp />
          </button>
        </a>
      </div>
      </div>
    </>
  );
}
export default Root;
