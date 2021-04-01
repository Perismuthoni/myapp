import React, { useState, useEffect } from "react";
import ReactTable from "react-table-6";
import "react-table-6/react-table.css";
import "../static/Gallery.css";
//import { Link } from "react-router-dom";
import { Facebook,Instagram,} from 'react-bootstrap-icons';
//import photo from "../images/sample.jpg";

function Gallery() {
  const columns = [
    {
      Header: "images",
      accessor: "name",
    },
    {
      Header: "images",
      accessor: "package",
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
    
          <div className="photography">
            <p>
              <center>SEEDTONIC PHOTOGRAPHY</center>
            </p>
            <p>              
                <a href="/login" ><button class="icon-i"><Instagram /></button></a>
                <a href="/login"  ><button class="icon-f"><Facebook /></button></a>
            </p>
            <div>
              <ReactTable
                data={advertisementData}
                columns={columns}
                defaultPageSize={8}
              />
            </div>
          </div>
  );
}

export default Gallery;
