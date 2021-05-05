import React, { useState, useEffect } from "react";
import "../../static/forms.css";
   
  

function Audioform() { 
  
    
 
  const [audiorecordingserviceData, setAudiorecordingserviceState] = useState([]);
  const getAudiorecordingserviceData = () => {
    return fetch("http://127.0.0.1:5000/api/music").then((res) =>
      res.json()
    );
  };
  useEffect(() => {
    getAudiorecordingserviceData().then((resp) => {
      const data = resp.audiorecordingservice;
      setAudiorecordingserviceState(data);
    });
  });
    
  const [audiorecordingpackageData, setAudiorecordingpackageState] = useState([]);
  const getAudiorecordingpackageData = () => {
    return fetch("http://127.0.0.1:5000/api/music").then((res) =>
      res.json()
    );
  };
  useEffect(() => {
    getAudiorecordingpackageData().then((resp) => {
      const data = resp.audiorecordingpackage;
      setAudiorecordingpackageState(data);
    });
  });

  const [audiorecordingsessionData, setAudiorecordingsessionState] = useState([]);
  const getAudiorecordingsessionData = () => {
    return fetch("http://127.0.0.1:5000/api/music").then((res) =>
      res.json()
    );
  };
  useEffect(() => {
    getAudiorecordingsessionData().then((resp) => {
      const data = resp.audiorecordingsession;
      setAudiorecordingsessionState(data);
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
            {audiorecordingserviceData}
            </select>

            <label for="package">Select package</label>
            <select id="package" name="package">
            {audiorecordingpackageData}
            </select>

            <label for="date">Select date</label> <br/> 
            <input type="date"/><br/>

            <label for="session">Select session</label>
            <select id="session" name="session">
            {audiorecordingsessionData}
            </select>

            <p>Venue:</p>
            <input type="text" placeholder=" studio or your preferred location " /><br/>
            <input type="submit" /><br/>
            <p><b>THANK YOU</b></p>       


         </center>     </div>  </center>    </div>
    </>
  );
} 

  export default Audioform;