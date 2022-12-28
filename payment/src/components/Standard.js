import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Menu from './Menu';

export default () => {
    return (  
    <Grid container spacing={2}>
        <Grid item xs={2}>
            <Menu />
        </Grid>
        <Grid item xs={10}>
            <Typography
            component="h1"
            variant="h2"
            align="left"
            color="textPrimary"
            gutterBottom
            >
            Enter Standard Payment
            </Typography>
        </Grid>
    </Grid>
    );
};