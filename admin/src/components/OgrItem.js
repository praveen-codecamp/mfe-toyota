import * as React from "react";
import Box from "@mui/material/Box";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import FolderIcon from "@mui/icons-material/Folder";
import SourceIcon from "@mui/icons-material/Source";
import palette from "../../../shared/theme/palette";

export default function OrgItem({ index, orgData, handleOrgSelect }) {
  const [open, setOpen] = React.useState(false);
  return (
    <Box
      sx={{
        bgcolor: open ? palette.primary.main : null,
        pb: open ? 2 : 0,
      }}
    >
      {index > 0 && <Divider />}
      <ListItemButton
        alignItems="flex-start"
        onClick={() => setOpen(!open)}
        sx={{
          color: palette.primary.contrastText,
          px: 3,
          pt: 2.5,
          pb: open ? 0 : 2.5,
          "&:hover, &:focus": {
            "& svg": { opacity: open ? 1 : 1 },
          },
        }}
      >
        <ListItemIcon sx={{ color: "inherit" }}>
          <SourceIcon />
        </ListItemIcon>
        <ListItemText
          primary={orgData.org}
          primaryTypographyProps={{
            fontSize: 14,
            fontWeight: "medium",
            lineHeight: "20px",
            mb: "2px",
            color: palette.primary.contrastText,
          }}
          secondary={orgData.roles.join(", ")}
          secondaryTypographyProps={{
            noWrap: true,
            fontSize: 12,
            lineHeight: "16px",
            color: open ? "rgba(0,0,0,0)" : palette.primary.highlightText,
          }}
          sx={{ my: 0 }}
        />
        <KeyboardArrowDown
          sx={{
            mr: -1,
            opacity: 0,
            transform: open ? "rotate(-180deg)" : "rotate(0)",
            transition: "0.2s",
          }}
        />
      </ListItemButton>
      {open &&
        orgData.roles.map((role) => (
          <ListItemButton
            key={role}
            sx={{
              py: 0,
              ml: 2,
              minHeight: 32,
              color: palette.primary.contrastText,
            }}
            onClick={() => handleOrgSelect({ org: orgData.org, role: role })}
          >
            <ListItemIcon sx={{ color: "inherit" }}>
              <FolderIcon />
            </ListItemIcon>
            <ListItemText
              primary={role}
              primaryTypographyProps={{
                fontSize: 12,
              }}
            />
          </ListItemButton>
        ))}
    </Box>
  );
}
