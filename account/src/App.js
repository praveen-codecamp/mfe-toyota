import React from "react";
import { Switch, Route, Router, Redirect } from "react-router-dom";
import Typography from "@mui/material/Typography";
import ThemeProvider from "../../shared/theme";
import Search from "./components/Search";
import CallingSheet from "./components/CallingSheet";
import Visualization from "./components/Visualization";
import Logistics from "./components/features/Logistics";
import YardLayout from "./components/yardlayout";
import Box from "@mui/material/Box";
import zIndex from "@mui/material/styles/zIndex";
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
          bgcolor: "primary.main",
          color: "#f6b3b7",
          zIndex: 9,
        }}
      >
        {`@ TOYOTA Motor Thailand Co. Ltd. All Rights Reserved. VSC version ${packageJson.version}`}
      </Typography>
    </Box>
  );
}
export default ({ history, userDetails, userPemission }) => {
  const [open, setOpen] = React.useState(false);
  return (
    <div style={{ paddingTop: 64 }}>
      <ThemeProvider>
        <Router history={history}>
          <Switch>
            <Route exact path="/demandsupply/search">
              <Search userDetails={userDetails} />
            </Route>
            <Route path="/demandsupply/logistics">
              <Logistics userDetails={userDetails} />
            </Route>
            <Route path="/demandsupply/callingsheet">
              <CallingSheet userDetails={userDetails} />
            </Route>
            <Route path="/demandsupply/visualization">
              <Visualization userDetails={userDetails} />
            </Route>
            <Route path="/demandsupply/yardlayout">
              <YardLayout userDetails={userDetails} />
            </Route>
            <Route path="/demandsupply">
              <Redirect to={"/demandsupply/search"} />
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
