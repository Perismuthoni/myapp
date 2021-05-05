import React, { useState, useEffect } from "react";
import "../../static/forms.css";
   
  

function Advertisementform() { 
  
    
 
  const [advertisementserviceData, setAdvertisementserviceState] = useState([]);
  const getAdvertisementserviceData = () => {
    return fetch("http://127.0.0.1:5000/api/music").then((res) =>
      res.json()
    );
  };
  useEffect(() => {
    getAdvertisementserviceData().then((resp) => {
      const data = resp.advertisementservice;
      setAdvertisementserviceState(data);
    });
  });
    
  const [advertisementpackageData, setAdvertisementpackageState] = useState([]);
  const getAdvertisementpackageData = () => {
    return fetch("http://127.0.0.1:5000/api/music").then((res) =>
      res.json()
    );
  };
  useEffect(() => {
    getAdvertisementpackageData().then((resp) => {
      const data = resp.advertisementpackage;
      setAdvertisementpackageState(data);
    });
  });

  const [advertisementsessionData, setAdvertisementsessionState] = useState([]);
  const getAdvertisementsessionData = () => {
    return fetch("http://127.0.0.1:5000/api/music").then((res) =>
      res.json()
    );
  };
  useEffect(() => {
    getAdvertisementsessionData().then((resp) => {
      const data = resp.advertisementsession;
      setAdvertisementsessionState(data);
    });
  });
  return (
    <>
      <div className="appointment">   <center>  <div className="theform" >      <center>

         <p><h4>Photograpy & Videograpy Appointment Form</h4></p> <br/>
         <p>email:</p>            <input type="email" />
          <p>Phone Number:</p>         <input type="tel" />  <br/> 

          <label for="service">select service:</label>
            <select id="service" name="service">
            {advertisementserviceData}
            </select>

            <label for="package">Select package</label>
            <select id="package" name="package">
            {advertisementpackageData}
            </select>

            <label for="date">Select date</label> <br/> 
            <input type="date"/><br/>

            <label for="session">Select session</label>
            <select id="session" name="session">
            {advertisementsessionData}
            </select>

            <p>Venue:</p>
            <input type="text" placeholder=" studio or your preferred location " /><br/>
            <input type="submit" /><br/>
            <p><b>THANK YOU</b></p>       


         </center>     </div>  </center>    </div>
    </>
  );
} 

  export default Advertisementform;