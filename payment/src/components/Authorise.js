import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

export default () => {
  return (
    <Grid
      container
      spacing={2}
      justifyContent="flex-end"
      sx={{ background: "#EEE", p: 2 }}
    >
      <Grid item xs={12} md={12} lg={10}>
        <Typography
          sx={{
            color: "#d32f2f",
          }}
          variant="h5"
          gutterBottom
        >
          Authorise Payment
        </Typography>
      </Grid>
    </Grid>
  );
};
