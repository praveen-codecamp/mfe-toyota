import React from "react";
import { Grid } from "@mui/material";
import ViewTemplate from "./ViewTemplate";

export default () => {
  const headCell = [
    "Id",
    "Description",
    "Created On",
    "Created By",
    "Modified By",
    "Modified On",
    "Parent Business Function",
  ];
  return (
    <Grid
      container
      spacing={3}
      justifyContent="flex-end"
      sx={{ background: "#EEE", pt: 3 }}
    >
      <Grid item xs={12} md={12} lg={10}>
        <ViewTemplate
          title="Business Functions"
          headCell={headCell}
          api="businessFunctions"
        />
      </Grid>
    </Grid>
  );
};
