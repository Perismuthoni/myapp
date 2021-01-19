import React from "react";
import ReactTable from "react-table-6";
import "react-table-6/react-table.css";
import "../static/Services.css";
import { Link } from "react-router-dom";
import photo from "../images/four.jpg";

function Audio() {
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
  const audioData = [
    {
      name: "Photography",
      package: "unlimited",
      price: 26,
    },
    {
      name: "Photography",
      package: "one photo",
      price: 26,
    },
    {
      name: "Photography",
      package: "economic",
      price: 26,
    },
    {
      name: "Photography",
      package: "unlimited(event)",
      price: 26,
    },
    {
      name: "Videography",
      package: "single",
      price: 26,
    },
    {
      name: "Photography",
      package: "album",
      price: 26,
    },
    {
      name: "School of Photography",
      package: "album",
      price: 26,
    },
    {
      name: "School of videography",
      package: "album",
      price: 26,
    },
  ];

  return (
    <div className="services">
      <div class="row">
        <div class="column">
          <div className="photography">
            <p>
              <center>AUDIO RECORDING</center>
            </p>
            <p>
              <button className="button">
                <Link to="/login">Book Appointment</Link>
              </button>
            </p>
            <div>
              <ReactTable
                data={audioData}
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

export default Audio;
