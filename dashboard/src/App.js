import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import "../styles/globals.css";
import Dashboard from "./components/reveal";
import View1 from "./components/reveal/view1";
import View2 from "./components/reveal/view2";

function Copyright() {
  const packageJson = require("../package.json");
  return (
    <Box>
      <Typography
        variant="body2"
        color="textPrimary"
        align="center"
        sx={{
          position: "fixed",
          bottom: 0,
          width: "100%",
          bgcolor: "rgb(220, 0, 13)",
          color: "#f6b3b7",
          zIndex: 9,
        }}
      >
        {`@ TOYOTA Motor Thailand Co. Ltd. All Rights Reserved. Dashboard version ${packageJson.version}`}
      </Typography>
    </Box>
  );
}
export default ({ history, userDetails }) => {
  return (
    <div>
      <Router history={history}>
        <Switch>
          <Route exact path="/dashboard/view1">
            <View1 userDetails={userDetails} />
          </Route>
          <Route exact path="/dashboard/view2">
            <View2 userDetails={userDetails} />
          </Route>
          <Route exact path="/dashboard">
            <Dashboard userDetails={userDetails} />
          </Route>
          <Route path="/">
            <Dashboard userDetails={userDetails} />
          </Route>
        </Switch>
      </Router>
      <Copyright />
    </div>
  );
};
