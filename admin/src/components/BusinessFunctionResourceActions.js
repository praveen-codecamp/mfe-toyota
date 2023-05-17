import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import ViewTemplate from "./ViewTemplate";
import { accessControlAPI } from "../../../shared/constants";
/*const data = {
  headCell: [
    "Id",
    "Created On",
    "Created By",
    "Modified By",
    "Modified On",
    "Action",
    "Business Function",
  ],
  bodyCell: [
    {
      id: 10004,
      createdOn: "2023-05-16",
      createdBy: 1,
      modifiedBy: 2,
      modifiedOn: "2023-05-16",
      action: 10000,
      businessFunction: 10003,
    },
    {
      id: 10006,
      createdOn: "2023-05-16",
      createdBy: 1,
      modifiedBy: 2,
      modifiedOn: "2023-05-16",
      action: 10002,
      businessFunction: 10005,
    },
  ],
};*/
export default () => {
  const headCell = [
    "Id",
    "Created On",
    "Created By",
    "Modified By",
    "Modified On",
    "Action",
    "Business Function",
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
          title="Business Function Resource Actions"
          headCell={headCell}
          api="businessFunctionResourceActions"
        />
      </Grid>
    </Grid>
  );
};
