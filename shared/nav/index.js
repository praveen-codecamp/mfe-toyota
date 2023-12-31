import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
// @mui
import { Box, Drawer } from "@mui/material";
// hooks
import useResponsive from "./useResponsive";
// components
import Scrollbar from "./scrollbar";
import NavSection from "./nav-section";
import { isAllowed, setACLPermission } from "../acl";

// ----------------------------------------------------------------------

const NAV_WIDTH = 260;

// ----------------------------------------------------------------------

Nav.propTypes = {
  openNav: PropTypes.bool,
  onCloseNav: PropTypes.func,
};

export default function Nav({
  openNav,
  onCloseNav,
  navConfig,
  userDetails,
  userPemission,
}) {
  const [navItem, setNavItem] = useState([]);
  const { pathname } = useLocation();
  const isDesktop = useResponsive("up", "lg");

  const getAuthrizedResources = () => {
    if (!userDetails || !userDetails?.role) return [];
    const item = navConfig.filter((resource) =>
      isAllowed(userDetails.role, resource.resourceName, "view")
    );
    setNavItem(item);
  };
  useEffect(() => {
    setACLPermission(userPemission);
    getAuthrizedResources();
  }, [userDetails, userPemission]);
  useEffect(() => {
    if (openNav) {
      onCloseNav();
    }
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
      <NavSection data={navItem} />
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
              width: 190,
              bgcolor: "background.default",
              borderRightStyle: "hidden",
              borderRightColor: "#cd2026",
              mt: 11,
              mx: 2,
              mb: 2,
              borderRadius: 2,
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
