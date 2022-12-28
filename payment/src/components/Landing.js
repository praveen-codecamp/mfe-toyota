import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import MaterialLink from '@material-ui/core/Link';
import { Link } from 'react-router-dom';
import Menu from './Menu';

const useStyles = makeStyles((theme) => ({
  '@global': {
    a: {
      textDecoration: 'none',
    },
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(4, 0, 2),
  },
}));

export default function Album() {
  const classes = useStyles();

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
