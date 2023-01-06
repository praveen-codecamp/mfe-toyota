import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import { makeStyles } from '@mui/styles';
import adcb_light from '../../public/adcb_light.png';
import adcb_dark from '../../public/adcb_dark.png';
import adcb_white from '../../public/adcb_white.png';
import { useScrollTrigger } from '@mui/material';

const useStyles = makeStyles(() => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
    a: {
      textDecoration: 'none',
    },
  },
  appBar: {
    // borderBottom: `1px solid`,
  },
  toolbar: {
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  link: {
    margin: 1,
  },
  heroContent: {
    padding: 6,
  },
  cardHeader: {
    backgroundColor: 'light',
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: 2,
  },
  footer: {
    borderTop: `1px solid`,
    marginTop: 8,
    paddingTop: 8,
    paddingBottom: 3,
  },
}));


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

  const onClick = () => {
    if (isSignedIn && onSignOut) {
      onSignOut();
    }
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
          backgroundColor: "#cd2026"
        }}
      >
        <Toolbar className={classes.toolbar}>
        {isSignedIn &&
        <React.Fragment>
          <Typography
            variant="h6"
            color="inherit"
            noWrap
            component={RouterLink}
            to="/account"
          >
            Account Information
          </Typography>
          <Typography
            variant="h6"
            color="inherit"
            noWrap
            component={RouterLink}
            to="/payment"
          >
            Payments
          </Typography>
          <Typography
            variant="h6"
            color="inherit"
            noWrap
            component={RouterLink}
            to="/preferences"
          >
            Preferences
          </Typography>
          <Typography
            variant="h6"
            color="inherit"
            noWrap
            component={RouterLink}
            to="/admin"
          >
            Administration
          </Typography>
          <Typography
            variant="h6"
            color="inherit"
            noWrap
            component={RouterLink}
            to="/messages"
          >
            Bank Messages
          </Typography>
          <Typography
            variant="h6"
            color="inherit"
            noWrap
            component={RouterLink}
            to="/notifications"
          >
            View Notifications
          </Typography>
          <Typography
            variant="h6"
            color="inherit"
            noWrap
            component={RouterLink}
            to="/contactus"
          >
            Help & Contact Us
          </Typography>
          </React.Fragment>
          }
          {!isSignedIn &&
          // <Typography
          //   variant="h6"
          //   color="inherit"
          //   noWrap
          //   component={RouterLink}
          //   to="/"
          // >
          //   Home
          // </Typography>
          <img
          src={adcb_white}
          height={44}
          alt={`ADCB logo!!`}
          loading="lazy"
          />
          }
          <Button
            color="secondary"
            variant="contained"
            className={classes.link}
            component={RouterLink}
            to={isSignedIn ? '/' : '/auth/signin'}
            onClick={onClick}
          >
            {isSignedIn ? 'Logout' : 'Login'}
          </Button>
        </Toolbar>
      </AppBar>
      </ElevationScroll>
    </React.Fragment>
  );
}
