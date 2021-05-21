import React, { useState, useEffect } from "react";
import ReactTable from "react-table-6";
import "react-table-6/react-table.css";
//import "../../static/Services.css";
import { Link } from "react-router-dom";
import photo from "../../images/services/image7.jpg";

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
              <center>AUDIO RECORDING
                <br></br>
                <button className="button">
                <Link to="/audioform">Book Appointment</Link>
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
            Communication is key to everything.<br/>
            Are you making music, poetry or a podcast
            we ensure you deliver your message home.
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
            In fine art of any media, there are seven basic elements of art.
            There are also the principles of design, but I will get to that in
            another post. I learned the elements of art while studying fine arts
            at Young Harris College. While we only applied these to other
            mediums such as painting, charcoal, and pencil drawing, they are
            just as applicable to photography
          </p>

          <div className="youtube"><center>
          <p><b>Our work</b></p>
          <iframe width="640" height="360" loading="lazy" src="https://www.youtube.com/embed/6JgsBYo-Zrg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <iframe width="640" height="360" loading="lazy" src="https://www.youtube.com/embed/uciQIGYfNOE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </center></div>
          
      
    </div>
  );
}

export default Audio;
