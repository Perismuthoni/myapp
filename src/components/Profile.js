import React from "react";
import { Link } from "react-router-dom";
import  { useState } from 'react';



//import { Link } from "react-router-dom";
import "../static/Profile.css";
   
  

function Profile() { 

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

<form encType="multipart/form-data">
            <h1 className="form__title">User Name</h1>
            <div className="form__img-input-container">
                <input 
                    type="file" 
                    accept=".png, .jpg, .jpeg" 
                    id="photo" 
                    className="visually-hidden"
                     onChange={handleImg}

                />
                <label htmlFor="photo" className="form-img__file-label">
                    <svg width="150" height="150" viewBox="0 0 24 24" fill="none" stroke="#56ceef" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5.52 19c.64-2.2 1.84-3 3.22-3h6.52c1.38 0 2.58.8 3.22 3" />
                        <circle cx="12" cy="10" r="3" />
                        <circle cx="12" cy="12" r="10" />
                    </svg>
                </label>
                <img src={src} alt={alt} className="form-img__img-preview"/>
            </div>
        </form>
      <div className="profile">
        <div className="info">
          
        </div>




      <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
        <Link to="/profile">user profile</Link>
        
      </div>
    </>
  );
}

  export default Profile;