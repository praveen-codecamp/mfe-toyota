import React, { useState } from "react";
import {
  Paper,
  Grid,
  TextField,
  Typography,
  Button,
  Select,
  FormControl,
  MenuItem,
} from "@mui/material";
import palette from "../../../shared/theme/palette";
import SelectOrganization from "./SelectOrganization";
import FileUpload from "./FileUpload";

export default ({ data, submitCreateEdit }) => {
  const [organization, setOrganization] = useState(data || {});
  const handleInputChange = (event) => {
    setOrganization({
      ...organization,
      [event?.target?.name]: event?.target?.value,
    });
  };
  const handleImageUpload = (imgBase64) => {
    setOrganization({
      ...organization,
      logo: imgBase64,
    });
  };
  const handleSubmit = () => {
    const date = new Date();
    const formatedDate =
      date.getFullYear() + "-0" + (date.getMonth() + 1) + "-" + date.getDate();
    submitCreateEdit({
      ...organization,
      createdOn: formatedDate,
      modifiedOn: formatedDate,
      createdBy: 10002,
      modifiedBy: 10002,
    });
  };
  return (
    <Paper
      sx={{
        background: "#FFFFFF 0% 0% no-repeat padding-box;",
        boxShadow: "0px 3px 6px #0000001F",
        borderRadius: "10px",
        p: 4,
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} md={12} lg={12} sx={{ mb: 2 }}>
          <Typography variant="h6" color={palette.primary.main}>
            Organization
          </Typography>
        </Grid>
        <Grid item xs={4} md={4} lg={4}>
          <Typography variant="subtitle1" color={palette.primary.main}>
            Organization Name*
          </Typography>
        </Grid>
        <Grid item xs={8} md={8} lg={8}>
          <TextField
            value={organization?.description || ""}
            name="description"
            onChange={handleInputChange}
            variant="outlined"
            size="small"
            fullWidth
          />
        </Grid>
        <Grid item xs={4} md={4} lg={4}>
          <Typography variant="subtitle1" color={palette.primary.main}>
            Select theme
          </Typography>
        </Grid>
        <Grid item xs={8} md={8} lg={8}>
          <FormControl sx={{ minWidth: 120 }} size="small" fullWidth>
            <Select
              value={organization?.theme || ""}
              name="theme"
              onChange={handleInputChange}
              fullWidth
            >
              <MenuItem value="">
                <em>Select theme</em>
              </MenuItem>
              <MenuItem value="blue">Blue</MenuItem>
              <MenuItem value="red">Red</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={4} md={4} lg={4}>
          <Typography variant="subtitle1" color={palette.primary.main}>
            Organization Logo
          </Typography>
        </Grid>
        <Grid item xs={8} md={8} lg={8}>
          <FileUpload handleImageUpload={handleImageUpload} />
        </Grid>
        {/*  
        <Grid item xs={4} md={4} lg={4}>
          <Typography variant="subtitle1" color={palette.primary.main}>
            Parent Organization
          </Typography>
        </Grid>
        <Grid item xs={8} md={8} lg={8}>
          <SelectOrganization
            selectedValue={organization?.parentOrganization || ""}
            name="parentOrganization"
            handleInputChange={handleInputChange}
          />
        </Grid>
        */}

        <Grid item xs={12} md={12} lg={12}>
          <Button
            variant="contained"
            color="primary"
            sx={{ fontWeight: 400, fontSize: ".7rem", mr: 1 }}
            onClick={handleSubmit}
          >
            {data ? "Edit Organization" : "Add Organization"}
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};
