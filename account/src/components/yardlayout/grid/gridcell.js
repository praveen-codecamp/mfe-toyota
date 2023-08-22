import React from "react";
import "./index.css";

const GridCell = ({ index, id }) => {
  //   const bgColor = "0x" + Math.floor(Math.random() * 16777215).toString(16);
  return <div id={id} className="grid-cell"></div>;
};

export default GridCell;
