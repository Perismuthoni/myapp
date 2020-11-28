import React from "react";
import one from "../images/one.jpg";
import two from "../images/two.jpg";
import three from "../images/three.jpg";
import four from "../images/four.jpg";
import five from "../images/five.jpg";
import six from "../images/six.jpg";

function Gallery() {
  return (
    <>
      <div class="some-page-wrapper">
        <div class="row">
          <div class="column">
            <div class="orange-column">
              <img src={one} alt="Logo" width="500" height="450" />
            </div>
          </div>
          <div class="column">
            <div class="blue-column">
              <img src={two} alt="Logo" width="500" height="450" />
            </div>
          </div>
          <div class="column">
            <div class="green-column">
              <img src={three} alt="Logo" />
            </div>
          </div>
        </div>
        <div class="row 2">
          <div class="column">
            <div class="green-column">
              <img src={four} alt="Logo" />
            </div>
          </div>
          <div class="column">
            <div class="orange-column">
              <img src={five} alt="Logo" />
            </div>
          </div>
          <div class="column">
            <div class="blue-column">
              <img src={six} alt="Logo" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Gallery;
