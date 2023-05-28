import * as React from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import { List, Paper } from "@mui/material";

import OrgItem from "./OgrItem";
import palette from "../../../shared/theme/palette";

const OrgNav = styled(List)({
  "& .MuiListItemButton-root": {
    paddingLeft: 24,
    paddingRight: 24,
  },
  "& .MuiListItemIcon-root": {
    minWidth: 0,
    marginRight: 16,
  },
  "& .MuiSvgIcon-root": {
    fontSize: 20,
  },
});

export default function OrgList({ orgList, handleOrgSelect }) {
  return (
    <Box sx={{ display: "flex" }}>
      <Paper
        elevation={0}
        sx={{ maxWidth: 256, background: palette.primary.light }}
      >
        <OrgNav component="nav" disablePadding>
          {orgList.map((orgData, index) => (
            <OrgItem
              key={index}
              index={index}
              orgData={orgData}
              handleOrgSelect={handleOrgSelect}
            />
          ))}
        </OrgNav>
      </Paper>
    </Box>
  );
}
