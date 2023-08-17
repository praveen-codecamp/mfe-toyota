import React, { useState, useEffect, Fragment, MouseEvent } from "react";
//import * as React from 'react';
import { Link as RouterLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import ScreenShareOutlinedIcon from "@mui/icons-material/ScreenShareOutlined";
import VideoChatOutlinedIcon from "@mui/icons-material/VideoChatOutlined";
import Avatar from "@mui/material/Avatar";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Tooltip from "@mui/material/Tooltip";
import Modal from "@mui/material/Modal";
import CircularProgress from "@mui/material/CircularProgress";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { makeStyles } from "@mui/styles";
import { useScrollTrigger } from "@mui/material";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import CobrowseIO from "cobrowse-sdk-js";
import { PingOneAuthClient } from "@ping-identity/p14c-js-sdk-auth";
import { useOktaAuth } from "@okta/okta-react";
import profilePhoto from "../../public/assets/img/2.jpg";
import config, { getAuthrizedResources } from "./authConfig";
import { accessControlAPI } from "../../../shared/constants";
import palette from "../../../shared/theme/palette";
import TextField from "@mui/material/TextField";
import { HomeOutlinedIcon } from "@mui/icons-material/HomeOutlined";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";
import Grid from "@mui/material/Grid";
import Popover from "@mui/material/Popover";
import Papers from "./Papers";
import Notifications from "./Notifications";
//PingOne Auth Setup-------
const authClient = new PingOneAuthClient(config.pidc);
//----------------------------
//CobrowseIO setup-----------------
CobrowseIO.license = "JAP8FXNpGrUocQ";
CobrowseIO.redactedViews = [".redacted"];
//----------------------------------
const useStyles = makeStyles(() => ({
  "@global": {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: "none",
    },
    a: {
      textDecoration: "none",
    },
  },
  appBar: {
    // borderBottom: `1px solid`,
  },
  toolbar: {
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  link: {
    margin: 1,
  },
  heroContent: {
    padding: 6,
  },
  cardHeader: {
    backgroundColor: "light",
  },
  cardPricing: {
    display: "flex",
    justifyContent: "center",
    alignItems: "baseline",
    marginBottom: 2,
  },
  footer: {
    borderTop: `1px solid`,
    marginTop: 8,
    paddingTop: 8,
    paddingBottom: 3,
  },
  monudropdown: {
    margintop: `50px`,
    width: `100% !important`,
  },
}));

const styleModal = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: `2px solid ${palette.primary.main}`,
  boxShadow: 24,
  p: 4,
};
function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

