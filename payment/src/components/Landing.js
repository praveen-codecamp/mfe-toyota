import React from 'react';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import MaterialLink from '@mui/material/Link';
import Menu from './Menu';

export default function Album() {

  return (
    <React.Fragment>
      <Grid container spacing={2}>
        <Grid item xs={2}>
            <Menu />
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
                Make A Payments
              </Typography>
              <MaterialLink component={Link} to="/payment/standard" color="inherit">
                Standard Payment
              </MaterialLink>
            </Container>
        </Grid>
    </Grid>
    </React.Fragment>
  );
}
