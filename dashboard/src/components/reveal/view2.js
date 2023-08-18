import React from "react";
import { Link } from "react-router-dom";
import "./View2.css";

export default function View2() {
  // const itemBox = {
  //     border: "2px solid red",
  //     padding: "10px",
  //     border-radius: "10px"
  //   };

  return (
    <div className="container">
      <div className=" row col-md-12">
        <div className="col-sm-4 itemBox">
          <label>Follow-up for Today</label>
          {/* <h3><Link to={`/view1`}>4</Link></h3> */}
          <h3>
            <a href="/dashboard/view1">4</a>
          </h3>
          {/* <h3>4</h3> */}
        </div>
        <div className="col-sm-4 itemBox">
          <label>Ready for Delivery</label>
          <h3>6</h3>
        </div>
        <div className="col-sm-4 itemBox">
          <label>Delivery Today</label>
          <h3>2</h3>
        </div>
      </div>
      <div className=" row col-md-12">
        <div className="col-sm-4 itemBox">
          <label>Prospect Open</label>
          <h3>40</h3>
        </div>
        <div className="col-sm-4 itemBox">
          <h5>Total Booking</h5>
          <p>
            <label>Fleet-20</label>
            <br />
            <label>Normal-45</label>
          </p>
        </div>
        <div className="col-sm-4 itemBox">
          <h5>Fleet</h5>
          <p>
            <label>Form A-1</label>
            <br />
            <label>Form B-2</label>
            <br />
            <label>Form C-1</label>
          </p>
        </div>
      </div>
    </div>
  );
}
