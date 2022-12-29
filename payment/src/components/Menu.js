import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Typography from '@mui/material/Typography';

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
