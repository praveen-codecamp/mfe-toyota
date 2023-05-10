import React from "react";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
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
import MaterialUIPickers from "../../../account/src/components/DatePicker";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";
import RecentTransfers from "./RecentTransfers";

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
      spacing={2}
      justifyContent="flex-end"
      sx={{ background: "#EEE", pt: 2, px: matches ? 2 : 0 }}
    >
      <Grid item xs={12} md={12} lg={10}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12} lg={12}>
            <Grid container spacing={2}>
              {isModuleAuthorized("DomesticPayment") && (
                <Grid item xs={12} md={12} lg={5}>
                  <Card elevation={3} sx={{ height: "100%", pb: 2 }}>
                    <CardContent>
                      <Grid container spacing={2} sx={{ px: 2, pt: 1 }}>
                        <Grid
                          item
                          xs={8}
                          md={12}
                          lg={12}
                          container
                          justifyContent="space-between"
                        >
                          <Typography
                            gutterBottom
                            component="div"
                            color="#204F88"
                          >
                            <strong> Fund Transfer</strong>
                          </Typography>
                          <Typography
                            variant="subtitle1"
                            sx={{
                              opacity: 1,
                              color: "#41414180",
                              font: "Roboto, medium",
                              fontSize: ".7rem",
                            }}
                          >
                            Select Account <ExpandMoreIcon fontSize="0.7rem" />
                          </Typography>
                        </Grid>
                      </Grid>
                      <Typography color="#414141" fontSize="0.7rem" pt={2}>
                        <strong>
                          Send money to your loved ones/transfer rent/transfer
                          money with in your bank accounts etc. in a secure and
                          convenient manner
                        </strong>
                      </Typography>
                      <Box sx={{ minWidth: 180, fontWeight: "bold" }} pt={3}>
                        <FormControl fullWidth>
                          <InputLabel
                            id="beneficiaryAc-select-label"
                            sx={{ color: "#41414196" }}
                          >
                            Choose Payee
                          </InputLabel>
                          <Select
                            labelId="beneficiaryAc-select-label"
                            id="beneficiaryAc-select"
                            value={toBene}
                            label="Choose Payee"
                            onChange={handleBeneChange}
                            size="small"
                            startAdornment={
                              <InputAdornment position="start">
                                <div
                                  style={{
                                    backgroundColor: "#204F881A",
                                    color: "#204F88",
                                    paddingTop: "0.3rem",
                                    paddingLeft: "0.6rem",
                                    borderRadius: "50%",
                                    width: "30px",
                                    height: "30px",
                                  }}
                                >
                                  <strong>B</strong>
                                </div>
                              </InputAdornment>
                            }
                          >
                            <MenuItem value={"1"}>Beneficiary 1</MenuItem>
                            <MenuItem value={"2"}>Beneficiary 2</MenuItem>
                            <MenuItem value={"3"}>Beneficiary 3</MenuItem>
                          </Select>
                        </FormControl>
                      </Box>
                      <Typography
                        gutterBottom
                        component="div"
                        fontSize="0.8rem"
                        color="#414141E0"
                        pt={3}
                      >
                        <strong>From Account</strong>
                      </Typography>
                      <Typography
                        gutterBottom
                        component="div"
                        fontSize="0.7rem"
                        color="#41414196"
                      >
                        <strong>Select Account Number</strong>
                      </Typography>
                      <Box sx={{ minWidth: 180, pt: 1 }} color="#41414196">
                        <FormControl fullWidth>
                          <InputLabel id="fromAc-select-label">
                            <strong>Account Number</strong>
                          </InputLabel>
                          <Select
                            labelId="fromAc-select-label"
                            id="fromAc-select"
                            value={toAc}
                            label="Choose Payee"
                            onChange={handleToAccChange}
                            size="small"
                            startAdornment={
                              <InputAdornment position="start">
                                <div
                                  style={{
                                    backgroundColor: "#204F881A",
                                    color: "#204F88",
                                    paddingTop: "0.3rem",
                                    paddingLeft: "0.6rem",
                                    borderRadius: "50%",
                                    width: "30px",
                                    height: "30px",
                                  }}
                                >
                                  <strong>A</strong>
                                </div>
                              </InputAdornment>
                            }
                          >
                            <MenuItem value={1}>DE00 45678 89876 5678</MenuItem>
                            <MenuItem value={"2"}>
                              DE00 45678 89876 1254
                            </MenuItem>
                            <MenuItem value={"3"}>
                              DE00 45678 89876 4730
                            </MenuItem>
                          </Select>
                        </FormControl>
                      </Box>
                      <Grid container spacing={3} pt={2}>
                        <Grid item xs={8} md={12} lg={12}>
                          <Alert
                            icon={false}
                            severity="info"
                            sx={{
                              color: "#204F88",
                              backgroundColor: "#204F881A",
                              fontSize: "0.7rem",
                              width: "100%",
                            }}
                          >
                            <strong>
                              Total available amount is €24,543 as on April 26
                              2023
                            </strong>
                          </Alert>
                        </Grid>
                      </Grid>
                      <Grid container spacing={3}>
                        <Grid item xs={12} md={12} lg={6} mt={1}>
                          <Typography
                            sx={{
                              color: "#41414180",
                              fontSize: "0.7rem",
                              fontWeight: "bold",
                            }}
                          >
                            Amount
                          </Typography>
                        </Grid>
                        <Grid item xs={12} md={12} lg={6} mt={1}>
                          <Typography
                            sx={{
                              color: "#41414180",
                              fontSize: "0.7rem",
                              fontWeight: "bold",
                            }}
                          >
                            Payment Date
                          </Typography>
                        </Grid>
                      </Grid>
                      <Grid container spacing={3}>
                        <Grid item xs={12} md={12} lg={6} mt={2} p={0}>
                          <FormControl
                            sx={{ m: 0, width: "20ch" }}
                            variant="outlined"
                          >
                            <OutlinedInput
                              id="outlined-adornment-weight"
                              startAdornment={
                                <InputAdornment position="start">
                                  <div
                                    style={{
                                      backgroundColor: "#204F881A",
                                      color: "#204F88",
                                      fontSize: "0.7rem",
                                      padding: "0.5rem",
                                    }}
                                  >
                                    <strong>USD</strong>
                                  </div>
                                </InputAdornment>
                              }
                              aria-describedby="outlined-weight-helper-text"
                              value="2,454"
                            />
                          </FormControl>
                        </Grid>
                        <Grid item xs={12} md={12} lg={6} mt={2}>
                          <MaterialUIPickers
                            sx={{ padding: "10px" }}
                            device={matches ? "" : "mobile"}
                          />
                        </Grid>
                      </Grid>
                      <Grid container spacing={3}>
                        <Grid item xs={12} md={12} lg={12} mt={1}>
                          <Typography
                            sx={{
                              color: "#41414180",
                              fontSize: "0.7rem",
                              fontWeight: "bold",
                            }}
                          >
                            Remarks (Optional)
                          </Typography>
                        </Grid>
                        <Grid item xs={12} md={12} lg={12} mt={1} p={"-2rem"}>
                          <FormControl
                            sx={{ m: 0, width: "100%" }}
                            variant="outlined"
                          >
                            <OutlinedInput id="outlined-adornment-weight" />
                          </FormControl>
                        </Grid>
                      </Grid>

                      <Grid container spacing={3}>
                        <Grid item xs={12} md={12} lg={12} mt={1}>
                          <FormControl>
                            <FormLabel id="demo-radio-buttons-group-label">
                              <Typography
                                sx={{
                                  color: "#41414180",
                                  fontSize: "0.7rem",
                                  fontWeight: "bold",
                                }}
                              >
                                Payment Type
                              </Typography>
                            </FormLabel>
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
                                sx={{ fontSize: "0.7rem" }}
                              />
                              <FormControlLabel
                                value="Recurring"
                                control={<Radio />}
                                label="Recurring"
                              />
                            </RadioGroup>
                          </FormControl>
                        </Grid>
                      </Grid>

                      <Grid container spacing={3}>
                        <Grid item xs={12} md={12} lg={12} mt={2}>
                          <Button
                            variant="contained"
                            sx={{
                              textTransform: "unset",
                              fontSize: "0.7rem",
                              backgroundColor: "#054FA8",
                              boxShadow: "none",
                              width: "100%",
                            }}
                          >
                            Proceed to pay
                          </Button>
                        </Grid>
                      </Grid>

                      {/* end of the last content */}
                    </CardContent>
                  </Card>
                </Grid>
              )}
              {isModuleAuthorized("InterAccountTransfer") && (
                <Grid item xs={12} md={12} lg={7}>
                  <RecentTransfers/>
                </Grid>
              )}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
