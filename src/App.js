import React from "react";
// import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
//import MediaQuery from 'react-responsive';

import "bootstrap/dist/css/bootstrap.min.css";

import Root from "./components/main/Root";
import Home from "./components/main/Home";
import Events from "./components/main/Events";
import Appointment from "./components/main/Appointment";
import Gallery from "./components/main/Gallery";
import About from "./components/main/Contact";
import Register from "./components/main/Register";
import Login from "./components/main/Login";
import Profile  from "./components/main/Profile";
import Photography from "./components/services/Photography";
import Audio from "./components/services/Audio";
import Music from "./components/services/Music";
import Advertisement from "./components/services/Advertisement";
import Emanagement from "./components/services/Emanagement";
import "./App.css";
import Video from "./components/services/Videoschool";
import Advertisementform from "./components/forms/Advertisementform";
import Audioform from "./components/forms/Audioform";
import Emanagementform from "./components/forms/Emanagementform";
import Musicform from "./components/forms/Musicform";
import Photographyform from "./components/forms/Photographyform";
import Videoform from "./components/forms/Video";

class App extends React.Component {
  render() {
    return (
      <>
      <div className="page">
        <Router > 
        {/* basename="/home"      */}
          <Route path={"/"} component={Root} /> 
          <Route path={"/home"} component={Home} />
          <Route path={"/events"} component={Events} />      
          <Route path={"/appointment"} component={Appointment} />
          <Route path={"/gallery"} component={Gallery} />
          <Route path={"/about"} component={About} />
          <Route path={"/register"} component={Register} />
          <Route path={"/login"} component={Login} />
          <Route path={"/profile"} component={Profile} />
          <Route path={"/photography"} component={Photography} />
          <Route path={"/audio"} component={Audio} />
          <Route path={"/music"} component={Music} />
          <Route path={"/video"} component={Video} />
          <Route path={"/advertisement"} component={Advertisement} />
          <Route path={"/emanagement"} component={Emanagement} />
          <Route path={"/photographyform"} component={Photographyform} />
          <Route path={"/audioform"} component={Audioform} />
          <Route path={"/musicform"} component={Musicform} />
          <Route path={"/videoform"} component={Videoform} />
          <Route path={"/advertisementform"} component={Advertisementform} />
          <Route path={"/emanagementform"} component={Emanagementform} />

        </Router>
       
        </div>
      </>
    );
  }
}

export default App;
