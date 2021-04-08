import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import ReactTable from "react-table-6";
import "react-table-6/react-table.css";



//import { Link } from "react-router-dom";
import "../static/Profile.css";
   
  

function Profile() { 
  const columns = [
    {
      Header: "Service",
      accessor: "name",
    },
    {
      Header: "Package",
      accessor: "package",
    },
    {
      Header: "price",
      accessor: "price",
    },
    {
      Header: "Date",
      accessor: "date",
    },
    {
      Header: "Venue",
      accessor: "venue",
    },
    
  ];
  const [profileData, setProfileState] = useState([]);
  const getProfileData = () => {
    return fetch("http://127.0.0.1:5000/api/profile").then((res) =>
      res.json()
    );
  };
  useEffect(() => {
    getProfileData().then((resp) => {
      const data = resp.Profile;
      setProfileState(data);
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

        <div class="cardv">  
        <center>
    <h4>myemail@gmail.com</h4>
    <p> +254701103297 <br></br> </p>
    </center>
</div> 

<p> <center><h3>My Appointments</h3></center></p>

 
<ReactTable
                data={profileData}
                columns={columns}
                defaultPageSize={4}
              />
        
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