import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import { Button, Select, InputLabel, MenuItem } from "@mui/material";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import SearchIcon from "@mui/icons-material/Search";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import FormControl from "@mui/material/FormControl";

//import palette from "../../../shared/theme/palette";
import { filterLogisticsData } from "./LogisticsData";
import { LogisticsTable } from "./LogisticsTable";

const Logistics = () => {
  const [filterData, setFilterData] = useState([]);
  const [policyNumber, setPolicyNumber] = useState("");
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  const searchHandler = () => {
    setFilterData(filterLogisticsData("C Gateway"));
  };
  return (
    <Grid
      container
      spacing={2}
      justifyContent="end"
      sx={{
        background: "#EEE",
        my: matches ? "2rem" : undefined,
        px: matches ? 2 : 0,
      }}
    >
      <Grid item xs={12} md={12} lg={12}>
        <Paper
          sx={{
            background: "#FFFFFF 0% 0% no-repeat padding-box;",
            boxShadow: "0px 3px 6px #0000001F",
            borderRadius: "10px",
            p: 2,
          }}
        >
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 0.3, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <FormControl>
              <InputLabel id="demo-modal">Model</InputLabel>
              <Select
                labelId="demo-modal"
                id="demo-simple-select-standard"
                value="Z-SEE1213"
                onChange={() => console.log("model ")}
                label="Model"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="Z-SEE1213">Z-SEE1213</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <FormControl>
              <InputLabel id="demo-plant">Plant</InputLabel>
              <Select
                labelId="demo-plant"
                id="demo-simple-"
                value="C Gateway"
                onChange={() => console.log("select")}
                label="Plant"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="C Gateway">C Gateway</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <span>
              <Button
                variant="contained"
                sx={{ mt: ".17rem", p: 1 }}
                onClick={searchHandler}
              >
                <SearchIcon />
              </Button>
            </span>
            <span>
              <Button
                variant="outlined"
                color="error"
                sx={{ mt: ".17rem", p: 1 }}
              >
                Reset
              </Button>
            </span>
          </Box>
        </Paper>
      </Grid>
      <Grid item xs={12} md={12} lg={12}>
        <LogisticsTable data={filterLogisticsData("C Gateway")} />
      </Grid>
    </Grid>
  );
};
export default Logistics;
