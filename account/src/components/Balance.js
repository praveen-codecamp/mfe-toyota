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
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import AccountDetails from "./AccountDetails";
import ViewStatements from "./ViewStatements";

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
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

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
  const alertStyle = {
    backgroundColor: "#B8DAFF",
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
        <Alert
          severity="info"
          elevation={3}
          className={alertStyle}
          sx={{ color: "#204F88", background: "#B8DAFF" }}
        >
          <AlertTitle sx={{ fontSize: "0.7rem" }}>
            Converted currencies are approximate and are based on foreign
            exchange mid rates
          </AlertTitle>
          <Typography sx={{ fontSize: "0.6rem" }}>
            The balance dispalyed are calculated as at:{" "}
            {new Date().toLocaleDateString()}
          </Typography>
        </Alert>
      </Grid>

      <Grid item xs={12} md={12} lg={4}>
        <AccountDetails />
        <ViewStatements />
      </Grid>
      <Grid item xs={12} md={12} lg={6}>
        <Paper
          sx={{
            background: "#FFFFFF 0% 0% no-repeat padding-box;",
            boxShadow: "0px 3px 6px #0000001F",
            borderRadius: "10px",
            height: matches ? "24rem" : undefined,
            pl: 1,
          }}
        >
          <Tabs value={value} onChange={handleChangeTabs} fullWidth>
            <Tab
              sx={{
                fontSize: ".7rem",
                "&.Mui-selected": { color: "#204F88" },
              }}
              label="Current & Deposits"
            />
            <Tab
              label="Foreign Curency"
              sx={{
                fontSize: ".7rem",
                "&.Mui-selected": { color: "#204F88" },
              }}
            />
            <Tab
              label="Fixed Rate Deposit"
              sx={{
                fontSize: ".7rem",
                "&.Mui-selected": { color: "#204F88" },
              }}
            />
          </Tabs>
          <TabPanel value={value} index={0}>
            <Typography
              variant="subtitle1"
              sx={{
                opacity: 1,
                color: "#204F88",
                font: "Roboto, medium",
                fontSize: "1rem",
                fontWeight: "bold",
              }}
            >
              Current Accounts Balance Summary
            </Typography>

            <TableContainer
              component={Paper}
              sx={{ mt: 2, border: 0, boxShadow: 0 }}
            >
              <Table
                aria-label="Current Accounts Balance Summary table"
                sx={{ border: 0 }}
              >
                <TableHead>
                  <TableRow>
                    <TableCell
                      sx={{ font: "Roboto, medium", fontSize: ".6rem" }}
                    >
                      Account ID
                    </TableCell>
                    <TableCell
                      sx={{ font: "Roboto, medium", fontSize: ".6rem" }}
                      align="right"
                    >
                      Currency
                    </TableCell>
                    <TableCell
                      sx={{ font: "Roboto, medium", fontSize: ".6rem" }}
                      align="right"
                    >
                      Current Balance
                    </TableCell>
                    <TableCell
                      sx={{ font: "Roboto, medium", fontSize: ".6rem" }}
                      align="right"
                    >
                      Current available Balance
                    </TableCell>
                    <TableCell
                      sx={{ font: "Roboto, medium", fontSize: ".6rem" }}
                      align="right"
                    >
                      Actions
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                  }}
                >
                  <TableRow sx={{ border: 0 }}>
                    <TableCell
                      component="th"
                      scope="row"
                      className="redacted"
                      sx={{ font: "Roboto, medium", fontSize: ".6rem" }}
                    >
                      {accountNo}
                    </TableCell>
                    <TableCell
                      sx={{ font: "Roboto, medium", fontSize: ".6rem" }}
                      align="right"
                    >
                      {currency}
                    </TableCell>
                    <TableCell
                      sx={{ font: "Roboto, medium", fontSize: ".6rem" }}
                      align="right"
                    >
                      {currency} {getAmont(323234.09)}
                    </TableCell>
                    <TableCell
                      sx={{ font: "Roboto, medium", fontSize: ".6rem" }}
                      align="right"
                    >
                      {currency} {getAmont(323234.09)}
                    </TableCell>
                    <TableCell
                      sx={{ font: "Roboto, medium", fontSize: ".6rem" }}
                      align="right"
                    >
                      ...
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </TabPanel>
        </Paper>
      </Grid>
    </Grid>
  );
}
