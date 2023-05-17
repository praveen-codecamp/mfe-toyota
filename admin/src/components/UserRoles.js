import React from "react";
import { Grid } from "@mui/material";
import ViewTemplate from "./ViewTemplate";

export default () => {
  const headCell = ["User Role Id", "Uid", "Created By", "Modified By", "Role"];
  return (
    <Grid
      container
      spacing={3}
      justifyContent="flex-end"
      sx={{ background: "#EEE", pt: 3 }}
    >
      <Grid item xs={12} md={12} lg={10}>
        <ViewTemplate title="User Roles" headCell={headCell} api="userRoles" />
      </Grid>
    </Grid>
  );
};
