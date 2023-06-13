import React, { lazy, Suspense, useState, useEffect } from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";
import { SecureRoute, Security, LoginCallback } from "@okta/okta-react";
import { OktaAuth, toRelativeUrl } from "@okta/okta-auth-js";
import Progress from "./components/Progress";
import Header from "./components/Header";
import Home from "./components/Home";
import JitsiMeet from "./components/JitsiMeet";
import DashboardDynamic from "./components/dashboards";
import Fallback from "./Fallback";
import config from "./components/authConfig";
import ThemeProvider from "../../shared/theme";
import { accessControlAPI } from "../../shared/constants";
import ReactGA from "react-ga4";
import { setACLPermission } from "../../shared/acl";
//ReactGA.pageview(window.location.pathname + window.location.search);
ReactGA.initialize("G-1W6TXYV2HD");
ReactGA.send("pageview");

const AuthLazy = lazy(() => import("./components/AuthApp"));
const AccountLazy = lazy(() => import("./components/AccountApp"));
const PaymentLazy = lazy(() => import("./components/PaymentApp"));
const DashboardLazy = lazy(() => import("./components/DashboardApp"));
const AdminLazy = lazy(() => import("./components/AdminApp"));

const history = createBrowserHistory();

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
  email: "nail.bailey@honda.com",
  email_verified: true,
  family_name: "",
  given_name: "User",
  locale: "en_US",
  name: "",
  preferred_username: "",
  Groups: ["Admin"],
  //role: //"admin",
  //organization: 10000,
};
/*
guest => Can view organizations, actions, businessFunctions, roles and users
member => Can create roles and users.
admin => Honda Admin ==> Can create and edit and delete actions, businessFunctions,roles and users
superAdmin => ADCB Admin ==> Can do anything

superAdmin - admin@adcb.com
admin - nail.bailey@honda.com
member - sean.doherty@honda.com
guest - ratandeep.pol@honda.com
user - bipin.pandey@coforge.com
*/
export default () => {
  let userDetailsLS = getCookie("userDetails");
  let userPemissionLS = getCookie("userPemission");
  userDetailsLS && (userDetailsLS = JSON.parse(userDetailsLS));
  userPemissionLS && (userPemissionLS = JSON.parse(userPemissionLS));
  const [userDetails, setUserDetails] = useState(userDetailsLS || null);
  const [userPemission, setUserPemission] = useState(userPemissionLS || null);
  useEffect(() => {
    userDetails?.email && setPermission(userDetails.email);
  }, []);
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
  const setPermission = async (email) => {
    const res = await fetch(`${accessControlAPI}/acls/${email}`);
    const jsonRes = await res.json();
    setUserPemission(jsonRes);
    setCookie("userPemission", JSON.stringify(jsonRes), 1);
    jsonRes && setACLPermission(jsonRes);
  };
  const getUserOrganizationRole = async (email) => {
    const res = await fetch(`${accessControlAPI}/users`);
    const jsonRes = await res.json();
    const filteredUser = jsonRes.filter((item) => item.email === email);

    if (filteredUser && filteredUser.length)
      return {
        uid: filteredUser[0]?.uid || "",
        organization: filteredUser[0]?.organization || "",
        organizationDescription: filteredUser[0]?.organizationDescription,
        role:
          filteredUser[0]?.rolesDTO && filteredUser[0]?.rolesDTO.length
            ? filteredUser[0]?.rolesDTO[0].description
            : "guest",
        given_name: filteredUser[0]?.firstname,
      };
  };
  const loginHandler = (userDetails, isCustom) => {
    if (!isCustom && !userDetails) {
      setCookie("userDetails", userDetails, -1);
      setCookie("userPemission", "", -1);
      setUserDetails(null);
      if (!userDetails) history.push("/");
    } else {
      setPermission(userDetails.email);
      getUserOrganizationRole(userDetails.email).then((obj) => {
        const user = { ...userDetails, ...obj };

        setCookie("userDetails", JSON.stringify(user), 1);
        setUserDetails(user);
        history.push("/dashboard");
      });
    }
  };
  return (
    <ThemeProvider>
      <Router history={history}>
        <div>
          <Security
            oktaAuth={oktaAuth}
            onAuthRequired={customAuthHandler}
            restoreOriginalUri={restoreOriginalUri}
          >
            <LoginCallback />
            <Header
              loginHandler={loginHandler}
              userPemission={userPemission}
              userDetails={userDetails}
            />
            <Switch>
              <Route path="/auth">
                <Suspense fallback={<Progress />}>
                  <AuthLazy
                    onSignIn={(auth) =>
                      loginHandler({ ...CustUser, ...auth }, true)
                    }
                  />
                </Suspense>
              </Route>
              <Route path="/dashboard">
                <Suspense fallback={<Progress />}>
                  {userDetails && <DashboardLazy userDetails={userDetails} />}
                </Suspense>
              </Route>
              <Route path="/account">
                <Suspense fallback={<Progress />}>
                  {userDetails ? (
                    <AccountLazy
                      userDetails={userDetails}
                      userPemission={userPemission}
                    />
                  ) : (
                    <Redirect to={"/"} />
                  )}
                </Suspense>
              </Route>

              <Route path="/payment">
                <Suspense fallback={<Progress />}>
                  {userDetails ? (
                    <PaymentLazy
                      userDetails={userDetails}
                      userPemission={userPemission}
                    />
                  ) : (
                    <Redirect to={"/"} />
                  )}
                </Suspense>
              </Route>
              <Route path="/admin">
                <Suspense fallback={<Progress />}>
                  {userDetails ? (
                    <AdminLazy
                      userDetails={userDetails}
                      userPemission={userPemission}
                    />
                  ) : (
                    <Redirect to={"/"} />
                  )}
                </Suspense>
              </Route>
              <Route path="/meet/:username">
                <JitsiMeet />
              </Route>
              <Route path="/meet">
                <JitsiMeet />
              </Route>
              <Route path="/loans">
                <Fallback />
              </Route>
              <Route path="/cashmanagement">
                <Fallback />
              </Route>
              <Route path="/tradefinance">
                <Fallback />
              </Route>
              <Route path="/dynamicdashboard/:type">
                <DashboardDynamic
                  userDetails={userDetails}
                  userPemission={userPemission}
                />
              </Route>
              <Route path="/dynamicdashboard">
                <Redirect to={"/dynamicdashboard/marketing"} />
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
