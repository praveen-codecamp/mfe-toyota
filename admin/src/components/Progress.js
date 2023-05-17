import React from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import { makeStyles, createStyles } from '@mui/styles';

const useStyles = makeStyles(() => {
  return createStyles({
    bar: {
      width: '100%',
      '& > * + *': {
        marginTop: 2,
      },
    },
  });
});

export default () => {
  const classes = useStyles();

  return (
    <div className={classes.bar}>
      <LinearProgress />
    </div>
  );
};
