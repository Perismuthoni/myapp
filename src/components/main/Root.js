import React, { useState } from "react";
import { Whatsapp } from "react-bootstrap-icons";
import "bootstrap/dist/css/bootstrap.css";
import "../../static/main/Root.css";
import logo from "../../images/logo.png";

function Root() {
  const [display, setDisplay] = useState();
  const [readMore, setReadMore] = useState(false);
  const linkName = readMore ? (
    <p>
      {" "}
      <h6>SERVICES &#8593;</h6>{" "}
    </p>
  ) : (
    <p>
      {" "}
      <h6> SERVICES &#8595; </h6>{" "}
    </p>
  );
  const linkName1 = display ? (
    <p>
      {" "}
      <h6>&#9776;  </h6>{" "}
    </p>
  ) : (
    <p>
      {" "}
      &#9776; SEEDTONIC {" "}
    </p>
  );
  const extraContent = (
    <div>
      <p>
        <a href="/photography">Photography</a>{" "}
      </p>
      <p>
        <a href="/music">Music/Audio Production</a>
      </p>
      
      
      <p>
        <a href="/band">Seedtonic Band</a>{" "}
      </p>
      <p>
        <a href="/video">Video Production</a>{" "}
      </p>
      <p>
        <a href="./film">Film Production</a>{" "}
      </p>
      
      <p>
        <a href="/emanagement">Event Management</a>{" "}
      </p>       
      
     
      <p>
        <a href="artist">Artist Management & Markerting</a>{" "}
      </p>
      <p>
        <a href="/product">Product Advertising & Marketing</a>{" "}
      </p>
    </div>
  );

  return (
    <>
      <div className="root">
        <button
          className="menubutton"
          type="button"
          onClick={() => {
            setDisplay(!display);
          }}
        >
          {" "}
          {linkName1}{" "}
        </button>
        {display && (
          <div className="contain"><hr/>
            <img alt="logo" className="logo" src={logo} /> <br />
            <p>
              <a href="/home"> HOME</a>
            </p>
            
            
            <p>
              <button
                className="testbutton"
                onClick={() => {
                  setReadMore(!readMore);
                }}
              >
                {" "}
                {linkName}
              </button>
              {readMore && extraContent}
            </p>
            <p>
              {" "}
              <a href="/profile">PROFILE</a>
            </p>
            <p>
              {" "}
              <a href="/events">EVENTS</a>
            </p>
            <p>
              {" "}
              <a href="/gallery">GALLERY</a>
            </p>
            <p>
              {" "}
              <a href="/about">CONTACT US</a>
            </p>
          </div>
        )}
      </div>
      <a href="https://wa.me/254710424010">
        <button className="whatsapp">
          <Whatsapp />
        </button>
      </a>
    </>
  );
}
export default Root;
