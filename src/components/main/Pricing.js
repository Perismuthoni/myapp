import React, { useState, useEffect } from "react";
import ReactTable from "react-table-6";
import "react-table-6/react-table.css";
import "../../static/main/pricing.css";
//import { Link } from "react-router-dom";

function Pricing (){
    const [readMore,setReadMore]=useState(false);

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
        return fetch("http://127.0.0.1:5000/api/photograpy").then((res) =>
          res.json()
        );
      };
      useEffect(() => {
        getPhotographyData().then((resp) => {
          const data = resp.photography;
          setPhotographyState(data);
        });
      });
      const [musicData, setMusicState] = useState([]);
      const getMusicData = () => {
        return fetch("http://127.0.0.1:5000/api/music").then((res) =>
          res.json()
        );
      };
      useEffect(() => {
        getMusicData().then((resp) => {
          const data = resp.music;
          setMusicState(data);
        });
      });
      const [bandData, setBandState] = useState([]);
      const getBandData = () => {
        return fetch("http://127.0.0.1:5000/api/band").then((res) =>
          res.json()
        );
      };
      useEffect(() => {
        getBandData().then((resp) => {
          const data = resp.band;
          setBandState(data);
        });
      });
      const [videoData, setVideoState] = useState([]);
      const getVideoData = () => {
        return fetch("http://127.0.0.1:5000/api/video").then((res) =>
          res.json()
        );
      };
      useEffect(() => {
        getVideoData().then((resp) => {
          const data = resp.video;
          setVideoState(data);
        });
      });
      const [filmData, setFilmState] = useState([]);
      const getFilmData = () => {
        return fetch("http://127.0.0.1:5000/api/film").then((res) =>
          res.json()
        );
      };
      useEffect(() => {
        getFilmData().then((resp) => {
          const data = resp.film;
          setFilmState(data);
        });
      });
    return(
        <div className="pricing">
          <div className="introduction">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor<br/>
           incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, <br/>
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<hr/><br/>
          <b><h4>CATEGORIES/CATALOGUE</h4></b>
          </div>
          
        
            <ul className="list">
            view our packages,price and make book appointment online<br/>
                <li>
          1. Photography Service <l className="link" onClick={()=>{setReadMore(!readMore)}}> see details</l>
      {readMore && <p className="table">
    <center> <button><a href="/profile">Book appointment</a> </button> </center>
        <ReactTable  data={photographyData} columns={columns} defaultPageSize={8} /></p>}
        </li>
        <li>
          2. Music/Audio Production<l className="link" onClick={()=>{setReadMore(!readMore)}}> see details</l>
      {readMore && <p className="table">
    <center> <button><a href="/profile">Book appointment</a> </button> </center>
        <ReactTable  data={musicData} columns={columns} defaultPageSize={8} /></p>}
        </li>
        <li>
          3. Seedtonic Band<l className="link" onClick={()=>{setReadMore(!readMore)}}> see details</l>
      {readMore && <p className="table">
    <center> <button><a href="/profile">Book appointment</a> </button> </center>
        <ReactTable  data={bandData} columns={columns} defaultPageSize={8} /></p>}
        </li>
        <li>
          4. Video Production<l className="link" onClick={()=>{setReadMore(!readMore)}}> see details</l>
      {readMore && <p className="table">
    <center> <button><a href="/profile">Book appointment</a> </button> </center>
        <ReactTable  data={videoData} columns={columns} defaultPageSize={8} /></p>}
        </li>
        <li>
          5. film Production<l className="link" onClick={()=>{setReadMore(!readMore)}}> see details</l>
      {readMore && <p className="table">
    <center> <button><a href="/profile">Book appointment</a> </button> </center>
        <ReactTable  data={filmData} columns={columns} defaultPageSize={8} /></p>}
        </li>
        <li>
          6. Event Management<l className="link" onClick={()=>{setReadMore(!readMore)}}> see details</l>
      {readMore && <p className="table">
    <center> <button><a href="/profile">Book appointment</a> </button> </center>
        <ReactTable  data={filmData} columns={columns} defaultPageSize={8} /></p>}
        </li>
        <li>
          7. Artist Advertising<l className="link" onClick={()=>{setReadMore(!readMore)}}> see details</l>
      {readMore && <p className="table">
    <center> <button><a href="/profile">Book appointment</a> </button> </center>
        <ReactTable  data={filmData} columns={columns} defaultPageSize={8} /></p>}
        </li>
        <li>
          6. Product advertising<l className="link" onClick={()=>{setReadMore(!readMore)}}> see details</l>
      {readMore && <p className="table">
    <center> <button><a href="/profile">Book appointment</a> </button> </center>
        <ReactTable  data={filmData} columns={columns} defaultPageSize={8} /></p>}
        </li>
        </ul>
      </div>
     
    );
} 

export default Pricing;