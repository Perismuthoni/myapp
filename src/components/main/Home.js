import React from "react";

import "../../static/Home.css";
import BackgroundSlider from 'react-background-slider'
import { Facebook,Instagram,Linkedin,Twitter, Mailbox} from 'react-bootstrap-icons';

import 'react-slideshow-image/dist/styles.css'
import image1 from "../../images/image1.jpg";
import image2 from "../../images/image2.jpg";
import image3 from "../../images/image3.jpg";
 import image4 from "../../images/image4.jpg";





function Home() {
 
  
    return (
      <>
       <div className="home" >
       
       <div className="icons">
             <center>
           <a href="https://web.facebook.com/SeedTonic/"> < Instagram className="icon-i" /></a>
           <a href="https://web.facebook.com/SeedTonic/"><Facebook className="icon-f"/></a>
           <a href="https://twitter.com/SeedTonic"><Twitter className="icon-t"/></a>
           <a href="https://www.linkedin.com/in/seed-tonic-5a53481a3/"><Linkedin className="icon-l"/></a>
           <a href="mailto:seedtonic@gmail.com"><Mailbox className="icon-m"/></a> 
           </center>
           </div> 
           <hr></hr>  
              <BackgroundSlider
                 className="bg"
                 images={[image1, image2, image3,image4]}
                 duration={10} transition={2} /> 
                             
              <div class="green-column">
                
                <center>
                  <p>
                    Welcome to Seedtonic Home of Talent,<br/>
                    Our delight is offering  exceptional professional services
                     with maximum efficiency. <br/> 
                     While being both affordable and dynamic with a touch of creativity
                  </p>

                  <p>
                  Thank you for visiting our page<br/>
                   whatsapp us <br/>
                   or <br/>
                   <a href="tel:254710424010"><button>click here</button></a> and give us a call
                  </p>
                </center>                   
               </div>
                     
          </div> 
      </>
    );
}

export default Home;