import React from "react";
import "../../static/services/video.css";
import "../../static/services/general.css";
import v1 from "../../images/photography/2.jpg";
import v2 from "../../images/photography/2.jpg";
import v3 from "../../images/photography/2.jpg";
import v4 from "../../images/photography/2.jpg";
import v5 from "../../images/photography/2.jpg";
function Video() {
  return (
    <div className="page">
      <p className="title">
        <b>
          <center>Seedtonic Video Production</center>
        </b>
      </p>
      <div className="description">
      <center>
          Exceptional Quality photography
          <br />
          Lets capture every moment for what is life without memories
          <h3>custom packages</h3>
        </center>
        <div className="row">
        <div className="column">
          <img
            className="image"
            src={v1}
            alt=""
            loading="lazy"
          />
          <p>
            <b>Band</b>:<br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque sed molestie augue, et suscipit ligula. Etiam mollis in
            odio condimentum consequat. Aliquam lacinia vel orci suscipit
            bibendum.
            
          </p>
        </div>
        <div className="column">
          <img
            className="image"
            src={v2}
            alt=""
            loading="lazy"
          />
          <p>
            <b>Band</b>:<br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque sed molestie augue, et suscipit ligula. Etiam mollis in
            odio condimentum consequat. Aliquam lacinia vel orci suscipit
            bibendum.
            
          </p>
        </div>
        <div className="column">
          <img
            className="image"
            src={v3}
            alt=""
            loading="lazy"
          />
          <p>
            <b>Band</b>:<br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque sed molestie augue, et suscipit ligula. Etiam mollis in
            odio condimentum consequat. Aliquam lacinia vel orci suscipit
            bibendum.
            
          </p>
        </div>
        <div className="column">
          <img
            className="image"
            src={v4}
            alt=""
            loading="lazy"
          />
          <p>
            <b>Band</b>:<br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque sed molestie augue, et suscipit ligula. Etiam mollis in
            odio condimentum consequat. Aliquam lacinia vel orci suscipit
            bibendum.
            
          </p>
        </div>
        <div className="column">
          <img
            className="image"
            src={v5}
            alt=""
            loading="lazy"
          />
          <p>
            <b>Band</b>:<br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque sed molestie augue, et suscipit ligula. Etiam mollis in
            odio condimentum consequat. Aliquam lacinia vel orci suscipit
            bibendum.
            
          </p>
        </div>
        </div>
      </div>
    </div>
  );
}
export default Video;