import React, { useState } from "react";
import { Grid, Popover } from "@mui/material";
import ViewTemplate from "./ViewTemplate";
import ActionForm from "./ActionForm";
import { createEditRecord, deleteRecord } from "../api";

export default () => {
  const [open, setOpen] = useState(false);
  const [actionData, setActionData] = useState(null);
  const [isListUpdated, setIsListUpdated] = useState(false);
  const handleCreateEdit = (data) => {
    setOpen(true);
    setActionData(data);
  };
  const submitCreateEdit = async (data) => {
    setIsListUpdated(false);
    const rawResponse = await createEditRecord("actions", data, data.id);
    if (rawResponse.status == "201" || rawResponse.status == "200") {
      setIsListUpdated(true);
    }
    setOpen(false);
    setActionData(null);
  };
  const handleDelete = async (data) => {
    setIsListUpdated(false);
    const rawResponse = await deleteRecord("actions", data.id);
    console.log("delete rawResponse", rawResponse.status);
    if (rawResponse.status == "204") {
      setIsListUpdated(true);
    }
  };
  const tableCell = {
    headCell: [
      "Id",
      "Description",
      "Created On",
      "Created By",
      "Modified On",
      "Modified By",
    ],
    objKeysToDisplay: [
      "id",
      "description",
      "createdOn",
      "createdBy",
      "modifiedOn",
      "modifiedBy",
    ],
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
            title="Actions"
            tableCell={tableCell}
            api="actions"
            handleCreateEdit={handleCreateEdit}
            handleDelete={handleDelete}
            isListUpdated={isListUpdated}
          />
        </Grid>
      </Grid>
      <Popover
        open={open}
        onClose={() => setOpen(false)}
        anchorOrigin={{
          vertical: "center",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "center",
          horizontal: "center",
        }}
        sx={{ width: "70%" }}
      >
        <ActionForm data={actionData} submitCreateEdit={submitCreateEdit} />
      </Popover>
    </>
  );
};
