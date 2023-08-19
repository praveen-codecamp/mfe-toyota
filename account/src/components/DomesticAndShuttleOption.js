import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

export const DomesticAndShuttleOption = ({ value, handleChange }) => (
  <>
    <Grid item xs={12} md={12} lg={6} sx={{ paddingTop: "5px !important" }}>
      <Typography variant="subtitle2" sx={{ marginBottom: "5px" }}>
        Domestic
      </Typography>
      <Box sx={{ borderBottom: "1px solid #DEDEDE", width: "80%" }}>
        <FormControl>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={value}
            onChange={handleChange}
          >
            <FormControlLabel
              value="MetroSR"
              control={<Radio size="small" />}
              label="Metro SR"
              className="custom-radio-button"
            />
            <FormControlLabel
              value="SRNorth"
              control={<Radio size="small" />}
              label="SR North"
              className="custom-radio-button"
            />
            <FormControlLabel
              value="South"
              control={<Radio size="small" />}
              label="South"
              className="custom-radio-button"
            />
          </RadioGroup>
        </FormControl>
      </Box>
    </Grid>

    <Grid item xs={12} md={12} lg={6} sx={{ paddingTop: "5px !important" }}>
      <Typography variant="subtitle2" sx={{ marginBottom: "5px" }}>
        Shuttle
      </Typography>
      <Box sx={{ borderBottom: "1px solid #DEDEDE", width: "80%" }}>
        <FormControl>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={value}
            onChange={handleChange}
          >
            <FormControlLabel
              value="ShuttleSR"
              control={<Radio size="small" />}
              label="Shuttle S02 + S03 to Sur..."
              className="custom-radio-button"
            />
            <FormControlLabel
              value="ShuttleSRBP"
              control={<Radio size="small" />}
              label="Shuttle SR to BP"
              className="custom-radio-button"
            />
            <FormControlLabel
              value="ShuttleSRBL"
              control={<Radio size="small" />}
              label="Shuttle SR to BPL"
              className="custom-radio-button"
            />
          </RadioGroup>
        </FormControl>
      </Box>
    </Grid>
  </>
);
