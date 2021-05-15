import React, { useState, useEffect } from "react";
import ReactTable from "react-table-6";
import "react-table-6/react-table.css";
import "../../static/Services.css";
import { Link } from "react-router-dom";
import photo from "../../images/services/sample.jpg";

function Video() {
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
  const [videoData, setVideoState] = useState([]);
  const getVideoData = () => {
    return fetch("http://127.0.0.1:5000/api/services").then((res) =>
      res.json()
    );
  };
  useEffect(() => {
    getVideoData().then((resp) => {
      const data = resp.audio;
      setVideoState(data);
    });
  });

  return (
    <div className="services">
      
          <div className="photography">
            <p>
              <center>SCHOOL OF VIDEOGRAPHY 
                <br></br>
              <button className="button">
                <Link to="/videoform">Book Appointment</Link>
              </button>
              </center>
            </p>
            <div className="table">
              <ReactTable
                data={videoData}
                columns={columns}
                defaultPageSize={8}
              />
            </div>
          </div>
          <p>
            In fine art of any media, there are seven basic elements of art.
            There are also the principles of design, but I will get to that in
            another post. I learned the elements of art while studying fine arts
            at Young Harris College. While we only applied these to other
            mediums such as painting, charcoal, and pencil drawing, they are
            just as applicable to photography
          </p>
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
            In fine art of any media, there are seven basic elements of art.
            There are also the principles of design, but I will get to that in
            another post. I learned the elements of art while studying fine arts
            at Young Harris College. While we only applied these to other
            mediums such as painting, charcoal, and pencil drawing, they are
            just as applicable to photography
          </p>
    </div>
  );
}

export default Video;
