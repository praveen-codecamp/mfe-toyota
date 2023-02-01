import React from "react";
import { Link as RouterLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import { makeStyles } from "@mui/styles";
import Divider from "@mui/material/Divider";
import adcb_white from "../../public/adcb_white.png";
import { useScrollTrigger } from "@mui/material";
import Container from "@material-ui/core/Container";
import profilePhoto from "../../public/assets/img/2.jpg";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import CoPresentSharpIcon from "@mui/icons-material/CoPresentSharp";
import VideoChatIcon from "@mui/icons-material/VideoChat";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Modal from "@mui/material/Modal";
import CircularProgress from "@mui/material/CircularProgress";

import CobrowseIO from "cobrowse-sdk-js";
CobrowseIO.license = "JAP8FXNpGrUocQ";
CobrowseIO.redactedViews = [".redacted"];

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
}));

const pages = [
  {
    title: "Account Information",
    path: "account/balance",
  },
  {
    title: "Payments",
    path: "payment",
  },
  {
    title: "Loans",
    path: "loans",
  },
  {
    title: "Cash Management",
    path: "cashmanagement",
  },
  {
    title: "Trade Finance",
    path: "tradefinance",
  },
  {
    title: "Preferences",
    path: "preferences",
  },
];
const settings = [
  {
    title: "My Profile",
    path: "profile",
  },
];
const styleModal = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #cd2026",
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

export default function Header({ isSignedIn, onSignOut }) {
  const classes = useStyles();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [open, setOpen] = React.useState(false);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const onClick = () => {
    if (isSignedIn && onSignOut) {
      onSignOut();
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
  if (window?.location?.href?.includes("/meet")) return null;
  return (
    <React.Fragment>
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
          >
            Please Wait! An agent will join the session soon.
          </Typography>
        </Box>
      </Modal>
      <ElevationScroll>
        <AppBar
          position="fixed"
          color="default"
          elevation={0}
          className={classes.appBar}
          sx={{
            backgroundColor: "#cd2026",
          }}
        >
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Box
                sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, mr: 5 }}
              >
                <RouterLink to="/">
                  <img
                    src={adcb_white}
                    height={44}
                    alt={`ADCB logo!!`}
                    loading="lazy"
                  />
                </RouterLink>
              </Box>

              {isSignedIn && (
                <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                  <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                    color="inherit"
                  >
                    <MenuIcon />
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorElNav}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "left",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "left",
                    }}
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                    sx={{
                      display: { xs: "block", md: "none" },
                    }}
                  >
                    {pages.map((page) => (
                      <MenuItem key={page.path} onClick={handleCloseNavMenu}>
                        <Typography
                          textAlign="center"
                          component={RouterLink}
                          to={`/${page.path}`}
                        >
                          {page.title}
                        </Typography>
                        <Divider
                          orientation="vertical"
                          variant="middle"
                          flexItem
                        />
                      </MenuItem>
                    ))}
                  </Menu>
                </Box>
              )}

              <Box
                sx={{ flexGrow: 1, display: { xs: "flex", md: "none" }, mr: 1 }}
              >
                <RouterLink to="/">
                  <img
                    src={adcb_white}
                    height={44}
                    alt={`ADCB logo!!`}
                    loading="lazy"
                  />
                </RouterLink>
              </Box>

              {!isSignedIn && (
                <Box sx={{ flexGrow: 0 }}>
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: "white", display: "block" }}
                    component={RouterLink}
                    to={`/auth/signin`}
                  >
                    {"Login"}
                  </Button>
                </Box>
              )}

              {isSignedIn && (
                <>
                  <Box
                    sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
                  >
                    {pages.map((page) => (
                      <Button
                        key={page.path}
                        onClick={handleCloseNavMenu}
                        sx={{ my: 2, color: "white", display: "block" }}
                        component={RouterLink}
                        to={`/${page.path}`}
                      >
                        {page.title}
                      </Button>
                    ))}
                  </Box>
                  <Box sx={{ flexGrow: 0 }}>
                    <Tooltip title="Cobrowse">
                      <CoPresentSharpIcon
                        onClick={CobrowseIOStart}
                        sx={{ my: 2, mr: 4, color: "white" }}
                      />
                    </Tooltip>
                  </Box>
                  <a
                    onClick={() =>
                      window.open(
                        "https://container-nlb-1ec7a16ebdccdc09.elb.ap-south-1.amazonaws.com/meet",
                        "_blank",
                        "toolbar=no,scrollbars=yes,resizable=yes,top=500,left=600,width=700px,height=400px"
                      )
                    }
                    href="#"
                  >
                    <Box sx={{ flexGrow: 0 }}>
                      <Tooltip title="Meet Relationship Manager">
                        <VideoChatIcon sx={{ my: 2, mr: 4, color: "white" }} />
                      </Tooltip>
                    </Box>
                  </a>
                  <Box sx={{ flexGrow: 0 }}>
                    <Tooltip title="Open settings">
                      <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                        <Avatar alt="Remy Sharp" src={profilePhoto} />
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
                      {settings.map((setting) => (
                        <MenuItem
                          key={setting.path}
                          onClick={handleCloseUserMenu}
                        >
                          <Typography
                            textAlign="center"
                            component={RouterLink}
                            to={`/${setting.path}`}
                          >
                            {setting.title}
                          </Typography>
                        </MenuItem>
                      ))}

                      <MenuItem onClick={onClick}>
                        <Typography
                          textAlign="center"
                          component={RouterLink}
                          to={isSignedIn ? "/" : "/auth/signin"}
                        >
                          {isSignedIn ? "Logout" : "Login"}
                        </Typography>
                      </MenuItem>
                    </Menu>
                  </Box>
                </>
              )}
            </Toolbar>
          </Container>
        </AppBar>
      </ElevationScroll>
    </React.Fragment>
  );
}
