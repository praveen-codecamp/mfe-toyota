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

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

export default function Activity() {
  return (
    <Grid container spacing={3} style={{ background: "#EEE" }}>
      <Grid spacing={1} item xs={2} style={{ background: "#FFF" }}>
        <Menu />
      </Grid>
      <Grid item xs={10} style={{paddingRight:20}}>
        <Grid container>
          <Grid xs={12} item style={{ marginTop: 25 }}>
            <Typography style={{ color: "#d32f2f" }} variant="h5" gutterBottom>
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

        <Grid container direction="column">
          <Grid item style={{ marginTop: 25 }}>
            <Card sx={{}} elevation={3}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  View Statements
                </Typography>

                <Grid container style={{ marginTop: 20 }}>
                  <Grid item xs={0}>
                    <Typography
                      variant="subtitle1"
                      style={{ marginRight: "1rem" }}
                      gutterBottom
                    >
                      Date Range:
                    </Typography>
                  </Grid>
                  <Grid item xs={6} style={{ marginLeft: "1rem" }}>
                    <Stack spacing={2} direction="row">
                      <MaterialUIPickers lable={"From"} />
                      <MaterialUIPickers lable={"To"} />
                      <Button variant="contained" color="error">
                        Go
                      </Button>
                    </Stack>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>

          <Grid item style={{ marginTop: 25 }}>
            <Card sx={{}} elevation={3}>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Accounts Details:
                </Typography>

                <Box item style={{ marginTop: 20 }}>
                  <Grid container>
                    <Grid item xs={3}>
                      <Typography variant="body2" gutterBottom>
                        Sort Code
                      </Typography>
                    </Grid>
                    <Grid item xs={9} style={{ marginBottom: 15 }}>
                      <Typography variant="body2" gutterBottom>
                        <strong>02-98-66</strong>
                      </Typography>
                    </Grid>

                    <Grid item xs={3}>
                      <Typography variant="body2" gutterBottom>
                        Account Number
                      </Typography>
                    </Grid>
                    <Grid item xs={9} style={{ marginBottom: 15 }}>
                      <Typography variant="body2" gutterBottom>
                        <strong>0123456789</strong>
                      </Typography>
                    </Grid>

                    <Grid item xs={3}>
                      <Typography variant="body2" gutterBottom>
                        Currency
                      </Typography>
                    </Grid>
                    <Grid item xs={9} style={{ marginBottom: 15 }}>
                      <Typography variant="body2" gutterBottom>
                        <strong>GBP</strong>
                      </Typography>
                    </Grid>

                    <Grid item xs={3}>
                      <Typography variant="body2" gutterBottom>
                        Account Alias
                      </Typography>
                    </Grid>
                    <Grid item xs={9} style={{ marginBottom: 15 }}>
                      <Typography variant="body2" gutterBottom>
                        <strong>Jon Yml</strong>
                      </Typography>
                    </Grid>

                    <Grid item xs={3}>
                      <Typography variant="body2" gutterBottom>
                        Account Type
                      </Typography>
                    </Grid>
                    <Grid item xs={9} style={{ marginBottom: 15 }}>
                      <Typography variant="body2" gutterBottom>
                        <strong>Business Current</strong>
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          <Grid item style={{ marginTop: 25 }}>
            <Card sx={{}} elevation={3}>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Transaction Details
                </Typography>

                <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <caption>1-1 Accounts</caption>
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
                      <TableRow sx={{ borderBottom: "1px solid #EEE" }}>
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
              </CardContent>
            </Card>
          </Grid>

          <Grid item style={{ marginTop: 25, marginBottom: 25 }}>
            <Card sx={{}} elevation={3}>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Total Values
                </Typography>

                <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableBody>
                      <TableRow
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          Real time balance
                        </TableCell>
                        <TableCell align="right">$465.0</TableCell>
                      </TableRow>
                      <TableRow
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          Real time balance
                        </TableCell>
                        <TableCell align="right">$465.0</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
