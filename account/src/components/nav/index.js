import PropTypes from "prop-types";
import React, { useEffect } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
// @mui
import { Box, Drawer } from "@mui/material";
// hooks
import useResponsive from "./useResponsive";
// components
import Scrollbar from "./scrollbar";
import NavSection from "./nav-section";
//
import navConfig from "./config";
import adcb_white from "../../../public/assets/img/adcb_white.png";

// ----------------------------------------------------------------------

const NAV_WIDTH = 260;

// ----------------------------------------------------------------------

Nav.propTypes = {
  openNav: PropTypes.bool,
  onCloseNav: PropTypes.func,
};

export default function Nav({ openNav, onCloseNav }) {
  const { pathname } = useLocation();

  const isDesktop = useResponsive("up", "lg");

  useEffect(() => {
    if (openNav) {
      onCloseNav();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const renderContent = (
    <Scrollbar
      sx={{
        height: 1,
        "& .simplebar-content": {
          height: 1,
          display: "flex",
          flexDirection: "column",
        },
      }}
    >
      <Box
        sx={{
          px: 2.5,
          py: 1.5,
          display: "inline-flex",
          backgroundColor: "#cd2026",
        }}
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
      <NavSection data={navConfig} />

      <Box sx={{ flexGrow: 1 }} />
    </Scrollbar>
  );

  return (
    <Box
      component="nav"
      sx={{
        flexShrink: { lg: 0 },
        width: { lg: NAV_WIDTH },
      }}
    >
      {isDesktop ? (
        <Drawer
          open
          variant="permanent"
          PaperProps={{
            sx: {
              width: NAV_WIDTH,
              bgcolor: "background.default",
              borderRightStyle: "hidden",
              borderRightColor: "#cd2026",
            },
          }}
        >
          {renderContent}
        </Drawer>
      ) : (
        <Drawer
          open={openNav}
          onClose={onCloseNav}
          ModalProps={{
            keepMounted: true,
          }}
          PaperProps={{
            sx: { width: NAV_WIDTH },
          }}
        >
          {renderContent}
        </Drawer>
      )}
    </Box>
  );
}
