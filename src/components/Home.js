import React from "react";

import "../static/Home.css";
import BackgroundSlider from 'react-background-slider'

import 'react-slideshow-image/dist/styles.css'
import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpg";
 import image4 from "../images/image4.jpg";





function Home() {
 
  
    return (
      <>
       <div className="marquee"><b> <marquee> HOME OF TALENT</marquee></b></div>
       <div className="home" >
                   
              <BackgroundSlider
                 className="bg"
                 images={[image1, image2, image3,image4]}
                 duration={10} transition={2} />              
         
       
            
              <div class="green-column">
                <br></br>
                <p><center><b><h3>Hello Our Esteemed Customer</h3></b></center></p>
                <p><center>
                  <h3>Thank you for visiting our page
                   click the whatsapp Icon to talk to us
                                   
                  <br></br>
                  or<br></br>
                  <a href="tel:254710424010"><button>click here</button></a> and give us a call

                  </h3> </center></p>
                  <br></br>
                  <br></br><br></br>
                                  
               
               </div>
                     
          </div> 
      </>
    );
}

export default Home;