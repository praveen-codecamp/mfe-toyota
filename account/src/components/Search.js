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
import './styles.css'

const Search = () => {
  const [filterData, setFilterData] = useState([]);
  const [modelNumber, setModelNumber] = useState("");
  const [category, setCategory] = useState("");
  const [assignType, setAssignType] = useState("");
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  const searchHandler = () => {
    setFilterData(filterPolicyData(modelNumber, category, assignType));
  };
  return (
    <Grid
      container
      spacing={2}
      justifyContent="end"
      sx={{
        background: "#fff",
        my: matches ? "2rem" : undefined,
        px: matches ? 2 : 0,
      }}
    >
      <Grid item xs={12} md={12} lg={12}
        sx={{
          borderBottom: "1px solid #dc000d",
          paddingTop: "5px !important",
          paddingBottom: "5px",
          fontSize: ".8rem",
          fontWeight:"bold"
       }}>
          Model Master Maintenance (FVSC01010 Ver 1.0)
        
      </Grid>
      <Grid item xs={12} md={12} lg={12}
        sx={{
          borderBottom:"1px solid #dedede",
          paddingTop:"10px !important",
          paddingBottom:"10px"
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
              value={modelNumber}
              onChange={(e) => {
                setModelNumber(e.target.value);
              }}
            />
            <TextField
              id="category"
              label="Category"
              variant="outlined"
              size="small"
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
              }}
            />
            <TextField
              id="assignType"
              label="Assign Type"
              variant="outlined"
              size="small"
              value={assignType}
              onChange={(e) => {
                setAssignType(e.target.value);
              }}
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
      </Grid>
      <Grid item xs={12} md={12} lg={12} className="custom-table" pb={3}>
        <TableEditable data={filterData} />
      </Grid>
    </Grid>
  );
};
export default Search;
