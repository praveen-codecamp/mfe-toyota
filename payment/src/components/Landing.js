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
                            0123456789
                          </MenuItem>
                          <MenuItem value={"3"} className="redacted">
                            0987654321
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
                          <MenuItem value={"2"}>Jon</MenuItem>
                          <MenuItem value={"3"}>Max</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                  </Grid>
                  <Grid item xs={3}>
                    <Stack spacing={2} direction="row">
                      <TextField
                        id="outlined-basic"
                        label="Amount ($)"
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
                  <CardActions style={{ position: "absolute", bottom: 0 }}>
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
                      Contrary to popular belief, Lorem Ipsum is not simply
                      random text. It has roots in a piece of classical Latin
                      literature from 45 BC, making it over 2000 years old.
                      Richard McClintock, a Latin professor at Hampden-Sydney
                      College in Virginia, looked up one of the more obscure
                      Latin words, consectetur, from a Lorem Ipsum passage, and
                      going through the cites of the word in classical
                      literature, discovered the undoubtable source.
                    </Typography>
                  </CardContent>
                  <CardActions style={{ position: "absolute", bottom: 0 }}>
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
                      Contrary to popular belief, Lorem Ipsum is not simply
                      random text. It has roots in a piece of classical Latin
                      literature from 45 BC, making it over 2000 years old.
                      Richard McClintock, a Latin professor at Hampden-Sydney
                      College in Virginia, looked up one of the more obscure
                      Latin words, consectetur, from a Lorem Ipsum passage, and
                      going through the cites of the word in classical
                      literature, discovered the undoubtable source.
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      Use standard to set up immediate, next day and future
                      dated payment
                    </Typography>
                  </CardContent>
                  <CardActions style={{ position: "absolute", bottom: 0 }}>
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
