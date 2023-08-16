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

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const Search = () => {
  const [filterData, setFilterData] = useState([]);
  const [modelNumber, setModelNumber] = useState("");
  const [category, setCategory] = useState("");
  const [assignType, setAssignType] = useState("");
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
const [show, setShow] = useState(false);
  const searchHandler = () => {
    setFilterData(filterPolicyData(modelNumber, category, assignType));
    setShow(true)
  };
  const resetHandler = () => {
    setModelNumber('')
    setCategory('')
    setAssignType('')
    setFilterData(filterPolicyData('', '',''));
  }
  return (
    <Grid
      container
      spacing={2}
      justifyContent="end"
      sx={{
        background: "#fff",
        my: matches ? ".2rem" : undefined,
        position:'relative'
      }}
    >
      <Grid item xs={12} md={12} lg={12} className="custom-table">
      <Grid item xs={12} md={12} lg={12}
        sx={{
          px: matches ? '32px !important' : '0 !important',
          borderBottom: "1px solid #dc000d",
          paddingTop: "5px !important",
          paddingBottom: "5px",
          fontSize: ".8rem",
          fontWeight:"bold"
       }}>
          Model Master Maintenance (FVSC01010 Ver 1.0)
        
      </Grid>
      <Box sx={
        {
          position: 'absolute', top: 30, left: 0, width: 860, zIndex: 999, padding: '0 0 0 30px'
        }
      }>
      <Grid item xs={12} md={12} lg={12}
        sx={{
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
          <FormControl fullWidth size="small">
            <InputLabel id="category-label">Category</InputLabel>
            <Select
              labelId="category-label"
              id="category"
              label="Category"
              variant="outlined"
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
              }}
            >
              <MenuItem value={''}>All</MenuItem>
              <MenuItem value={'Passenger'}>Passenger</MenuItem>
              <MenuItem value={'Commercial'}>Commercial</MenuItem>
            </Select>
          </FormControl>          
          <FormControl fullWidth size="small">
            <InputLabel id="assignType-label">Assign Type</InputLabel>
            <Select
              labelId="assignType-label"
              id="assignType"
              label="Assign Type"
              variant="outlined"
              value={assignType}
              onChange={(e) => {
                setAssignType(e.target.value);
              }}
            >
              <MenuItem value={''}>All</MenuItem>
              <MenuItem value={'FirmOrder'}>Firm Order</MenuItem>
              <MenuItem value={'NonFirmOrder'}>Non Firm Order</MenuItem>
            </Select>
          </FormControl>
            <span>
              <Button
                variant="contained"
                sx={{ mt: ".17rem", mr:".17rem", p: 1 }}
                onClick={searchHandler}
              >
                <SearchIcon />
              </Button>
              <Button
                variant="outlined"
                sx={{ mt: ".17rem", p: 1 }}
                onClick={resetHandler}
              >
                Reset
              </Button>
            </span>
          </Box>
      </Grid>
      </Box>
        <TableEditable data={filterData} />
        <Grid item className={`buttons-group ${show === true ? 'show':'hide'}`}>
          <Button variant="contained" sx={{backgroundColor:"#424242", marginRight:'10px'}}>Cancel</Button>
          <Button variant="contained" sx={{backgroundColor:"#424242"}}>Save</Button>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default Search;