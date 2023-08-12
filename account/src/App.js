import React from "react";
import { Switch, Route, Router, Redirect } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ThemeProvider from "../../shared/theme";
import Search from "./components/Search";
import ChangeRequest from "./components/ChangeRequest";
import PolicyDetails from "./components/PolicyDetails";
import Nav from "../../shared/nav";
import { navConfig } from "./navConfig";

function Copyright() {
  const packageJson = require("../package.json");
  return (
    <Typography
      variant="body2"
      color="textSecondary"
      align="center"
      sx={{ mt: 2 }}
    >
      {`Copyright © ${new Date().getFullYear()} Assurant. All rights reserved. Property version ${
        packageJson.version
      }`}
    </Typography>
  );
}
export default ({ history, userDetails, userPemission }) => {
  const [open, setOpen] = React.useState(false);
  return (
    <div style={{ marginTop: 64 }}>
      <ThemeProvider>
        <Router history={history}>
          <Switch>
            <Route exact path="/property/search">
              <Search userDetails={userDetails} />
            </Route>
            <Route exact path="/property/policy/:policynumber">
              <PolicyDetails userDetails={userDetails} />
            </Route>
            <Route path="/property/changerequest">
              <ChangeRequest userDetails={userDetails} />
            </Route>

            <Route path="/property">
              <Redirect to={"/property/search"} />
            </Route>
            <Route path="/">
              <Search userDetails={userDetails} />
            </Route>
          </Switch>
        </Router>
        <Copyright />
      </ThemeProvider>
    </div>
  );
};
