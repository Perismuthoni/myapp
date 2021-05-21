import React, { useState, useEffect } from "react";
import ReactTable from "react-table-6";
import "react-table-6/react-table.css";
//import "../../static/Services.css";
import { Link } from "react-router-dom";
import photo from "../../images/services/image5.jpg";

function Emanagement() {
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
  const [audioData, setAudioState] = useState([]);
  const getAudioData = () => {
    return fetch("http://127.0.0.1:5000/api/music").then((res) =>
      res.json()
    );
  };
  useEffect(() => {
    getAudioData().then((resp) => {
      const data = resp.audio;
      setAudioState(data);
    });
  });

  return (
    <div className="services">
      
       
          <div className="photography">
            <p>
              <center>EVENT MANAGEMENT
                <br></br>
                <button className="button">
                <Link to="/emanagementform">Book Appointment</Link>
              </button>
              </center>
            </p>
            <div className="table">
              <ReactTable
                data={audioData}
                columns={columns}
                defaultPageSize={8}
              />
            </div>
          </div>
       
       
          <p><center>
            We know your events are important you can trust us to ensure your event is not only successful but full of lovely memories
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
          <p><center>
            They say the more the merrier We say the better the management the broader the smile
            </center></p>
    </div>
  );
}

export default Emanagement;
