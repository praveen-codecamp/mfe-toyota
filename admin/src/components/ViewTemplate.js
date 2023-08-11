import React, { useState, useEffect } from "react";
import { Grid, Button, Paper, Typography } from "@mui/material";
import palette from "../../../shared/theme/palette";
import DataTable from "./DataTable";
import { accessControlAPI } from "../../../shared/constants";
import { isAllowed } from "../../../shared/acl";

export default ({
  title,
  tableCell,
  api,
  handleCreateEdit,
  handleDelete,
  isListUpdated,
  userDetails,
}) => {
  const [data, setData] = useState(tableCell);
  const getData = async () => {
    const orgqs =
      userDetails &&
      userDetails.organization &&
      !(
        (api === "roles" || api === "users") &&
        userDetails.organizationDescription == "Assurant"
      )
        ? "?orgId=" + userDetails.organization
        : "";
    const res = await fetch(`${accessControlAPI}/${api + orgqs}`);
    let jsonRes = await res.json();
    try {
      if (
        (api === "roles" || api === "users") &&
        userDetails.organizationDescription == "Assurant"
      ) {
        jsonRes = jsonRes.filter(
          (item) =>
            item.organizationDescription == "Assurant" ||
            item?.description == "admin" ||
            item?.description == "admin" ||
            (item.rolesDTO &&
              item.rolesDTO.length &&
              item.rolesDTO[0].description == "admin")
        );
      }
    } catch (ex) {}

    setData({ ...data, bodyCell: jsonRes });
  };
  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    isListUpdated && getData();
  }, [isListUpdated]);

  return (
    <Paper
      sx={{
        background: "#FFFFFF 0% 0% no-repeat padding-box;",
        boxShadow: "0px 3px 6px #0000001F",
        borderRadius: "10px",
        px: 2,
        py: 2,
      }}
    >
      <Grid container spacing={3}>
        <Grid item xs={6} md={6} lg={6}>
          <Typography variant="h6" color={palette.primary.main}>
            {title}
          </Typography>
        </Grid>
        <Grid item xs={6} md={6} lg={6}>
          <Paper sx={{ textAlign: "end", boxShadow: "none" }}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleCreateEdit && handleCreateEdit()}
              disabled={
                userDetails &&
                !isAllowed(userDetails?.role || "guest", api, "create")
              }
            >
              Create new {title}
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <DataTable
            data={data}
            handleCreateEdit={handleCreateEdit}
            handleDelete={handleDelete}
            userDetails={userDetails}
            api={api}
          />
        </Grid>
      </Grid>
    </Paper>
  );
};
