import React from "react";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import CardActions from "@mui/material/CardActions";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { isAuthrized } from "./authConfig";
import Alert from "@mui/material/Alert";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";
import RecentTransfers from "./RecentTransfers";
import palette from "../../../shared/theme/palette";
import { defaultCurrency } from "../../../shared/constants";
import MaterialUIPickers from "./DatePicker";

export default function Payment({ userDetails }) {
  const [fromAc, setFromAc] = React.useState(1);
  const [toAc, setToAc] = React.useState(1);
  const [toBene, setToBene] = React.useState(1);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  const handleChange = (event) => {
    setFromAc(event.target.value);
  };
  const handleToAccChange = (event) => {
    setToAc(event.target.value);
  };
  const handleBeneChange = (event) => {
    setToBene(event.target.value);
  };
  const isModuleAuthorized = (module) => isAuthrized(module, userDetails);
  return (
    <Grid
      container
      spacing={3}
      justifyContent="flex-end"
      sx={{ background: "#EEE", pt: 3, px: matches ? 2 : 0 }}
    >
      <Grid item xs={12} md={12} lg={10}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12} lg={12}>
            <Grid container spacing={2}>
              {isModuleAuthorized("DomesticPayment") && (
                <Grid item xs={12} md={12} lg={5}>
                  <Paper
                    sx={{
                      background: "#FFFFFF 0% 0% no-repeat padding-box;",
                      boxShadow: "0px 3px 6px #0000001F",
                      borderRadius: "10px",
                      px: 2,
                      py: 2,
                    }}
                  >
                    <Grid container spacing={2}>
                      <Grid item xs={6} md={6} lg={6}>
                        <Typography variant="h6" color={palette.primary.main}>
                          Fund Transfer
                        </Typography>
                      </Grid>
                      <Grid item xs={6} md={6} lg={6}>
                        <Paper sx={{ textAlign: "end", boxShadow: "none" }}>
                          <Typography
                            variant="caption"
                            color={palette.grey.lighter}
                          >
                            Select Account <ExpandMoreIcon fontSize="0.6rem" />
                          </Typography>
                        </Paper>
                      </Grid>
                      <Grid item xs={12} md={12} lg={12}>
                        <Typography variant="body2" color={palette.grey.light}>
                          Send money to your loved ones/transfer rent/transfer
                          money with in your bank accounts etc. in a secure and
                          convenient manner
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={12} lg={12}>
                        <Typography
                          variant="subtitle2"
                          color={palette.grey.lighter}
                        >
                          Choose Payee
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={12} lg={12}>
                        <FormControl variant="standard" fullWidth>
                          <Select
                            id="beneficiaryAc-select"
                            value={toBene}
                            onChange={handleBeneChange}
                            sx={{
                              opacity: 1,
                              font: "Roboto, Regular",
                              fontSize: ".7rem",
                              color: palette.grey.light,
                              fontWeight: "bold",
                            }}
                            size="small"
                            startAdornment={
                              <InputAdornment
                                position="start"
                                sx={{
                                  backgroundColor: palette.primary.lighter,
                                  p: "0.2rem",
                                  borderRadius: "50%",
                                  width: "1.8rem",
                                  height: "1.8rem",
                                }}
                              >
                                <Typography
                                  variant="h6"
                                  color={palette.primary.main}
                                  sx={{ mx: ".4rem" }}
                                >
                                  B
                                </Typography>
                              </InputAdornment>
                            }
                          >
                            <MenuItem
                              value={"1"}
                              sx={{
                                opacity: 1,
                                font: "Roboto, Regular",
                                fontSize: ".7rem",
                                color: palette.grey.light,
                                fontWeight: "bold",
                              }}
                            >
                              Beneficiary 1
                            </MenuItem>
                            <MenuItem
                              value={"2"}
                              sx={{
                                opacity: 1,
                                font: "Roboto, Regular",
                                fontSize: ".7rem",
                                color: palette.grey.light,
                                fontWeight: "bold",
                              }}
                            >
                              Beneficiary 2
                            </MenuItem>
                            <MenuItem
                              value={"3"}
                              sx={{
                                opacity: 1,
                                font: "Roboto, Regular",
                                fontSize: ".7rem",
                                color: palette.grey.light,
                                fontWeight: "bold",
                              }}
                            >
                              Beneficiary 3
                            </MenuItem>
                          </Select>
                        </FormControl>
                      </Grid>
                      <Grid item xs={12} md={12} lg={12}>
                        <Typography
                          variant="subtitle1"
                          color={palette.grey.light}
                        >
                          From Account
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={12} lg={12}>
                        <Typography
                          variant="subtitle2"
                          color={palette.grey.lighter}
                        >
                          Select Account Number
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={12} lg={12}>
                        <FormControl variant="standard" fullWidth>
                          <Select
                            id="fromAc-select"
                            value={toAc}
                            onChange={handleToAccChange}
                            sx={{
                              opacity: 1,
                              font: "Roboto, Regular",
                              fontSize: ".7rem",
                              color: palette.grey.light,
                              fontWeight: "bold",
                            }}
                            size="small"
                            startAdornment={
                              <InputAdornment
                                position="start"
                                sx={{
                                  backgroundColor: palette.primary.lighter,
                                  p: "0.2rem",
                                  borderRadius: "50%",
                                  width: "1.8rem",
                                  height: "1.8rem",
                                }}
                              >
                                <Typography
                                  variant="h6"
                                  color={palette.primary.main}
                                  sx={{ mx: ".4rem" }}
                                >
                                  A
                                </Typography>
                              </InputAdornment>
                            }
                          >
                            <MenuItem
                              value={1}
                              sx={{
                                opacity: 1,
                                font: "Roboto, Regular",
                                fontSize: ".7rem",
                                color: palette.grey.light,
                                fontWeight: "bold",
                              }}
                            >
                              DE00 45678 89876 5678
                            </MenuItem>
                            <MenuItem
                              value={"2"}
                              sx={{
                                opacity: 1,
                                font: "Roboto, Regular",
                                fontSize: ".7rem",
                                color: palette.grey.light,
                                fontWeight: "bold",
                              }}
                            >
                              DE00 45678 89876 1254
                            </MenuItem>
                            <MenuItem
                              value={"3"}
                              sx={{
                                opacity: 1,
                                font: "Roboto, Regular",
                                fontSize: ".7rem",
                                color: palette.grey.light,
                                fontWeight: "bold",
                              }}
                            >
                              DE00 45678 89876 4730
                            </MenuItem>
                          </Select>
                        </FormControl>
                      </Grid>
                      <Grid item xs={12} md={12} lg={12}>
                        <Alert
                          icon={false}
                          severity="info"
                          sx={{
                            color: palette.primary.main,
                            backgroundColor: palette.primary.lighter,
                            fontSize: "0.7rem",
                            fontWeight: "bold",
                            width: "100%",
                          }}
                        >
                          Total available amount is{" "}
                          <Typography
                            variant="subtitle2"
                            display={"inline"}
                            className="redacted"
                          >
                            {defaultCurrency.code} 24,543
                          </Typography>{" "}
                          as on May 19 2023
                        </Alert>
                      </Grid>
                      <Grid item xs={6} md={6} lg={6}>
                        <Typography
                          variant="subtitle2"
                          color={palette.grey.lighter}
                        >
                          Amount
                        </Typography>
                      </Grid>
                      <Grid item xs={6} md={6} lg={6}>
                        <Typography
                          variant="subtitle2"
                          color={palette.grey.lighter}
                        >
                          Payment Date
                        </Typography>
                      </Grid>
                      <Grid item xs={6} md={6} lg={6}>
                        <FormControl sx={{}} variant="outlined">
                          <OutlinedInput
                            id="outlined-adornment-weight"
                            startAdornment={
                              <InputAdornment
                                position="start"
                                sx={{
                                  backgroundColor: palette.primary.lighter,
                                  width: "2.8rem",
                                  height: "1.8rem",
                                }}
                              >
                                <Typography
                                  variant="subtitle1"
                                  color={palette.primary.main}
                                  sx={{ ml: ".3rem" }}
                                >
                                  {defaultCurrency.code}
                                </Typography>
                              </InputAdornment>
                            }
                            aria-describedby="outlined-weight-helper-text"
                            value="2,454"
                            size="small"
                          />
                        </FormControl>
                      </Grid>
                      <Grid item xs={6} md={6} lg={6}>
                        <MaterialUIPickers
                          sx={{ padding: "10px" }}
                          device={matches ? "" : "mobile"}
                        />
                      </Grid>
                      <Grid item xs={12} md={12} lg={12}>
                        <Typography
                          variant="subtitle2"
                          color={palette.grey.lighter}
                        >
                          Remarks (Optional)
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={12} lg={12}>
                        <FormControl fullWidth variant="outlined">
                          <OutlinedInput id="outlined-adornment-weight" />
                        </FormControl>
                      </Grid>
                      <Grid item xs={12} md={12} lg={12}>
                        <Typography
                          variant="subtitle2"
                          color={palette.grey.lighter}
                        >
                          Payment Type
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={12} lg={12}>
                        <FormControl size="small">
                          <RadioGroup
                            row
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="One Time Payment"
                            name="radio-buttons-group"
                          >
                            <FormControlLabel
                              value="One Time Payment"
                              control={<Radio />}
                              label="One Time Payment"
                            />
                            <FormControlLabel
                              value="Recurring"
                              control={<Radio />}
                              label="Recurring"
                            />
                          </RadioGroup>
                        </FormControl>
                      </Grid>
                      <Grid item xs={12} md={12} lg={12}>
                        <Button variant="contained" fullWidth>
                          Proceed to pay
                        </Button>
                      </Grid>
                    </Grid>
                  </Paper>
                </Grid>
              )}
              {isModuleAuthorized("InterAccountTransfer") && (
                <Grid item xs={12} md={12} lg={7}>
                  <RecentTransfers />
                </Grid>
              )}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
