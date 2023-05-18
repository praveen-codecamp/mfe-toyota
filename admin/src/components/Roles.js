import React, { useState } from "react";
import { Grid, Popover } from "@mui/material";
import ViewTemplate from "./ViewTemplate";
import RoleForm from "./RoleForm";
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
    const rawResponse = await createEditRecord("roles", data, data.roleId);
    if (rawResponse.status == "201" || rawResponse.status == "200") {
      setIsListUpdated(true);
    }
    setOpen(false);
    setActionData(null);
  };
  const handleDelete = async (data) => {
    setIsListUpdated(false);
    const rawResponse = await deleteRecord("roles", data.roleId);
    console.log("delete rawResponse", rawResponse.status);
    if (rawResponse.status == "204") {
      setIsListUpdated(true);
    }
  };
  const headCell = [
    "Role Id",
    "Description",
    "Created On",
    "Modified On",
    "Created By",
    "Modified By",
  ];
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
            title="Roles"
            headCell={headCell}
            api="roles"
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
        <RoleForm data={actionData} submitCreateEdit={submitCreateEdit} />
      </Popover>
    </>
  );
};
