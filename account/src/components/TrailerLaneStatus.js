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
import trailerUsage from '../images/trailer-usage.png';
import trailerLoading from '../images/trailer-loading.png';
import trailerUnLoading from '../images/trailer-unloading.png';

const numberBoxCss = { border: "1px solid", height: "20px" };
const numberBoxCss2 = {
  border: "1px solid",
  height: "25px",
  fontSize: '12px',
  textAlign: 'right',
  alignContent: 'center',
  alignItems:'center',
  display: 'flex'
 };

const typoCss = {
  fontSize: "0.6rem",
  lineHeight: "0.65rem",
  paddingTop: "2px",
};

const TrailerLaneStatus = () => {
  return (
    <Box
      sx={{
        border: "1px solid",
        background: "white",
        paddingRight: "4px",
        paddingY: "3px",
      }}
    >
      <Grid container spacing={1} alignItems={"center"} mb={.5}>
        <Grid item xs={12} md={12} lg={6}></Grid>
        <Grid item xs={12} md={12} lg={3}>
          <Typography variant="subtitle2" sx={{ lineHeight:1.1 }}>
            Plan (Lane)
          </Typography>
        </Grid>
        <Grid item xs={12} md={12} lg={3}>
          <Typography variant="subtitle2" sx={{ lineHeight:1.1 }}
            gutterBottom
          >
            Actual (Lane)
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={1} alignItems={"center"} mb={.8}>
        <Grid item xs={12} md={12} lg={3}>
          <img src={trailerUsage} width='40px' height='25px' />
        </Grid>
        <Grid item xs={12} md={12} lg={3}>
          <Typography sx={typoCss}>Usage</Typography>
        </Grid>
        <Grid item xs={12} md={12} lg={3}>
          <Box sx={numberBoxCss2}>
            <Box sx={{width:'100%', textAlign:'right',padding:'2px'}}>0</Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={12} lg={3}>
          <Box sx={numberBoxCss2}>
          <Box sx={{width:'100%',height:'23px', padding:'2px', color:'#1ab15b', textAlign:'right', backgroundColor:'#ff0'}}>2</Box>
          </Box>
        </Grid>
      </Grid>
      <Grid container spacing={1} alignItems={"center"} mb={.8}>
        <Grid item xs={12} md={12} lg={3}>
          <Box
            sx={{
              width: "40px",
              height: "20px",
              display: "inline-block",
              marginLeft: "4px",
              float: "left",
              border: "2px dashed red",
            }}
          />
        </Grid>
        <Grid item xs={12} md={12} lg={3}>
          <Typography sx={typoCss}>Delay</Typography>
        </Grid>
        <Grid item xs={12} md={12} lg={3}></Grid>
        <Grid item xs={12} md={12} lg={3}>
          <Box sx={numberBoxCss2}>
          <Box sx={{width:'100%',height:'23px', padding:'2px', color:'#dc000d', textAlign:'right'}}>2</Box>
          </Box>
        </Grid>
      </Grid>
      <Grid container spacing={1} alignItems={'center'}>
        <Grid item xs={12} md={12} lg={6} p={1}>
          <img src={trailerLoading} width='87px' height='27px' />
        </Grid>
        <Grid item xs={12} md={12} lg={6} p={1}>
          <Typography sx={typoCss}>Trailer Loading</Typography>
        </Grid>
      </Grid>
      <Grid container spacing={1} alignItems={'center'}>
        <Grid item xs={12} md={12} lg={6} p={1}>
          <img src={trailerUnLoading} width='87px' height='27px' />
        </Grid>
        <Grid item xs={12} md={12} lg={6} p={1}>
          <Typography sx={typoCss}>Trailer Unloading</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TrailerLaneStatus;
