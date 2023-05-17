import React, { useState, useEffect } from "react";
import { Grid, Button, Paper, Typography } from "@mui/material";
import palette from "../../../shared/theme/palette";
import DataTable from "./DataTable";
import { accessControlAPI } from "../../../shared/constants";

export default ({ title, headCell, api }) => {
  const [data, setData] = useState({
    headCell: headCell,
  });
  const getData = async () => {
    const res = await fetch(`${accessControlAPI}/${api}`);
    const jsonRes = await res.json();
    setData({ ...data, bodyCell: jsonRes });
  };
  useEffect(() => {
    getData();
  }, []);

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
              sx={{ fontWeight: 400, fontSize: ".7rem", mr: 1 }}
            >
              Create new {title}
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <DataTable data={data} />
        </Grid>
      </Grid>
    </Paper>
  );
};
