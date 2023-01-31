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
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import CardContent from "@mui/material/CardContent";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Nav from "./nav";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

export default function Balance({ match }) {
  const [currency, setCurrency] = React.useState("AED");
  const [curRatio, SetCurRatio] = React.useState(1);
  const [value, setValue] = React.useState(0);
  const [open, setOpen] = React.useState(false);

  const accountNo = match.params.accno || "1000000212633";

  const handleChangeTabs = (event, newValue) => {
    setValue(newValue);
  };

  const handleChange = (event) => {
    const curr = event.target.value;
    switch (curr) {
      case "USD":
        SetCurRatio(0.27);
        break;
      case "INR":
        SetCurRatio(22.42);
        break;
      default:
        SetCurRatio(1);
    }
    setCurrency(curr);
  };
  const handleReset = () => {
    setCurrency("AED");
    SetCurRatio(1);
  };
  const getAmont = (amount) => {
    const value = amount * curRatio;
    return value.toFixed(1);
  };

  return (
    <Grid
      container
      spacing={3}
      style={{ background: "#EEE", minHeight: window.innerHeight - 64 }}
    >
      <Grid item xs={12} md={6} lg={2}>
        <Nav openNav={open} onCloseNav={() => setOpen(false)} />
      </Grid>

      <Grid item xs={10} style={{ paddingRight: 20 }}>
        <Grid container>
          <Grid xs={12} item style={{ marginTop: 25 }}>
            <Alert severity="info" elevation={3}>
              <AlertTitle>
                Converted currencies are approximate and are based on foreign
                exchange mid rates
              </AlertTitle>
              The balance dispalyed are calculated as at:{" "}
              <strong>{new Date().toLocaleDateString()}</strong>
            </Alert>
          </Grid>
        </Grid>
        <Grid container direction="column">
          <Grid item style={{ marginTop: 25 }}>
            <Card elevation={3}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Curency Change
                </Typography>
                <Grid container style={{ marginTop: 25 }}>
                  <Grid item xs={3}>
                    <Box sx={{ minWidth: 180 }}>
                      <FormControl fullWidth>
                        <InputLabel id="currency-select-label">
                          Choose Curency
                        </InputLabel>
                        <Select
                          labelId="currency-select-label"
                          id="currency-select"
                          value={currency}
                          label="Change Curency"
                          onChange={handleChange}
                          size="small"
                        >
                          <MenuItem value={"AED"}>
                            Original Account Currency
                          </MenuItem>
                          <MenuItem value={"AED"}>AED</MenuItem>
                          <MenuItem value={"USD"}>USD</MenuItem>
                          <MenuItem value={"INR"}>INR</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                  </Grid>
                  <Grid item xs={6} style={{ marginLeft: "1rem" }}>
                    <Stack
                      spacing={2}
                      direction="row"
                      style={{ height: "100%" }}
                    >
                      <Button variant="contained" color="error">
                        Go
                      </Button>
                      <Button
                        variant="outlined"
                        color="error"
                        onClick={handleReset}
                      >
                        Reset
                      </Button>
                    </Stack>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
          <Grid item style={{ marginTop: 25 }}>
            <Card elevation={3}>
              <CardContent>
                <Grid container>
                  <Grid item xs={12}>
                    <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
                      <Tabs value={value} onChange={handleChangeTabs} centered>
                        <Tab label="Current & Deposits" />
                        <Tab label="Foreign Curency" />
                        <Tab label="Fixed Rate Deposit" />
                      </Tabs>
                    </Box>
                    <TabPanel value={value} index={0}>
                      <Grid item style={{ marginTop: 30 }}>
                        <Typography variant="h5" gutterBottom>
                          Current Accounts Balance Summary
                        </Typography>
                      </Grid>
                      <Grid item>
                        <TableContainer component={Paper}>
                          <Table
                            sx={{ minWidth: 650 }}
                            aria-label="simple table"
                          >
                            <caption>1-1 Accounts</caption>
                            <TableHead>
                              <TableRow>
                                <TableCell>Account ID</TableCell>
                                <TableCell align="right">Currency</TableCell>
                                <TableCell align="right">
                                  Current Balance
                                </TableCell>
                                <TableCell align="right">
                                  Current available Balance
                                </TableCell>
                                <TableCell align="right">Actions</TableCell>
                              </TableRow>
                            </TableHead>
                            <TableBody>
                              <TableRow sx={{ borderBottom: "1px solid #EEE" }}>
                                <TableCell
                                  component="th"
                                  scope="row"
                                  className="redacted"
                                >
                                  {accountNo}
                                </TableCell>
                                <TableCell align="right">{currency}</TableCell>
                                <TableCell align="right">
                                  {currency} {getAmont(323234.09)}
                                </TableCell>
                                <TableCell align="right">
                                  {currency} {getAmont(323234.09)}
                                </TableCell>
                                <TableCell align="right">...</TableCell>
                              </TableRow>
                            </TableBody>
                          </Table>
                        </TableContainer>
                      </Grid>
                    </TabPanel>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>

          <Grid item style={{ marginTop: 25, marginBottom: 25 }}>
            <Card elevation={3}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
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
                        <TableCell align="right">
                          {currency} {getAmont(323234.09)}
                        </TableCell>
                      </TableRow>
                      <TableRow
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          Real time balance
                        </TableCell>
                        <TableCell align="right">
                          {currency} {getAmont(323234.09)}
                        </TableCell>
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
