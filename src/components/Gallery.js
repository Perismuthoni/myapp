import React from "react";

function Gallery() {
  return (
    <>
      <div class="some-page-wrapper">
        <div class="row">
          <div class="column">
            <div class="orange-column">Some Text in Column One</div>
          </div>
          <div class="column">
            <div class="blue-column">Some Text in Column Two</div>
          </div>
          <div class="column">
            <div class="green-column">Some Text in Column Three</div>
          </div>
        </div>
        <div class="row 2">
          <div class="column">
            <div class="green-column">Some Text in Row 2, Column One</div>
          </div>
          <div class="column">
            <div class="orange-column">Some Text in Row 2, Column Two</div>
          </div>
          <div class="column">
            <div class="blue-column">Some Text in Row2, Column Three</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Gallery;
