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
                to="/payment"
            >
                Single Payments
            </Typography>
          </MenuItem>
          <MenuItem>
            <Typography
                color="inherit"
                noWrap
                component={RouterLink}
                to="/payment/authorise"
            >
                Authorise Payments
            </Typography>
          </MenuItem>
          <MenuItem>Manage Single Payments</MenuItem>
          <MenuItem>Direct Debits</MenuItem>
          <MenuItem>Standing Orders</MenuItem>
          <MenuItem>Manage Single Templates</MenuItem>
          <MenuItem>Manage Bulk Payments</MenuItem>
          <MenuItem>Manage Beneficiaries</MenuItem>
        </MenuList>
      </Paper>
  );
};
