import React from "react";
import "../../static/Contact.css";
class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      lname: "",
      email: "",
      message: "",
    };
  }
  handleFormSubmit(event) {
    event.preventDefault();
    console.log(this.state);
  }
  render() {
    return (
      <>
        <div className="contact">
          <div className="message">
            <p>
              <b>Leave a Message</b>
            </p>
            <form action="#">
              <label>First Name</label>
              <input
                type="text"
                id="fname"
                name="firstname"
                placeholder="Your name.."
                value={this.state.fname}
                onChange={(e) => this.setState({ fname: e.target.value })}
              />
              <label>Last Name</label>
              <br />
              <input
                type="text"
                id="lname"
                name="lastname"
                placeholder="Your last name.."
                value={this.state.lname}
                onChange={(e) => this.setState({ lname: e.target.value })}
              />
              <br />
              <label>Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your email"
                value={this.state.email}
                onChange={(e) => this.setState({ email: e.target.value })}
              />
              <label>Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Write something.."
                onChange={(e) => this.setState({ message: e.target.value })}
                value={this.state.message}
              ></textarea>
              <input
                type="submit"
                onClick={(e) => this.handleFormSubmit(e)}
                value="Submit"
              />
            </form>
          </div>
          <br></br>
          <div className="map">
            <center>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.51772455505!2d36.94585181410192!3d-1.4629990362554983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f0aa9925d79f9%3A0xfd87c5e946811131!2sNoonkopir%20Girls%20Secondary%20School!5e0!3m2!1sen!2ske!4v1615714003399!5m2!1sen!2ske"
                width="600"
                height="450"
                allowfullscreen=""
                loading="lazy"
                title="map"
              ></iframe>
            </center>
          </div>
        </div>

        <div>
          <p>
            <b> Developed by Peris Muthoni Email:muthonimuriuki22@gmail.com </b>
          </p>
        </div>
      </>
    );
  }
}

export default About;
