import React, { useState, useEffect } from "react";
import ReactTable from "react-table-6";
import "react-table-6/react-table.css";
import "../../static/services/music.css";
//import { Link } from "react-router-dom";
import "react-slideshow-image/dist/styles.css";
import { Fade } from "react-slideshow-image";


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
        <p className="title"><b><center>Music/Audio Production</center></b></p>
        <Fade>
          <div className="musicfade1">
            <p>
              <center>Studio recording</center>
            </p>
          </div>
          <div className="musicfade2">
            <p>
              <center>Studio recording</center>
            </p>
          </div>
          <div className="musicfade3">
            <p>
              <center>Studio recording</center>
            </p>
          </div>
        </Fade>
        <p><center>What we do<br/>
          <h3>Studio services</h3></center></p>
          <div className="row">
          <div className="column">
            <img className="image" src="../../images/six.jpg" alt=""/>
            <p>
              <b>Audio Book</b>:<br/>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
               Pellentesque sed molestie augue, et suscipit ligula.
                Etiam mollis in odio condimentum consequat. 
                Aliquam lacinia vel orci suscipit bibendum.<br/>
               <center> <button className="buttonA">book appointment</button></center> 
            </p>
          </div>
          <div className="column">
            <img className="image" src="../../images/six.jpg" alt=""/>
            <p>
              
              <b>Voice Recording</b><br/>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
               Pellentesque sed molestie augue, et suscipit ligula.
                Etiam mollis in odio condimentum consequat. 
                Aliquam lacinia vel orci suscipit bibendum.<br/>
                <center> <button className="buttonA">book appointment</button></center>

            </p>
          </div>
          <div className="column">
            <img className="image" src="../../images/six.jpg" alt=""/>
            <p>
              <b>Voice Mixing</b><br/>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
               Pellentesque sed molestie augue, et suscipit ligula.
                Etiam mollis in odio condimentum consequat. 
                Aliquam lacinia vel orci suscipit bibendum.<br/>
                <center> <button className="buttonA">book appointment</button></center>

            </p>
          </div>
          </div>
        <div className="table">
          <ReactTable data={musicData} columns={columns} defaultPageSize={8} />
        </div>
      </div>
      
      
    </div>
  );
}

export default Music;
