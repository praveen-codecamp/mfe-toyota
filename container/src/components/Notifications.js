import * as React from "react";
import { Badge, Tooltip, Box } from "@mui/material";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import palette from "../../../shared/theme/palette";

export default function Notifications() {
  return (
    <Box sx={{ flexGrow: 0, mt: 0, mr: 2 }}>
      <Tooltip title="Notifications">
        <Badge badgeContent={4} color="error">
          <NotificationsNoneIcon sx={{ color: palette.primary.contrastText }} />
        </Badge>
      </Tooltip>
    </Box>
  );
}
