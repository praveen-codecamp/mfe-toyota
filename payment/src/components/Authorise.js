import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Menu from "./Menu";

export default () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={2}>
        <Menu />
      </Grid>
      <Grid item xs={10}>
        <Grid
          container
          direction="column"
          spacing={2}
          style={{
            margin: ".3rem",
            padding: ".2rem",
          }}
        >
          <Grid item>
            <Typography variant="h6" gutterBottom>
              Authorise Payment
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
