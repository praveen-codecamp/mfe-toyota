import React from "react";
import { Grid } from "@mui/material";
import ViewTemplate from "./ViewTemplate";

export default () => {
  const tableCell = {
    headCell: [
      "Id",
      "Action",
      "Business Function",
      "Created On",
      "Created By",
      "Modified By",
      "Modified On",
    ],
    objKeysToDisplay: [
      "id",
      "actionDescription",
      "businessFunctionDescription",
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
          title="Business Function Resource Actions"
          tableCell={tableCell}
          api="businessFunctionResourceActions"
        />
      </Grid>
    </Grid>
  );
};
