import React, { useState, useEffect } from "react";
import ReactTable from "react-table-6";
import "react-table-6/react-table.css";
//import "../../static/Services.css";
import { Link } from "react-router-dom";
import photo from "../../images/services/image6.jpg";

function Advertisement() {
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
  const [advertisementData,setAdvertisementState] = useState([]);
  const getAdvertisementData = () => {
    return fetch("http://127.0.0.1:5000/api/music").then((res) =>
      res.json()
    );
  };
  useEffect(() => {
    getAdvertisementData().then((resp) => {
      const data = resp.advertisement;
      setAdvertisementState(data);
    });
  });

  return (
    <div className="services">
     
          <div className="photography">
            <p>
              <center>PHOTOGRAPHY &VIDEOGRAPHY
                <br></br>
                <button className="button"> 
                <Link to="/advertisementform"><center>Book Appointment</center></Link>
              </button>
              </center>
            </p>
            <div className="table">
              <ReactTable
                data={advertisementData}
                columns={columns}
                defaultPageSize={8}
              />
            </div>
        </div>
        
          <p>  <center>
            Modern tailor made adverts to suit your specific business.
            Be ahead of the competition with some cutting edge advertings from seedtonic studio 
            </center> </p>
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
          <p>
            <center>We are here to promote your business</center>
          </p>
      </div>
  );
}

export default Advertisement;
