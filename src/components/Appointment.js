import React from "react";
import { Link } from "react-router-dom";
import ReactTable from "react-table-6";  
import "react-table-6/react-table.css"; 
//import Profile  from "./components/Profile"   
  

function Appointment() { 
     const data = [{  
      service: 'Ayaan',  
        package: 26,
        price:  500 
        },{  
         service: 'Ahana',  
         package: 22,
         price:  500   
         },{  
         service: 'Peter',  
         package: 40,
         price:  500       
         },{  
         service: 'Virat',  
         package: 30 , 
         price:  500 
         },{  
         service: 'Rohit',  
         package: 32,
         price:  500   
         },{  
         service: 'Dhoni',  
         package: 37 , 
         price:  500 
         }]  
     const columns = [{  
       Header: 'Service',  
       accessor: 'service'  
       },{  
       Header: 'Package',  
       accessor: 'package'  
       },{  
        Header: 'Pricing',  
        accessor: 'price'  
        }]
    
  return (
<>
<ReactTable  
data={data}  
columns={columns}  
defaultPageSize = {2}  
pageSizeOptions = {[2,4,6]}  
/>  
    <Link to="/register">Register</Link>
    <Link to="/login">Login</Link>
    <Link to="/profile">user profile</Link>
</>
    
);
} 

export default Appointment;  