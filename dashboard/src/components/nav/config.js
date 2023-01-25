import React from "react";
// component
import Iconify from "../Iconify";

// ----------------------------------------------------------------------

const icon = (name) => <Iconify icon={name} width={30} height={30} />;

const navConfig = [
  {
    title: "dashboard",
    path: "/dashboard",
    icon: icon("material-symbols:dashboard"),
  },
  {
    title: "Account Information",
    path: "/account/balance",
    icon: icon("uil:suitcase"),
  },
  {
    title: "Payments",
    path: "/payment",
    icon: icon("mdi:bank-transfer"),
  },
  {
    title: "Loans",
    path: "/loans",
    icon: icon("mdi:bank-minus"),
  },
  {
    title: "Cash Management",
    path: "/cashmanagement",
    icon: icon("mdi:cash-lock-open"),
  },
  {
    title: "Trade Finance",
    path: "/tradefinance",
    icon: icon("la:trade-federation"),
  },
  {
    title: "Preferences ",
    path: "/preferences",
    icon: icon("material-symbols:temp-preferences-custom"),
  },
  {
    title: "Administration",
    path: "/admin",
    icon: icon("ic:round-admin-panel-settings"),
  },
  {
    title: "Meet",
    path: "/meet",
    icon: icon("fluent:meet-now-16-regular"),
  },
  {
    title: "Cobrowse",
    path: "/meet",
    icon: icon("carbon:screen-map-set"),
  },
];

export default navConfig;
