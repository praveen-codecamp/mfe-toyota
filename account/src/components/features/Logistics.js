import React, { useState, useEffect } from "react";
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
import { getDatetime } from "../helper";

const Logistics = () => {
  const [filterData, setFilterData] = useState([]);
  console.log("filterData---", filterData);
  const [modelNumber, setModelNumber] = useState("");
  const [plantNumber, setPlantNumber] = useState("");
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  useEffect(() => {
    renderTable(filterData);
  }, [filterData]);

  const renderTable = (filterData) => {
    console.log("render table", filterData);
    return (
      <Grid key="table-grid" item xs={12} md={12} lg={12}>
        <LogisticsTable tableData={filterData} />
      </Grid>
    );
  };
  const searchHandler = () => {
    setFilterData(filterLogisticsData({ modelNumber, plantNumber }));
    /// renderTable();
  };
  const resetFilters = () => {
    setModelNumber("");
    setPlantNumber("");
    setFilterData(filterLogisticsData({ modelNumber: "", plantNumber: "" }));
  };

  const handleChange = (event) => {
    setModelNumber(event.target.value);
  };
  const plantChange = (event) => {
    setPlantNumber(event.target.value);
  };

  return (
    <Grid
      container
      spacing={2}
      key="main-grid"
      justifyContent="end"
      sx={{
        background: "#fff",
        my: matches ? ".2rem" : undefined,
        position: "relative",
        px: 2,
      }}
    >
      <Grid
        item
        xs={12}
        md={12}
        lg={12}
        sx={{
          px: matches ? "35px !important" : "0 !important",
          borderBottom: "1px solid #dc000d",
          paddingTop: "3px !important",
          paddingBottom: "3px",
          fontSize: ".8rem",
          fontWeight: "bold",
        }}
      >
        <Grid container justifyContent={"space-between"}>
          <Grid item>
            <Typography variant="subtitle1">
              Logistic flow Maintenance
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body2">{getDatetime()}</Typography>
          </Grid>
        </Grid>
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
          <Box
            component="form"
            sx={{
              "& > :not(style)": { mx: 0.5, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <FormControl>
              <InputLabel id="demo-modal">Model</InputLabel>
              <Select
                labelId="demo-modal"
                id="demo-simple-modal"
                value={modelNumber}
                onChange={handleChange}
                label="Model"
                size="small"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="Z-SEE1213">Z-SEE1213</MenuItem>
                <MenuItem value="X-SEE1213">X-SEE1213</MenuItem>
                <MenuItem value="P-SEE1213">P-SEE1213</MenuItem>
              </Select>
            </FormControl>
            <FormControl>
              <InputLabel id="demo-plant">Plant</InputLabel>
              <Select
                labelId="demo-plant"
                id="demo-simple-plant"
                value={plantNumber}
                onChange={plantChange}
                label="Plant"
                size="small"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="A Gateway">A Gateway</MenuItem>
                <MenuItem value="B Gateway">B Gateway</MenuItem>
                <MenuItem value="C Gateway">C Gateway</MenuItem>
              </Select>
            </FormControl>
            <span>
              <Button variant="contained" sx={{ p: 1 }} onClick={searchHandler}>
                <SearchIcon />
              </Button>
            </span>
            <span>
              <Button
                variant="outlined"
                color="error"
                sx={{ p: 1 }}
                onClick={resetFilters}
              >
                Reset
              </Button>
            </span>
          </Box>
        </Paper>
      </Grid>
      <Grid item xs={12} md={12} lg={12}>
        {renderTable(filterData)}
      </Grid>
    </Grid>
  );
};
export default Logistics;
