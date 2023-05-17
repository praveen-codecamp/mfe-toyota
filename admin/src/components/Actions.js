import React from "react";
import { Grid } from "@mui/material";
import ViewTemplate from "./ViewTemplate";

/*const data = {
  headCell: [
    "Id",
    "Description",
    "Created On",
    "Created By",
    "Modified By",
    "Modified On",
  ],
  bodyCell: [
    {
      id: 10000,
      description: "view",
      createdOn: "2023-05-16",
      createdBy: 1,
      modifiedBy: null,
      modifiedOn: null,
    },
    {
      id: 10002,
      description: "update",
      createdOn: "2023-05-16",
      createdBy: 1,
      modifiedBy: null,
      modifiedOn: null,
    },
  ],
};*/
export default () => {
  const headCell = [
    "Id",
    "Description",
    "Created On",
    "Created By",
    "Modified By",
    "Modified On",
  ];
  return (
    <Grid
      container
      spacing={3}
      justifyContent="flex-end"
      sx={{ background: "#EEE", pt: 3 }}
    >
      <Grid item xs={12} md={12} lg={10}>
        <ViewTemplate title="Actions" headCell={headCell} api="actions" />
      </Grid>
    </Grid>
  );
};
