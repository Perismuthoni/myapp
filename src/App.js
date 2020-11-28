import React from "react";
// import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import Root from "./components/Root";
//import Nav from "./components/Nav";
import Home from "./components/Home";
import Events from "./components/Events";
import Services from "./components/Services";
import Appointment from "./components/Appointment";
import Gallery from "./components/Gallery";
import About from "./components/About";
import Register from "./components/Register";
import Login from "./components/Login";
import Profile  from "./components/Profile";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Route path={"/"} component={Root} />
          <Route path="/home" component={Home} />
          <Route path="/events" component={Events} />
          <Route path="/services" component={Services} />
          <Route path={"/appointment"} component={Appointment} />
          <Route path={"/gallery"} component={Gallery} />
          <Route path={"/about"} component={About} />
          <Route path={"/register"} component={Register} />
          <Route path={"/login"} component={Login} />
          <Route path={"/profile"} component={Profile} />
        </Router>
        <div className="page">
          
        </div>
      </>
    );
  }
}

export default App;
