import React from "react";
import { Paper, Grid, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import TransactionsTable from "./TransactionsTable";

export default () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <Paper
      sx={{
        background: "#FFFFFF 0% 0% no-repeat padding-box;",
        boxShadow: "0px 3px 6px #0000001F",
        borderRadius: "10px",
        px: 1,
        py: 1,
        height: matches ? "23rem" : undefined,
      }}
    >
      <Grid container spacing={1}>
        <Grid item xs={12} md={12} lg={12}>
          <Grid container spacing={2} sx={{ px: 2, pt: 1 }}>
            <Grid item xs={8} md={8} lg={8}>
              <Typography
                variant="subtitle1"
                sx={{
                  opacity: 1,
                  color: "#204F88",
                  font: "Roboto, medium",
                  fontSize: "1rem",
                }}
              >
                Latest Transactions
              </Typography>
              <Typography
                sx={{
                  color: "#414141",
                  font: "Roboto, medium",
                  fontSize: ".6rem",
                  opacity: 0.6,
                  fontWeight: "bold",
                }}
              >
                Since last week, you got{" "}
                <Typography
                  sx={{
                    font: "Roboto, medium",
                    fontSize: ".6rem",
                    fontWeight: "bold",
                    color: "#054FA8",
                    display: "initial",
                  }}
                >
                  10
                </Typography>{" "}
                new transactions.{" "}
                <Typography
                  sx={{
                    font: "Roboto, medium",
                    fontSize: ".6rem",
                    fontWeight: "bold",
                    color: "#054FA8",
                    display: "initial",
                  }}
                >
                  2
                </Typography>{" "}
                exceeded USD
                <Typography
                  sx={{
                    font: "Roboto, medium",
                    fontSize: ".6rem",
                    fontWeight: "bold",
                    color: "#054FA8",
                    display: "initial",
                  }}
                >
                  10,000
                </Typography>
              </Typography>
            </Grid>
            <Grid item xs={4} md={4} lg={4}>
              <Paper sx={{ textAlign: "end", boxShadow: "none" }}>
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
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <TransactionsTable />
        </Grid>
      </Grid>
    </Paper>
  );
};
