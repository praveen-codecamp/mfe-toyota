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
import Iconify from "./Iconify";

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
export default () => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <div style={{ marginTop: 80, paddingLeft: 15, paddingRight: 15 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} lg={9}>
          <Grid container direction="column" spacing={2}>
            <Grid item>
              <img
                src={dbb}
                alt={"Dashboard banner"}
                width={"100%"}
                height={120}
              />
            </Grid>
            <Grid item>
              <Box
                sx={{
                  display: "grid",
                  gap: 2,
                  gridTemplateColumns: matches
                    ? "repeat(2, 1fr)"
                    : "repeat(1, 1fr)",
                }}
              >
                <Paper
                  variant="outlined"
                  sx={{
                    py: matches ? 1.5 : 0,
                    mb: 1,
                    textAlign: "left",
                    padding: ".4rem",
                    borderTop: ".3rem solid",
                    borderTopColor: "#cd2026",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      padding: 1,
                    }}
                  >
                    Balances
                  </Typography>
                  {balances.map((balance) => (
                    <Box
                      key={balance.accountNo}
                      sx={{
                        padding: 1,
                        textAlign: "left",
                        borderBottom: ".1rem solid",
                        borderBottomColor: "#e5e8eb",
                      }}
                    >
                      <Grid container>
                        <Grid item xs={8} md={8} lg={8}>
                          <Typography
                            className="redacted"
                            variant="subtitle2"
                            component={RouterLink}
                            to={`/account/balance/${balance.accountNo}`}
                          >
                            {balance.accountNo}
                            <IconButton aria-label="Back" size="small">
                              <CheckCircleIcon
                                fontSize="inherit"
                                color="error"
                              />
                            </IconButton>
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{ color: "text.secondary" }}
                          >
                            {balance.accountType}
                          </Typography>
                        </Grid>
                        <Grid
                          item
                          xs={4}
                          md={4}
                          lg={4}
                          sx={{ textAlign: "right" }}
                        >
                          <Typography variant="subtitle2" className="redacted">
                            {balance.balance}
                          </Typography>

                          <Typography
                            variant="body2"
                            sx={{ color: "text.secondary" }}
                          >
                            {balance.balanceType}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Box>
                  ))}
                </Paper>
                <Paper
                  variant="outlined"
                  sx={{
                    py: matches ? 2.5 : 0,
                    mb: 1,
                    textAlign: "left",
                    padding: ".4rem",
                    borderTop: ".3rem solid",
                    borderTopColor: "#cd2026",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      padding: 1,
                    }}
                  >
                    Pending Approvals
                  </Typography>
                  {approvals.map((approval) => (
                    <Box
                      key={approval.name}
                      sx={{
                        padding: 1,
                        textAlign: "left",
                        borderBottom: ".1rem solid",
                        borderBottomColor: "#e5e8eb",
                      }}
                    >
                      <Grid container>
                        <Grid item xs={8} md={8} lg={8}>
                          <Typography variant="subtitle2">
                            {approval.name}
                          </Typography>
                        </Grid>
                        <Grid
                          item
                          xs={4}
                          md={4}
                          lg={4}
                          sx={{ textAlign: "right" }}
                        >
                          <Typography variant="subtitle2">
                            {approval.amount}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Box>
                  ))}
                </Paper>
                <Paper
                  variant="outlined"
                  sx={{
                    py: 1,
                    mb: 2,
                    textAlign: "left",
                    padding: ".4rem",
                    borderTop: ".3rem solid",
                    borderTopColor: "#cd2026",
                    height: matches ? 215 : undefined,
                  }}
                >
                  <CardTitleBackForward title="Alerts and Notifications" />
                  <Box
                    sx={{
                      padding: 1,
                      textAlign: "left",
                    }}
                  >
                    <Grid container>
                      <Grid item xs={8} md={8} lg={8}>
                        <Box
                          sx={{
                            padding: 1,
                            ml: 2,
                            textAlign: "left",
                            borderLeft: ".4rem solid",
                            borderLeftColor: "#cd2026",
                          }}
                        >
                          <Typography variant="subtitle2">
                            KYC Renewal!
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{ color: "text.secondary" }}
                          >
                            02 Feb 2023
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{ color: "text.secondary" }}
                          >
                            Please update your documents
                          </Typography>
                        </Box>
                      </Grid>
                      <Grid item xs={4} md={4} lg={4}>
                        <StyledIcon
                          sx={{
                            color: (theme) => theme.palette["error"].dark,
                            backgroundImage: (theme) =>
                              `linear-gradient(135deg, ${alpha(
                                theme.palette["error"].dark,
                                0
                              )} 0%, ${alpha(
                                theme.palette["error"].dark,
                                0.1
                              )} 100%)`,
                          }}
                        >
                          <Iconify
                            icon={"mdi:warning-outline"}
                            width={40}
                            height={40}
                          />
                        </StyledIcon>
                      </Grid>
                    </Grid>
                    <Box
                      sx={{
                        textAlign: "center",
                      }}
                    >
                      <Button variant="contained" color="warning">
                        Update Now
                      </Button>
                    </Box>
                  </Box>
                </Paper>
                <Paper
                  variant="outlined"
                  sx={{
                    py: 2.5,
                    mb: 2,
                    textAlign: "left",
                    padding: ".4rem",
                    borderTop: ".3rem solid",
                    borderTopColor: "#cd2026",
                    height: matches ? 215 : undefined,
                  }}
                >
                  <CardTitleBackForward title="Service Request" />
                  <Box sx={{ mb: 0.9, padding: 1, textAlign: "left" }}>
                    <Grid container>
                      <Grid item xs={6} md={6} lg={6}>
                        <Typography
                          variant="body2"
                          sx={{ color: "text.secondary" }}
                        >
                          Type
                        </Typography>
                        <Typography
                          variant="subtitle1"
                          sx={{ color: "#1e5a9d" }}
                        >
                          Cheque Book Request
                        </Typography>
                      </Grid>
                      <Grid item xs={6} md={6} lg={6}>
                        <Typography
                          variant="body2"
                          sx={{ color: "text.secondary", textAlign: "right" }}
                        >
                          Expd. Completion Date
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{ color: "text.secondary", textAlign: "right" }}
                        >
                          05 Feb 2023
                        </Typography>
                      </Grid>
                    </Grid>
                    <Box sx={{ width: "100%", mt: 3 }}>
                      <Stepper activeStep={2} alternativeLabel>
                        {steps.map((label) => (
                          <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                          </Step>
                        ))}
                      </Stepper>
                    </Box>
                  </Box>
                </Paper>
              </Box>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} md={6} lg={3}>
          <Grid container direction="column" spacing={2}>
            <Grid item>
              <NewsFeedCard />
            </Grid>
            <Grid item>
              <Paper
                variant="outlined"
                sx={{
                  py: 2.5,
                  my: ".8rem",
                  textAlign: "left",
                  padding: ".4rem",
                  borderTop: ".3rem solid",
                  borderTopColor: "#cd2026",
                  height: matches ? 215 : undefined,
                }}
              >
                <CardTitleBackForward title="Service Tracker" />
                <Typography
                  variant="body1"
                  sx={{ color: "text.secondary", paddingLeft: 1 }}
                >
                  01 Feb 2023
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{ color: "text.secondary", paddingLeft: 1, mt: 2 }}
                >
                  Your limit will be Increased on 10 Mar 2023
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};
