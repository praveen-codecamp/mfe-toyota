import React, { useState } from "react";
import { Grid, Popover } from "@mui/material";
import { createEditRecord, deleteRecord } from "../api";
import ViewTemplate from "./ViewTemplate";
import OrganizationForm from "./OrganizationForm";

export default ({ userDetails }) => {
  const [open, setOpen] = useState(false);
  const [actionData, setActionData] = useState(null);
  const [isListUpdated, setIsListUpdated] = useState(false);

  const handleCreateEdit = (data) => {
    setOpen(true);
    setActionData(data);
  };
  const submitCreateEdit = async (data) => {
    setIsListUpdated(false);
    const rawResponse = await createEditRecord("organizations", data, data.id);
    if (rawResponse.status == "201" || rawResponse.status == "200") {
      setIsListUpdated(true);
    }
    setOpen(false);
    setActionData(null);
  };
  const handleDelete = async (data) => {
    setIsListUpdated(false);
    const rawResponse = await deleteRecord("organizations", data.id);
    if (rawResponse.status == "204") {
      setIsListUpdated(true);
    }
  };
  const tableCell = {
    headCell: ["Name", "Theme", "Logo"],
    objKeysToDisplay: ["description", "theme", "logo"],
  };
  return (
    <>
      <Grid
        container
        spacing={3}
        justifyContent="flex-end"
        sx={{ background: "#EEE", pt: 3 }}
      >
        <Grid item xs={12} md={12} lg={10}>
          <ViewTemplate
            title="Organizations"
            tableCell={tableCell}
            api="organizations"
            handleCreateEdit={handleCreateEdit}
            handleDelete={handleDelete}
            isListUpdated={isListUpdated}
            userDetails={userDetails}
          />
        </Grid>
      </Grid>
      <Popover
        open={open}
        onClose={() => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        sx={{ width: "70%" }}
      >
        <OrganizationForm
          userDetails={userDetails}
          data={actionData}
          submitCreateEdit={submitCreateEdit}
        />
      </Popover>
    </>
  );
};
