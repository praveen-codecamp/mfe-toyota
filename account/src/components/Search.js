import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { debounce } from "@mui/material/utils";
import palette from "../../../shared/theme/palette";
import { filterPolicyData } from "./policyData";
import { Table } from "./Table";
import GoogleMaps from "./GooglePlaceInput";

const Search = () => {
  const [filterData, setFilterData] = useState([]);
  const [policyNumber, setPolicyNumber] = useState("");
  const [addressInputValue, setAddressInputValue] = useState("");
  const [addressOptions, setAddressOptions] = useState([]);
  console.log(addressInputValue, addressOptions);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  useEffect(() => {
    console.log("addressInputValue##", addressInputValue);
    debounce(getAddress(addressInputValue), 5000);
  }, [addressInputValue]);
  const getAddress = async (addressInputValue) => {
    console.log("addressInputValue$$", addressInputValue);
    const addRes = await fetch(
      `https://api.addressify.com.au/address/autocomplete?api_key=37e6cfe5-731c-46ff-80b0-ebf3bba25693&term=${addressInputValue}&max_results=5`
    );
    const addOptJson = await addRes.json();
    setAddressOptions(addOptJson);
  };
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
      <Grid item xs={12} md={12} lg={10}>
        <Paper
          sx={{
            background: "#FFFFFF 0% 0% no-repeat padding-box;",
            boxShadow: "0px 3px 6px #0000001F",
            borderRadius: "10px",
            p: 2,
          }}
        >
          <Typography variant="h6" color={palette.primary.main}>
            Search
          </Typography>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="policy-number"
              label="Policy Number"
              variant="outlined"
              size="small"
              value={policyNumber}
              onChange={(e) => {
                setPolicyNumber(e.target.value);
              }}
            />
            <GoogleMaps />
            <Autocomplete
              freeSolo
              inputValue={addressInputValue}
              onInputChange={(e) => setAddressInputValue(e?.target?.value)}
              isOptionEqualToValue={(option, value) =>
                value === undefined ||
                option?.id?.toString() === (value?.id ?? value)?.toString()
              }
              id="address"
              options={addressOptions}
              getOptionLabel={(option) => option}
              style={{ width: 300 }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Property Address"
                  variant="outlined"
                />
              )}
            />
            <TextField
              id="property-address"
              label="Property Address"
              variant="outlined"
              size="small"
            />
            <span>
              <Button
                variant="contained"
                sx={{ mt: ".6rem", p: 1 }}
                onClick={searchHandler}
              >
                <SearchIcon />
              </Button>
            </span>
          </Box>
        </Paper>
      </Grid>
      <Grid item xs={12} md={12} lg={10}>
        <Table data={filterData} />
      </Grid>
    </Grid>
  );
};
export default Search;
