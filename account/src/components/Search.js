import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import palette from "../../../shared/theme/palette";
import { filterPolicyData } from "./policyData";
import { TableEditable } from "./TableEditable";

const Search = () => {
  const [filterData, setFilterData] = useState([]);
  const [policyNumber, setPolicyNumber] = useState("");
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  const searchHandler = () => {
    setFilterData(filterPolicyData(policyNumber));
  };
  return (
    <Grid
      container
      spacing={3}
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
            <TextField
              id="model"
              label="Model"
              variant="outlined"
              size="small"
              value={policyNumber}
              onChange={(e) => {
                setPolicyNumber(e.target.value);
              }}
            />
            <TextField
              id="category"
              label="Category"
              variant="outlined"
              size="small"
            />
            <TextField
              id="assign-type"
              label="Assign Type"
              variant="outlined"
              size="small"
            />
            <span>
              <Button
                variant="contained"
                sx={{ mt: ".17rem", p: 1 }}
                onClick={searchHandler}
              >
                <SearchIcon />
              </Button>
            </span>
          </Box>
        </Paper>
      </Grid>
      <Grid item xs={12} md={12} lg={12}>
        <TableEditable data={filterData} />
      </Grid>
    </Grid>
  );
};
export default Search;
