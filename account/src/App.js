import React from "react";
import { Switch, Route, Router, Redirect } from "react-router-dom";
import Typography from "@mui/material/Typography";
import ThemeProvider from "../../shared/theme";
import Search from "./components/Search";
import ChangeRequest from "./components/ChangeRequest";
import CallingSheet from "./components/CallingSheet";
import Logistics from "./components/features/Logistics";

function Copyright() {
  const packageJson = require("../package.json");
  return (
    <Typography
      variant="body2"
      color="textSecondary"
      align="center"
      sx={{ mt: 2 }}
    >
      {`@ TOYOTA Motor Thailand Co. Ltd. All Rights Reserved. Vehicle Status Control version ${packageJson.version}`}
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
            <Route path="/property/logistics">
              <Logistics userDetails={userDetails} />
            </Route>
            <Route path="/property/callingsheet">
              <CallingSheet userDetails={userDetails} />
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
