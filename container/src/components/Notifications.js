import * as React from "react";
import {
  Badge,
  Box,
  Popper,
  Fade,
  Paper,
  Grid,
  Typography,
  Divider,
} from "@mui/material";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import palette from "../../../shared/theme/palette";
const msg = [
  "Today is last day to confirm Rundown",
  "Today is last day to confirm Color Order",
  "Four A-cards to follow up",
];
export default function Notifications() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [placement, setPlacement] = React.useState();
  const [notifications, setNotifications] = React.useState(msg);

  const handleClick = (newPlacement) => (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((prev) => placement !== newPlacement || !prev);
    setPlacement(newPlacement);
  };
  const handleRemove = (index) => {
    let myArray = [...notifications];
    myArray.splice(index, 1);
    setNotifications(myArray);
    setOpen(myArray.length > 0);
  };
  return (
    <Box sx={{ flexGrow: 0, mt: 0, mr: 2 }}>
      <Popper
        sx={{ width: 300 }}
        open={open}
        anchorEl={anchorEl}
        placement={placement}
        transition
      >
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper
              sx={{
                background: "#FFFFFF 0% 0% no-repeat padding-box;",
                boxShadow: "3px 3px 6px #0000001F",
                borderRadius: "10px",
                p: 2.4,
                mt: 3,
              }}
            >
              {notifications.map((item, index) => (
                <>
                  <Grid container justifyContent={"space-between"}>
                    <Grid item xs={12} md={12} lg={10}>
                      <Typography variant="body2" sx={{ p: 1 }}>
                        {item}
                      </Typography>
                    </Grid>
                    <Grid item xs={12} md={12} lg={2}>
                      <CloseOutlinedIcon
                        sx={{ p: 0.5, mt: 1.1 }}
                        onClick={() => handleRemove(index)}
                      />
                    </Grid>
                  </Grid>

                  <Divider sx={{ boder: "none" }} />
                </>
              ))}
            </Paper>
          </Fade>
        )}
      </Popper>

      <Badge
        badgeContent={notifications.length}
        color="error"
        onClick={handleClick("bottom")}
      >
        <NotificationsNoneIcon sx={{ color: palette.primary.contrastText }} />
      </Badge>
    </Box>
  );
}
