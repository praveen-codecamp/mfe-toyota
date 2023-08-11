import React, { useRef } from "react";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const Print = ({ children, docName, callBack }) => {
  const inputRef = useRef(null);
  const printDocument = () => {
    html2canvas(inputRef.current).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "JPEG", 0, 0);
      pdf.save(`${docName || "download"}.pdf`);
    });
    callBack && callBack();
  };
  return (
    <>
      <Paper
        sx={{
          background: "#FFFFFF 0% 0% no-repeat padding-box;",
          boxShadow: "0px 3px 6px #0000001F",
          width: "33rem",
        }}
      >
        <Box textAlign={"center"}>
          <Button onClick={printDocument} title="Save as PDF">
            Save
          </Button>
        </Box>
        <div id="divToPrint" style={{ width: "33rem" }} ref={inputRef}>
          {children}
        </div>
      </Paper>
    </>
  );
};
export default Print;
