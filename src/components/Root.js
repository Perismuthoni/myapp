import React from "react";
import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";

class Root extends React.Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-dark bg-dark mb-3">
          <Link to="/home">HOME</Link>
          <Link to="/services">SERVICES</Link>
          <Link to="/events">EVENTS</Link>
          <Link to="/appointment">BOOK APPOINTMENT</Link>
          <Link to="/gallery">GALLERY</Link>
          <Link to="/about">ABOUT US</Link>
        </nav>
      </>
    );
  }
}
export default Root;
