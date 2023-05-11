import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { alpha, styled } from "@mui/material/styles";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import dbb from "../../public/assets/img/dbb.jpg";
import Carousel from "./Carousel";
import AnnouncmentsCarousel from "./AnnouncmentsCarousel";
import PrimaryAccount from "./PrimaryAccount";
import AccountStack from "./AccountStack";
import Cashflow from "./Cashflow";
import LatestTransactions from "./LatestTransactions";
import Iconify from "./Iconify";
import { isAuthrized } from "./authConfig";
// ----------------------------------------------------------------------

const StyledIcon = styled("div")(({ theme }) => ({
  margin: "auto",
  display: "flex",
  borderRadius: "50%",
  alignItems: "center",
  width: theme.spacing(8),
  height: theme.spacing(8),
  justifyContent: "center",
  marginBottom: theme.spacing(3),
}));

// ----------------------------------------------------------------------

const NewsFeedCard = () => {
  return (
    <React.Fragment>
      <Card elevation={3}>
        <Carousel />
      </Card>
    </React.Fragment>
  );
};
const CardTitleBackForward = ({ title }) => {
  return (
    <Grid
      container
      sx={{
        paddingLeft: 1,
        paddingTop: 1,
      }}
    >
      <Grid item xs={12} md={6} lg={8}>
        <Typography variant="h6">{title}</Typography>
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        lg={4}
        sx={{
          textAlign: "right",
        }}
      >
        <IconButton aria-label="Back" size="small">
          <ArrowBackIosIcon fontSize="inherit" />
        </IconButton>
        <IconButton aria-label="Forward" size="small">
          <ArrowForwardIosIcon fontSize="inherit" />
        </IconButton>
      </Grid>
    </Grid>
  );
};
const balances = [
  {
    accountNo: 1000000212633,
    accountType: "Current Account",
    balance: "AED 323,234.09",
    balanceType: "Available",
  },
  {
    accountNo: 1000000216189,
    accountType: "Current Account",
    balance: "AED 767,100.89",
    balanceType: "Available",
  },
  {
    accountNo: 1000000216150,
    accountType: "Current Account",
    balance: "AED 575,500.77",
    balanceType: "Available",
  },
  {
    accountNo: 4000000698928,
    accountType: "Loan Account",
    balance: "AED 23,234.09",
    balanceType: "Outstanding",
  },
  {
    accountNo: 4000000698988,
    accountType: "Loan Account",
    balance: "AED 78,100.69",
    balanceType: "Outstanding",
  },
];
const approvals = [
  {
    name: "Business Loan",
    amount: "AED 100,000.00",
  },
  {
    name: "Fleet Loan",
    amount: "AED 50,000.00",
  },
];
const steps = ["Request", "Print", "Delivery", "Feedback"];
export default ({ userDetails }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const isModuleAuthorized = (module) => isAuthrized(module, userDetails);
  const showAccount = isModuleAuthorized("Account");
  const showPayments = isModuleAuthorized("Payments");
  return (
    <div
      style={{
        marginTop: 80,
        marginBottom: 20,
        paddingLeft: 15,
        paddingRight: 15,
      }}
    >
      <Grid container spacing={3}>
        <Grid item xs={12} md={12} lg={5}>
          <AnnouncmentsCarousel />
        </Grid>
        <Grid item xs={12} md={12} lg={7}>
          <PrimaryAccount />
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <AccountStack />
        </Grid>
        <Grid item xs={12} md={12} lg={5}>
          <Cashflow />
        </Grid>
        <Grid item xs={12} md={12} lg={7}>
          <LatestTransactions />
        </Grid>
      </Grid>
    </div>
  );
};
