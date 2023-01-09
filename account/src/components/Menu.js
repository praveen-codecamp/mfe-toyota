import React from "react";
import { Link as RouterLink } from "react-router-dom";
import Paper from "@mui/material/Paper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiMenuItem: {
      styleOverrides: {
        root: {
          ":hover": {
            backgroundColor: "#b3050b",
            color: "#fff",
          },
        },
      },
    },
  },
});
export default () => {
  return (
    <ThemeProvider theme={theme}>
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
          <MenuItem>Account Services</MenuItem>
        </MenuList>
      </Paper>
    </ThemeProvider>
  );
};
