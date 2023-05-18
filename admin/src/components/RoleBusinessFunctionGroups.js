import React from "react";
import { Grid } from "@mui/material";
import ViewTemplate from "./ViewTemplate";

export default () => {
  const tableCell = {
    headCell: [
      "Id",
      "Created On",
      "Created By",
      "Modified By",
      "Modified On",
      "Business Function",
      "Role",
    ],
    objKeysToDisplay: [
      "id",
      "createdOn",
      "createdBy",
      "modifiedBy",
      "modifiedOn",
      "businessFunction",
      "role",
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
          title="Role Business Function Groups"
          tableCell={tableCell}
          api="roleBusinessFunctionGroups"
        />
      </Grid>
    </Grid>
  );
};
