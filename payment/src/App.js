import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./components/Theme";

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
    <ThemeProvider theme={theme}>
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
