import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { filterPolicyData } from "./policyData";
import { TableEditable } from "./TableEditable";
import "./styles.css";
import { getDatetime } from "./helper";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

// import { makeStyles } from "@material-ui/core/styles";

// const useStyles = makeStyles((theme) => ({
//   rootFirstSelect: {
//     padding: "0px",
//   },
// }));

const searchInputStyle = {
  "& .MuiOutlinedInput-root": { padding: "0px !important" },
};

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Search = () => {
  const [filterData, setFilterData] = useState(filterPolicyData());
  const [modelNumber, setModelNumber] = useState("");
  const [category, setCategory] = useState("");
  const [assignType, setAssignType] = useState("");
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  const [show, setShow] = useState(true);
  const searchHandler = () => {
    setFilterData(filterPolicyData(modelNumber, category, assignType));
    //setShow(true);
  };
  const resetHandler = () => {
    setModelNumber("");
    setCategory("");
    setAssignType("");
    setFilterData(filterPolicyData("", "", ""));
  };
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <Grid
      container
      spacing={2}
      justifyContent="end"
      sx={{
        background: "#fff",
        my: matches ? ".2rem" : undefined,
        position: "relative",
      }}
    >
      <Grid item xs={12} md={12} lg={12} className="custom-table">
        <Grid
          item
          xs={12}
          md={12}
          lg={12}
          sx={{
            px: matches ? "10px !important" : "0 !important",
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
                Model Master Maintenance
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2">{getDatetime()}</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Box
          sx={{
            position: "absolute",
            top: 30,
            left: 0,
            width: 860,
            zIndex: 999,
            padding: "0 0 0 30px",
          }}
        >
          <Grid
            item
            xs={12}
            md={12}
            lg={12}
            sx={{
              paddingTop: "10px !important",
              paddingBottom: "10px",
            }}
          >
            <Box
              component="form"
              sx={{
                "& > :not(style)": {
                  m: 0.3,
                  width: "25ch",
                  marginBottom: "2px",
                },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="model"
                sx={searchInputStyle}
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
                  sx={searchInputStyle}
                  label="Category"
                  variant="outlined"
                  style={{ padding: "0px" }}
                  value={category}
                  onChange={(e) => {
                    setCategory(e.target.value);
                  }}
                >
                  <MenuItem value={""}>All</MenuItem>
                  <MenuItem value={"Passenger"}>Passenger</MenuItem>
                  <MenuItem value={"Commercial"}>Commercial</MenuItem>
                </Select>
              </FormControl>
              <FormControl fullWidth size="small">
                <InputLabel id="assignType-label">Assign Type</InputLabel>
                <Select
                  labelId="assignType-label"
                  id="assignType"
                  sx={searchInputStyle}
                  label="Assign Type"
                  style={{ padding: "0px" }}
                  variant="outlined"
                  value={assignType}
                  onChange={(e) => {
                    setAssignType(e.target.value);
                  }}
                >
                  <MenuItem value={""}>All</MenuItem>
                  <MenuItem value={"FirmOrder"}>Firm Order</MenuItem>
                  <MenuItem value={"NonFirmOrder"}>Non Firm Order</MenuItem>
                </Select>
              </FormControl>
              <span>
                <Button
                  variant="contained"
                  sx={{ mt: ".17rem", mr: ".17rem", p: 1 }}
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
        <TableEditable
          data={filterData}
          addCallBack={() => {
            setShow(true);
          }}
        />
        <Grid
          item
          className={`buttons-group ${show === true ? "show" : "hide"}`}
        >
          <Button
            variant="contained"
            sx={{ backgroundColor: "#656565", marginRight: "10px" }}
          >
            Cancel
          </Button>
          <Button variant="contained" sx={{ backgroundColor: "#656565" }}
            onClick={handleClickOpen}>
            Save
          </Button>
        </Grid>
      </Grid>
      
    <Dialog
    open={open}
    TransitionComponent={Transition}
    keepMounted
    onClose={handleClose}
    aria-describedby="alert-dialog-slide-description"
  >
    <DialogContent>
      <DialogContentText id="alert-dialog-slide-description">Do you want to save?</DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={handleClose}>Yes</Button>
      <Button onClick={handleClose}>No</Button>
    </DialogActions>
  </Dialog>

    </Grid>
  );
};
export default Search;
