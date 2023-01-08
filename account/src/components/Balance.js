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
import Card from "@mui/material/Card";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import CardContent from "@mui/material/CardContent";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

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

export default function Balance() {
  const [currency, setCurrency] = React.useState("AED");
  const [value, setValue] = React.useState(0);

  const handleChangeTabs = (event, newValue) => {
    setValue(newValue);
  };

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };
  const handleReset = () => {
    setCurrency(1);
  };

  return (
    <Grid container spacing={3} style={{ background: "#EEE", minHeight: window.innerHeight - 64 }}>
      <Grid spacing={1} item xs={2} style={{ background: "#FFF" }}>
        <Menu />
      </Grid>
      <Grid item xs={10} style={{paddingRight:20}}>
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
                  <Grid item xs={4}>
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
                        >
                          <MenuItem value={1}>
                            Original Account Currency
                          </MenuItem>
                          <MenuItem value={"USD"}>USD</MenuItem>
                          <MenuItem value={"AED"}>AED</MenuItem>
                          <MenuItem value={"AUD"}>AUD</MenuItem>
                          <MenuItem value={"NRI"}>NRI</MenuItem>
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
                        <Tab label="Current & Deposits">One</Tab>
                        <Tab label="Foreign Curency">Two</Tab>
                        <Tab label="Fixed Rate Deposit">Three </Tab>
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
