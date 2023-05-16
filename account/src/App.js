import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ThemeProvider from "../../shared/theme";
import Balance from "./components/Balance";
import Activity from "./components/Activity";
import Nav from "./components/nav";

function Copyright() {
  const packageJson = require("../package.json");
  return (
    <Typography
      variant="body2"
      color="textSecondary"
      align="center"
      sx={{ mt: 2 }}
    >
      {`Copyright © ${new Date().getFullYear()} ADCB. All rights reserved. Account version ${
        packageJson.version
      }`}
    </Typography>
  );
}
export default ({ history }) => {
  const [open, setOpen] = React.useState(false);
  return (
    <div style={{ marginTop: 64 }}>
      <ThemeProvider>
        <Box
          sx={{
            flexGrow: 1,
            direction: "rtl",
            display: { xs: "flex", md: "none" },
          }}
        >
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={() => setOpen(true)}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
        </Box>
        <Router history={history}>
          <Nav openNav={open} onCloseNav={() => setOpen(false)} />
          <Switch>
            <Route exact path="/account/balance" component={Balance} />
            <Route exact path="/account/balance/:accno" component={Balance} />
            <Route exact path="/account/activity" component={Activity} />
            <Route path="/account" component={Balance} />
            <Route path="/" component={Balance} />
          </Switch>
        </Router>
        <Copyright />
      </ThemeProvider>
    </div>
  );
};
