import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Nav from "./nav";

export default () => {
  const [open, setOpen] = React.useState(false);
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6} lg={2}>
        <Nav openNav={open} onCloseNav={() => setOpen(false)} />
      </Grid>
      <Grid item xs={12} md={6} lg={10}>
        <Grid
          container
          direction="column"
          spacing={2}
          style={{
            margin: ".3rem",
            padding: ".2rem",
          }}
        >
          <Grid item>
            <Typography variant="h6" gutterBottom>
              Authorise Payment
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
