import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Menu from "./Menu";

export default function Activity() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={2}>
        <Menu />
      </Grid>
      <Grid item xs={10}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          Account Activity
        </Typography>
      </Grid>
    </Grid>
  );
}
