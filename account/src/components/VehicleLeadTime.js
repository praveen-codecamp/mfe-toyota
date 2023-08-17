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

const numberBoxCss = { border: "1px solid", height: "3.5vh" };

const VehicleLeadTime = () => {
  return (
    <Box sx={{ border: "1 px solid", background: "white" }}>
      <Grid container spacing={1}>
        <Grid item xs={12} md={12} lg={2}></Grid>
        <Grid item xs={12} md={12} lg={8}>
          <Typography variant="subtitle2">Parking Lane</Typography>
        </Grid>
        <Grid item xs={12} md={12} lg={2}>
          <Typography variant="subtitle2" gutterBottom>
            Units
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={1}>
        <Grid item xs={12} md={12} lg={2}>
          <Box
            sx={{
              width: "1.4rem",
              height: "1rem",
              display: "inline-block",
              marginLeft: "4px",
              float: "left",
              border: "2px solid #f0f",
            }}
          />
        </Grid>
        <Grid item xs={12} md={12} lg={8}>
          <Typography variant="subtitle2">Warning in PIO delay</Typography>
        </Grid>
        <Grid item xs={12} md={12} lg={2}>
          <Box sx={numberBoxCss}>
            <Box sx={{ float: "right" }}>0</Box>
          </Box>
        </Grid>
      </Grid>
      <Grid container spacing={1}>
        <Grid item xs={12} md={12} lg={2}>
          <Box
            sx={{
              width: "1.4rem",
              height: "1rem",
              display: "inline-block",
              marginLeft: "4px",
              float: "left",
              border: "2px solid #AD401C",
            }}
          />
        </Grid>
        <Grid item xs={12} md={12} lg={8}>
          <Typography variant="subtitle2">Delay in PIO</Typography>
        </Grid>
        <Grid item xs={12} md={12} lg={2}>
          <Box sx={numberBoxCss}>
            <Box sx={{ float: "right" }}>0</Box>
          </Box>
        </Grid>
      </Grid>
      <Grid container spacing={1}>
        <Grid item xs={12} md={12} lg={2}>
          <Box
            sx={{
              width: "1.4rem",
              height: "1rem",
              display: "inline-block",
              marginLeft: "4px",
              float: "left",
              border: "2px solid #FFEB55",
            }}
          />
        </Grid>
        <Grid item xs={12} md={12} lg={8}>
          <Typography variant="subtitle2">
            Warning in Calling Sheet Making
          </Typography>
        </Grid>
        <Grid item xs={12} md={12} lg={2}>
          <Box sx={numberBoxCss}>
            <Box sx={{ float: "right" }}>0</Box>
          </Box>
        </Grid>
      </Grid>
      <Grid container spacing={1}>
        <Grid item xs={12} md={12} lg={2}>
          <Box
            sx={{
              width: "1.4rem",
              height: "1rem",
              display: "inline-block",
              marginLeft: "4px",
              float: "left",
              border: "2px solid #5563FF",
            }}
          />
        </Grid>
        <Grid item xs={12} md={12} lg={8}>
          <Typography variant="subtitle2">
            Delay in Calling Sheet Making
          </Typography>
        </Grid>
        <Grid item xs={12} md={12} lg={2}>
          <Box sx={numberBoxCss}>
            <Box sx={{ float: "right" }}>78</Box>
          </Box>
        </Grid>
      </Grid>
      <Grid container spacing={1}>
        <Grid item xs={12} md={12} lg={2}>
          <Box
            sx={{
              width: "1.4rem",
              height: "1rem",
              display: "inline-block",
              marginLeft: "4px",
              float: "left",
              border: "2px solid",
            }}
          />
        </Grid>
        <Grid item xs={12} md={12} lg={8}>
          <Typography variant="subtitle2">
            Warning For Trailer Arrival
          </Typography>
        </Grid>
        <Grid item xs={12} md={12} lg={2}>
          <Box sx={numberBoxCss}>
            <Box sx={{ float: "right" }}>0</Box>
          </Box>
        </Grid>
      </Grid>
      <Grid container spacing={1}>
        <Grid item xs={12} md={12} lg={2}>
          <Box
            sx={{
              width: "1.4rem",
              height: "1rem",
              display: "inline-block",
              marginLeft: "4px",
              float: "left",
              border: "2px solid red",
            }}
          />
        </Grid>
        <Grid item xs={12} md={12} lg={8}>
          <Typography variant="subtitle2">Delay In Trailer Arrival</Typography>
        </Grid>
        <Grid item xs={12} md={12} lg={2}>
          <Box sx={numberBoxCss}>
            <Box sx={{ float: "right" }}>70</Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default VehicleLeadTime;
