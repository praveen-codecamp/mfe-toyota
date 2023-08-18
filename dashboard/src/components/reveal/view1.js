import React from "react";
//import 'bootstrap/dist/css/bootstrap.min.css';

export default function View1() {
  return (
    <div className="container">
      <table className="table table-dark">
        <thead>
          <tr>
            <th>BookingNo</th>
            <th>VINNo.</th>
            <th>Salesman</th>
            <th>RetailSalesDate</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>B001010</td>
            <td>MCER19118971NJ761</td>
            <td>Rajat Chadha</td>
            <td>05-Aug-23</td>
          </tr>
          <tr>
            <td>B001011</td>
            <td>MCER19118971NJ771</td>
            <td>Vipin</td>
            <td>05-Aug-23</td>
          </tr>
          <tr>
            <td>B001012</td>
            <td>MCER19118971NH323</td>
            <td>Raj Kumar</td>
            <td>07-Aug-23</td>
          </tr>
          <tr>
            <td>B001013</td>
            <td>MCER19118990JU101</td>
            <td>Rajat Chadha</td>
            <td>08-Aug-23</td>
          </tr>
          <tr>
            <td>B001014</td>
            <td>MCER19118012AM912</td>
            <td>Vipin</td>
            <td>08-Aug-23</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
