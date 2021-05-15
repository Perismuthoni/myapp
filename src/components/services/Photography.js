import React, { useState, useEffect } from "react";
import ReactTable from "react-table-6";
import "react-table-6/react-table.css";
import "../../static/Services.css";
import { Link } from "react-router-dom";


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
              <center> SEEDTONIC PHOTOGRAPHY <br></br>
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
         
          
          
    </div>
  );
}

export default Photography;
