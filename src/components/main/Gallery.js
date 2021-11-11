import React, { useState } from "react";
import 'react-slideshow-image/dist/styles.css'
import { Fade } from 'react-slideshow-image';
import "../../static/main/Gallery.css";


function Image() {
  const [display, setDisplay] = useState();
  // const[corporate,setCorporate]=useState();
  // const[general,setGeneral]=useState();
// const[personal,setPersonal]=useState();
  // const[music, setMusic]=useState(); 
  // const[documentary,setDocumentary]=useState();
  // const[promo,SetPromo]=useState();
  //const[wall,setWall]=useState();
const all = [
  
  require("../../images/gallery/g1.jpeg"),
  require("../../images/gallery/g2.jpeg"),
  require("../../images/gallery/g3.jpeg"),
  require("../../images/gallery/g4.jpeg"),
  require("../../images/gallery/g5.jpeg"),
  require("../../images/photography/sample1.jpg"),
  require("../../images/photography/sample2.jpg"),
  require("../../images/photography/sample3.jpg"),
  require("../../images/photography/sample4.jpg"),
  require("../../images/gallery/g6.jpeg"),
  require("../../images/gallery/g7.jpeg"),
  require("../../images/gallery/g8.jpeg"),
  require("../../images/gallery/g9.jpeg"),
  require("../../images/gallery/g10.jpeg"),
  require("../../images/gallery/g11.jpeg"),
  require("../../images/gallery/g12.jpeg"),
  require("../../images/gallery/g13.jpeg"),
  require("../../images/home/image1.jpg"),
  require("../../images/home/image2.jpg"),
  require("../../images/home/image3.jpg"),
  require("../../images/home/image4.jpg"),
];
const corporate = [
  require("../../images/gallery/g1.jpeg"),
  require("../../images/gallery/g2.jpeg"),
  require("../../images/gallery/g3.jpeg"),
  require("../../images/gallery/g4.jpeg"),
  require("../../images/gallery/g5.jpeg"),
];
const general = [
  require("../../images/gallery/g1.jpeg"),
  require("../../images/gallery/g2.jpeg"),
  require("../../images/gallery/g3.jpeg"),
  require("../../images/gallery/g4.jpeg"),
  require("../../images/gallery/g5.jpeg")
];
const personal = [
  require("../../images/gallery/g1.jpeg"),
  require("../../images/gallery/g2.jpeg"),
  require("../../images/gallery/g3.jpeg"),
  require("../../images/gallery/g4.jpeg"),
  require("../../images/gallery/g5.jpeg")
];
const music = [
  require("../../images/gallery/g1.jpeg"),
  require("../../images/gallery/g2.jpeg"),
  require("../../images/gallery/g3.jpeg"),
  require("../../images/gallery/g4.jpeg"),
  require("../../images/gallery/g5.jpeg")
];
const documentary = [
  require("../../images/gallery/g1.jpeg"),
  require("../../images/gallery/g2.jpeg"),
  require("../../images/gallery/g3.jpeg"),
  require("../../images/gallery/g4.jpeg"),
  require("../../images/gallery/g5.jpeg")
];
const promo = [
  require("../../images/gallery/g1.jpeg"),
  require("../../images/gallery/g2.jpeg"),
  require("../../images/gallery/g3.jpeg"),
  require("../../images/gallery/g4.jpeg"),
  require("../../images/gallery/g5.jpeg")
];
const wall = [
  require("../../images/gallery/g1.jpeg"),
  require("../../images/gallery/g2.jpeg"),
  require("../../images/gallery/g3.jpeg"),
  require("../../images/gallery/g4.jpeg"),
  require("../../images/gallery/g5.jpeg")
  ];
 


  const linkName = display ? (
    <p>
      {" "}
      <h6>CATEORIES &#8593;</h6>{" "}
    </p>
  ) : (
    <p>
      {" "}
      <h6>CATEGORIES &#8595; </h6>{" "}
    </p>
  );
  return (
    <div className="gallery">
      <div className="title">
      <p>SEEDTONIC STUDIOS GALLERY</p>
      <p>
        <button
          className="categorybutton"
          type="button"
          onClick={() => {
            setDisplay(!display);
          }}
        >
          {" "}
          {linkName}{" "}
        </button>
        {display && (
          <div>
            <p>
              <a href="#row1">Corporate Photography</a>{" "}
            </p>
            <p>
              <a href="#row2">Events</a>{" "}
            </p>
            <p>
              <a href="#row3">Personal affair</a>{" "}
            </p>
            <p>
              <a href="#row4">Music video</a>{" "}
            </p>
            <p>
              <a href="#row5">Marketing & Promo</a>{" "}
            </p>
            <p>
              <a href="#row6">Documentary</a>{" "}
            </p>
            <p>
              <a href="#row7">Wall Art</a>{" "}
            </p>
            
          </div>
        )}
      </p>
      </div>

      <div>
      {general.map((image) => <img  className="image" key={image} src={image} alt={general.indexOf} loading="lazy"/>)} &&
      {corporate.map((image) => <img  className="image" key={image} src={image} alt={corporate.indexOf} loading="lazy"/>)}
      </div>

      <div className="category-row" id="row1">
        <p><b>Corporate Events</b></p><br/>
       <Fade>
       {corporate.map((image) => <img  className="image" key={image} src={image} alt={corporate.indexOf} loading="lazy"/>)}      
         </Fade> 
      </div><br/>
      <div className="category-row" id ="row2">
        <p><b>General Events</b><br/>
        Parties, anniversaries,graduation,Weddings
        </p><br/>
      <Fade>
      {general.map((image) => <img  className="image" key={image} src={image} alt={general.indexOf} loading="lazy"/>)}
          
        </Fade>
        </div><br/>
      <div className="category-row" id="row3">
        <p><b>Personal Affair Photography</b><br/>
        family portrait, baby pictures, baby bump pictures,couple pictures
        </p><br/>
        <Fade>
        {personal.map((image) => <img  className="image" key={image} src={image} alt={personal.indexOf} loading="lazy"/>)}
          
        </Fade>
      </div><br/>
      <div className="category-row" id="row4">
        <p><b>Music Video Photography</b></p><br/>
        <Fade>
        {music.map((image) => <img  className="image" key={image} src={image} alt={music.indexOf} loading="lazy"/>)}
          
        </Fade>
      </div><br/>
      <div className="category-row" id="row5">
      <p><b>Documentary & Short-Films</b></p>
      <Fade>
      {documentary.map((image) => <img  className="image" key={image} src={image} alt={documentary.indexOf} loading="lazy"/>)}
          
        </Fade>
      </div><br/>
      <div className="category-row" id="row6">
        <p><b>Markerting & Promotion Photography</b></p><br/>
        <Fade>
        {promo.map((image) => <img  className="image" key={image} src={image} alt={promo.indexOf} loading="lazy"/>)}
          
        </Fade>
      </div><br/>
      <div className="category-row" id="row7">
        <p><b>Wall art photography,photo-book & portraits</b></p><br/>
        <Fade>
        {wall.map((image) => 
        <img 
        className="image"
        key={image} 
        src={image} 
        alt={wall.indexOf}
        loading="lazy"
        />)}
          
        </Fade>
      </div>
      <hr/>
      <div>
      {all.map((image) => 
        <img 
        className="all"
        key={image} 
        src={image} 
        alt={all.indexOf}
        loading="lazy"
        />)}
      </div>
    </div>
  );
}

export default Image;
