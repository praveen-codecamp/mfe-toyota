import React from "react";
import { Switch, Route, Router, Redirect } from "react-router-dom";
import Typography from "@mui/material/Typography";
import ThemeProvider from "../../shared/theme";
import Search from "./components/Search";
import ChangeRequest from "./components/ChangeRequest";
import PolicyDetails from "./components/PolicyDetails";
import Logistics from "./components/features/Logistics";
import Box from "@mui/material/Box";
function Copyright() {
  const packageJson = require("../package.json");
  return (
    <Box> 
    <Typography
      variant="body2"
      color="textPrimary"
      align="center"
      // sx={{ mt:0}} 
      sx={{ position:'fixed',bottom:0,width: '100%',bgcolor:'primary.main',color:'#f6b3b7'}}
 >
      {/* {`@ TOYOTA Motor Thailand Co. Ltd. All Rights Reserved. Vehicle Status Control version ${packageJson.version}`} */}
      {`@ TOYOTA Motor Thailand Co. Ltd. All Rights Reserved`}
    </Typography>
    </Box>
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
            <Route path="/property/logistics">
              <Logistics userDetails={userDetails} />
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
