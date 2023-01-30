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
import Nav from "./nav";

export default function Payment() {
  const [fromAc, setFromAc] = React.useState(1);
  const [toAc, setToAc] = React.useState(1);
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setFromAc(event.target.value);
  };
  const handleToAccChange = (event) => {
    setToAc(event.target.value);
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
        <Grid container direction="column">
          <Grid item style={{ marginTop: 25 }}>
            <Typography style={{ color: "#d32f2f" }} variant="h5" gutterBottom>
              Make A Payments
            </Typography>
          </Grid>

          <Grid item style={{ marginTop: 25 }}>
            <Card sx={{}} elevation={3}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Quick Transfer
                </Typography>
                <Grid container style={{ marginTop: 15 }} spacing={3}>
                  <Grid item xs={3}>
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
                          size="small"
                        >
                          <MenuItem value={1}>Transfer From..</MenuItem>
                          <MenuItem value={"2"} className="redacted">
                            1000000212633
                          </MenuItem>
                          <MenuItem value={"3"} className="redacted">
                            1000000216189
                          </MenuItem>
                          <MenuItem value={"4"} className="redacted">
                            1000000216150
                          </MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                  </Grid>
                  <Grid item xs={3}>
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
                          size="small"
                        >
                          <MenuItem value={1}>Transfer To..</MenuItem>
                          <MenuItem value={"2"}>Jon Yml</MenuItem>
                          <MenuItem value={"3"}>Max</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                  </Grid>
                  <Grid item xs={3}>
                    <Stack spacing={2} direction="row">
                      <TextField
                        id="outlined-basic"
                        label="Amount (AED)"
                        variant="outlined"
                        size="small"
                      />
                      <Button variant="contained">Go</Button>
                    </Stack>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>

          <Grid
            item
            style={{ marginTop: 25, marginBottom: 25, paddingBottom: 40 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <Card
                  style={{
                    height: "100%",
                    position: "relative",
                    paddingBottom: 20,
                  }}
                  elevation={3}
                >
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Domestic Payment
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      Use standard to set up immediate, next day and future
                      dated payment
                    </Typography>

                    <Typography
                      variant="body2"
                      gutterBottom
                      style={{ marginBottom: 15 }}
                    />

                    <Typography variant="body1">
                      <strong>
                        (immediate, next day and future dated payment)
                      </strong>
                    </Typography>
                  </CardContent>
                  <CardActions style={{ position: "absolute", bottom: 2 }}>
                    <Button
                      size="small"
                      variant="contained"
                      component={Link}
                      to="/payment/standard"
                    >
                      Standard Payment
                    </Button>
                    <Button size="small">Learn More</Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item xs={4}>
                <Card
                  style={{
                    height: "100%",
                    position: "relative",
                    paddingBottom: 20,
                  }}
                  elevation={3}
                >
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Inter Account Transfer
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      Use standard to set up immediate, next day and future
                      dated payment
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      An inter account transfer is the movement of money from
                      one bank or cash account of a business entity to another.
                      No funds enter or leave the business. A transfer is not
                      possible unless the business has at least two bank or cash
                      accounts. Remember, an inter account transfer only records
                      a transfer. It does not actually move any money. You must
                      take action to withdraw and deposit, make the online
                      transfer, or send the cheque.
                    </Typography>
                  </CardContent>
                  <CardActions style={{ position: "absolute", bottom: 2 }}>
                    <Button size="small" variant="contained">
                      Inter Account Transfer
                    </Button>
                    <Button size="small">Learn More</Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item xs={4}>
                <Card
                  style={{
                    height: "100%",
                    position: "relative",
                    paddingBottom: 20,
                  }}
                  elevation={3}
                >
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      International Payment
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      Does your business need to pay vendors, conduct
                      international payroll, send funds, manage liquidity
                      between currency accounts, or handle FX risk? If you
                      answered yes to any of these, it's time we let you in on a
                      secret and demystify what international payments is, an
                      easy and fast way to make and manage all your
                      international payments, some best practices, and what the
                      journey of an international payment looks like from end to
                      end.
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      Use standard to set up immediate, next day and future
                      dated payment
                    </Typography>
                  </CardContent>
                  <CardActions style={{ position: "absolute", bottom: 2 }}>
                    <Button size="small" variant="contained">
                      International Payment
                    </Button>
                    <Button size="small">Learn More</Button>
                  </CardActions>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
