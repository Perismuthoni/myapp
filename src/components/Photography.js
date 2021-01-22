import React, { useState, useEffect } from "react";
import ReactTable from "react-table-6";
import "react-table-6/react-table.css";
import "../static/Services.css";
import { Link } from "react-router-dom";
import photo from "../images/four.jpg";

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
      <div class="row">
        <div class="column">
          <div className="photography">
            <p>
              <center>PHOTOGRAPHY &VIDEOGRAPHY</center>
            </p>
            <p>
              <button className="button">
                <Link to="/login">Book Appointment</Link>
              </button>
            </p>
            <div>
              <ReactTable
                data={photographyData}
                columns={columns}
                defaultPageSize={8}
              />
            </div>
          </div>
        </div>
        <div class="column">
          {" "}
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
          </p>{" "}
        </div>
      </div>
    </div>
  );
}

export default Photography;
