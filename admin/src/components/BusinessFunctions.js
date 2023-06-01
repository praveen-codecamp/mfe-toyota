import React, { useState } from "react";
import { Grid, Popover } from "@mui/material";
import ViewTemplate from "./ViewTemplate";
import BusinessFunctionForm from "./BusinessFunctionForm";
import { createEditRecord, deleteRecord } from "../api";
import { accessControlAPI } from "../../../shared/constants";

export default ({ userDetails }) => {
  const [open, setOpen] = useState(false);
  const [actionData, setActionData] = useState(null);
  const [isListUpdated, setIsListUpdated] = useState(false);
  const getBusinessFunctionsActions = async (id) => {
    const res = await fetch(
      `${accessControlAPI}/businessFunctionActions/${id}`
    );
    const jsonRes = await res.json();
    setActionData(jsonRes);
  };
  const handleCreateEdit = (data) => {
    setOpen(true);
    data && getBusinessFunctionsActions(data.id);
  };
  const submitCreateEdit = async (data) => {
    setIsListUpdated(false);
    const rawResponse = await createEditRecord(
      "businessFunctions",
      data,
      data.id
    );
    if (rawResponse.status == "201" || rawResponse.status == "200") {
      setIsListUpdated(true);
    }
    setOpen(false);
    setActionData(null);
  };
  const handleDelete = async (data) => {
    setIsListUpdated(false);
    const rawResponse = await deleteRecord("businessFunctions", data.id);
    if (rawResponse.status == "204") {
      setIsListUpdated(true);
    }
  };
  const tableCell = {
    headCell: ["Name", "Parent Business Function"],
    objKeysToDisplay: ["description", "parentBusinessFunctionDescription"],
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
            title="Business Functions"
            tableCell={tableCell}
            api="businessFunctions"
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
        <BusinessFunctionForm
          userDetails={userDetails}
          data={actionData}
          submitCreateEdit={submitCreateEdit}
        />
      </Popover>
    </>
  );
};
