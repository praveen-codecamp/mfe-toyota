import React from "react";
import { Switch, Route, Router } from "react-router-dom";

import Signin from "./components/Signin";
import Signup from "./components/Signup";
import ThemeProvider from "../../shared/theme";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import bg from "../public/landing.webp";

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
        {`@ TOYOTA Motor Thailand Co. Ltd. All Rights Reserved. Auth version ${packageJson.version}`}
      </Typography>
    </Box>
  );
}
export default ({ history, onSignIn }) => {
  return (
    <div
      style={{ marginTop: 64, backgroundImage: `url(${bg})`, height: "100%" }}
    >
      <ThemeProvider>
        <Router history={history}>
          <Switch>
            <Route path="/auth/signin">
              <Signin onSignIn={onSignIn} />
            </Route>
            <Route path="/auth/signup">
              <Signup onSignIn={onSignIn} />
            </Route>
          </Switch>
        </Router>
        <Copyright />
      </ThemeProvider>
    </div>
  );
};
