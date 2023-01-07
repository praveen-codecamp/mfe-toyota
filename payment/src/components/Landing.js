import React from "react";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import MaterialLink from "@mui/material/Link";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Menu from "./Menu";

export default function Payment() {
  const [fromAc, setFromAc] = React.useState("");
  const [toAc, setToAc] = React.useState("");

  const handleChange = (event) => {
    setFromAc(event.target.value);
  };
  const handleToAccChange = (event) => {
    setToAc(event.target.value);
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
            margin: ".3rem",
            padding: ".2rem",
          }}
        >
          <Grid item>
            <Typography variant="h6" gutterBottom>
              Make A Payments
            </Typography>
          </Grid>

          <Grid item>
            <Card>
              <CardHeader
                titleTypographyProps={{
                  fontSize: ".8rem",
                }}
                title="Quick Transfer"
              />
              <CardContent>
                <Grid container>
                  <Grid item xs={2} style={{ padding: ".8rem" }}>
                    <Box sx={{ minWidth: 180 }}>
                      <FormControl fullWidth>
                        <InputLabel id="fromAc-select-label">
                          Transfer From
                        </InputLabel>
                        <Select
                          labelId="fromAc-select-label"
                          id="fromAc-select"
                          value={fromAc}
                          label="Transfer From"
                          onChange={handleChange}
                        >
                          <MenuItem value={1}>Transfer From..</MenuItem>
                          <MenuItem value={"2"}>0123456789</MenuItem>
                          <MenuItem value={"3"}>0987654321</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                  </Grid>
                  <Grid
                    item
                    xs={2}
                    style={{ marginLeft: "4rem", padding: ".8rem" }}
                  >
                    <Box sx={{ minWidth: 180 }}>
                      <FormControl fullWidth>
                        <InputLabel id="toAc-select-label">
                          Transfer To
                        </InputLabel>
                        <Select
                          labelId="toAc-select-label"
                          id="toAc-select"
                          value={toAc}
                          label="Transfer To"
                          onChange={handleToAccChange}
                        >
                          <MenuItem value={1}>Transfer To..</MenuItem>
                          <MenuItem value={"2"}>Jon</MenuItem>
                          <MenuItem value={"3"}>Max</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                  </Grid>
                  <Grid
                    item
                    xs={6}
                    style={{ marginLeft: "4rem", padding: ".8rem" }}
                  >
                    <Stack spacing={2} direction="row">
                      <TextField
                        id="outlined-basic"
                        label="Amount ($)"
                        variant="outlined"
                      />
                      <Button variant="contained">Go</Button>
                    </Stack>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>

          <Grid item>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <Card>
                  <CardHeader
                    titleTypographyProps={{
                      fontSize: ".8rem",
                    }}
                    title="Domestic Payment"
                  />
                  <CardContent>
                    <Typography variant="body2" gutterBottom>
                      Use standard to set up immediate, next day and future
                      dated payment
                    </Typography>
                    <MaterialLink
                      component={Link}
                      to="/payment/standard"
                      color="inherit"
                    >
                      Standard Payment
                    </MaterialLink>
                    <Typography variant="body2" gutterBottom>
                      (immediate, next day and future dated payment)
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={4}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardHeader
                    titleTypographyProps={{
                      fontSize: ".8rem",
                    }}
                    title="Inter Account Transfer"
                  />
                  <CardContent>
                    <Typography variant="body2" gutterBottom>
                      Use standard to set up immediate, next day and future
                      dated payment
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      Use standard to set up immediate, next day and future
                      dated payment
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={4}>
                <Card>
                  <CardHeader
                    titleTypographyProps={{
                      fontSize: ".8rem",
                    }}
                    title="International Payment"
                  />
                  <CardContent>
                    <Typography variant="body2" gutterBottom>
                      Use standard to set up immediate, next day and future
                      dated payment
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      Use standard to set up immediate, next day and future
                      dated payment
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
