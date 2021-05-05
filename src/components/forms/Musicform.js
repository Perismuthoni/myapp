import React, { useState, useEffect } from "react";
import "../../static/forms.css";
   
  

function Musicform() { 
  
    
 
  const [musicserviceData, setMusicserviceState] = useState([]);
  const getMusicserviceData = () => {
    return fetch("http://127.0.0.1:5000/api/music").then((res) =>
      res.json()
    );
  };
  useEffect(() => {
    getMusicserviceData().then((resp) => {
      const data = resp.musicservice;
      setMusicserviceState(data);
    });
  });
    
  const [musicpackageData, setMusicpackageState] = useState([]);
  const getMusicpackageData = () => {
    return fetch("http://127.0.0.1:5000/api/music").then((res) =>
      res.json()
    );
  };
  useEffect(() => {
    getMusicpackageData().then((resp) => {
      const data = resp.musicpackage;
      setMusicpackageState(data);
    });
  });

  const [musicsessionData, setMusicsessionState] = useState([]);
  const getMusicsessionData = () => {
    return fetch("http://127.0.0.1:5000/api/music").then((res) =>
      res.json()
    );
  };
  useEffect(() => {
    getMusicsessionData().then((resp) => {
      const data = resp.musicsession;
      setMusicsessionState(data);
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
            {musicserviceData}
            </select>

            <label for="package">Select package</label>
            <select id="package" name="package">
            {musicpackageData}
            </select>

            <label for="date">Select date</label> <br/> 
            <input type="date"/><br/>

            <label for="session">Select session</label>
            <select id="session" name="session">
            {musicsessionData}
            </select>

            <p>Venue:</p>
            <input type="text" placeholder=" studio or your preferred location " /><br/>
            <input type="submit" /><br/>
            <p><b>THANK YOU</b></p>       


         </center>     </div>  </center>    </div>
    </>
  );
} 

  export default Musicform;