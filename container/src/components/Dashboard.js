import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
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

import BalanceChart from "./BalanceChart";
import NewsFeedChart from "./NewsFeedChart";
import MediaCard from "./MediaCard";

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
        subheader="September 14, 2016"
      />
      <CardContent>
        <BalanceChart />
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
                  08/02/2023
                </TableCell>
                <TableCell align="right">HelthCare Inc</TableCell>
                <TableCell align="right">Withdrawl</TableCell>
                <TableCell align="right">AED</TableCell>
                <TableCell align="right">50,000</TableCell>
              </TableRow>
              <TableRow sx={{ borderBottom: "1px solid #EEE" }}>
                <TableCell component="th" scope="row">
                  08/02/2023
                </TableCell>
                <TableCell align="right">QuickMart Inc</TableCell>
                <TableCell align="right">Inter-Bank transfer</TableCell>
                <TableCell align="right">AED</TableCell>
                <TableCell align="right">150,000</TableCell>
              </TableRow>
              <TableRow sx={{ borderBottom: "1px solid #EEE" }}>
                <TableCell component="th" scope="row">
                  08/02/2023
                </TableCell>
                <TableCell align="right">QuickMart Inc</TableCell>
                <TableCell align="right">Inter-Bank transfer</TableCell>
                <TableCell align="right">AED</TableCell>
                <TableCell align="right">450,000</TableCell>
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
        <CardHeader
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="News"
        />
        <CardContent>
          <NewsFeedChart />
        </CardContent>
      </Card>
      <Card elevation={3}>
        <CardHeader
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Headline"
        />
        <CardContent>
          <MediaCard />
        </CardContent>
      </Card>
    </React.Fragment>
  );
};
export default () => {
  return (
    <div style={{ marginTop: 64 }}>
      <Container
        maxWidth="maxWidthXl"
        component="main"
        sx={{ padding: "0 !important" }}
      >
        <Grid
          container
          style={{
            minHeight: window.innerHeight - 64,
            backgroundColor: "#d2efff",
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            position: "relative",
            overflow: "hidden",
            color: "#FFF",
          }}
          className="home-bannner"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item>
            <Grid container direction="column">
              <Grid item>
                <BalanceCard />
              </Grid>
              <Grid item>
                <TransactionCard />
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <NewsFeedCard />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};
