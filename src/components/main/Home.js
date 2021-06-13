import React from "react";
import{Link} from "react-router-dom";
import 'react-slideshow-image/dist/styles.css'
import { Fade } from 'react-slideshow-image';
import "../../static/main/Home.css";





function Home() {
 
  
    return (
      
       <div className="home">
       
        <input 
       className="searchbar"       
       type="text" 
       placeholder="Search..."
       />
      <Fade>
        <div className="fade1">
          
          <center>
            <ul>
              <li><b> <Link to="/band">Seedtonic Band</Link></b></li>
              our band is skilled in different instruments and perform all genres of music
              <br/><br/><br/>
              <li><b><Link to="/music">Music Production </Link> </b></li>
              We do:podcasts,spoken word,poems,voice over,narrators,Audio production and editing
                     </ul>
              </center>
         
        </div>
        <div className="fade2">
          
          <p><center>
            <ul>
              <li> <b> <Link to="/music">School of Music </Link></b> </li>
              We offer online classes<br/>
              we train:Piano,Drums,Saxophone and Guitar
              <br/><br/><br/>
              <li><b><Link to="/music">Vocals </Link></b></li>
            </ul>
         
              </center>
          </p>
        </div>
        <div className="fade3">
          
          <p><center>
              <ul>
                <li><b><Link to="/emanagement">Event Management </Link></b></li>
                conferences,corporate,Personal events and
                Live events:fashion shows,gala night,festivals etc..
                <br/><br/><br/>
                <li><b><Link to="/advertisement">Advertising </Link></b></li>
                product,service and brand advertisement
              </ul>
              
              </center>
          </p>
        </div>
        <div className="fade4">
          
          <p><center>
        <ul>
          <li><b><Link to="/photography">photography </Link></b></li>
          Corporate,Wedding,graduation,promotion,Wall art photography and portraits
          <br/><br/>
          <li><b><Link to="/videography"> Videography</Link></b></li>
           Short films,documentaries,Video Marketing,Translation and transcribing to English and Kiswahili 
           <br/><br/>
          <li><b><Link to="/film">Film </Link></b></li>
          we cover :TV commercial,series,Set design,Script writing,Casting and Equipment hiring 
        </ul>
          
</center>
          </p>
        </div>
      </Fade>
                   
     </div>
    );
}

export default Home;