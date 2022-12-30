import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Menu from "./Menu";

export default function Balance() {
  const [currency, setCurrency] = React.useState("");

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };
  const handleReset = () => {
    setCurrency(1);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={2}>
        <Menu />
      </Grid>
      <Grid item xs={10}>
        <Grid container spacing={2} style={{ padding: ".8rem" }}>
          <Grid item xs={8}>
            <Typography style={{ color: "orange" }} variant="h6" gutterBottom>
              Account Balance Summary for all Accounts
            </Typography>
          </Grid>
          <Grid item xs={2} alignContent="flex-end">
            <Typography variant="body2" gutterBottom>
              Print
            </Typography>
          </Grid>
        </Grid>
        <Grid container direction="column" style={{ padding: ".8rem" }}>
          <Grid item>
            <Typography variant="body2" gutterBottom>
              Converted currencies are approximate and are based on foreign
              exchange mid rates
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body2" gutterBottom>
              The balance dispalyed are calculated as at:{" "}
              {new Date().toLocaleDateString()}
            </Typography>
          </Grid>
          <Grid item style={{ background: "grey" }}>
            <Typography
              variant="subtitle1"
              style={{ color: "white", marginLeft: "1rem" }}
              gutterBottom
            >
              Curency Change
            </Typography>
          </Grid>
          <Grid item style={{ marginTop: ".4rem", marginBottom: ".8rem" }}>
            <Grid container style={{ background: "#d4d3d3" }}>
              <Grid item xs={4}>
                <Box sx={{ minWidth: 180 }}>
                  <FormControl fullWidth>
                    <InputLabel id="currency-select-label">
                      Change Curency
                    </InputLabel>
                    <Select
                      labelId="currency-select-label"
                      id="currency-select"
                      value={currency}
                      label="Change Curency"
                      onChange={handleChange}
                    >
                      <MenuItem value={1}>Original Account Currency</MenuItem>
                      <MenuItem value={"USD"}>USD</MenuItem>
                      <MenuItem value={"AED"}>AED</MenuItem>
                      <MenuItem value={"AUD"}>AUD</MenuItem>
                      <MenuItem value={"NRI"}>NRI</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Grid>
              <Grid item xs={6} style={{ marginLeft: "1rem" }}>
                <Stack spacing={2} direction="row">
                  <Button variant="contained">Go</Button>
                  <Button variant="contained" onClick={handleReset}>
                    Reset
                  </Button>
                </Stack>
              </Grid>
            </Grid>
            <Grid item style={{ marginTop: ".8rem" }}>
              <Grid container style={{ background: "#d4d3d3" }}>
                <Grid item>
                  <ButtonGroup
                    variant="outlined"
                    aria-label="outlined button group"
                  >
                    <Button>Current & Deposits</Button>
                    <Button>Foreign Curency</Button>
                    <Button>Fixed Rate Deposit</Button>
                  </ButtonGroup>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item style={{ background: "grey" }}>
            <Typography
              variant="subtitle1"
              style={{ color: "white", marginLeft: "1rem" }}
              gutterBottom
            >
              Current Accounts Balance Summary
            </Typography>
          </Grid>
          <Grid item>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Account ID</TableCell>
                    <TableCell align="right">Currency</TableCell>
                    <TableCell align="right">Current Balance</TableCell>
                    <TableCell align="right">
                      Current available Balance
                    </TableCell>
                    <TableCell align="right">Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      0123456789
                    </TableCell>
                    <TableCell align="right">USD</TableCell>
                    <TableCell align="right">$465.0</TableCell>
                    <TableCell align="right">$465.0</TableCell>
                    <TableCell align="right">...</TableCell>
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
