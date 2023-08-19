import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#5a8cc9",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.primary.contrastText,
  height: "6rem",
}));

export default function Todos() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Item>
            <Typography variant="body2">Follow-up for Today</Typography>
            <a href="/dashboard/view1">
              <Typography variant="body2">4</Typography>
            </a>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <Typography variant="body2">Ready for Delivery</Typography>
            <Typography variant="body2">6</Typography>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <Typography variant="body2">Delivery Today</Typography>
            <Typography variant="body2">2</Typography>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <Typography variant="body2">Prospect Open</Typography>
            <Typography variant="body2">40</Typography>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <Typography variant="body2">Total Booking</Typography>
            <Typography variant="body2">Fleet-20</Typography>
            <Typography variant="body2">Normal-45</Typography>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <Typography variant="body2">Fleet</Typography>
            <Typography variant="body2">Form A-1</Typography>
            <Typography variant="body2">Form B-2</Typography>
            <Typography variant="body2">Form C-1</Typography>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
