import React from "react";
import ReactTable from "react-table-6"; 
import "../static/Services.css";

function Services() {
   const data = [
     {
       name: "Photography",
       package: "unlimited",
       price: 26,
     },
     {
       name: "Photography",
       package: "one photo",
       price: 26,
     },
     {
       name: "Photography",
       package: "economic",
       price: 26,
     },
     {
       name: "Photography",
       package: "unlimited(event)",
       price: 26,
     },
     {
       name: "Videography",
       package: "single",
       price: 26,
     },
     {
       name: "Photography",
       package: "album",
       price: 26,
     },
     {
       name: "School of Photography",
       package: "album",
       price: 26,
     },
     {
       name: "School of videography",
       package: "album",
       price: 26,
     },
   ];
   const columns = [
     {
       Header: "Service",
       accessor: "name",
     },
     {
       Header: "Package",
       accessor: "package",
     },
     {
       Header: "price",
       accessor: "price",
     },
   ];  
  return (
    <div>
      <div className="container">
        <div class="row">
          <p>
            <b>
              <center>OUR PRODUCTS</center>
            </b>
          </p>
        </div>
        <div class="row">
          <div className="row1"></div>
          <div class="column">
            <div className="photography">
              <div>
                <ReactTable data={data} columns={columns} defaultPageSize={8} />
              </div>
            </div>
          </div>
          <div class="column">this is column video and audio </div>
        </div>

        <div class="row">
          <div class="column">
            <p>this is column school of music</p>
            <div>
              <ReactTable
                data={data}
                columns={columns}
                defaultPageSize={6}
                pageSizeOptions={[2, 4, 6]}
              />
            </div>
          </div>
          <div class="column">this is column green </div>
        </div>
        <div class="row">
          <div class="column">
            <p>this is column red</p>
          </div>
          <div class="column">this is column event management </div>
        </div>
        <div class="row">
          <div class="column">
            <p>this is column advertisement</p>
          </div>
          <div class="column">this is column blue </div>
        </div>
        <div />
        <div />
      </div>{" "}
    </div>
  );
}

export default Services;
