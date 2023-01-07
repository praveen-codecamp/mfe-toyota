import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import MaterialUIPickers from "./DatePicker";
import Menu from "./Menu";
import Alert from "@mui/material/Alert";

import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";

const steps = ["Enter details", "Confirm details", "Summary"];

export default () => {
  const [value, setValue] = React.useState("one");
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Grid container spacing={3} style={{ background: "#EEE" }}>
      <Grid spacing={1} item xs={2} style={{ background: "#FFF" }}>
        <Menu />
      </Grid>
      <Grid item xs={10}>
        <Grid container direction="column">
          <Grid item style={{ marginTop: 25 }}>
            <Typography style={{ color: "#d32f2f" }} variant="h5" gutterBottom>
              Enter Standard Payment
            </Typography>
          </Grid>
          <Grid item style={{ marginTop: 25, marginBottom: 50 }}>
            <Grid container justifyContent={"center"}>
              <Grid xs={7}>
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

          <Grid item style={{ marginTop: 25, marginBottom: 25 }}>
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
          <Grid item style={{ marginBottom: 25 }}>
            <Card
              style={{
                height: "100%",
                position: "relative",
              }}
              elevation={3}
            >
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Payment Details
                </Typography>
                <Grid container spacing={2} xs={12} style={{ marginTop: 30 }}>
                  <Grid item xs={4}>
                    <Typography
                      variant="subtitle1"
                      style={{ marginLeft: "1rem" }}
                      gutterBottom
                    >
                      (*) Debit Account
                    </Typography>
                  </Grid>
                  <Grid item xs={8} style={{ paddingLeft: "1rem" }}>
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

                  <Grid item xs={4}>
                    <Typography
                      variant="subtitle1"
                      style={{ marginLeft: "1rem" }}
                      gutterBottom
                    >
                      (*) Payment Date
                    </Typography>
                  </Grid>
                  <Grid item xs={8} style={{ paddingLeft: "1rem" }}>
                    <Stack spacing={2} direction="row">
                      <MaterialUIPickers lable={"Select Date"} />
                    </Stack>
                  </Grid>

                  <Grid item xs={4}>
                    <Typography
                      variant="subtitle1"
                      style={{ marginLeft: "1rem" }}
                      gutterBottom
                    >
                      (*) Payment Amount
                    </Typography>
                  </Grid>
                  <Grid item xs={8} style={{ paddingLeft: "1rem" }}>
                    <TextField
                      id="amont"
                      label="GBP"
                      variant="outlined"
                      size="small"
                    />
                  </Grid>

                  <Grid item xs={4}>
                    <Typography
                      variant="subtitle1"
                      style={{ marginLeft: "1rem" }}
                      gutterBottom
                    >
                      Debit account reference
                    </Typography>
                  </Grid>
                  <Grid item xs={8} style={{ paddingLeft: "1rem" }}>
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
          <Grid item style={{ marginBottom: 25 }}>
            <Card
              style={{
                height: "100%",
                position: "relative",
                paddingBottom: 40,
              }}
              elevation={3}
            >
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Beneficiary Details
                </Typography>

                <Grid container spacing={2} xs={12} style={{ marginTop: 30 }}>
                  <Grid item xs={4}>
                    <Typography
                      variant="subtitle1"
                      style={{ marginLeft: "1rem" }}
                      gutterBottom
                    >
                      (*) Beneficiary Name
                    </Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <TextField
                      id="bname"
                      label=""
                      variant="outlined"
                      size="small"
                    />
                  </Grid>

                  <Grid item xs={4}>
                    <Typography
                      variant="subtitle1"
                      style={{ marginLeft: "1rem" }}
                      gutterBottom
                    >
                      (*) Beneficiary Account
                    </Typography>
                  </Grid>
                  <Grid item xs={8}>
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

                  <Grid item xs={4}>
                    <Typography
                      variant="subtitle1"
                      style={{ marginLeft: "1rem" }}
                      gutterBottom
                    >
                      Credit account reference
                    </Typography>
                  </Grid>
                  <Grid item xs={8}>
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
          <Grid item style={{ marginBottom: 25 }}>
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
