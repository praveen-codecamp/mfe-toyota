import React from "react";
import { Paper, Grid, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Button from "@mui/material/Button";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import MaterialUIPickers from "./DatePicker";

export default () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <Paper
      sx={{
        background: "#FFFFFF 0% 0% no-repeat padding-box;",
        boxShadow: "0px 3px 6px #0000001F",
        borderRadius: "10px",
        height: matches ? "12.5rem" : undefined,
      }}
    >
      <Grid container spacing={1}>
        <Grid item xs={12} md={12} lg={12}>
          <Grid container spacing={2} sx={{ px: 2, pt: 1 }}>
            <Grid
              item
              xs={12}
              md={12}
              lg={12}
              container
              justifyContent="space-between"
            >
              <Typography
                variant="subtitle1"
                sx={{
                  opacity: 1,
                  color: "#204F88",
                  font: "Roboto, medium",
                  fontSize: "0.7rem",
                  fontWeight: "bold",
                }}
              >
                View Statements
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{
                  opacity: 1,
                  color: "#41414180",
                  font: "Roboto, medium",
                  fontSize: ".7rem",
                }}
              >
                Select Account <ExpandMoreIcon fontSize="0.7rem" />
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid
        item
        xs={12}
        md={12}
        lg={12}
        fontSize={"0.7rem"}
        sx={{ border: "none" }}
      >
        <CardContent>
          <Grid container spacing={3}>
            <Grid item xs={6} md={6} lg={6} mt={1}>
              <Typography sx={{ color: "#41414180", fontSize: "0.7rem" }}>
                From Date
              </Typography>
            </Grid>
            <Grid item xs={6} md={6} lg={6} mt={1}>
              <Typography sx={{ color: "#41414180", fontSize: "0.7rem" }}>
                To Date
              </Typography>
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={6} md={6} lg={6} mt={2}>
              <MaterialUIPickers device={matches ? "" : "mobile"} />
            </Grid>
            <Grid item xs={6} md={6} lg={6} mt={2}>
              <MaterialUIPickers device={matches ? "" : "mobile"} />
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={12} md={12} lg={5} mt={2}>
              <Button
                variant="contained"
                sx={{
                  textTransform: "unset",
                  fontSize: "0.7rem",
                  backgroundColor: "#054FA8",
                }}
              >
                Get Statement
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Grid>
    </Paper>
  );
};
