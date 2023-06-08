import React from "react";
import { Paper, Grid, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Button from "@mui/material/Button";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CardContent from "@mui/material/CardContent";
import MaterialUIPickers from "./DatePicker";
import palette from "../../../shared/theme/palette";

export default () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <Paper
      sx={{
        background: "#FFFFFF 0% 0% no-repeat padding-box;",
        boxShadow: "0px 3px 6px #0000001F",
        borderRadius: "10px",
        height: matches ? "14rem" : undefined,
        p: 2,
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} md={12} lg={12}>
          <Grid container spacing={2}>
            <Grid
              item
              xs={12}
              md={12}
              lg={12}
              container
              justifyContent="space-between"
            >
              <Typography variant="h6" color={palette.primary.main}>
                View Statements
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{
                  opacity: 1,
                  color: palette.grey.lighter,
                  font: "Roboto, medium",
                  fontSize: ".7rem",
                }}
              >
                Select Account <ExpandMoreIcon fontSize="0.7rem" />
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <Grid container spacing={2} sx={{ px: 2 }}>
            <Grid item xs={6} md={6} lg={6}>
              <Typography variant="subtitle2" color={palette.grey.lighter}>
                From Date
              </Typography>
            </Grid>
            <Grid item xs={6} md={6} lg={6}>
              <Typography variant="subtitle2" color={palette.grey.lighter}>
                To Date
              </Typography>
            </Grid>
            <Grid item xs={6} md={6} lg={6}>
              <MaterialUIPickers device={matches ? "" : "mobile"} />
            </Grid>
            <Grid item xs={6} md={6} lg={6}>
              <MaterialUIPickers device={matches ? "" : "mobile"} />
            </Grid>
            <Grid item xs={12} md={12} lg={12}>
              <Button variant="contained">Get Statement</Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};
