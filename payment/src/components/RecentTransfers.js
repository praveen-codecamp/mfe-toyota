import React from "react";
import { Paper, Grid, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import TransactionsTable from "./TransactionsTable";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
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
        px: 1,
        py: 1,
        height: matches ? "23rem" : undefined,
      }}
    >
      <Grid container spacing={1}>
        <Grid item xs={12} md={12} lg={12}>
          <Grid container spacing={2} sx={{ px: 2, pt: 1 }}>
            <Grid item xs={8} md={8} lg={8}>
              <Typography variant="h6" color={palette.primary.main}>
                Recent Transfers
              </Typography>
            </Grid>
            <Grid item xs={4} md={4} lg={4}>
              <Paper sx={{ textAlign: "end", boxShadow: "none" }}>
                <Typography variant="caption" color={palette.grey.lighter}>
                  Select Account <ExpandMoreIcon fontSize="0.6rem" />
                </Typography>
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
