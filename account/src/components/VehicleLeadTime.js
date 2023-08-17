import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

const VehicleLeadTime = () => {
  return (
    <Box sx={{ border: "1 px solid", background: "white", minHeigth: "4em" }}>
      <Grid container spacing={1}>
        <Grid item xs={12} md={12} lg={2}></Grid>
        <Grid item xs={12} md={12} lg={8}>
          <Typography variant="subtitle2">Parking Lane</Typography>
        </Grid>
        <Grid item xs={12} md={12} lg={2}>
          <Typography>Units</Typography>
        </Grid>
      </Grid>
      <Grid container spacing={1}>
        <Grid item xs={12} md={12} lg={2}>
          <Box
            sx={{
              width: "0.9rem",
              height: ".4rem",
              display: "inline-block",
              padding: "0",
              float: "left",
              border: "4px solid",
            }}
          />
        </Grid>
        <Grid item xs={12} md={12} lg={8}>
          <Typography variant="subtitle2">Warning in PIO delay</Typography>
        </Grid>
        <Grid item xs={12} md={12} lg={2}>
          <Box display="flex"></Box>
        </Grid>
      </Grid>
      <Grid container spacing={1}>
        <Grid item xs={12} md={12} lg={2}>
          <Box
            sx={{
              width: "0.9rem",
              height: ".4rem",
              display: "inline-block",
              padding: "0",
              float: "left",
              border: "4px solid",
            }}
          />
        </Grid>
        <Grid item xs={12} md={12} lg={8}>
          <Typography variant="subtitle2">Warning in PIO delay</Typography>
        </Grid>
        <Grid item xs={12} md={12} lg={2}>
          <Box display="flex"></Box>
        </Grid>
      </Grid>
      <Grid container spacing={1}>
        <Grid item xs={12} md={12} lg={2}>
          <Box
            sx={{
              width: "0.9rem",
              height: ".4rem",
              display: "inline-block",
              padding: "0",
              float: "left",
              border: "4px solid",
            }}
          />
        </Grid>
        <Grid item xs={12} md={12} lg={8}>
          <Typography variant="subtitle2">Warning in PIO delay</Typography>
        </Grid>
        <Grid item xs={12} md={12} lg={2}>
          <Box display="flex"></Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default VehicleLeadTime;
