import React from "react";

//import { Link } from "react-router-dom";
import "../../static/forms.css";
   
  

function Emanagementform() { 
  
    
  return (
    <>
      <div className="profile">
        <form className="form">
          <center>
            <u>Event Management Appointment Form</u>
          </center>
          <div>
            <p>First Name:</p>
            <input type="text" />
            <p>Last Name:</p>
            <input type="text" />
            <p>email:</p>
            <input type="email" />
            <p>Phone Number:</p>
            <input type="tel" />
          </div>
          <div>
            <label for="service">select service:</label>
            <select id="service" name="service">
        
            </select>
          </div>
          <div>
            <label for="service">select service:</label>
            <select id="service" name="service">
              <option value="photography">studio photography</option>
              <option value="photography">outdoor photography</option>
              <option value="audio">Audio recording</option>
              <option value="audio">outdoor videography</option>
            </select>
          </div>
          <div>
            <label for="package">Select package</label>
            <select id="package" name="package">
              <option value="photography">single</option>
              <option value="photography">economic</option>
              <option value="photography">unlimited</option>
            </select>
          </div>
          <div>
            <p>
              <label for="date">Select date</label>
            </p>
            <input type="date" />
          </div>
          <div>
            <label for="session">Select session</label>
            <select id="session" name="session">
              <option value="photography">0600hrs-0900hr</option>
              <option value="photography">0800hrs-1000hr</option>
              <option value="photography">1100hrs-1300hr</option>
              <option value="photography">0900hrs-1200hr</option>
              <option value="photography">1400hrs-1700hr</option>
              <option value="photography">1600hrs-1900hr</option>
            </select>
          </div>
          <div>
            <label for="confirm">receive confirmation code by</label>
            <br />
            <input type="radio" value="Male" name="gender" /> email
            <input type="radio" value="Female" name="gender" /> SMS
          </div>
          <div>
            <input type="submit" />
          </div>
        </form>
        <div>
          <p>
            THANK YOU,
            <br />
            You will receive a confirmation
          </p>
        </div>
        <div>
          <p>
            THANK YOU,
            <br />
            You will receive a confirmation code
          </p>
        </div>
      </div>
    </>
  );
}

  export default Emanagementform;