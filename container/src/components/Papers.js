import React, { useState, useEffect, Fragment, MouseEvent } from "react";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Select, MenuItem, useForkRef, ListItem } from "@mui/material";
//import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import Typography from "@mui/material/Typography";
import Popover from "@mui/material/Popover";
const Item = styled(Typography)(({ theme }) => ({
  // backgroundColor: theme.palette.mode ==="dark" ? "#008000 " : "#fff",
  // ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "left",
  // color:theme.palette.text.primary.main,
  marginTop: "5%",
  width: "100%",
  margin: 0,
  display: "inline-grid",
  position: "relative",
  paddingLeft: "25px",
}));
export default function Papers({ handleCloses }) {
  const url = window.location.href;
  //console.log("testie",url);
  return (
    <Grid
      container
      spacing={0}
      sx={{
        background: "#fcf7f7",
        px: 2,
      }}
    >
      <Grid
        item
        lg={4}
        sx={{
          overflowY: "scroll",
          height: "500px",
        }}
      >
        <Item>Select Your Card</Item>
        <Item>CBU Import Vechile Receving</Item>
        <Item>Yard in Status Input</Item>
        <Item>Yard Out</Item>
        <Item>Buy off</Item>
        <Item>Vechile Information & Status Edit</Item>
        <Item>kakudai-hyo Print Order</Item>
        <Item>Damaged Car Registration</Item>
        <Item
          sx={{
            bgcolor: "#cccccc",
            fontWeight: "bold",
          }}
        >
          Master Maintenance
          <KeyboardArrowRightOutlinedIcon
            sx={{
              position: "absolute",
              top: 9,
              right: 190,
            }}
          />
        </Item>
        <Item>
          <Link to={`/property/callingsheet`} onClick={() => handleCloses()}>
            Calling Sheet Making
          </Link>
        </Item>
      </Grid>
      <Grid item lg={3}>
        <Item>
          <Link to={`/property/search`} onClick={() => handleCloses()}>
            Model Master Maintenance
          </Link>
        </Item>
        <Item>
          <Link to={`/property/logistics`} onClick={() => handleCloses()}>
            Logistics Flow Maintenance
          </Link>
        </Item>
        <Item>DLR Group Code</Item>
        <Item>Plant Master</Item>
        <Item>Yard Master</Item>
        <Item>Yard Operation Maintenance</Item>
        <Item>DLR Group Maintenance</Item>
        <Item>Domestic Model/sfx List Conversion Master</Item>
        <Item>Laos PIO Conversion Master</Item>
        <Item>Offline Spec Option Master Maintenance</Item>
      </Grid>
      <Grid item lg={3}>
        <Item>Yard Login Master</Item>
        <Item
          sx={{
            fontWeight: "bold",
          }}
        >
          <KeyboardArrowDownOutlinedIcon
            sx={{
              position: "absolute",
              left: 2,
              top: 8,
            }}
          />
          Vechile Information Master
        </Item>
        <Item
          sx={{
            fontWeight: "bold",
          }}
        >
          <KeyboardArrowDownOutlinedIcon
            sx={{
              position: "absolute",
              left: 0,
              top: 8,
            }}
          />
          Delivery Operation Master
        </Item>
        <Item
          sx={{
            fontWeight: "bold",
          }}
        >
          <KeyboardArrowDownOutlinedIcon
            sx={{
              position: "absolute",
              left: 0,
              top: 8,
            }}
          />
          Yard Operation Master
        </Item>
      </Grid>
      <Grid
        item
        lg={2}
        sx={{
          position: "absolute",
          right: 10,
        }}
      >
        <CloseOutlinedIcon onClick={() => handleCloses()} />
      </Grid>
    </Grid>
  );
}
