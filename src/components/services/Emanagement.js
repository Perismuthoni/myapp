import React, { useState, useEffect } from "react";
import ReactTable from "react-table-6";
import "react-table-6/react-table.css";
import "../../static/services/emanagement.css"
import "../../static/services/general.css";
import "react-slideshow-image/dist/styles.css";
import { Fade } from "react-slideshow-image";

import wedding from "../../images/emanagement/one.jpeg"




function Emanagement() {
  
  
  const columns = [
    {
      Header: "Service/item",
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
  const [emanagementData, setEmanagementState] = useState([]);
  const getEmanagementData = () => {
    return fetch("http://127.0.0.1:5000/api/photograpy").then((res) =>
      res.json()
    );
  };
  useEffect(() => {
    getEmanagementData().then((resp) => {
      const data = resp.emanagement;
      setEmanagementState(data);
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
          <center>Event Management</center>
        </b>
      </p>
      <Fade {...zoomOutProperties}>
        <div className="emanagementfade1">
          <p className="fadetext">
            <h1>
             Corporate <br/>Events {" "}
            </h1>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque sed molestie augue, et suscipit ligula. .<br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque sed molestie augue, et suscipit ligula.
          </p>
        </div>
        <div className="emanagementfade2">
          <p className="fadetext">
            <h1>
              Exhibition
            </h1>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque sed molestie augue, et suscipit ligula. .<br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque sed molestie augue, et suscipit ligula.
          </p>
        </div>
        <div className="emanagementfade3">
          <p className="fadetext">
            <h1>
            Fashion <br/>Shows
            </h1>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque sed molestie augue, et suscipit ligula. .<br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque sed molestie augue, et suscipit ligula.
          </p>
        </div>
        <div className="emanagementfade4">
          <p className="fadetext">
            <h1>
            Fashion <br/>Shows
            </h1>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque sed molestie augue, et suscipit ligula. .<br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque sed molestie augue, et suscipit ligula.
          </p>
        </div>
      </Fade>

      <br/>
      
        
      
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
          <ReactTable data={emanagementData} columns={columns} defaultPageSize={8} />
        </p>
      )}
     <br/>
     <b>
          <h3>Events We Manage</h3>
          The following is the list of events we cater for
          View our packages and price
          Gold , silver and bronze depending on time and pictures required but exclusive of location fee charges.<br/>
          We have the best offers in town and you can make an appointment with us
          anytime,anywhere
          
        </b>
      <div className="row">
      
        
        <div className="column">
          <img
            className="image"
            src={wedding}
            alt=""
            loading="lazy"
          />
          <p>
            <b>concerts</b>:<br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque sed molestie augue, et suscipit ligula. Etiam mollis in
            odio condimentum consequat. Aliquam lacinia vel orci suscipit
            bibendum.
            
          </p>
        </div>
        

        <div className="column">
          <img
            className="image"
            src={wedding}
            alt=""
            loading="lazy"
          />
          <p>
            <b>award night</b>
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
            src={wedding}
            alt=""
            loading="lazy"
          />
          <p>
            <b>chocolate events</b>
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
            src={wedding}
            alt=""
            loading="lazy"
          />
          <p>
            <b>wine tasting</b>
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque sed molestie augue, et suscipit ligula. Etiam mollis in
            odio condimentum consequat. Aliquam lacinia vel orci suscipit
            bibendum.
            
          </p>
          </div>          
      </div>
      <div className="row">
      <b>
          <h3>Events Services We Offer</h3>
          The following is the list of events we cater for
          View our packages and price
          Gold , silver and bronze depending on time and pictures required but exclusive of location fee charges.<br/>
          We have the best offers in town and you can make an appointment with us
          anytime,anywhere
          
        </b>
        <div className="column">
          <img
            className="image"
            src={wedding}
            alt=""
            loading="lazy"
          />
          <p>
            <b>Dj Services</b>
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
            src={wedding}
            alt=""
            loading="lazy"
          />
          <p>
            <b>outside Catering </b>
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
            src={wedding}
            alt=""
            loading="lazy"
          />
          <p>
            <b>Master of ceremony</b>
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
            src={wedding}
            alt=""
            loading="lazy"
          />
          <p>
            <b>photograph & videography</b>
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque sed molestie augue, et suscipit ligula. Etiam mollis in
            odio condimentum consequat. Aliquam lacinia vel orci suscipit
            bibendum.
            
          </p>
          </div> 
      </div>


      <div className="row">
      <b>
          <h3>Items Available for Hire</h3>
          The following is the list of events we cater for
          View our packages and price
          Gold , silver and bronze depending on time and pictures required but exclusive of location fee charges.<br/>
          We have the best offers in town and you can make an appointment with us
          anytime,anywhere
          
        </b>
        <div className="column">
          <b>Item Name<br/>
          Price Per unit<br/>
          Details:</b>  Lorem ipsum dolor sit amet,
        <img
            className="image"
            src={wedding}
            alt=""
            loading="lazy"
          />
        </div>
        <div className="column">
          <b>Item Name<br/>
          Price Per unit<br/>
          Details:</b>  Lorem ipsum dolor sit amet,
        <img
            className="image"
            src={wedding}
            alt=""
            loading="lazy"
          />
        </div>
        <div className="column">
          <b>Item Name<br/>
          Price Per unit<br/>
          Details:</b>  Lorem ipsum dolor sit amet,
        <img
            className="image"
            src={wedding}
            alt=""
            loading="lazy"
          />
        </div>
        <div className="column">
          <b>Item Name<br/>
          Price Per unit<br/>
          Details:</b>  Lorem ipsum dolor sit amet,
        <img
            className="image"
            src={wedding}
            alt=""
            loading="lazy"
          />
        </div>
      </div>
      <hr/>
      <p className="socials"><center>
        Follow our social media handles
        <ul> <a href="/">Instagram</a></ul>
        <ul><a href="/">Facebook</a></ul>
        </center>
      </p>
   </div>      
  );
}

export default Emanagement;
