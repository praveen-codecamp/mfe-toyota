import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Paper from "@mui/material/Paper";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import AccountDetails from "./AccountDetails";
import AccountSummry from "./AccountSummry";
import { defaultCurrency, accounts } from "../../../shared/constants";
import palette from "../../../shared/theme/palette";

export default function Balance({ match }) {
  const [currency, setCurrency] = React.useState("AED");
  const [curRatio, SetCurRatio] = React.useState(1);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const sellectedAccount = accounts.filter(
    (ac) => ac.accountNo === match.params.accno
  );
  const account = sellectedAccount[0] || accounts[0];
  console.log("sellectedAccount", account);
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
    setCurrency(defaultCurrency.code);
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
      <Grid item xs={12} md={12} lg={4}>
        <Paper
          sx={{
            background: "#FFFFFF 0% 0% no-repeat padding-box;",
            boxShadow: "0px 3px 6px #0000001F",
            borderRadius: "10px",
            p: 2.4,
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={6} md={6} lg={6}>
              <Typography variant="h6" color={palette.primary.main}>
                Change Currency
              </Typography>
            </Grid>
            <Grid item xs={6} md={6} lg={6}>
              <FormControl size="small" variant="standard" fullWidth>
                <Select
                  labelId="currency-select-label"
                  id="currency-select"
                  value={currency}
                  label="Change Curency"
                  onChange={handleChange}
                  size="small"
                  sx={{
                    opacity: 1,
                    font: "Roboto, Regular",
                    fontSize: ".6rem",
                    color: palette.grey.lighter,
                    fontWeight: "bold",
                    width: "8rem",
                    pt: 1,
                  }}
                >
                  <MenuItem
                    sx={{
                      opacity: 1,
                      font: "Roboto, Regular",
                      fontSize: ".6rem",
                      color: palette.grey.lighter,
                      fontWeight: "bold",
                    }}
                    value={"AED"}
                  >
                    Original Account Currency
                  </MenuItem>
                  <MenuItem
                    sx={{
                      opacity: 1,
                      font: "Roboto, Regular",
                      fontSize: ".6rem",
                      color: palette.grey.lighter,
                      fontWeight: "bold",
                    }}
                    value={"AED"}
                  >
                    AED
                  </MenuItem>
                  <MenuItem
                    sx={{
                      opacity: 1,
                      font: "Roboto, Regular",
                      fontSize: ".6rem",
                      color: palette.grey.lighter,
                      fontWeight: "bold",
                    }}
                    value={"USD"}
                  >
                    USD
                  </MenuItem>
                  <MenuItem
                    sx={{
                      opacity: 1,
                      font: "Roboto, Regular",
                      fontSize: ".6rem",
                      color: palette.grey.lighter,
                      fontWeight: "bold",
                    }}
                    value={"INR"}
                  >
                    INR
                  </MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid item xs={12} md={12} lg={6}>
        <Alert
          severity="info"
          elevation={3}
          className={alertStyle}
          sx={{ color: palette.primary.main, background: palette.info.light }}
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
      <Grid item xs={12} md={12} lg={10}>
        <AccountDetails account={account} currency={currency} hight={"10rem"} />
      </Grid>
      <Grid item xs={12} md={12} lg={10}>
        <AccountSummry
          account={account}
          currency={currency}
          getAmont={getAmont}
        />
      </Grid>
    </Grid>
  );
}
