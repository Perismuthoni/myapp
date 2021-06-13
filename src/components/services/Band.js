import React, { useState, useEffect } from "react";
import ReactTable from "react-table-6";
import "react-table-6/react-table.css";
import "../../static/services/band.css";
import "../../static/services/general.css";
import "react-slideshow-image/dist/styles.css";
import { Zoom} from "react-slideshow-image";
import b1 from "../../images/photography/1.jpg";
import b2 from "../../images/photography/1.jpg";
import b3 from "../../images/photography/1.jpg";
import b4 from "../../images/photography/1.jpg";
import b5 from "../../images/photography/1.jpg";

function Band() {
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
  return (
    <div className="page">
      <div className="title">
        <b>
          <center>Seedtonic Band</center>
        </b>
      </div>
      <Zoom >
      <div className="band-fade1">
          <p className="fadetext">
            <h1>
             Seedtonic <br/> Band {" "}
            </h1>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque sed molestie augue, et suscipit ligula. .<br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque sed molestie augue, et suscipit ligula.
          </p>
        </div>
        <div className="band-fade2">
          <p className="fadetext">
            <h1>
             Seedtonic <br/> Band {" "}
            </h1>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque sed molestie augue, et suscipit ligula. .<br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque sed molestie augue, et suscipit ligula.
          </p>
        </div>
        <div className="band-fade4">
          <p className="fadetext">
            <h1>
             Seedtonic <br/> Band {" "}
            </h1>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque sed molestie augue, et suscipit ligula. .<br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque sed molestie augue, et suscipit ligula.
          </p>
        </div>
      </Zoom>
      <div className="catalog">
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
      </div>
      {readMore && (
        <p className="table">
          <center>
            {" "}
            <button>
              <a href="/profile">Book appointment</a>{" "}
            </button>{" "}
          </center>
          <ReactTable data={bandData} columns={columns} defaultPageSize={8} />
        </p>
      )}
      <div className="description">
      <center>
          Exceptional Quality photography
          <br />
          Lets capture every moment for what is life without memories
          <h3>custom packages</h3>
        </center>
        <div className="row">
        <div className="column">
          <img
            className="image"
            src={b1}
            alt=""
            loading="lazy"
          />
          <p>
            <b>Band</b>:<br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque sed molestie augue, et suscipit ligula. Etiam mollis in
            odio condimentum consequat. Aliquam lacinia vel orci suscipit
            bibendum.
            
          </p>
        </div>
        <div className="column">
          <img
            className="image"
            src={b2}
            alt=""
            loading="lazy"
          />
          <p>
            <b>Band</b>:<br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque sed molestie augue, et suscipit ligula. Etiam mollis in
            odio condimentum consequat. Aliquam lacinia vel orci suscipit
            bibendum.
            
          </p>
        </div>
        <div className="column">
          <img
            className="image"
            src={b3}
            alt=""
            loading="lazy"
          />
          <p>
            <b>Band</b>:<br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque sed molestie augue, et suscipit ligula. Etiam mollis in
            odio condimentum consequat. Aliquam lacinia vel orci suscipit
            bibendum.
            
          </p>
        </div>
        <div className="column">
          <img
            className="image"
            src={b4}
            alt=""
            loading="lazy"
          />
          <p>
            <b>Band</b>:<br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque sed molestie augue, et suscipit ligula. Etiam mollis in
            odio condimentum consequat. Aliquam lacinia vel orci suscipit
            bibendum.
            
          </p>
        </div>
        <div className="column">
          <img
            className="image"
            src={b5}
            alt=""
            loading="lazy"
          />
          <p>
            <b>Band</b>:<br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque sed molestie augue, et suscipit ligula. Etiam mollis in
            odio condimentum consequat. Aliquam lacinia vel orci suscipit
            bibendum.
            
          </p>
        </div>
        </div>
      </div>
    </div>
  );
}
export default Band;
