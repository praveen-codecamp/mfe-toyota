import React from "react";
import { Redirect } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import palette from "../../../shared/theme/palette";
import { isAllowed } from "../../../shared/acl";

export default ({ userDetails }) => {
  return (
    <>
      {isAllowed(userDetails.role, "organizations", "view") ? (
        <Redirect to={"/admin/organizations"} />
      ) : isAllowed(userDetails.role, "roles", "view") ? (
        <Redirect to={"/admin/roles"} />
      ) : isAllowed(userDetails.role, "users", "view") ? (
        <Redirect to={"/admin/users"} />
      ) : (
        <Grid
          container
          spacing={3}
          justifyContent="flex-end"
          sx={{ background: "#EEE", pt: 3 }}
        >
          <Grid item xs={12} md={12} lg={10}>
            <Paper
              sx={{
                background: "#FFFFFF 0% 0% no-repeat padding-box;",
                boxShadow: "0px 3px 6px #0000001F",
                borderRadius: "10px",
                px: 2,
                py: 2,
              }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} md={12} lg={12}>
                  <Typography variant="h6" color={palette.primary.main}>
                    Welcome in Admin section!
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      )}
    </>
  );
};
