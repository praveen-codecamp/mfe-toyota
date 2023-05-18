import React from "react";
import { Grid } from "@mui/material";
import ViewTemplate from "./ViewTemplate";

export default () => {
  const tableCell = {
    headCell: [
      "Id",
      "Description",
      "Created On",
      "Created By",
      "Modified By",
      "Modified On",
      "Parent Business Function",
    ],
    objKeysToDisplay: [
      "id",
      "description",
      "createdOn",
      "createdBy",
      "modifiedBy",
      "modifiedOn",
      "parentBusinessFunction",
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
          title="Business Functions"
          tableCell={tableCell}
          api="businessFunctions"
        />
      </Grid>
    </Grid>
  );
};
