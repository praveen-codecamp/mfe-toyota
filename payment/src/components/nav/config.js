import React from "react";
// component
import Iconify from "../Iconify";

// ----------------------------------------------------------------------

const icon = (name) => <Iconify icon={name} width={30} height={30} />;

const navConfig = [
  {
    title: "Single Payments",
    path: "/payment",
    icon: icon("material-symbols:payments-outline-rounded"),
  },
  {
    title: "Authorise Payments",
    path: "/payment/authorise",
    icon: icon("mdi:payment-clock"),
  },
  {
    title: "Manage Single Payments",
    path: "/payment/managesinglepayments",
    icon: icon("ic:twotone-payments"),
  },
  {
    title: "Direct Debits",
    path: "/payment/directdebits",
    icon: icon("arcticons:debitum"),
  },
  {
    title: "Standing Orders",
    path: "/payment/standingorders",
    icon: icon("fluent-mdl2:activate-orders"),
  },
  {
    title: "Manage Single Templates",
    path: "/payment/managesingletemplates",
    icon: icon("eos-icons:templates-outlined"),
  },
  {
    title: "Manage Bulk Payments",
    path: "/payment/managebulkpayments",
    icon: icon("ph:currency-circle-dollar-duotone"),
  },
  {
    title: "Manage Beneficiaries",
    path: "/payment/managebeneficiaries",
    icon: icon("arcticons:beneficial-state-bank"),
  },
];

export default navConfig;
