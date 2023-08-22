import React, { useState, useEffect } from "react";
import "./index.css";
import GridCell from "./gridcell";

const GridLayout = ({ gridData, showPopup }) => {
  const [noOfRows, setNoOfRows] = useState(15);
  const [noOfColumns, setNoOfColumns] = useState(26);

  useEffect(() => {
    resetGrid();
    for (let item of gridData) {
      console.log(item);
      let cIndex = item.running === "rtl" ? item.xTo - item.xFrom : 1;

      for (let i1 = item.xFrom; i1 < item.xTo; i1++) {
        let elem = document.getElementById(
          "cell_" + (item.yFrom - 1) + "_" + i1
        );
        if (elem) {
          elem.innerHTML = cIndex.toString();
          elem.addEventListener("click", (event) => onMouseClickHandler(item));
          cIndex += item.running === "rtl" ? -1 : 1;
        }
      }

      if (item) {
        for (let i1 = 0; i1 < item.data.length; i1++) {
          for (let j1 = 0; j1 < item.data[i1].loadingunits; j1++) {
            let elem = document.getElementById(
              "cell_" + (j1 + item.yFrom) + "_" + (i1 + item.xFrom)
            );
            if (elem) elem.style.backgroundColor = item.color;
          }
        }
      }
    }
  }, [gridData]); //xFrom, yFrom, xTo, yTo

  const resetGrid = () => {
    for (let xF = 0; xF < noOfRows; xF++) {
      for (let yF = 0; yF < noOfColumns; yF++) {
        let elem = document.getElementById("cell_" + xF + "_" + yF);
        if (elem) {
          elem.removeEventListener("click", onMouseClickHandler);
          elem.innerHTML = "";
          elem.style.backgroundColor = "white";
        }
      }
    }
  };

  const onMouseClickHandler = (item) => {
    console.log("Inside onMouseClickHandler..." + item);
    showPopup(item);
  };

  return (
    <table className="grid-main">
      <thead>
        <tr>
          {[...Array(noOfColumns)].map((column, cindex) => {
            return (
              <th key={"th" + cindex}>
                {cindex === 0 ? <></> : <div>X{cindex}</div>}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {[...Array(noOfRows)].map((row, rindex) => {
          return (
            <tr key={"tr" + rindex}>
              {[...Array(noOfColumns)].map((column, cindex) => {
                return (
                  <td key={cindex}>
                    {cindex === 0 ? (
                      <div>Y{rindex + 1}</div>
                    ) : (
                      <GridCell
                        key={rindex + cindex}
                        id={"cell_" + rindex + "_" + cindex}
                      />
                    )}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default GridLayout;
