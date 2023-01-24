import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Skeleton from "@mui/material/Skeleton";
import Button from "@mui/material/Button";
import { alpha, styled } from "@mui/material/styles";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import dbb from "../../public/assets/img/dbb.jpg";
import btn from "../../public/assets/img/btn.jpg";
import Nav from "./nav";
import AppWidgetSummary from "./AppWidgetSummary";
import BalanceChart from "./BalanceChart";
//import NewsFeedChart from "./NewsFeedChart";
import Carousel from "./Carousel";
import MediaCard from "./MediaCard";
import NotificationsAndApprovals from "./ApprovalsNotifications";
import Iconify from "./Iconify";
import { textAlign } from "@mui/system";

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

const BalanceCard = () => {
  return (
    <Card elevation={3}>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Balance"
      />
      <CardContent>
        <BalanceChart />
      </CardContent>
    </Card>
  );
};
const ExchangeRateCard = () => {
  return (
    <Card elevation={3}>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Exchange Rates"
      />
      <CardContent>
        <TableContainer component={Paper}>
          <Table sx={{}} aria-label="Latest Transactions">
            <TableHead>
              <TableRow>
                <TableCell>Currency</TableCell>
                <TableCell align="right">Sell</TableCell>
                <TableCell align="right">Buy</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow sx={{ borderBottom: "1px solid #EEE" }}>
                <TableCell>USD</TableCell>
                <TableCell align="right">3.67</TableCell>
                <TableCell align="right">3.60</TableCell>
              </TableRow>
              <TableRow sx={{ borderBottom: "1px solid #EEE" }}>
                <TableCell>EUR</TableCell>
                <TableCell align="right">3.98</TableCell>
                <TableCell align="right">3.90</TableCell>
              </TableRow>
              <TableRow sx={{ borderBottom: "1px solid #EEE" }}>
                <TableCell>INR</TableCell>
                <TableCell align="right">0.045</TableCell>
                <TableCell align="right">0.042</TableCell>
              </TableRow>
              <TableRow sx={{ borderBottom: "1px solid #EEE" }}>
                <TableCell>SAR</TableCell>
                <TableCell align="right">0.98</TableCell>
                <TableCell align="right">0.95</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
};

const TransactionCard = () => {
  return (
    <Card elevation={3}>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Latest Transactions"
      />
      <CardContent>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="Latest Transactions">
            <TableHead>
              <TableRow>
                <TableCell>Date</TableCell>
                <TableCell align="right">From</TableCell>
                <TableCell align="right">Type</TableCell>
                <TableCell align="right">CCY</TableCell>
                <TableCell align="right">Amount</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow sx={{ borderBottom: "1px solid #EEE" }}>
                <TableCell component="th" scope="row">
                  10/01/2023
                </TableCell>
                <TableCell align="right">QuickMart Inc</TableCell>
                <TableCell align="right">Inward Remittance</TableCell>
                <TableCell align="right">AED</TableCell>
                <TableCell align="right">203,000</TableCell>
              </TableRow>
              <TableRow sx={{ borderBottom: "1px solid #EEE" }}>
                <TableCell component="th" scope="row">
                  09/01/2023
                </TableCell>
                <TableCell align="right">QuickMart Inc</TableCell>
                <TableCell align="right">Deposit</TableCell>
                <TableCell align="right">AED</TableCell>
                <TableCell align="right">5,000</TableCell>
              </TableRow>
              <TableRow sx={{ borderBottom: "1px solid #EEE" }}>
                <TableCell component="th" scope="row">
                  08/01/2023
                </TableCell>
                <TableCell align="right">HelthCare Inc</TableCell>
                <TableCell align="right">Withdrawl</TableCell>
                <TableCell align="right">AED</TableCell>
                <TableCell align="right">50,000</TableCell>
              </TableRow>
              <TableRow sx={{ borderBottom: "1px solid #EEE" }}>
                <TableCell component="th" scope="row">
                  08/01/2023
                </TableCell>
                <TableCell align="right">QuickMart Inc</TableCell>
                <TableCell align="right">Inter-Bank transfer</TableCell>
                <TableCell align="right">AED</TableCell>
                <TableCell align="right">150,000</TableCell>
              </TableRow>
              <TableRow sx={{ borderBottom: "1px solid #EEE" }}>
                <TableCell component="th" scope="row">
                  06/01/2023
                </TableCell>
                <TableCell align="right">QuickMart Inc</TableCell>
                <TableCell align="right">Inter-Bank transfer</TableCell>
                <TableCell align="right">AED</TableCell>
                <TableCell align="right">450,000</TableCell>
              </TableRow>
              <TableRow sx={{ borderBottom: "1px solid #EEE" }}>
                <TableCell component="th" scope="row">
                  05/01/2023
                </TableCell>
                <TableCell align="right">HelthCare Inc</TableCell>
                <TableCell align="right">Withdrawl</TableCell>
                <TableCell align="right">AED</TableCell>
                <TableCell align="right">80,000</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
};
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
export default () => {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ marginTop: 80, paddingLeft: 15, paddingRight: 15 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} lg={2}>
          <Nav openNav={open} onCloseNav={() => setOpen(false)} />
        </Grid>

        <Grid item xs={12} md={6} lg={7}>
          <Grid container direction="column" spacing={2}>
            <Grid item>
              <img
                src={dbb}
                alt={"Dashboard banner"}
                width={940}
                height={120}
              />
            </Grid>
            <Grid item>
              <Box
                sx={{
                  display: "grid",
                  gap: 2,
                  gridTemplateColumns: "repeat(2, 1fr)",
                }}
              >
                <Paper
                  variant="outlined"
                  sx={{
                    py: 1.5,
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
                      sx={{
                        padding: 1,
                        textAlign: "left",
                        borderBottom: ".1rem solid",
                        borderBottomColor: "#e5e8eb",
                      }}
                    >
                      <Grid container>
                        <Grid item xs={12} md={6} lg={8}>
                          <Typography
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
                          xs={12}
                          md={6}
                          lg={4}
                          sx={{ textAlign: "right" }}
                        >
                          <Typography variant="subtitle2">
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
                    py: 2.5,
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
                      sx={{
                        padding: 1,
                        textAlign: "left",
                        borderBottom: ".1rem solid",
                        borderBottomColor: "#e5e8eb",
                      }}
                    >
                      <Grid container>
                        <Grid item xs={12} md={6} lg={8}>
                          <Typography variant="subtitle2">
                            {approval.name}
                          </Typography>
                        </Grid>
                        <Grid
                          item
                          xs={12}
                          md={6}
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
                    height: 215,
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
                      <Grid item xs={12} md={6} lg={8}>
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
                            24 Jan 2023
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{ color: "text.secondary" }}
                          >
                            Please update your documents
                          </Typography>
                        </Box>
                      </Grid>
                      <Grid item xs={12} md={6} lg={4}>
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
                    height: 215,
                  }}
                >
                  <CardTitleBackForward title="Service Request" />
                  <Box sx={{ mb: 0.9, padding: 1, textAlign: "left" }}>
                    <Grid container>
                      <Grid item xs={12} md={6} lg={6}>
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
                      <Grid item xs={12} md={6} lg={6}>
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
                          26 Jan 2023
                        </Typography>
                      </Grid>
                    </Grid>
                    <Box
                      sx={{
                        textAlign: "center",
                        mt: 5,
                      }}
                    >
                      <img
                        src={btn}
                        alt={"Dashboard banner"}
                        width={400}
                        height={45}
                      />
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
                  height: 215,
                }}
              >
                <CardTitleBackForward title="Service Tracker" />
                <Typography
                  variant="body1"
                  sx={{ color: "text.secondary", paddingLeft: 1 }}
                >
                  24 Jan 2023
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
