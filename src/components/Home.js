import React from "react";

import "../static/Home.css";

import { Slide } from 'react-slideshow-image';
//import SimpleImageSlider from "react-simple-image-slider";
import 'react-slideshow-image/dist/styles.css'
import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpg";
 import image4 from "../images/image4.jpg";





function Home() {
 
  
    return (
      <>
       <div className="home" >
                     
              <div class="row1">

              <Slide>
          <div className="each-slide">       
              <img              
                src={image1}
                className="slidephoto"
                alt="Logo"
                
              />
            </div>
          
          <div className="each-slide">            
              <img              
                src={image2}
                className="slidephoto"
                alt="Logo"
                
              />
          </div>
          <div className="each-slide">            
              <img              
                src={image3}
                className="slidephoto"
                alt="Logo"                
              />            
          </div>
          <div className="each-slide">            
              <img              
                src={image4}
                className="slidephoto"
                alt="Logo"                
              />            
          </div>
        </Slide>
              
              </div>
            
              <div class="green-column">
                <br></br>
                <p><center><b><h3>Hello Our Esteemed Customer</h3></b></center></p>
                <p><center>
                  Thank you for visiting our page
                   click the whatsapp Icon to talk to us
                  <br></br>
                  or<br></br>
                  <a href="tel:254710424010"> <button>click here</button></a> and give us a call

                  </center></p>
                  <br></br>
                  <br></br><br></br>
                                  
               
               </div>
                     
          </div> 
      </>
    );
}

export default Home;