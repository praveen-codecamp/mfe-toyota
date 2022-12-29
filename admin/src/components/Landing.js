import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';


export default function Album() {
  return (
    <React.Fragment>
      <Grid container spacing={2}>
        <Grid item xs={2}>
        </Grid>
        <Grid item xs={10}>
            <Container maxWidth="sm">
              <Typography
                component="h1"
                variant="h2"
                align="left"
                color="textPrimary"
                gutterBottom
              >
                Admin
              </Typography>
            </Container>
        </Grid>
    </Grid>
    </React.Fragment>
  );
}
