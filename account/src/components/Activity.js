import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import AccountDetails from "./AccountDetails";
import ViewStatements from "./ViewStatements";
import { defaultCurrency, accounts } from "../../../shared/constants";
import palette from "../../../shared/theme/palette";

export default function Activity({ match }) {
  const [currency, setCurrency] = React.useState("AED");
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  const sellectedAccount = accounts.filter(
    (ac) => ac.accountNo === match.params.accno
  );
  const account = sellectedAccount[0] || accounts[0];
  const sxtd = {
    font: "Roboto, medium",
    padding: "5px",
    fontSize: "0.6rem",
    border: "none",
  };
  const sxtdrow = {
    padding: "5px",
    fontWeight: "bold",
    color: palette.primary.main,
    fontSize: "0.6rem",
    border: "none",
  };
  return (
    <Grid
      container
      spacing={3}
      justifyContent="end"
      sx={{
        background: "#EEE",
        my: matches ? "2rem" : undefined,
        px: matches ? 2 : 0,
      }}
    >
      <Grid item xs={12} md={12} lg={10}>
        <Paper
          sx={{
            background: "#FFFFFF 0% 0% no-repeat padding-box;",
            boxShadow: "0px 3px 6px #0000001F",
            borderRadius: "10px",
            p: 2,
          }}
        >
          <Typography variant="h6" color={palette.primary.main}>
            Account Activity For Account ID
          </Typography>
          <Typography variant="body2" color={palette.grey.light}>
            To see diffrent transaction date, simply enter the required date in
            the Date Range.
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} md={12} lg={4}>
        <ViewStatements />
      </Grid>
      <Grid item xs={12} md={12} lg={6}>
        <AccountDetails account={account} currency={currency} />
      </Grid>
      <Grid item xs={12} md={12} lg={10}>
        <Card elevation={3}>
          <CardContent>
            <Typography variant="h6" color={palette.primary.main}>
              Transaction Details
            </Typography>

            <TableContainer component={Paper} sx={{ mt: 2 }}>
              <Table aria-label="simple table">
                <caption>1-1 Accounts</caption>
                <TableHead>
                  <TableRow>
                    <TableCell sx={sxtd}>Date</TableCell>
                    <TableCell sx={sxtd}>Narative</TableCell>
                    <TableCell sx={sxtd}>Debite</TableCell>
                    <TableCell sx={sxtd}>Credit</TableCell>
                    <TableCell sx={sxtd}>Balance</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow sx={{ borderBottom: "1px solid #EEE" }}>
                    <TableCell sx={sxtdrow}>05/19/2023</TableCell>
                    <TableCell sx={sxtdrow}>SDEF0123456789</TableCell>
                    <TableCell sx={sxtdrow}></TableCell>
                    <TableCell sx={sxtdrow} className="redacted">
                      {defaultCurrency.symbol} 6598.0
                    </TableCell>
                    <TableCell sx={sxtdrow} className="redacted">
                      {defaultCurrency.symbol} 323234.1
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={12} lg={10}>
        <Card elevation={3}>
          <CardContent>
            <Typography variant="h6" color={palette.primary.main}>
              Total Values
            </Typography>
            <TableContainer component={Paper} sx={{ mt: 2 }}>
              <Table aria-label="simple table">
                <TableBody>
                  <TableRow
                    sx={{
                      "&:last-child td, &:last-child th": { border: 0 },
                    }}
                  >
                    <TableCell component="th" scope="row">
                      <Typography variant="body2">Real time balance</Typography>
                    </TableCell>
                    <TableCell align="right">
                      <Typography variant="body2" className="redacted">
                        {defaultCurrency.symbol} 323234.1
                      </Typography>
                    </TableCell>
                  </TableRow>
                  <TableRow
                    sx={{
                      "&:last-child td, &:last-child th": { border: 0 },
                    }}
                  >
                    <TableCell component="th" scope="row">
                      <Typography variant="body2">Real time balance</Typography>
                    </TableCell>
                    <TableCell align="right">
                      <Typography variant="body2" className="redacted">
                        {defaultCurrency.symbol} 323234.1
                      </Typography>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
