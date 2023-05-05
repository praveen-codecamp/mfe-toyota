import React from "react";
import { Paper } from "@mui/material";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export default () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const renderCurrency = (fix, dec, col, isbold) => {
    return (
      <>
        <Typography
          variant="body2"
          display="inline"
          sx={{
            opacity: 0.7,
            color: "#414141",
            font: "Roboto, medium",
            fontSize: ".8rem",
            textAlign: "end",
          }}
        >
          USD
        </Typography>
        <Typography
          variant="body2"
          display="inline"
          sx={{
            opacity: 1,
            color: col,
            font: "Roboto, medium",
            fontSize: "1rem",
            fontWeight: isbold ? "bold" : undefined,
            pl: 0.4,
            textAlign: "end",
          }}
        >
          {fix + "."}
        </Typography>
        <Typography
          variant="body2"
          display="inline"
          sx={{
            opacity: 1,
            color: col,
            font: "Roboto, medium",
            fontSize: ".8rem",
            fontWeight: isbold ? "bold" : undefined,
            pr: 1,
            textAlign: "end",
          }}
        >
          {dec}
        </Typography>
      </>
    );
  };
  return (
    <Paper
      sx={{
        background: "#FFFFFF 0% 0% no-repeat padding-box;",
        boxShadow: "0px 3px 6px #0000001F",
        borderRadius: "10px",
        px: 1,
        py: 1,
        height: matches ? "12rem" : undefined,
      }}
    >
      <Grid container spacing={2} sx={{ px: 1, py: 2 }}>
        <Grid item xs={6} md={6} lg={6}>
          <Typography
            variant="subtitle1"
            sx={{
              opacity: 1,
              color: "#204F88",
              font: "Roboto, medium",
              fontSize: "1rem",
              px: 1,
            }}
          >
            Primary Account
          </Typography>
          <Typography
            variant="body2"
            sx={{
              opacity: 0.7,
              color: "#414141",
              font: "Roboto, medium",
              fontSize: ".8rem",
              px: 1,
            }}
          >
            DE00 74978 12876 6522
          </Typography>
        </Grid>
        <Grid item xs={6} md={6} lg={6}>
          <Typography
            variant="body1"
            sx={{
              opacity: 1,
              font: "Roboto, Regular",
              fontSize: ".8rem",
              px: 1,
              textAlign: "end",
            }}
          >
            Available Fund
          </Typography>
          <Paper sx={{ textAlign: "end", boxShadow: "none", mt: 1 }}>
            {renderCurrency("40,38,555", "45", "#414141", true)}
          </Paper>
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{ px: 1, py: 2, mt: 1 }}>
        <Grid item xs={12} md={12} lg={4}>
          <Grid container spacing={2}>
            <Grid item xs={2} md={2} lg={2}>
              <ArrowDownwardIcon
                sx={{
                  background: "#07A31640 0% 0% no-repeat padding-box",
                  borderRadius: "4px",
                  color: "#07A316",
                  width: "2rem",
                  height: "2.1rem",
                  mt: ".2rem",
                }}
              />
            </Grid>
            <Grid item xs={10} md={10} lg={10}>
              <Paper sx={{ boxShadow: "none", mt: 0 }}>
                {renderCurrency("40,38,555", "45", "#414141")}
              </Paper>
              <Typography
                variant="body1"
                sx={{
                  opacity: 1,
                  font: "Roboto, Regular",
                  fontSize: ".7rem",
                  color: "#054FA8",
                  mt: -0.5,
                }}
              >
                Income
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={12} lg={4}>
          <Grid container spacing={2}>
            <Grid item xs={2} md={2} lg={2}>
              <ArrowUpwardIcon
                sx={{
                  background: "#F97C2840 0% 0% no-repeat padding-box",
                  borderRadius: "4px",
                  color: "#F97C28",
                  width: "2rem",
                  height: "2.1rem",
                  mt: ".2rem",
                }}
              />
            </Grid>
            <Grid item xs={10} md={10} lg={10}>
              <Paper sx={{ boxShadow: "none", mt: 0 }}>
                {renderCurrency("40,38,555", "45", "#414141")}
              </Paper>
              <Typography
                variant="body1"
                sx={{
                  opacity: 1,
                  font: "Roboto, Regular",
                  fontSize: ".7rem",
                  color: "#054FA8",
                  mt: -0.5,
                }}
              >
                Expense
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={12} lg={4}>
          <Paper sx={{ textAlign: "end", boxShadow: "none", mt: 1 }}>
            <ArrowForwardIcon
              sx={{
                background: "#054FA8 0% 0% no-repeat padding-box",
                borderRadius: "4px",
                color: "#FFFFFF",
                width: "2rem",
                height: "1.8rem",
              }}
            />
          </Paper>
        </Grid>
      </Grid>
    </Paper>
  );
};
