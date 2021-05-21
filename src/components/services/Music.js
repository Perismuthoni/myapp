import React, { useState, useEffect } from "react";
import ReactTable from "react-table-6";
import "react-table-6/react-table.css";
import "../../static/services/music.css";
import "react-slideshow-image/dist/styles.css";
import { Fade } from "react-slideshow-image";
import { Youtube } from "react-bootstrap-icons";
import m1 from "../../images/music/1.jpg";
import m2 from "../../images/music/2.jpg";
import m3 from "../../images/music/3.jpg";
import m4 from "../../images/music/4.jpg";

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
  const [readMore, setReadMore] = useState(false);
  const linkName = readMore ? (
    <p>
      See less
    </p>
  ) : (
    <p>
      See details
    </p>
  );
  const [musicData, setMusicState] = useState([]);
  const getMusicData = () => {
    return fetch("http://127.0.0.1:5000/api/music").then((res) => res.json());
  };
  useEffect(() => {
    getMusicData().then((resp) => {
      const data = resp.music;
      setMusicState(data);
    });
  });
  const zoomOutProperties = {
    duration: 4000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true,
  };
  return (
    <div className="music">
      <p className="title">
        <b>
          <center>Music/Audio Production</center>
        </b>
      </p>
      <Fade {...zoomOutProperties}>
        <div className="musicfade1">
          <p className="fadetext">
            <h1>
              Audio <br /> Recording{" "}
            </h1>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque sed molestie augue, et suscipit ligula. .<br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque sed molestie augue, et suscipit ligula.
          </p>
        </div>
        <div className="musicfade2">
          <p className="fadetext">
            <h1>
              Sound <br /> Design{" "}
            </h1>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque sed molestie augue, et suscipit ligula. .<br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque sed molestie augue, et suscipit ligula.
          </p>
        </div>
        <div className="musicfade3">
          <p className="fadetext">
            <h1>
              Vocal <br /> Training{" "}
            </h1>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque sed molestie augue, et suscipit ligula. .<br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque sed molestie augue, et suscipit ligula.
          </p>
        </div>
      </Fade>
      <div className="records">
        <h2>
          <b> Recent Records</b>
        </h2>
        Etiam mollis in odio condimentum consequatiquam lacinia vel orci
        suscipit bibendum
        <br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        <br /><br/>
        <hr/>
        <ul>
          <div className="row">   
          <div className="columnr"><b>Song Bird</b> <br/> Song 1      </div>
          <div className="columnr">    <iframe
          className="iframe"            
            src="https://www.youtube.com/embed/YvRyE_RFbPs"
            title="YouTube video player"
            frameborder="0"
            allowscriptaccess="always"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen="false"/>   
              </div> 
                </div>
        </ul>
        <hr/>
        <ul>
          <div className="row">   
          <div className="columnr"><b>Singer 1</b> <br/> Her everything     </div>
          <div className="columnr">    <iframe
           className="iframe"
            src="https://www.youtube.com/embed/YvRyE_RFbPs"
            title="YouTube video player"
            frameborder="0"
            allowscriptaccess="always"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen="false"/>   
              </div> 
                </div>
        </ul>
        <hr/>
        <ul>
          <div className="row">   
          <div className="columnr"><b>Timothy K</b> <br/> Tomorrow morning  </div>
          <div className="columnr">    <iframe
            className="iframe"
            src="https://www.youtube.com/embed/YvRyE_RFbPs"
            title="YouTube video player"
            frameborder="0"
            allowscriptaccess="always"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen="false"/>   
              </div> 
                </div>
        </ul>
        <hr/>
        <ul>
          <div className="row">   
          <div className="columnr"><b>Sonic the poet</b> <br/>Beyond my sight </div>
          <div className="columnr">    <iframe
            className="iframe"
            src="https://www.youtube.com/embed/YvRyE_RFbPs"
            title="YouTube video player"
            frameborder="0"
            allowscriptaccess="always"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen="false"/>   
              </div> 
                </div>
        </ul>
        <hr />
        
          <a href="https://www.youtube.com/channel/UCpvlxZd-hlKJT58QiQcxi7Q/videos"> click here to view more like this on our YouTube channel
          </a> <Youtube/>
       <br/>
      </div>
      <br/>
      <p className="catalog">
        <b>
          <h3>CATALOGUE PRICE</h3>View our packages and price.We have the best
          offers in town and you can make an appointment with us
          anytime,anywhere
          <l
            className="link"
            onClick={() => {
              setReadMore(!readMore);
            }}
          >
           {linkName}
          </l>{" "}
        </b>
      </p>
      {readMore && (
        <p className="table">
          <center>
            {" "}
            <button>
              <a href="/profile">Book appointment</a>{" "}
            </button>{" "}
          </center>
          <ReactTable data={musicData} columns={columns} defaultPageSize={8} />
        </p>
      )}
      <p>
        <center>
          What we do
          <br />
          <h3>Studio services</h3>
        </center>
      </p>
      <div className="row">
        <div className="column">
          <img
            className="image"
            src={m1}
            alt=""
            loading="lazy"
          />
          <p>
            <b>Audio Book</b>:<br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque sed molestie augue, et suscipit ligula. Etiam mollis in
            odio condimentum consequat. Aliquam lacinia vel orci suscipit
            bibendum.
            
          </p>
        </div>
        <div className="column">
          <img
            className="image"
            src={m2}
            alt=""
            loading="lazy"
          />
          <p>
            <b>Voice Recording</b>
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque sed molestie augue, et suscipit ligula. Etiam mollis in
            odio condimentum consequat. Aliquam lacinia vel orci suscipit
            bibendum.
            
          </p>
        </div>
        <div className="column">
          <img
            className="image"
            src={m3}
            alt=""
            loading="lazy"
          />
          <p>
            <b>Voice Mixing</b>
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque sed molestie augue, et suscipit ligula. Etiam mollis in
            odio condimentum consequat. Aliquam lacinia vel orci suscipit
            bibendum.
                       
          </p>
        </div>
        <div className="column">
          <img
            className="image"
            src={m4}
            alt=""
            loading="lazy"
          />
          <p>
            <b>Voice Recording</b>
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque sed molestie augue, et suscipit ligula. Etiam mollis in
            odio condimentum consequat. Aliquam lacinia vel orci suscipit
            bibendum.
            
          </p>
        </div>
      </div>
    </div>
  );
}

export default Music;
