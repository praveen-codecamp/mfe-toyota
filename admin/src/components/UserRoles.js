import React from "react";
import { Grid } from "@mui/material";
import ViewTemplate from "./ViewTemplate";

export default () => {
  const tableCell = {
    headCell: [
      "User Id",
      "Email",
      "User Role Id",
      "Role",
      "Created By",
      "Modified By",
    ],
    objKeysToDisplay: [
      "uid",
      "userEmail",
      "userroleId",
      "roleDescription",
      "createdBy",
      "modifiedBy",
    ],
  };
  return (
    <Grid
      container
      spacing={3}
      justifyContent="flex-end"
      sx={{ background: "#EEE", pt: 3 }}
    >
      <Grid item xs={12} md={12} lg={10}>
        <ViewTemplate
          title="User Roles"
          tableCell={tableCell}
          api="userRoles"
        />
      </Grid>
    </Grid>
  );
};
