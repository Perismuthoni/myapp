import React, { useState, useEffect } from "react";
import ReactTable from "react-table-6";
import "react-table-6/react-table.css";
import "../../static/Services.css";
import { Link } from "react-router-dom";
import photo from "../../images/services/photo.jpeg";
import ourwork1 from "../../images/services/photo.jpeg";
import g1 from "../../images/gallery/g1.jpeg";
import g4 from "../../images/gallery/g4.jpeg";
import g12 from "../../images/gallery/g12.jpeg";

function Photography() {
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
  ];
  const [photographyData, setPhotographyState] = useState([]);
  const getPhotographyData = () => {
    return fetch("http://127.0.0.1:5000/api/music").then((res) =>
      res.json()
    );
  };
  useEffect(() => {
    getPhotographyData().then((resp) => {
      const data = resp.Photography;
      setPhotographyState(data);
    });
  });

  return (
    <div className="services">
      
          <div className="photography">
            <p>
              <center>PHOTOGRAPHY &VIDEOGRAPHY <br></br>
              <button className="button">
                <Link to="/photographyform">Book Appointment</Link>
              </button>
              </center>
            </p>
            <div className="table">
              <ReactTable
                data={photographyData}
                columns={columns}
                defaultPageSize={8}
              />
            </div>
          </div>
          <p><center>
           Whats better than memories captured perfectly, we freeze and preserve moments that whenever
            you stare at the picture you re-live every part of your moment.
            With seedtonic photography isn't just taking pictures its capturing  all the details because every detail counts.
            </center></p>
          <div className="">
            <center>
              <img
                className="photo"
                src={photo}
                alt="Logo"
                height="300px"
                width="300px"
                loading="lazy"
              />
            </center>
          </div>
          <p><center>
            Your smile after seeing the finished work is our greatest delight
            </center></p>
          <div>
            <center>
            <p><b>Our Work</b></p>
            <img src={ourwork1} alt="Logo" height="300px" width="300px"  loading="lazy" />
            <img src={g1} alt="Logo" height="300px" width="300px"  loading="lazy" />  
            <img src={g4} alt="Logo" height="300px" width="300px"  loading="lazy" />
            <img src={g12} alt="Logo" height="300px" width="300px"  loading="lazy" />
            </center>
          </div>
    </div>
  );
}

export default Photography;
