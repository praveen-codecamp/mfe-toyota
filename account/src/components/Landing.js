import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Menu from './Menu';


export default function Album() {
  return (
      <Grid container spacing={2}>
      <Grid item xs={2}>
            <Menu />
        </Grid>
        <Grid item xs={10}>
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Account Information
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Something short and leading about the collection below—its
              contents, the creator, etc. Make it short and sweet, but not too
              short so folks don&apos;t simply skip over it entirely.
            </Typography>
        </Grid>
      </Grid>
  );
}
