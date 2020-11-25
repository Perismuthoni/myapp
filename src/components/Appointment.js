import React from "react";
import { Link } from "react-router-dom";
//import ReactTable from "react-table-6";  
//import "react-table-6/react-table.css"; 
//import Profile  from "./components/Profile"   
  

function Appointment() { 
    
  return (
<>  
    <Link to="/register">Register</Link>
    <Link to="/login">Login</Link>
    <Link to="/profile">user profile</Link>
</>
    
);
} 

export default Appointment;  