export default function Header({ userDetails, userPemission, loginHandler }) {
  const classes = useStyles();
  const [pages, setPages] = useState([]);
  const [currentPath, setCurrentPath] = useState("/dashboard");
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [open, setOpen] = useState(false);
  const [loginSource, setLoginSource] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [logo, setLogo] = useState("/assets/img/assurant-logo-1.png");
  const [anchor, setAnchor] = useState(null);
  const { oktaAuth, authState } = useOktaAuth();
  const oktaLogin = async () => oktaAuth.signInWithRedirect();
  const oktaLogout = async () => oktaAuth.signOut("/");

  const handleClick = (event, page) => {
    //console.log('teste',event)
    if (page === "demandsupply") {
      setAnchor(event.target);
    } else {
      setCurrentPath(page.path);
    }
  };

  const handleCloses = () => {
    setAnchor(null);
  };

  const opens = Boolean(anchor);
  const ids = opens ? "simple-popover" : undefined;

  useEffect(() => {
    //const nav = getAuthrizedPages(userDetails);
    const authrizedResources = getAuthrizedResources(userDetails);
    setPages(authrizedResources);
    changeTheme();
  }, [userDetails, userPemission]);
  useEffect(() => {
    try {
      if (authState && authState.isAuthenticated) {
        oktaAuth
          .getUser()
          .then((user) => {
            setLoginSource("Okta");
            loginHandler(user);
          })
          .catch((err) => {
            console.error(err);
          });
      }
    } catch (error) {
      throw error;
    }
  }, [authState, oktaAuth]); // Update if authState changes

  useEffect(() => {
    try {
      // Try to parse current URL and get possible tokens
      authClient.parseRedirectUrl().then((tokens) => {
        if (tokens && tokens.tokens.accessToken && tokens.tokens.idToken) {
          authClient.getUserInfo().then((user) => {
            setLoginSource("Ping");
            loginHandler(user);
          });
        }
      });
    } catch (error) {
      throw error;
    }
  }, []);
  const signInHandler = () => {
    authClient.signIn().then((res) => {
      console.log("signIn::", res);
    });
  };
  const signOutHandler = () => {
    if (loginSource === "Ping") {
      authClient.signOut().then((res) => {
        console.log("signOut::", res);
      });
    }
    authState && authState.isAuthenticated && oktaLogout();
    loginHandler(null);
  };
  const changeTheme = async () => {
    if (!userDetails?.organization) return;
    const curTheme = localStorage.getItem("theme");
    const res = await fetch(
      `${accessControlAPI}/organizations/${userDetails.organization}`
    );
    const jsonRes = await res.json();
    jsonRes?.logo && setLogo(jsonRes.logo);
    if (jsonRes?.theme && curTheme !== jsonRes.theme) {
      localStorage.setItem("theme", jsonRes.theme);
      window.location.reload(false);
    }
  };
  const CobrowseIOStart = () => {
    CobrowseIO.start();
    setOpen(true);
    CobrowseIO.on("session.loaded", (session) => {
      setOpen(false);
      console.log("A session was loaded", session);
    });
  };
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  if (window?.location?.href?.includes("/meet")) return null;

  const renderLogo = () => {
    return (
      <Box sx={{ flexGrow: { xs: 1, md: userDetails ? 0.03 : 1 } }}>
        <RouterLink to="/">
          {/* {logo ? (
            <img width="30rem" height="30rem" src={logo} loading="lazy" />
          ) : (
            <AccountBalanceIcon
              sx={{
                color: palette.primary.main,
                border: "solid 1px",
                padding: ".5rem",
                borderRadius: 50,
                background: palette.primary.lighter,
                width: "3rem",
                height: "3rem",
              }}
            />
          )} */}
          <Box sx={{ display: "flex" }}>
            <Typography
              variant="body2"
              color="#FFFFFF"
              align="left"
              sx={{ ml: 0, fontWeight: "bold", fontSize: "1.175rem" }}
            >
              {/* {`@ TOYOTA Motor Thailand Co. Ltd. All Rights Reserved. Vehicle Status Control version ${packageJson.version}`}
    {`TOYOTA DDMS`} */}
              {`TOYOTA `}
            </Typography>
            <Typography
              variant="body2"
              color="textPrimary"
              align="left"
              sx={{ ml: 1, fontWeight: "bold", fontSize: "1.175rem" }}
            >
              {`DDMS`}
            </Typography>
          </Box>
        </RouterLink>
      </Box>
    );
  };
  const renderSigninMenu = () => {
    return (
      <Box sx={{ flexGrow: 0 }}>
        <Tooltip title="Sign in">
          <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
            <AccountCircleIcon
              sx={{ color: palette.primary.lighter }}
              fontSize="large"
            />
          </IconButton>
        </Tooltip>
        <Menu
          sx={{ mt: "45px" }}
          id="menu-appbar"
          anchorEl={anchorElUser}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={Boolean(anchorElUser)}
          onClose={handleCloseUserMenu}
        >
          <MenuItem onClick={oktaLogin}>
            {!authState && <Typography variant="body2">Loading...</Typography>}
            {authState && !authState.isAuthenticated && (
              <Typography
                variant="subtitle2"
                color={palette.primary.main}
                textAlign="center"
              >
                Okta Login
              </Typography>
            )}
          </MenuItem>
          <MenuItem onClick={signInHandler}>
            <Typography
              variant="subtitle2"
              color={palette.primary.main}
              textAlign="center"
            >
              PingOne Login
            </Typography>
          </MenuItem>
          <MenuItem
            onClick={handleCloseUserMenu}
            component={RouterLink}
            to={`/auth/signin`}
          >
            <Typography
              variant="subtitle2"
              color={palette.primary.main}
              textAlign="center"
            >
              Login
            </Typography>
          </MenuItem>
        </Menu>
      </Box>
    );
  };
  const renderDesktopMenu = () => {
    return (
      <Box
        textAlign="center"
        sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
      >
        {pages.map((page, index) => (
          <Fragment key={index}>
            {index !== 0 && (
              <Divider
                orientation="vertical"
                variant="middle"
                flexItem
                sx={{
                  bgcolor: palette.primary.contrastText,
                  height: ".8rem",
                  align: "center",
                  mt: 2,
                }}
              />
            )}
            <Button
              key={page.path}
              sx={{
                my: 1,
                mx: 0.3,
                color: window?.location?.href?.includes(page.path)
                  ? "#f4f4f4"
                  : "#eeb2b2",
                fontSize: ".7rem",
              }}
              // aria-describedby={id}
              component={RouterLink}
              to={page.path !== "demandsupply" ? `/${page.path}` : undefined}
              onClick={(event) => {
                handleClick(event, page.path);
              }}
            >
              {page.title}
            </Button>
          </Fragment>
        ))}
      </Box>
    );
  };
  const renderMobileMenu = () => {
    const drawerWidth = 240;
    return (
      <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ display: { sm: "none" }, color: "#fff" }}
        >
          <MenuIcon />
        </IconButton>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          <Toolbar />
          <Divider />
          <List onClick={handleDrawerToggle}>
            {pages.map((page) => (
              <ListItem key={page.path} disablePadding>
                <ListItemButton component={RouterLink} to={`/${page.path}`}>
                  <ListItemText primary={page.title} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>
      </Box>
    );
  };
  const renderCobrowse = () => {
    return (
      <Box sx={{ flexGrow: 0, mt: 1.7 }}>
        <Tooltip title="Cobrowse">
          <ScreenShareOutlinedIcon
            onClick={CobrowseIOStart}
            sx={{ mr: 2, color: "white" }}
          />
        </Tooltip>
      </Box>
    );
  };
  const renderMeet = () => {
    return (
      <a
        onClick={() =>
          window.open(
            "https://d2wcjiokbyu7nw.cloudfront.net/meet",
            "_blank",
            "toolbar=no,scrollbars=yes,resizable=yes,top=500,left=600,width=700px,height=400px"
          )
        }
        href="#"
      >
        <Box sx={{ flexGrow: 0, mt: 1.7 }}>
          <Tooltip title="Meet Relationship Manager">
            <VideoChatOutlinedIcon
              sx={{ mr: 2, color: palette.primary.contrastText }}
            />
          </Tooltip>
        </Box>
      </a>
    );
  };
  const renderProfileMenu = () => {
    const settings = config.settings;
    const displayName = `Welcome ${userDetails?.given_name || "Guest!"}`;
    const name = `${userDetails?.role || "Guest!"}`;
    return (
      <Box sx={{ flexGrow: 0, height: 30 }}>
        {/* <Box sx={{display:'flex'}}>
      <Tooltip title="Open settings">
          <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
            <Avatar alt={displayName} src={profilePhoto} />
          </IconButton>
      </Tooltip>
     <Typography
      variant="body1"
      color="#FFFFFF"
      >
     {displayName}
    </Typography>
     <Typography
      variant="body2"
      color="#FFFFFF"
      >
     {name}
    </Typography>
    <ArrowDropDownRoundedIcon 
    sx={{ color:'white',size:'50px'}}/>
    </Box> */}
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <IconButton sx={{ p: 0 }}>
              <Avatar src={profilePhoto} />
            </IconButton>
          </Grid>

          <Grid item xs={8}>
            <Typography variant="body1" color="#ef9ca1" whiteSpace={"nowrap"}>
              {displayName}
            </Typography>
            <Divider sx={{ boder: "none" }} />
            <Typography
              variant="body2"
              color="#FFFFFF"
              onClick={handleOpenUserMenu}
            >
              {name}
              <ArrowDropDownRoundedIcon
                sx={{ color: "white", size: "50px", position: "absolute" }}
              />
            </Typography>
          </Grid>
        </Grid>

        <Menu
          sx={{ mt: "25px" }}
          id="menu-appbar"
          anchorEl={anchorElUser}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={Boolean(anchorElUser)}
          onClose={handleCloseUserMenu}
        >
          {/* <MenuItem>
            <Typography
              variant="subtitle2"
              color={palette.primary.main}
              textAlign="center"
            >
              {displayName}
            </Typography>
          </MenuItem>
          <MenuItem>
            <Typography
              variant="subtitle2"
              color={palette.primary.main}
              textAlign="center"
            >
              {name}
            </Typography>
          </MenuItem>
          <Divider variant="middle" /> */}
          {settings.map((setting) => (
            <MenuItem key={setting.path} onClick={handleCloseUserMenu}>
              <Typography
                variant="subtitle2"
                color={palette.primary.main}
                textAlign="center"
                component={RouterLink}
                to={`/${setting.path}`}
              >
                {setting.title}
              </Typography>
            </MenuItem>
          ))}

          <MenuItem
            onClick={() => {
              handleCloseUserMenu();
              signOutHandler();
            }}
          >
            <Typography
              variant="subtitle2"
              color={palette.primary.main}
              textAlign="center"
            >
              Logout
            </Typography>
          </MenuItem>
        </Menu>
      </Box>
    );
  };
  const renderAgentLoading = () => {
    return (
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styleModal}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            align={"center"}
            component="h6"
          >
            <CircularProgress />
          </Typography>
          <Typography
            id="modal-modal-description"
            align={"center"}
            sx={{ mt: 2 }}
            variant="body2"
          >
            Please Wait! An agent will join the session soon.
          </Typography>
        </Box>
      </Modal>
    );
  };
  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar
          position="fixed"
          color="default"
          elevation={0}
          className={classes.appBar}
          sx={{
            backgroundColor: palette.primary.main,
            opacity: 1,
          }}
        >
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              {userDetails && renderMobileMenu()}

              {renderLogo()}

              {!userDetails && renderSigninMenu()}

              {userDetails && (
                <>
                  {renderDesktopMenu()}
                  {renderCobrowse()}
                  {renderMeet()}
                  <Notifications />
                  {renderProfileMenu()}
                </>
              )}
            </Toolbar>
          </Container>
        </AppBar>
      </ElevationScroll>
      {renderAgentLoading()}
      <Popover
        ids={ids}
        open={opens}
        anchor={anchor}
        onClose={handleCloses}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        PaperProps={{
          style: { width: "100%", height: "500px", marginTop: "48px" },
        }}
      >
        <Papers handleCloses={handleCloses} />
      </Popover>
    </React.Fragment>
  );
}
