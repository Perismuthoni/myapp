import React, { useState, useEffect } from "react";
import ReactTable from "react-table-6";
import "react-table-6/react-table.css";
import "../../static/services/photography.css"
import "../../static/services/general.css";
import "react-slideshow-image/dist/styles.css";
import { Fade } from "react-slideshow-image";
import p1 from "../../images/photography/1.jpg";
import p2 from "../../images/photography/2.jpg";
import p3 from "../../images/photography/3.jpg"
import p4 from "../../images/photography/4.jpg";
import p5 from "../../images/photography/5.jpg";
// import s1 from "../../images/photography/sample1.jpg";
// import s2 from "../../images/photography/sample2.jpg";
// import s3 from "../../images/photography/sample3.jpg";
// import s4 from "../../images/photography/sample4.jpg";


function Photography() {
  const samples = [
    require("../../images/photography/sample1.jpg"),
    require("../../images/photography/sample2.jpg"),
    require("../../images/photography/sample3.jpg"),
    require("../../images/photography/sample4.jpg"),
      
  ];
  
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
  const zoomOutProperties = {
    duration: 4000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true,
  };
  

  return (
    <div className="page">
<p className="title">
        <b>
          <center>Seedtonic photography</center>
        </b>
      </p>
      <Fade {...zoomOutProperties}>
        <div className="photographyfade1">
          <p className="fadetext">
            <h1>
             Corporate <br/>photography {" "}
            </h1>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque sed molestie augue, et suscipit ligula. .<br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque sed molestie augue, et suscipit ligula.
          </p>
        </div>
        <div className="photographyfade2">
          <p className="fadetext">
            <h1>
              portfolio <br /> Photography{" "}
            </h1>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque sed molestie augue, et suscipit ligula. .<br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque sed molestie augue, et suscipit ligula.
          </p>
        </div>
        <div className="photographyfade3">
          <p className="fadetext">
            <h1>
            baby bump <br/>pictures
            </h1>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque sed molestie augue, et suscipit ligula. .<br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque sed molestie augue, et suscipit ligula.
          </p>
        </div>
      </Fade>
      <br/>
       <center><h5>Did You Know</h5></center>
        <Fade>
        
        <div className="funbox1">  
        <p><b><i>1st Photo in history</i></b></p>          
        The earliest known photograph of a human appeared <br/>
        in a snapshot taken in 1838 by Louis Daguerre.
          </div>
          <div className="funbox2"> 
          <p><i><b>Most expensive Photo</b></i></p>             
          In 1999,<br/>
           Andreas Gursky captured the world’s most expensive photo,<br/>
         Rhein II. In 2011, 12 years later,
           it sold for an incredible $4,338,500 at auction.
          </div>
          <div className="funbox3"> 
          <p><b><i>Famous Kodak</i></b></p>             
          Kodak has no real meaning.<br/>
George Eastman, the founder of Kodak,<br/>
 said that the letter ‘K’ sounded strong, so he formed a word around it
          </div>
        </Fade>
      
      <br/>
      <p className="catalog">
        <b>
          <h3>CATALOGUE PRICE</h3>
          View our packages and price
          Gold , silver and bronze depending on time and pictures required but exclusive of location fee charges.<br/>
          We have the best offers in town and you can make an appointment with us
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
          <ReactTable data={photographyData} columns={columns} defaultPageSize={8} />
        </p>
      )}
      <p>
        <center>
          Exceptional Quality photography
          <br />
          Lets capture every moment for what is life without memories
          <h3>custom packages</h3>
        </center>
      </p>
      <div className="row">
        <div className="column">
          <img
            className="image"
            src={p1}
            alt=""
            loading="lazy"
          />
          <p>
            <b>Baby photography</b>:<br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque sed molestie augue, et suscipit ligula. Etiam mollis in
            odio condimentum consequat. Aliquam lacinia vel orci suscipit
            bibendum.
            
          </p>
        </div>
        <div className="column">
          <img
            className="image"
            src={p2}
            alt=""
            loading="lazy"
          />
          <p>
            <b>Documentary gallery</b>
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
            src={p3}
            alt=""
            loading="lazy"
          />
          <p>
            <b>Team building photos</b>
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
            src={p4}
            alt=""
            loading="lazy"
          />
          <p>
            <b>Galla nights photography</b>
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
            src={p5}
            alt=""
            loading="lazy"
          />
          <p>
            <b>Wall Art Photography</b>
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque sed molestie augue, et suscipit ligula. Etiam mollis in
            odio condimentum consequat. Aliquam lacinia vel orci suscipit
            bibendum.
            
          </p>
        </div>
      </div>
      <hr/>
      <div className="gallery-row">
        <p><b>Our Work</b><br/>
        <a href="/gallery">visit our gallery page to see more like this</a>
        </p>
       
        {samples.map((image) => <img key={image} src={image} alt=""/>)}
        
          
        
      
        

      </div>
      <p className="socials"><center>
        Follow our social media handles
        <ul> <a href="/">Instagram</a></ul>
        <ul><a href="/">Facebook</a></ul>
        </center>
      </p>
   </div>      
  );
}

export default Photography;
