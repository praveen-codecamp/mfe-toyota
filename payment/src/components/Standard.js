import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import MaterialUIPickers from "./DatePicker";
import Menu from "./Menu";

export default () => {
  const [value, setValue] = React.useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Grid container spacing={2}>
      <Grid item xs={2}>
        <Menu />
      </Grid>
      <Grid item xs={10}>
        <Grid
          container
          direction="column"
          spacing={2}
          style={{
            margin: ".4rem",
            padding: ".2rem",
          }}
        >
          <Grid item>
            <Typography style={{ color: "orange" }} variant="h6" gutterBottom>
              Enter Standard Payment
            </Typography>
          </Grid>

          <Grid item>
            <Box sx={{ width: "100%" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                textColor="secondary"
                indicatorColor="secondary"
                aria-label="secondary tabs example"
              >
                <Tab value="one" label="Enter details" />
                <Tab value="two" label="Confirm details" />
                <Tab value="three" label="Summary" />
              </Tabs>
            </Box>
          </Grid>

          <Grid item>
            <Typography variant="body2" gutterBottom>
              Converted currencies are approximate and are based on foreign
              exchange mid rates
            </Typography>
          </Grid>

          <Grid item style={{ background: "grey" }}>
            <Typography
              variant="body2"
              style={{ color: "white", marginLeft: ".2rem" }}
              gutterBottom
            >
              Payment Details
            </Typography>
          </Grid>

          <Grid item style={{ marginTop: ".4rem" }}>
            <Grid container>
              <Grid item xs={4}>
                <Typography
                  variant="subtitle1"
                  style={{ marginLeft: "1rem" }}
                  gutterBottom
                >
                  (*) Debit Account
                </Typography>
              </Grid>
              <Grid item xs={6} style={{ marginLeft: "1rem" }}>
                <TextField
                  id="acc1"
                  style={{ maxWidth: "4rem" }}
                  label=""
                  variant="outlined"
                />{" "}
                -
                <TextField
                  id="acc2"
                  style={{ maxWidth: "4rem" }}
                  label=""
                  variant="outlined"
                />{" "}
                -
                <TextField
                  id="acc3"
                  style={{ maxWidth: "4rem" }}
                  label=""
                  variant="outlined"
                />
              </Grid>
            </Grid>
          </Grid>

          <Grid item style={{ marginTop: ".4rem" }}>
            <Grid container>
              <Grid item xs={4}>
                <Typography
                  variant="subtitle1"
                  style={{ marginLeft: "1rem" }}
                  gutterBottom
                >
                  (*) Payment Date
                </Typography>
              </Grid>
              <Grid item xs={6} style={{ marginLeft: "1rem" }}>
                <Stack spacing={2} direction="row">
                  <MaterialUIPickers lable={"Select Date"} />
                </Stack>
              </Grid>
            </Grid>
          </Grid>

          <Grid item style={{ marginTop: ".4rem" }}>
            <Grid container>
              <Grid item xs={4}>
                <Typography
                  variant="subtitle1"
                  style={{ marginLeft: "1rem" }}
                  gutterBottom
                >
                  (*) Payment Amount
                </Typography>
              </Grid>
              <Grid item xs={6} style={{ marginLeft: "1rem" }}>
                <TextField id="amont" label="GBP" variant="outlined" />
              </Grid>
            </Grid>
          </Grid>

          <Grid item style={{ marginTop: ".4rem" }}>
            <Grid container>
              <Grid item xs={4}>
                <Typography
                  variant="subtitle1"
                  style={{ marginLeft: "1rem" }}
                  gutterBottom
                >
                  Debit account reference
                </Typography>
              </Grid>
              <Grid item xs={6} style={{ marginLeft: "1rem" }}>
                <TextField id="accref" label="" variant="outlined" />
              </Grid>
            </Grid>
          </Grid>

          <Grid item style={{ background: "grey" }}>
            <Typography
              variant="body2"
              style={{ color: "white", marginLeft: ".2rem" }}
              gutterBottom
            >
              Beneficiary Details
            </Typography>
          </Grid>

          <Grid item style={{ marginTop: ".4rem" }}>
            <Grid container>
              <Grid item xs={4}>
                <Typography
                  variant="subtitle1"
                  style={{ marginLeft: "1rem" }}
                  gutterBottom
                >
                  (*) Beneficiary Name
                </Typography>
              </Grid>
              <Grid item xs={6} style={{ marginLeft: "1rem" }}>
                <TextField id="bname" label="" variant="outlined" />
              </Grid>
            </Grid>
          </Grid>

          <Grid item style={{ marginTop: ".4rem" }}>
            <Grid container>
              <Grid item xs={4}>
                <Typography
                  variant="subtitle1"
                  style={{ marginLeft: "1rem" }}
                  gutterBottom
                >
                  (*) Beneficiary Account
                </Typography>
              </Grid>
              <Grid item xs={6} style={{ marginLeft: "1rem" }}>
                <TextField
                  id="bacc1"
                  style={{ maxWidth: "4rem" }}
                  label=""
                  variant="outlined"
                />{" "}
                -
                <TextField
                  id="bacc2"
                  style={{ maxWidth: "4rem" }}
                  label=""
                  variant="outlined"
                />{" "}
                -
                <TextField
                  id="bacc3"
                  style={{ maxWidth: "4rem" }}
                  label=""
                  variant="outlined"
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item style={{ marginTop: ".4rem" }}>
            <Grid container>
              <Grid item xs={4}>
                <Typography
                  variant="subtitle1"
                  style={{ marginLeft: "1rem" }}
                  gutterBottom
                >
                  Credit account reference
                </Typography>
              </Grid>
              <Grid item xs={6} style={{ marginLeft: "1rem" }}>
                <TextField id="baccref" label="" variant="outlined" />
              </Grid>
            </Grid>
          </Grid>

          <Grid item justifyContent="center" alignItems="center">
            <Grid container justifyContent="center" alignItems="center">
              <Grid item>
                <Stack spacing={2} direction="row">
                  <Button variant="contained">Cancel</Button>
                  <Button variant="contained">Make Payment</Button>
                </Stack>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
