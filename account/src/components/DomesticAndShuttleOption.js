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
            <FormControlLabel value="South" control={<Radio />} label="South" />
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
  </>
);
