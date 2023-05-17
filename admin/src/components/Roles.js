import React from "react";
import { Grid } from "@mui/material";
import ViewTemplate from "./ViewTemplate";

export default () => {
  const headCell = [
    "Role Id",
    "Description",
    "Created On",
    "Modified On",
    "Created By",
    "Modified By",
  ];
  return (
    <Grid
      container
      spacing={3}
      justifyContent="flex-end"
      sx={{ background: "#EEE", pt: 3 }}
    >
      <Grid item xs={12} md={12} lg={10}>
        <ViewTemplate title="Roles" headCell={headCell} api="roles" />
      </Grid>
    </Grid>
  );
};
