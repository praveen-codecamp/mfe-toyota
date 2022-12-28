import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Menu from './Menu';

const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
}));

export default function Balance() {
  const classes = useStyles();

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
            Account Balance Summary for all Accounts
          </Typography>
        </Grid>
      </Grid>
  );
}
