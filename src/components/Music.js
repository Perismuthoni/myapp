import React, { useState, useEffect } from "react";
import ReactTable from "react-table-6";
import "react-table-6/react-table.css";
import "../static/Services.css";
import { Link } from "react-router-dom";
import photo from "../images/Services/sample.jpg";

function Music() {
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
  const [musicData, setMusicState] = useState([]);
  const getMusicData = () => {
    return fetch("http://127.0.0.1:5000/api/services").then((res) =>
      res.json()
    );
  };
  useEffect(() => {
    getMusicData().then((resp) => {
      const data = resp.audio;
      setMusicState(data);
    });
  });

  return (
    <div className="services">
     
          <div className="photography">
            <p>
              <center>SCHOOL OF MUSIC
                <br></br>
              <button className="button">
                <Link to="/login">Book Appointment</Link>
              </button>
              </center>
            </p>
            <div className="table">
              <ReactTable
                data={musicData}
                columns={columns}
                defaultPageSize={8}
              />
            </div>
          </div>
          <p>
          We are determined to make the world a better place by empowering people with talent.
          we are here to guide you through your music career.
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

export default Music;
