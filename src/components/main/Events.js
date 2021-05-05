import React from "react";
import "../../static/Events.css";
import event1 from "../../images/gallery/g4.jpeg";
import event2 from "../../images/gallery/g6.jpeg";
import event3 from "../../images/gallery/g7.jpeg";

function Events() {
  return (
    <div>
      
  
  <div class="cardholder">
  <img className="cardimage" src={event1} alt="Avatar" loading="lazy" />
    <h4><b>poetry day</b></h4>
    <p>Date:22/04/2021 <br></br>
    Venue:seedtonic grounds kitengela
    </p>
</div> 
<hr></hr>
<div class="cardholder">
  <img className="cardimage" src={event2} alt="Avatar" loading="lazy" />
    <h4><b>Dance day</b></h4>
    <p>Date:22/04/2021 <br></br>
    Venue:seedtonic grounds kitengela
    </p>
</div>
<hr></hr>
<div class="cardholder">
  <img className="cardimage" src={event3} alt="Avatar" loading="lazy"/>
    <h4><b>Humanity day</b></h4>
    <p>Date:22/04/2021 <br></br>
    Venue:seedtonic grounds kitengela
    </p>
</div>

    </div>
  );
}

export default Events;
