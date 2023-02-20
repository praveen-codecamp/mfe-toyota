import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import Typography from "@mui/material/Typography";

import ThemeProvider from "./theme";
import Landing from "./components/Landing";
import Standard from "./components/Standard";
import Authorise from "./components/Authorise";
import Nav from "./components/nav";

function Copyright() {
  const packageJson = require("../package.json");
  return (
    <Typography
      sx={{ mt: 2 }}
      variant="body2"
      color="textSecondary"
      align="center"
    >
      {`Copyright © ${new Date().getFullYear()} ADCB. All rights reserved. Payment version ${
        packageJson.version
      }`}
    </Typography>
  );
}

export default ({ history, userDetails }) => {
  const [open, setOpen] = React.useState(false);
  return (
    <ThemeProvider>
      <div style={{ marginTop: 64 }}>
        <Router history={history}>
          <Nav openNav={open} onCloseNav={() => setOpen(false)} />
          <Switch>
            <Route exact path="/payment">
              <Landing userDetails={userDetails} />
            </Route>
            <Route exact path="/payment/standard" component={Standard} />
            <Route exact path="/payment/authorise" component={Authorise} />
            <Route path="/">
              <Landing userDetails={userDetails} />
            </Route>
          </Switch>
        </Router>
        <Copyright />
      </div>
    </ThemeProvider>
  );
};
