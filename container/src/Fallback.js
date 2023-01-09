import React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import undermaintanance from "../public/undermaintanance.png";

export default ({ module }) => {
  return (
    <div style={{ marginTop: 64 }}>
      <Container
        maxWidth="maxWidthXl"
        component="main"
        sx={{ padding: "0 !important" }}
      >
        <Grid
          container
          style={{
            minHeight: window.innerHeight - 64,
            backgroundColor: "#d2efff",
            backgroundImage: `url(${undermaintanance})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            position: "relative",
            overflow: "hidden",
            color: "#FFF",
          }}
          className="home-bannner"
          direction="row"
          justifyContent="center"
          alignItems="center"
        ></Grid>
      </Container>
    </div>
  );
};
