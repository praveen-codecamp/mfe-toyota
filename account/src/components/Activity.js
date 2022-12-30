import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Menu from "./Menu";
import MaterialUIPickers from "./DatePicker";

export default function Activity() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={2}>
        <Menu />
      </Grid>
      <Grid item xs={10}>
        <Grid
          container
          spacing={2}
          style={{ marginLeft: ".2rem", marginTop: ".4rem" }}
        >
          <Grid item xs={8}>
            <Typography style={{ color: "orange" }} variant="h6" gutterBottom>
              Account Activity For Account ID
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body2" gutterBottom>
              To see diffrent transaction date, simply enter the required date
              in the Date Range.
            </Typography>
          </Grid>
        </Grid>

        <Grid container direction="column" style={{ padding: ".8rem" }}>
          <Grid item style={{ background: "grey" }}>
            <Typography
              variant="subtitle1"
              style={{ color: "white", marginLeft: "1rem" }}
              gutterBottom
            >
              View Statements:
            </Typography>
          </Grid>
          <Grid item style={{ marginTop: ".4rem" }}>
            <Grid container style={{ background: "#d4d3d3" }}>
              <Grid item xs={4}>
                <Typography
                  variant="subtitle1"
                  style={{ marginLeft: "1rem" }}
                  gutterBottom
                >
                  Date Range:
                </Typography>
              </Grid>
              <Grid item xs={6} style={{ marginLeft: "1rem" }}>
                <Stack spacing={2} direction="row">
                  <MaterialUIPickers lable={"From"} />
                  <MaterialUIPickers lable={"To"} />
                  <Button variant="contained">Go</Button>
                </Stack>
              </Grid>
            </Grid>
          </Grid>
          <Grid item style={{ marginTop: ".4rem", background: "grey" }}>
            <Typography
              variant="subtitle1"
              style={{ color: "white", marginLeft: "1rem" }}
              gutterBottom
            >
              Accounts Details:
            </Typography>
          </Grid>
          <Grid item style={{ marginTop: ".4rem" }}>
            <Grid container spacing={2}>
              <Grid item xs={2}>
                <Typography variant="body2" gutterBottom>
                  Sort Code
                </Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography variant="body2" gutterBottom>
                  02-98-66
                </Typography>
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={2}>
                <Typography variant="body2" gutterBottom>
                  Account Number
                </Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography variant="body2" gutterBottom>
                  0123456789
                </Typography>
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={2}>
                <Typography variant="body2" gutterBottom>
                  Currency
                </Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography variant="body2" gutterBottom>
                  GBP
                </Typography>
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={2}>
                <Typography variant="body2" gutterBottom>
                  Account Alias
                </Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography variant="body2" gutterBottom>
                  Jon Yml
                </Typography>
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={2}>
                <Typography variant="body2" gutterBottom>
                  Account Type
                </Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography variant="body2" gutterBottom>
                  Business Current
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item style={{ background: "grey", marginTop: ".4rem" }}>
            <Typography
              variant="subtitle1"
              style={{ color: "white", marginLeft: "1rem" }}
              gutterBottom
            >
              Transaction Details
            </Typography>
          </Grid>
          <Grid item>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell align="right">Narative</TableCell>
                    <TableCell align="right">Debite</TableCell>
                    <TableCell align="right">Credit</TableCell>
                    <TableCell align="right">Balance</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      02/01/2023
                    </TableCell>
                    <TableCell align="right">SDEF0123456789</TableCell>
                    <TableCell align="right"></TableCell>
                    <TableCell align="right">$65.0</TableCell>
                    <TableCell align="right">$465.0</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
          <Grid item style={{ background: "#d4d3d3", marginTop: ".4rem" }}>
            <Typography
              variant="body1"
              style={{ marginLeft: "1rem" }}
              gutterBottom
            >
              1-1 Accounts
            </Typography>
          </Grid>
          <Grid item style={{ background: "grey", marginTop: ".4rem" }}>
            <Typography
              variant="subtitle1"
              style={{ color: "white", marginLeft: "1rem" }}
              gutterBottom
            >
              Total Values
            </Typography>
          </Grid>
          <Grid item>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableBody>
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      Real time balance
                    </TableCell>
                    <TableCell align="right">$465.0</TableCell>
                  </TableRow>
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      Real time balance
                    </TableCell>
                    <TableCell align="right">$465.0</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
