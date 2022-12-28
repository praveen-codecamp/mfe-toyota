import React from 'react';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Typography from '@material-ui/core/Typography';
import { Link as RouterLink } from 'react-router-dom';

export default () => {
  return (
    <Paper>
        <MenuList>
          <MenuItem>
          <Typography
            color="inherit"
            noWrap
            component={RouterLink}
            to="/account/balance"
          >
            View Account Balance
          </Typography>
          </MenuItem>
          <MenuItem>
          <Typography
            color="inherit"
            noWrap
            component={RouterLink}
            to="/account/activity"
          >
            View Account Activity
          </Typography>
          </MenuItem>
          <MenuItem>Scheduled Statement</MenuItem>
          <MenuItem>Account Services
          
          </MenuItem>
        </MenuList>
      </Paper>
  );
};
