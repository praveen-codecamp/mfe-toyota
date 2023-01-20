import React from "react";
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

import WidgetSummary from "./WidgetSummary";
import AppWidgetSummary from "./AppWidgetSummary";
import BalanceChart from "./BalanceChart";
//import NewsFeedChart from "./NewsFeedChart";
import Carousel from "./Carousel";
import MediaCard from "./MediaCard";
import NotificationsAndApprovals from "./ApprovalsNotifications";

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

export default () => {
  return (
    <div style={{ marginTop: 80, paddingLeft: 15, paddingRight: 15 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} lg={3}>
          <Grid container direction="column" spacing={2}>
            <Grid item>
              <AppWidgetSummary
                title="Pending Requests"
                total={234}
                color="error"
                icon={"material-symbols:admin-panel-settings"}
              />
            </Grid>
            <Grid item>
              <AppWidgetSummary
                title="Account Balance"
                total={"64,76,325.0"}
                color="info"
                icon={"material-symbols:account-balance-wallet"}
              />
            </Grid>
            <Grid item>
              <AppWidgetSummary
                title="Payment Authorized for the day"
                total={"7,23,315.0"}
                color="warning"
                icon={"la:hand-holding-usd"}
              />
            </Grid>

            <Grid item>
              <ExchangeRateCard />
            </Grid>
            <Grid item>
              <NotificationsAndApprovals />
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} md={6} lg={6}>
          <Grid container direction="column" spacing={2}>
            <Grid item>
              <WidgetSummary
                title="Accounts"
                list={[
                  {
                    title: "RDC test account 999",
                    subtitle: "Sub title here",
                    discription: "Disciption here",
                    amount: "3,23,234.09",
                    color: "#2563a2",
                  },
                  {
                    title: "RDC test account 968",
                    subtitle: "Sub title here",
                    discription: "Disciption here",
                    amount: "5,89,432.09",
                    color: "#a22578",
                  },
                  {
                    title: "Regular Savings 420",
                    subtitle: "Sub title here",
                    discription: "Disciption here",
                    amount: "5,89,432.89",
                    color: "#a27025",
                  },
                  {
                    title: "Regular Savings 440",
                    subtitle: "Sub title here",
                    discription: "Disciption here",
                    amount: "9,23,234.09",
                    color: "#7025a2",
                  },
                  {
                    title: "Installment Loan 425",
                    subtitle: "Sub title here",
                    discription: "Disciption here",
                    amount: "4,24,465.09",
                    color: "#2563a2",
                  },
                  {
                    title: "Installment Loan 215",
                    subtitle: "Sub title here",
                    discription: "Disciption here",
                    amount: "5,34,543.99",
                    color: "#a22578",
                  },
                  {
                    title: "60 Day CD 761",
                    subtitle: "Sub title here",
                    discription: "Disciption here",
                    amount: "7,44,325.09",
                    color: "#7025a2",
                  },
                  {
                    title: "60 Day CD 775",
                    subtitle: "Sub title here",
                    discription: "Disciption here",
                    amount: "3,76,948.09",
                    color: "#a27025",
                  },
                ]}
              />
            </Grid>
            <Grid item>
              <BalanceCard />
            </Grid>
            <Grid item>
              <TransactionCard />
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} md={6} lg={3}>
          <Grid container direction="column" spacing={2}>
            <Grid item>
              <NewsFeedCard />
            </Grid>
            <Grid item>
              <MediaCard />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};
