import React from "react";
import { Paper } from "@mui/material";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Chip from "@mui/material/Chip";

export default () => {
  const renderCurrency = (fix, dec, col, isbold) => {
    return (
      <Paper sx={{ textAlign: "end", boxShadow: "none", mt: 1 }}>
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
      </Paper>
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
        height: "12rem",
      }}
    >
      <Grid container spacing={2} sx={{ px: 1, py: 2 }}>
        <Grid item xs={12} md={12} lg={6}>
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
        <Grid item xs={12} md={12} lg={6}>
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
          {renderCurrency("40,38,555", "45", "#414141", true)}
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{ px: 1, py: 2, mt: 1 }}>
        <Grid item xs={12} md={12} lg={3}>
          {renderCurrency("40,38,555", "45", "#414141")}
          <Typography
            variant="body1"
            sx={{
              opacity: 1,
              font: "Roboto, Regular",
              fontSize: ".6rem",
              color: "#054FA8",
              px: 1,
            }}
          >
            Income
          </Typography>
        </Grid>
        <Grid item xs={12} md={12} lg={3}>
          {renderCurrency("40,38,555", "45", "#414141")}
          <Typography
            variant="body1"
            sx={{
              opacity: 1,
              font: "Roboto, Regular",
              fontSize: ".6rem",
              color: "#054FA8",
              px: 1,
            }}
          >
            Expense
          </Typography>
        </Grid>
        <Grid item xs={12} md={12} lg={6}>
          {renderCurrency("40,38,555", "45", "#414141")}
        </Grid>
      </Grid>
    </Paper>
  );
};
