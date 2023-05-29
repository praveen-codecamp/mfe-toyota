import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import palette from "../../../shared/theme/palette";

import OgrList from "./OgrList";
const orgList = [
  { org: "Corp 1", roles: ["Payments", "Cards"] },
  { org: "Corp 2", roles: ["Payments", "Cards", "Loans"] },
];
export default () => {
  const handleOrgSelect = (item) => {
    console.log("handleOrgSelect item:", item);
  };
  return (
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
            {/*
            <Grid item xs={12} md={12} lg={3}>
              <OgrList orgList={orgList} handleOrgSelect={handleOrgSelect} />
            </Grid>
            <Grid item xs={12} md={12} lg={8}>
              <Paper
                sx={{
                  background: palette.primary.lighter,
                  boxShadow: "0px 3px 6px #0000001F",
                  p: 2,
                }}
              >
                <Typography variant="h6" color={palette.primary.main}>
                  Role section
                </Typography>
              </Paper>
            </Grid>
            */}
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};
