import React, { useState, useEffect } from "react";
import ReactTable from "react-table-6";
import "react-table-6/react-table.css";
import "../../static/services/film.css";
import "../../static/services/general.css";
import { Fade } from "react-slideshow-image";
import f1 from "../../images/photography/2.jpg";
import f2 from "../../images/photography/2.jpg";
import f3 from "../../images/photography/2.jpg";
import f4 from "../../images/photography/2.jpg";
import f5 from "../../images/photography/2.jpg";

function Film() {
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
  const linkName = readMore ? <p>See less</p> : <p>See details</p>;
  const [filmData, setFilmState] = useState([]);
  const getFilmData = () => {
    return fetch("http://127.0.0.1:5000/api/film").then((res) => res.json());
  };
  useEffect(() => {
    getFilmData().then((resp) => {
      const data = resp.film;
      setFilmState(data);
    });
  });

  return (
    <div className="page">
      <p className="title">
        <b>
          <center>Seedtonic Film Production</center>
        </b>
      </p>
      <Fade>
        <div className="film-fade1">
          <p className="fadetext">
            <h1>Set design </h1>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque sed molestie augue, et suscipit ligula. .<br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque sed molestie augue, et suscipit ligula.
          </p>
        </div>
        <div className="film-fade2">
          <p className="fadetext">
            <h1>Casting</h1>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque sed molestie augue, et suscipit ligula. .<br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque sed molestie augue, et suscipit ligula.
          </p>
        </div>
        <div className="film-fade3">
          <p className="fadetext">
            <h1>Script writing</h1>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque sed molestie augue, et suscipit ligula. .<br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque sed molestie augue, et suscipit ligula.
          </p>
        </div>
      </Fade>
      <div className="catalog">
        <b>
          <h3>CATALOGUE PRICE</h3>
          View our packages and price Gold , silver and bronze depending on time
          and pictures required but exclusive of location fee charges.
          <br />
          We have the best offers in town and you can make an appointment with
          us anytime,anywhere
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
          <ReactTable data={filmData} columns={columns} defaultPageSize={8} />
        </p>
      )}
      <div className="description">
        <center>
          Exceptional Quality filming
          <br />
          Lets capture every moment for what is life without memories
          <h3>custom packages</h3>
        </center>
        <div className="row">
          <div className="column">
            <img className="image" src={f1} alt="" loading="lazy" />
            <p>
              <b>Documentaries </b>:<br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque sed molestie augue, et suscipit ligula. Etiam mollis
              in odio condimentum consequat. Aliquam lacinia vel orci suscipit
              bibendum.
            </p>
          </div>
          <div className="column">
            <img className="image" src={f2} alt="" loading="lazy" />
            <p>
              <b>TV talk shows</b>:<br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque sed molestie augue, et suscipit ligula. Etiam mollis
              in odio condimentum consequat. Aliquam lacinia vel orci suscipit
              bibendum.
            </p>
          </div>
          <div className="column">
            <img className="image" src={f3} alt="" loading="lazy" />
            <p>
              <b>Band</b>:<br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque sed molestie augue, et suscipit ligula. Etiam mollis
              in odio condimentum consequat. Aliquam lacinia vel orci suscipit
              bibendum.
            </p>
          </div>
          <div className="column">
            <img className="image" src={f4} alt="" loading="lazy" />
            <p>
              <b>Band</b>:<br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque sed molestie augue, et suscipit ligula. Etiam mollis
              in odio condimentum consequat. Aliquam lacinia vel orci suscipit
              bibendum.
            </p>
          </div>
          <div className="column">
            <img className="image" src={f5} alt="" loading="lazy" />
            <p>
              <b>Band</b>:<br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque sed molestie augue, et suscipit ligula. Etiam mollis
              in odio condimentum consequat. Aliquam lacinia vel orci suscipit
              bibendum.
            </p>
          </div>
        </div>
      </div>
      <div className="equipment">
        <center>
          <b>
            <u>Equipments For Hire</u>
          </b>
          <br />
          Are you photographer,producer,editor and all you need is the equipment
          to finish your project
          <br />
          Seedtonic got you, You can hire our items at an affordable price
          <a href="tel:254710424010"> call us </a>or Whatsapp us for details
        </center>
        <br />
        <div className="row">
          <div className="column-hire">
            <p>
              <b>
                <center>Canon Camera</center>
                Details:
              </b>
              Lorem,ipsum,dolor sit.
            </p>
            <img className="image-hire" src={f5} alt="" loading="lazy" />
          </div>
          <div className="column-hire">
            <p>
              <b>
                <center>Canon Camera</center>
                Details:
              </b>
              Lorem,ipsum,dolor sit.
            </p>
            <img className="image-hire" src={f5} alt="" loading="lazy" />
          </div>
          <div className="column-hire">
            <p>
              <b>
                <center>Canon Camera</center>
                Details:
              </b>
              Lorem,ipsum,dolor sit.
            </p>
            <img className="image-hire" src={f5} alt="" loading="lazy" />
          </div>
          <div className="column-hire">
            <p>
              <b>
                <center>Canon Camera</center>
                Details:
              </b>
              Lorem,ipsum,dolor sit.
            </p>
            <img className="image-hire" src={f5} alt="" loading="lazy" />
          </div>
          <div className="column-hire">
            <p>
              <b>
                <center>Canon Camera</center>
                Details:
              </b>
              Lorem,ipsum,dolor sit.
            </p>
            <img className="image-hire" src={f5} alt="" loading="lazy" />
          </div>
        </div>
      </div>
      <div className="content">
        <center>
          <b>
            <h3>Seedtonic film Tv</h3>
          </b>
          <iframe
            src="https://www.youtube.com/embed/videoseries?list=PLnbFOW4DigSR9YxxiwnQXK0wyKSlvRswg"
            className="channel"
            title="channel"
            allowFullScreen="true"
          ></iframe>
        </center>
      </div>
    </div>
  );
}
export default Film;
