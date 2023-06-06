import React, { useState } from "react";
import { Grid, Popover } from "@mui/material";
import ViewTemplate from "./ViewTemplate";
import UserForm from "./UserForm";
import { createEditRecord, deleteRecord } from "../api";

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
    const rawResponse = await createEditRecord("users", data, data.uid);
    if (rawResponse.status == "201" || rawResponse.status == "200") {
      setIsListUpdated(true);
    }
    setOpen(false);
    setActionData(null);
  };
  const handleDelete = async (data) => {
    setIsListUpdated(false);
    const rawResponse = await deleteRecord("users", data.uid);
    if (rawResponse.status == "204") {
      setIsListUpdated(true);
    }
  };
  const tableCell = {
    headCell: ["First Name", "Last Name", "Email", "Roles", "Organization"],
    objKeysToDisplay: [
      "firstname",
      "lastname",
      "email",
      "rolesDTO",
      "organizationDescription",
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
            title="Users"
            tableCell={tableCell}
            api="users"
            handleCreateEdit={handleCreateEdit}
            handleDelete={handleDelete}
            isListUpdated={isListUpdated}
            userDetails={userDetails}
          />
        </Grid>
      </Grid>
      <Popover
        open={open}
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
        <UserForm
          userDetails={userDetails}
          data={actionData}
          submitCreateEdit={submitCreateEdit}
          setOpen={setOpen}
        />
      </Popover>
    </>
  );
};
