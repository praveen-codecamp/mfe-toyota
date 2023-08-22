import React, { useState } from "react";
import "./styles.css";
import GridLayout from "./grid";
import Header from "./header";
import EditLayout from "./editlayout";

function YardLayout() {
  const [gridData, setGridData] = useState([]);
  const [editGridData, setEditGridData] = useState(null);
  const [isShowPopup, setIsShowPopup] = useState(false);
  const [laneCode, setLaneCode] = useState("");
  const [activeLane, setActiveLane] = useState();
  const [running, setRunning] = useState();
  const [color, setColor] = useState("#E63946");
  const [direction, setDirection] = useState("ltr");
  const [xFrom, setXFrom] = useState(0);
  const [yFrom, setYFrom] = useState(0);
  const [xTo, setXTo] = useState(0);
  const [yTo, setYTo] = useState(0);

  const onChangeActiveLaneHandler = (event) => {
    setActiveLane(event.target.value);
  };

  const onChangeRunningHandler = (event) => {
    setRunning(event.target.value);
  };

  const onChangeColorHandler = (event) => {
    setColor(event.target.value);
  };

  const onChangeDirectionHandler = (event) => {
    setDirection(event.target.value);
  };

  const onChangeXFromHandler = (event) => {
    setXFrom(parseInt(event.target.value));
  };

  const onChangeYFromHandler = (event) => {
    setYFrom(parseInt(event.target.value));
  };

  const onChangeXToHandler = (event) => {
    setXTo(parseInt(event.target.value));
  };

  const onChangeYToHandler = (event) => {
    setYTo(parseInt(event.target.value));
  };

  const onSearchHandler = () => {
    let objGrid = {
      data: [],
      xTo: xTo,
      xFrom: xFrom,
      yFrom: yFrom,
      color: color,
      direction: direction,
      running: running,
    };
    for (let i1 = 0; i1 < xTo - xFrom; i1++) {
      objGrid.data.push({
        yard: "01-HO",
        zone: laneCode,
        lane: i1 + 1,
        priority: "PIO Pre Installation",
        lanepriority: 500 + i1,
        loadingunits: parseInt(yTo) - parseInt(yFrom),
        active: true,
      });
    }
    setGridData([...gridData, objGrid]);
  };

  const showPopupHandler = (item) => {
    setEditGridData(item.data);
    setIsShowPopup(true);
  };

  const hidePopupHandler = () => {
    setIsShowPopup(false);
    setGridData([...gridData]);
  };

  return (
    <div className="App">
      {/*<div className="heading-top">YARD LAYOUT PLANNER</div> */}
      <div className="apppane">
        <Header
          onChangeActiveLane={onChangeActiveLaneHandler}
          onChangeRunning={onChangeRunningHandler}
          onChangeColor={onChangeColorHandler}
          onChangeDirection={onChangeDirectionHandler}
          onChangeXFrom={onChangeXFromHandler}
          onChangeYFrom={onChangeYFromHandler}
          onChangeXTo={onChangeXToHandler}
          onChangeYTo={onChangeYToHandler}
          onSearch={onSearchHandler}
        />
        <GridLayout
          activeLane={activeLane}
          running={running}
          color={color}
          direction={direction}
          xFrom={xFrom}
          yFrom={yFrom}
          xTo={xTo}
          yTo={yTo}
          gridData={gridData}
          showPopup={showPopupHandler}
        />
      </div>
      <EditLayout
        isShowPopup={isShowPopup}
        gridData={editGridData}
        hidePopup={hidePopupHandler}
      />
    </div>
  );
}

export default YardLayout;
