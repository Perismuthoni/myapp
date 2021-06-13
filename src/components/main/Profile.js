import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect} from "react";

import "../../static/main/Profile.css";
   
  

function Profile() { 
  

  // const [profileData, setProfileState] = useState([]);
  // const getProfileData = () => {
  //   return fetch("http://127.0.0.1:5000/api/user").then((res) =>
  //     res.json()
  //   );
  // };
  // useEffect(() => {
  //   getProfileData().then((resp) => {
  //     const data = resp.Profile;
  //     setProfileState(data);
  //   });
  // });
const [usersData, setUsersState]=useState([]);
const getUsersData = () => {
    return fetch("http://127.0.0.1:5000/api/user").then((res) =>
      res.json()
    );
  };
  useEffect(() => {
    getUsersData().then((resp) => {
      const data = resp.user;
      setUsersState(data);
    });
  });

  const [{alt, src}, setImg] = useState({
    // src: placeholder,
    alt: 'Upload an Image'
});
  const handleImg = (e) => {
    if(e.target.files[0]) {
      setImg({
          src: URL.createObjectURL(e.target.files[0]),
          alt: e.target.files[0].name
      });
    }}
  return (
    <>
<div className="profile">
<form encType="multipart/form-data">
            <div className="img-container">
                <input
                 className="visually-hidden" 
                    type="file" 
                    accept=".png, .jpg, .jpeg" 
                    id="photo"                    
                     onChange={handleImg}

                />
               
                  
               
                <img src={src} alt={alt} className="form-img__img-preview"/>
            </div>
        </form>

        {usersData.map(user => 
        <div>
          <p>Name:{user.firstName} {user.lastName} </p>
          <p>Email:{user.email}</p>
        </div>
        )}

<p> <center><h3>My Appointments</h3></center></p>

 

        
      <div className="profile">
        <container>
          
          <table className="newappointment">
            <tr><b><u>Book new appointment</u></b></tr>
            <tr><Link to="/photographyform">photography or Videography</Link></tr>
            <tr><Link to="/audioform">Audio recording</Link></tr>
            <tr><Link to="/musicform">School of music</Link></tr>
            <tr><Link to="/videoform">School of Photography & Videography</Link></tr>
            <tr><Link to="/emanagementform">Event Management</Link></tr>
          </table>
        </container>


      <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
        <Link to="/photographyform"> form</Link>
        <Link to="/appointment">appointment</Link>
        
      </div>
      </div>
    </>
  );
}

  export default Profile;