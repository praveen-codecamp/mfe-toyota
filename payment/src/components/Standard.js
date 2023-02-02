import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import MaterialUIPickers from "./DatePicker";

const steps = ["Enter details", "Confirm details", "Summary"];

export default () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  const handleStep = (step) => () => {
    setActiveStep(step);
  };
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
            <Typography
              sx={{
                color: "#d32f2f",
                textAlign: matches ? undefined : "center",
              }}
              variant="h5"
              gutterBottom
            >
              Enter Standard Payment
            </Typography>
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <Grid container justifyContent={"center"}>
              <Grid xs={12} md={12} lg={7}>
                <Box sx={{ width: "100%" }}>
                  <Stepper nonLinear activeStep={activeStep}>
                    {steps.map((label, index) => (
                      <Step key={label} completed={completed[index]}>
                        <StepButton color="inherit" onClick={handleStep(index)}>
                          {label}
                        </StepButton>
                      </Step>
                    ))}
                  </Stepper>
                </Box>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} md={12} lg={12}>
            <Card elevation={3}>
              <CardContent>
                <Alert severity="info">
                  <Typography variant="body1" gutterBottom>
                    <strong>
                      Converted currencies are approximate and are based on
                      foreign exchange mid rates
                    </strong>
                  </Typography>
                </Alert>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <Card elevation={3}>
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Payment Details
                </Typography>
                <Grid container spacing={1} sx={{ m: 2 }}>
                  <Grid item xs={12} md={12} lg={4}>
                    <Typography variant="subtitle1" gutterBottom>
                      (*) Debit Account
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={12} lg={8}>
                    <TextField
                      id="acc1"
                      style={{ maxWidth: "4rem" }}
                      label=""
                      variant="outlined"
                      size="small"
                    />{" "}
                    -
                    <TextField
                      id="acc2"
                      style={{ maxWidth: "4rem" }}
                      label=""
                      variant="outlined"
                      size="small"
                    />{" "}
                    -
                    <TextField
                      id="acc3"
                      style={{ maxWidth: "4rem" }}
                      label=""
                      variant="outlined"
                      size="small"
                    />
                  </Grid>

                  <Grid item xs={12} md={12} lg={4}>
                    <Typography variant="subtitle1" gutterBottom>
                      (*) Payment Date
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={12} lg={8}>
                    <MaterialUIPickers
                      device={matches ? "" : "mobile"}
                      lable={"Select Date"}
                    />
                  </Grid>

                  <Grid item xs={12} md={12} lg={4}>
                    <Typography variant="subtitle1" gutterBottom>
                      (*) Payment Amount
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={12} lg={8}>
                    <TextField
                      id="amont"
                      label="AED"
                      variant="outlined"
                      size="small"
                    />
                  </Grid>

                  <Grid item xs={12} md={12} lg={4}>
                    <Typography variant="subtitle1" gutterBottom>
                      Debit account reference
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={12} lg={8}>
                    <TextField
                      id="accref"
                      label=""
                      variant="outlined"
                      size="small"
                    />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <Card elevation={3}>
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Beneficiary Details
                </Typography>

                <Grid container spacing={1} sx={{ m: 2 }}>
                  <Grid item xs={12} md={12} lg={4}>
                    <Typography variant="subtitle1" gutterBottom>
                      (*) Beneficiary Name
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={12} lg={8}>
                    <TextField
                      id="bname"
                      label=""
                      variant="outlined"
                      size="small"
                    />
                  </Grid>

                  <Grid item xs={12} md={12} lg={4}>
                    <Typography variant="subtitle1" gutterBottom>
                      (*) Beneficiary Account
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={12} lg={8}>
                    <TextField
                      id="bacc1"
                      style={{ maxWidth: "4rem" }}
                      label=""
                      variant="outlined"
                      size="small"
                    />{" "}
                    -
                    <TextField
                      id="bacc2"
                      style={{ maxWidth: "4rem" }}
                      label=""
                      variant="outlined"
                      size="small"
                    />{" "}
                    -
                    <TextField
                      id="bacc3"
                      style={{ maxWidth: "4rem" }}
                      label=""
                      variant="outlined"
                      size="small"
                    />
                  </Grid>

                  <Grid item xs={12} md={12} lg={4}>
                    <Typography variant="subtitle1" gutterBottom>
                      Credit account reference
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={12} lg={8}>
                    <TextField
                      id="baccref"
                      label=""
                      variant="outlined"
                      size="small"
                    />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <Card elevation={3}>
              <CardContent>
                <Stack spacing={2} direction="row">
                  <Button variant="contained">Make Payment</Button>
                  <Button variant="outlined">Cancel</Button>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
