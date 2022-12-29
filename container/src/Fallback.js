import React from 'react';
import Grid from '@mui/material/Grid';
import undermaintanance from '../public/undermaintanance.png';

export default ({module}) => {
  return (
    <Grid container alignItems="center">        
        <Grid item alignSelf="center">
          <img
            src={undermaintanance}
            alt={`${module} under maintanance!!`}
            loading="lazy"
          />
        </Grid>
    </Grid>
  );
};
