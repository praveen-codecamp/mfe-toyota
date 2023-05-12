import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import Typography from "@mui/material/Typography";
import ThemeProvider from "../../shared/theme";
import Dashboard from "./components/Dashboard";

function Copyright() {
  const packageJson = require("../package.json");
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {`Copyright © ${new Date().getFullYear()} ADCB. All rights reserved. Dashboard version ${
        packageJson.version
      }`}
    </Typography>
  );
}
export default ({ history, userDetails }) => {
  return (
    <div>
      <ThemeProvider>
        <Router history={history}>
          <Switch>
            <Route exact path="/dashboard">
              <Dashboard userDetails={userDetails} />
            </Route>
            <Route path="/">
              <Dashboard userDetails={userDetails} />
            </Route>
          </Switch>
        </Router>
        <Copyright />
      </ThemeProvider>
    </div>
  );
};
