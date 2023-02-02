import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import MaterialUIPickers from "./DatePicker";

export default function Activity() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <Grid
      container
      spacing={2}
      justifyContent="flex-end"
      sx={{ background: "#EEE", pt: 2, px: matches ? 2 : 0 }}
    >
      <Grid item xs={12} md={12} lg={10}>
        <Typography
          sx={{ color: "#d32f2f", textAlign: matches ? undefined : "center" }}
          variant="h5"
          gutterBottom
        >
          Account Activity For Account ID
        </Typography>
        <Typography
          sx={{ textAlign: matches ? undefined : "center" }}
          variant="body2"
          gutterBottom
        >
          To see diffrent transaction date, simply enter the required date in
          the Date Range.
        </Typography>
      </Grid>
      <Grid item xs={12} md={12} lg={10}>
        <Card elevation={3}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              View Statements
            </Typography>

            <Grid container spacing={3}>
              <Grid item xs={12} md={12} lg={2}>
                <Typography variant="body2" gutterBottom>
                  Date Range:
                </Typography>
              </Grid>
              <Grid item xs={12} md={12} lg={3}>
                <MaterialUIPickers
                  device={matches ? "" : "mobile"}
                  lable={"From"}
                />
              </Grid>
              <Grid item xs={12} md={12} lg={3}>
                <MaterialUIPickers
                  device={matches ? "" : "mobile"}
                  lable={"To"}
                />
              </Grid>
              <Grid item xs={12} md={12} lg={4}>
                <Button variant="contained" color="error">
                  Go
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={12} lg={10}>
        <Card elevation={3}>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              Accounts Details
            </Typography>
            <Box style={{ marginTop: 20 }}>
              <Grid container spacing={2}>
                <Grid item xs={6} md={6} lg={2}>
                  <Typography variant="body2" gutterBottom>
                    Sort Code
                  </Typography>
                </Grid>
                <Grid item xs={6} md={6} lg={10}>
                  <Typography variant="body2" gutterBottom>
                    <strong>02-98-66</strong>
                  </Typography>
                </Grid>

                <Grid item xs={6} md={6} lg={2}>
                  <Typography variant="body2" gutterBottom>
                    Account Number
                  </Typography>
                </Grid>
                <Grid item xs={6} md={6} lg={10}>
                  <Typography variant="body2" gutterBottom className="redacted">
                    <strong>1000000212633</strong>
                  </Typography>
                </Grid>

                <Grid item xs={6} md={6} lg={2}>
                  <Typography variant="body2" gutterBottom>
                    Currency
                  </Typography>
                </Grid>
                <Grid item xs={6} md={6} lg={10}>
                  <Typography variant="body2" gutterBottom>
                    <strong>AED</strong>
                  </Typography>
                </Grid>

                <Grid item xs={6} md={6} lg={2}>
                  <Typography variant="body2" gutterBottom>
                    Account Alias
                  </Typography>
                </Grid>
                <Grid item xs={6} md={6} lg={10}>
                  <Typography variant="body2" gutterBottom>
                    <strong>Jon Yml</strong>
                  </Typography>
                </Grid>

                <Grid item xs={6} md={6} lg={2}>
                  <Typography variant="body2" gutterBottom>
                    Account Type
                  </Typography>
                </Grid>
                <Grid item xs={6} md={6} lg={10}>
                  <Typography variant="body2" gutterBottom>
                    <strong>Business Current</strong>
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={12} lg={10}>
        <Card elevation={3}>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              Transaction Details
            </Typography>

            <TableContainer component={Paper}>
              <Table aria-label="simple table">
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
                    <TableCell align="right">AED 65.0</TableCell>
                    <TableCell align="right">AED 323234.1</TableCell>
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
            <Typography variant="h5" gutterBottom>
              Total Values
            </Typography>
            <TableContainer component={Paper}>
              <Table aria-label="simple table">
                <TableBody>
                  <TableRow
                    sx={{
                      "&:last-child td, &:last-child th": { border: 0 },
                    }}
                  >
                    <TableCell component="th" scope="row">
                      Real time balance
                    </TableCell>
                    <TableCell align="right">AED 323234.1</TableCell>
                  </TableRow>
                  <TableRow
                    sx={{
                      "&:last-child td, &:last-child th": { border: 0 },
                    }}
                  >
                    <TableCell component="th" scope="row">
                      Real time balance
                    </TableCell>
                    <TableCell align="right">AED 323234.1</TableCell>
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
