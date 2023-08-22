import React, { useState, useEffect } from "react";
import TableComponent from "./TableComponent";

const ParkingVisualization = () => {
  const Percent_100 = 100;

  const [zoomLevel, setZoomLevel] = useState(Percent_100);

  const zoomIn = () => {
    setZoomLevel(zoomLevel + 10);
  };

  const resetZoom = () => {
    setZoomLevel(Percent_100);
  };

  const zoomOut = () => {
    setZoomLevel(zoomLevel - 10);
  };

  useEffect(() => {
    document.body.style.zoom = Percent_100 + "%";
    return () => {
      document.body.style.zoom = Percent_100 + "%";
    };
  }, []);

  useEffect(() => {
    if (zoomLevel > 10 && zoomLevel < 200) {
      document.body.style.zoom = zoomLevel + "%";
    }
  }, [zoomLevel]);

  return (
    <div>
      <div>
        <button type="button" onClick={zoomOut}>
          -
        </button>
        <button type="button" onClick={resetZoom}>
          Reset
        </button>
        <button type="button" onClick={zoomIn}>
          +
        </button>
      </div>

      <TableComponent />
    </div>
  );
};

export default ParkingVisualization;
