import React from "react";
import "../static/Events.css";
import image4 from "../images/image4.jpg";

function Events() {
  return (
    <div>
      
  
  <div class="card">
  <img className="cardimage" src={image4} alt="Avatar" />
    <h4><b>poetry day</b></h4>
    <p>Date:22/04/2021 <br></br>
    Venue:seedtonic grounds kitengela
    </p>
</div> 
<hr></hr>
<div class="card">
  <img className="cardimage" src={image4} alt="Avatar" />
    <h4><b>Dance day</b></h4>
    <p>Date:22/04/2021 <br></br>
    Venue:seedtonic grounds kitengela
    </p>
</div>
<hr></hr>
<div class="card">
  <img className="cardimage" src={image4} alt="Avatar" />
    <h4><b>Humanity day</b></h4>
    <p>Date:22/04/2021 <br></br>
    Venue:seedtonic grounds kitengela
    </p>
</div>

    </div>
  );
}

export default Events;
