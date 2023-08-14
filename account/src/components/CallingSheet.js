import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import { Button, Select, InputLabel, MenuItem } from "@mui/material";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import FormLabel from "@mui/material/FormLabel";
import SearchIcon from "@mui/icons-material/Search";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const CallingSheet = () => {
  const [value, setValue] = React.useState("Auto");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  const renderRadio = (lbl) => {
    return (
      <FormControl>
        <RadioGroup
          row
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          value={value}
          onChange={handleChange}
        >
          <FormControlLabel value={lbl} control={<Radio />} label={lbl} />
        </RadioGroup>
      </FormControl>
    );
  };
  const renderAuto = () => {
    return (
      <Grid container spacing={3} sx={{ px: 3 }}>
        <Grid
          item
          xs={12}
          md={12}
          lg={12}
          sx={{ borderBottom: "1px solid #DEDEDE" }}
        >
          {renderRadio("Auto")}
        </Grid>
        <Grid
          item
          xs={12}
          md={12}
          lg={12}
          sx={{ borderBottom: "1px solid #DEDEDE" }}
        >
          <Typography variant="body2">
            Calling Sheet Complete Remaining
          </Typography>
        </Grid>
        <Grid item xs={12} md={12} lg={6}>
          <Typography variant="subtitle2">Domestic</Typography>
          <Box sx={{ borderBottom: "1px solid #DEDEDE" }}>
            <FormControl>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={value}
                onChange={handleChange}
              >
                <FormControlLabel
                  value="MetroSR"
                  control={<Radio />}
                  label="Metro SR"
                />
                <FormControlLabel
                  value="SRNorth"
                  control={<Radio />}
                  label="SR North"
                />
                <FormControlLabel
                  value="South"
                  control={<Radio />}
                  label="South"
                />
              </RadioGroup>
            </FormControl>
          </Box>
        </Grid>
        <Grid item xs={12} md={12} lg={6}>
          <Typography variant="subtitle2">Shuttle</Typography>
          <Box sx={{ borderBottom: "1px solid #DEDEDE" }}>
            <FormControl>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={value}
                onChange={handleChange}
              >
                <FormControlLabel
                  value="ShuttleSR"
                  control={<Radio />}
                  label="Shuttle S02 + S03 to Sur..."
                />
                <FormControlLabel
                  value="ShuttleSRBP"
                  control={<Radio />}
                  label="Shuttle SR to BP"
                />
                <FormControlLabel
                  value="ShuttleSRBL"
                  control={<Radio />}
                  label="Shuttle SR to BPL"
                />
              </RadioGroup>
            </FormControl>
          </Box>
        </Grid>
        <Grid item xs={12} md={12} lg={6}>
          <Typography variant="subtitle2">Export</Typography>
          <Box sx={{ borderBottom: "1px solid #DEDEDE" }}>
            <FormControl>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={value}
                onChange={handleChange}
              >
                <FormControlLabel
                  value="ShuttleSR"
                  control={<Radio />}
                  label="Export SR"
                />
                <FormControlLabel
                  value="ShuttleSRBP"
                  control={<Radio />}
                  label="Export SR (Commuter)"
                />
                <FormControlLabel
                  value="ShuttleSRBL"
                  control={<Radio />}
                  label="Export SR A1-Morocco"
                />
              </RadioGroup>
            </FormControl>
          </Box>
        </Grid>
        <Grid item xs={12} md={12} lg={6}>
          <Typography variant="subtitle2">Conversion</Typography>
          <Box sx={{ height: "8rem", borderBottom: "1px solid #DEDEDE" }}></Box>
        </Grid>
      </Grid>
    );
  };
  const renderManual = () => {
    return (
      <Grid container spacing={3} sx={{ px: 3 }}>
        <Grid
          item
          xs={12}
          md={12}
          lg={12}
          sx={{ borderBottom: "1px solid #DEDEDE" }}
        >
          {renderRadio("Manual")}
        </Grid>
      </Grid>
    );
  };
  return (
    <Grid
      container
      spacing={2}
      key="main-grid"
      justifyContent="end"
      sx={{
        background: "#EEE",
        my: matches ? "2rem" : undefined,
        px: matches ? 2 : 0,
      }}
    >
      <Grid
        item
        xs={12}
        md={12}
        lg={12}
        sx={{
          borderBottom: "1px solid #dc000d",
          paddingTop: "5px !important",
          paddingBottom: "5px",
          fontSize: ".8rem",
          fontWeight: "bold",
        }}
      >
        Calling Sheet Making - H/O Yard
      </Grid>
      <Grid item xs={12} md={12} lg={12}>
        <Paper
          sx={{
            background: "#FFFFFF 0% 0% no-repeat padding-box;",
            boxShadow: "0px 3px 6px #0000001F",
            borderRadius: "10px",
            p: 2,
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} md={12} lg={6}>
              {renderAuto()}
            </Grid>
            <Divider
              orientation="vertical"
              variant="middle"
              flexItem
              sx={{
                align: "center",
                mt: 2,
              }}
            />
            <Grid item xs={12} md={12} lg={4}>
              {renderManual()}
            </Grid>
            <Grid
              item
              xs={12}
              md={12}
              lg={12}
              sx={{ mt: 2, px: 3, borderTop: "1px solid #DEDEDE" }}
            >
              <Stack
                spacing={2}
                direction="row"
                display="flex"
                justifyContent="flex-end"
              >
                <Button variant="contained">Preview</Button>
                <Button variant="contained">Edit Delivery Plan Matching</Button>
                <Button variant="contained">Refresh</Button>
              </Stack>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid item xs={12} md={12} lg={12}></Grid>
    </Grid>
  );
};
export default CallingSheet;
