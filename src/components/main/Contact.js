import React from "react";
import "../../static/main/Contact.css";

function About () {
    return (
      <>
        <div className="contact">
          <div className="message">
            <p>
              <b>Leave a Message</b>
            </p>
            <form action="/api/contact">
              <label>Name</label>
              <input
                type="text"               
                name="name"
                placeholder="Your name.."
                
              />
             
              <br />
              <label>Email</label>
              <input
                type="email"               
                name="email"
                placeholder="Your email"
                
              />
              <label>Message</label>
              <textarea
                type="message"
                name="message"
                placeholder="Leave a message..."

              />
              <input
                type="submit"            
                value="Submit"               
              />
            </form>
          </div>
          <br></br>
          <div className="direction">
            <center>
              Visit Our Offices Today
              <br/>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.51772455505!2d36.94585181410192!3d-1.4629990362554983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f0aa9925d79f9%3A0xfd87c5e946811131!2sNoonkopir%20Girls%20Secondary%20School!5e0!3m2!1sen!2ske!4v1615714003399!5m2!1sen!2ske"
                width="600"
                height="450"
                allowfullscreen=""
                loading="lazy"
                title="map"
                className="map"
              ></iframe>
            </center>
          </div>
        </div>

        <div>
          <p className="credentials">
             website by dev Peris Muthoni Email:muthonimuriuki22@gmail.com 
          </p>
        </div>
      </>
    );
  }


export default About;
