import React from "react";
import "../../static/services/music.css";
import "react-slideshow-image/dist/styles.css";
import { Fade } from "react-slideshow-image";


function Photography() {
  
  

  return (
    <div className="photography">
    <p className="title"><b><center>Music/Audio Production</center></b></p>
    <Fade>
      <div className="musicfade1">
        <p>
          <center>Studio recording</center>
        </p>
      </div>
      <div className="musicfade2">
        <p>
          <center>Studio recording</center>
        </p>
      </div>
      <div className="musicfade3">
        <p>
          <center>Studio recording</center>
        </p>
      </div>
    </Fade>
    <p><center>What we do<br/>
      <h3>Studio services</h3></center></p>
      <div className="row">
      <div className="column">
        <img className="image" src="../../images/six.jpg" alt="" loading="lazy"/>
        <p>
          <b>Audio Book</b>:<br/>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
           Pellentesque sed molestie augue, et suscipit ligula.
            Etiam mollis in odio condimentum consequat. 
            Aliquam lacinia vel orci suscipit bibendum.<br/>
           <center> <button className="buttonA">book appointment</button></center> 
        </p>
      </div>
      <div className="column">
        <img className="image" src="../../images/six.jpg" alt="" loading="lazy"/>
        <p>
          
          <b>Voice Recording</b><br/>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
           Pellentesque sed molestie augue, et suscipit ligula.
            Etiam mollis in odio condimentum consequat. 
            Aliquam lacinia vel orci suscipit bibendum.<br/>
            <center> <button className="buttonA">book appointment</button></center>

        </p>
      </div>
      <div className="column">
        <img className="image" src="../../images/six.jpg" alt="" loading="lazy"/>
        <p>
          <b>Voice Mixing</b><br/>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
           Pellentesque sed molestie augue, et suscipit ligula.
            Etiam mollis in odio condimentum consequat. 
            Aliquam lacinia vel orci suscipit bibendum.<br/>
            <center> <button className="buttonA">book appointment</button></center>

        </p>
      </div>
      <div className="column">
        <img className="image" src="../../images/six.jpg" alt="" loading="lazy"/>
        <p>
          
          <b>Voice Recording</b><br/>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
           Pellentesque sed molestie augue, et suscipit ligula.
            Etiam mollis in odio condimentum consequat. 
            Aliquam lacinia vel orci suscipit bibendum.<br/>
            <center> <button className="buttonA">book appointment</button></center>

        </p>
      </div>
      </div>
    
  </div>
        
          
    
  );
}

export default Photography;
