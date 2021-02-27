import React from "react";
//import { Link } from "react-router-dom";
import "../static/Home.css";
import root from "../images/root.jpg";
import wave from "../images/wave.jpg";


function Home() {

    return (
      <>
        <div class="some-page-wrapper">
          <div class="row">
            <div class="column">
              <div class="blue-column">
                <img alt="logo" className="waveimage" src={wave} />
                <img alt="logo" className="image" src={root} />
                <img alt="logo" className="waveimage" src={wave} />
              </div>
            </div>
            <div class="column">
              <div class="green-column">
                <p>
                  A recording studio is a specialized facility for sound
                  recording, mixing, and audio production of instrumental or
                  vocal musical performances, spoken words, and other sounds.
                  They range in size from a small in-home project studio large
                  enough to record a single singer-guitarist, to a large
                  building with space for a full orchestra of 100 or more
                  musicians. Ideally both the recording and monitoring
                  (listening and mixing) spaces are specially designed by an
                  acoustician or audio engineer to achieve optimum acoustic
                  properties (acoustic isolation or diffusion or absorption of
                  reflected sound echoes that could otherwise interfere with the
                  sound heard by the listener).
                </p>
                <br></br><br></br><br></br>
                <div> <center><a href="/register">Don't have an account<button><b>REGISTER</b></button></a></center></div>
                <div> <center><a href="/login">Already have an account<button><b>LOGIN</b></button></a></center></div>
                
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default Home;