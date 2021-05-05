import React, { useState, useEffect } from "react";
import "../../static/forms.css";
   
  

function Videoform() { 
  
    
 
  const [videoserviceData, setVideoserviceState] = useState([]);
  const getVideoserviceData = () => {
    return fetch("http://127.0.0.1:5000/api/music").then((res) =>
      res.json()
    );
  };
  useEffect(() => {
    getVideoserviceData().then((resp) => {
      const data = resp.videoservice;
      setVideoserviceState(data);
    });
  });
    
  const [videopackageData, setVideopackageState] = useState([]);
  const getVideopackageData = () => {
    return fetch("http://127.0.0.1:5000/api/music").then((res) =>
      res.json()
    );
  };
  useEffect(() => {
    getVideopackageData().then((resp) => {
      const data = resp.videopackage;
      setVideopackageState(data);
    });
  });

  const [videosessionData, setVideosessionState] = useState([]);
  const getVideosessionData = () => {
    return fetch("http://127.0.0.1:5000/api/music").then((res) =>
      res.json()
    );
  };
  useEffect(() => {
    getVideosessionData().then((resp) => {
      const data = resp.videosession;
      setVideosessionState(data);
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
            {videoserviceData}
            </select>

            <label for="package">Select package</label>
            <select id="package" name="package">
            {videopackageData}
            </select>

            <label for="date">Select date</label> <br/> 
            <input type="date"/><br/>

            <label for="session">Select session</label>
            <select id="session" name="session">
            {videosessionData}
            </select>

            <p>Venue:</p>
            <input type="text" placeholder=" studio or your preferred location " /><br/>
            <input type="submit" /><br/>
            <p><b>THANK YOU</b></p>       


         </center>     </div>  </center>    </div>
    </>
  );
} 

  export default Videoform;