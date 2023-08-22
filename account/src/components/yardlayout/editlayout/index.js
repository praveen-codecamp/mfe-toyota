import React, { useEffect, useRef } from "react";
import "./index.css";

export default function EditLayout({ isShowPopup, gridData, hidePopup }) {
  const divContainer = useRef();

  useEffect(() => {
    divContainer.current.style.display = isShowPopup ? "" : "none";
  }, [isShowPopup]);

  const onChangeUnitsHandler = (event, row) => {
    row.loadingunits = event.target.value;
  };

  return (
    <div ref={divContainer} className="overlay">
      <div className="box">
        <div className="table-data-row">
          <table className="gridtable">
            <thead>
              <tr>
                <th rowSpan={2}>Yard</th>
                <th colSpan={2}>Lane</th>
                <th colSpan={2}>Co-Lane</th>
                <th rowSpan={2}>1st Priority</th>
                <th rowSpan={2}>2nd Priority</th>
                <th rowSpan={2}>Transportation Route Code</th>
                <th rowSpan={2}>Lane Priority</th>
                <th rowSpan={2}>Loading Units</th>
                <th rowSpan={2}>Active</th>
              </tr>
              <tr>
                
                <th>Zone</th>
                <th>Lane</th>
                <th>Zone</th>
                <th>Lane</th>
                {/* <th>1st Priority</th> 
                <th>2nd Priority</th>
                <th>Transportation Route Code</th>
                <th>Lane Priority</th>
                <th>Loading Units</th>
                <th>Active</th>*/}
              </tr>
            </thead>
            <tbody>
              {gridData &&
                gridData.length > 0 &&
                gridData.map((row, rindex) => {
                  return (
                    <tr>
                      <td>{row.yard}</td>
                      <td>{row.zone}</td>
                      <td>{row.lane}</td>
                      <td></td>
                      <td></td>
                      <td>{row.priority}</td>
                      <td></td>
                      <td></td>
                      <td>{row.lanepriority}</td>
                      <td>
                        <input
                          type="text"
                          key={row.loadingunits}
                          defaultValue={row.loadingunits}
                          // pattern="^[0-9]+[0-9]*$"
                          onChange={(event) => onChangeUnitsHandler(event, row)}
                        ></input>
                      </td>
                      <td>
                        <input type="checkbox" />
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
        <div className="button-data-row">
          <div className="divfooter">
            <button onClick={(event) => hidePopup()}>Submit</button>
            <button onClick={(event) => hidePopup()}>Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
}
