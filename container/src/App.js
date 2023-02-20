import React, { lazy, Suspense, useState, useEffect } from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";
import { SecureRoute, Security, LoginCallback } from "@okta/okta-react";
import { OktaAuth, toRelativeUrl } from "@okta/okta-auth-js";
import Progress from "./components/Progress";
import Header from "./components/Header";
import Home from "./components/Home";
import JitsiMeet from "./components/JitsiMeet";
import config from "./components/authConfig";

import ReactGA from "react-ga4";
import { createTheme, ThemeProvider } from "@mui/material/styles";
//ReactGA.pageview(window.location.pathname + window.location.search);
ReactGA.initialize("G-1W6TXYV2HD");
ReactGA.send("pageview");

const AuthLazy = lazy(() => import("./components/AuthApp"));
const AccountLazy = lazy(() => import("./components/AccountApp"));
const PaymentLazy = lazy(() => import("./components/PaymentApp"));
const PreferencesLazy = lazy(() => import("./components/PreferencesApp"));
const DashboardLazy = lazy(() => import("./components/DashboardApp"));
const AdminLazy = lazy(() => import("./components/AdminApp"));

const history = createBrowserHistory();

const theme = createTheme(theme, {
  palette: {
    primary: {
      light: "#cd2026",
      main: "#cd2026",
      dark: "#981b1e",
      contrastText: "#ffffff",
    },
    secondary: {
      light: "#ffffff",
      main: "#ffffff",
      dark: "#ffffff",
      contrastText: "#cd2026",
    },
    custom: {
      light: "#cd2026",
      main: "#cd2026",
      dark: "#981b1e",
      contrastText: "#ffffff",
    },
  },
});

const oktaAuth = new OktaAuth(config.oidc);

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
const CustUser = {
  email: "bipin.pandey@coforge.com",
  email_verified: true,
  family_name: "Pandey",
  given_name: "Bipin",
  locale: "en_US",
  name: "Bipin Pandey",
  preferred_username: "bipin.pandey@coforge.com",
  Groups: [
    "Admin",
    "CashManagement",
    "QuickTransfer",
    "DomesticPayment",
    "InterAccountTransfer",
  ],
};
export default () => {
  let userDetailsLS = getCookie("userDetails");
  userDetailsLS && (userDetailsLS = JSON.parse(userDetailsLS));
  const [userDetails, setUserDetails] = useState(userDetailsLS || null);
  const triggerLogin = async () => {
    await oktaAuth.signInWithRedirect();
  };
  const restoreOriginalUri = async (_oktaAuth, originalUri) => {
    history.replace(toRelativeUrl(originalUri || "/", window.location.origin));
  };
  const customAuthHandler = async () => {
    const previousAuthState = oktaAuth.authStateManager.getPreviousAuthState();
    if (!previousAuthState || !previousAuthState.isAuthenticated) {
      // App initialization stage
      await triggerLogin();
    } else {
      // Ask the user to trigger the login process during token autoRenew process
      //setAuthRequiredModalOpen(true);
      console.log("No Auth");
    }
  };
  const loginHandler = (userDetails, isCustom) => {
    setCookie("userDetails", JSON.stringify(userDetails), isCustom ? 1 : -1);
    setUserDetails(userDetails);
    if (userDetails) {
      history.push("/dashboard");
    } else {
      history.push("/");
    }
  };
  return (
    <ThemeProvider theme={theme}>
      <Router history={history}>
        <div>
          <Security
            oktaAuth={oktaAuth}
            onAuthRequired={customAuthHandler}
            restoreOriginalUri={restoreOriginalUri}
          >
            <Header loginHandler={loginHandler} userDetails={userDetails} />
            <Switch>
              <Route path="/auth">
                <Suspense fallback={<Progress />}>
                  <AuthLazy onSignIn={() => loginHandler(CustUser, true)} />
                </Suspense>
              </Route>
              <Route path="/dashboard">
                <Suspense fallback={<Progress />}>
                  <LoginCallback />
                  {userDetails && <DashboardLazy userDetails={userDetails} />}
                </Suspense>
              </Route>
              <Route path="/account">
                <Suspense fallback={<Progress />}>
                  {userDetails ? (
                    <AccountLazy userDetails={userDetails} />
                  ) : (
                    <Redirect to={"/"} />
                  )}
                </Suspense>
              </Route>

              <Route path="/payment">
                <Suspense fallback={<Progress />}>
                  {userDetails ? (
                    <PaymentLazy userDetails={userDetails} />
                  ) : (
                    <Redirect to={"/"} />
                  )}
                </Suspense>
              </Route>
              <Route path="/preferences">
                <Suspense fallback={<Progress />}>
                  <PreferencesLazy />
                </Suspense>
              </Route>
              <Route path="/admin">
                <Suspense fallback={<Progress />}>
                  <AdminLazy />
                </Suspense>
              </Route>
              <Route path="/meet/:username">
                <JitsiMeet />
              </Route>
              <Route path="/meet">
                <JitsiMeet />
              </Route>
              <Route path="/">
                {userDetails ? <Redirect to={"/dashboard"} /> : <Home />}
              </Route>
            </Switch>
          </Security>
        </div>
      </Router>
    </ThemeProvider>
  );
};
