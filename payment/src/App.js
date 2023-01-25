import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import Typography from "@mui/material/Typography";

import ThemeProvider from "./theme";
import Landing from "./components/Landing";
import Standard from "./components/Standard";
import Authorise from "./components/Authorise";

function Copyright() {
  const packageJson = require("../package.json");
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {`Copyright © ${new Date().getFullYear()} ADCB. All rights reserved. Payment version ${
        packageJson.version
      }`}
    </Typography>
  );
}

export default ({ history }) => {
  return (
    <ThemeProvider>
      <div style={{ marginTop: 64 }}>
        <Router history={history}>
          <Switch>
            <Route exact path="/payment" component={Landing} />
            <Route exact path="/payment/standard" component={Standard} />
            <Route exact path="/payment/authorise" component={Authorise} />
            <Route path="/" component={Landing} />
          </Switch>
        </Router>
        <Copyright />
      </div>
    </ThemeProvider>
  );
};
