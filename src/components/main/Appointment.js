import React, { useState, useEffect } from "react";
import "../../static/Appointment.css";

//import ReactTable from "react-table-6";  
//import "react-table-6/react-table.css"; 
//import Profile  from "./components/Profile"   
  

function Appointment() { 
  
  const [photographyserviceData, setPhotographyserviceState] = useState([]);
  const getPhotographyserviceData = () => {
    return fetch("http://127.0.0.1:5000/api/music").then((res) =>
      res.json()
    );
  };
  useEffect(() => {
    getPhotographyserviceData().then((resp) => {
      const data = resp.photographyservice;
      setPhotographyserviceState(data);
    });
  });
    
  const [photographypackageData, setPhotographypackageState] = useState([]);
  const getPhotographypackageData = () => {
    return fetch("http://127.0.0.1:5000/api/music").then((res) =>
      res.json()
    );
  };
  useEffect(() => {
    getPhotographypackageData().then((resp) => {
      const data = resp.photographypackage;
      setPhotographypackageState(data);
    });
  });

  const [photographysessionData, setPhotographysessionState] = useState([]);
  const getPhotographysessionData = () => {
    return fetch("http://127.0.0.1:5000/api/music").then((res) =>
      res.json()
    );
  };
  useEffect(() => {
    getPhotographysessionData().then((resp) => {
      const data = resp.photographysession;
      setPhotographysessionState(data);
    });
  });
  return (
    <>
      <div className="appointment">     <form>      <center>

         <p>Photograpy & Videograpy Appointment Form</p> <br/>
         <p>email:</p>            <input type="email" />
          <p>Phone Number:</p>         <input type="tel" />  <br/> 

          <label for="service">select service:</label>
            <select id="service" name="service">
            {photographyserviceData}
            </select>

            <label for="package">Select package</label>
            <select id="package" name="package">
            {photographypackageData}
            </select>

            <label for="date">Select date</label> <br/> 
            <input type="date"/><br/>

            <label for="session">Select session</label>
            <select id="session" name="session">
            {photographysessionData}
            </select>

            <p>Venue:</p>
            <input type="text" placeholder=" studio or your preferred location " /><br/>
            <p><b>THANK YOU</b></p>       


         </center>     </form>      </div>
    </>
  );
} 

export default Appointment;  