import React, {useState} from 'react';
import axios from 'axios';
import {API_BASE_URL, ACCESS_TOKEN_NAME} from '../../constants/apiConstants';
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import "../../static/Login.css";

function Login(props) {
    const [state , setState] = useState({
        email : "",
        password : "",
        successMessage: null
    })
    const handleChange = (e) => {
        const {id , value} = e.target   
        setState(prevState => ({
            ...prevState,
            [id] : value
        }))
    }

    const handleSubmitClick = (e) => {
        e.preventDefault();
        const payload={
            "email":state.email,
            "password":state.password,
        }
        axios.post(API_BASE_URL+'/user/login', payload)
            .then(function (response) {
                if(response.status === 200){
                    setState(prevState => ({
                        ...prevState,
                        'successMessage' : 'Login successful..'
                    }))
                    localStorage.setItem(ACCESS_TOKEN_NAME,response.data.token);
                    redirectToAppointment();
                    props.showError(null)
                }
                else if(response.code === 204){
                    props.showError("Username and password do not match");
                }
                else{
                    props.showError("Username does not exists");
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    const redirectToAppointment = () => {
        props.updateTitle('Appointment')
        props.history.push('/appointment');
    }
    const redirectToRegister = () => {
        props.history.push('/register'); 
        props.updateTitle('Register');
    }
    return (
      <>
        <div className="login">   <hr/>      
              <center>
                <form className="loginform">
                  <div className="form-group text-center">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      aria-describedby="emailHelp"
                      placeholder="Enter email"
                      value={state.email}
                      onChange={handleChange}
                    />
                    <small id="emailHelp" className="form-text text-muted">
                      We'll never share your email with anyone else.
                    </small>
                  </div>
                  <div className="form-group text-left">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="Password"
                      value={state.password}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-check"></div>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={handleSubmitClick}
                  >
                    LOGIN
                  </button>
                </form>
                <div
                  className="alert alert-success mt-2"
                  style={{ display: state.successMessage ? "block" : "none" }}
                  role="alert"
                >
                  {state.successMessage}
                </div>
                <div className="registerMessage">
                  <span>Don't have an account? </span>
                  <span
                    className="loginText"
                    onClick={() => redirectToRegister()}
                  >
                    <Link to="/register">Register</Link>
                  </span>
                </div>
              
        
            Seedtonic is a talent nurturing platform created to support youths
            who are gifted and talented but lack the necessary resources to
            build their talents
         
            </center> </div>
      </>
    );
}

export default withRouter(Login);