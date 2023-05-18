import React from "react";
import { Grid } from "@mui/material";
import ViewTemplate from "./ViewTemplate";

export default () => {
  const tableCell = {
    headCell: [
      "Id",
      "Business Function",
      "Role",
      "Created On",
      "Created By",
      "Modified On",
      "Modified By",
    ],
    objKeysToDisplay: [
      "id",
      "businessFunctionDescription",
      "roleDescription",
      "createdOn",
      "createdBy",
      "modifiedOn",
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
          title="Role Business Function Groups"
          tableCell={tableCell}
          api="roleBusinessFunctionGroups"
        />
      </Grid>
    </Grid>
  );
};
