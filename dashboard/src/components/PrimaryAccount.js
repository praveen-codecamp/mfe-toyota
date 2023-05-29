import React from "react";
import { Paper } from "@mui/material";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { defaultCurrency } from "../../../shared/constants";
import palette from "../../../shared/theme/palette";
import { formatAmount } from "../../../shared/helper";

export default ({ account }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const renderCurrency = (amount, col, isbold) => {
    const formatedAmount = formatAmount(amount);
    const fix = formatedAmount.split(".")[0];
    const dec = formatedAmount.split(".")[1];
    return (
      <>
        <Typography
          variant="caption"
          color={palette.grey.lighter}
          display="inline"
          sx={{ textAlign: "end" }}
        >
          {defaultCurrency.symbol}
        </Typography>
        <Typography
          variant="body1"
          display="inline"
          className="redacted"
          color={col}
          sx={{
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
          className="redacted"
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
          <Typography variant="h6" color={palette.primary.main} sx={{ px: 1 }}>
            Primary Account
          </Typography>
          <Typography
            variant="body2"
            color={palette.grey.lighter}
            sx={{ px: 1 }}
          >
            {account.accountNo}
          </Typography>
        </Grid>
        <Grid item xs={6} md={6} lg={6}>
          <Typography
            variant="body2"
            color={palette.grey.dark}
            sx={{ px: 1, textAlign: "end" }}
          >
            Available Fund
          </Typography>
          <Paper
            className="redacted"
            sx={{ textAlign: "end", boxShadow: "none", mt: 1 }}
          >
            {renderCurrency(account.balance, palette.grey.dark, true)}
          </Paper>
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{ px: 1, py: 2, mt: 1 }}>
        <Grid item xs={12} md={12} lg={4}>
          <Grid container spacing={2}>
            <Grid item xs={2} md={2} lg={2}>
              <ArrowDownwardIcon
                sx={{
                  background: palette.primary.lighter,
                  borderRadius: "4px",
                  color: palette.primary.main,
                  width: "2rem",
                  height: "2.1rem",
                  mt: ".2rem",
                }}
              />
            </Grid>
            <Grid item xs={10} md={10} lg={10}>
              <Paper className="redacted" sx={{ boxShadow: "none", mt: 0 }}>
                {renderCurrency(account.cashflow.income, palette.grey.main)}
              </Paper>
              <Typography
                variant="body2"
                color={palette.primary.main}
                sx={{ mt: -0.5 }}
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
                  background: palette.secondary.lighter,
                  borderRadius: "4px",
                  color: palette.secondary.main,
                  width: "2rem",
                  height: "2.1rem",
                  mt: ".2rem",
                }}
              />
            </Grid>
            <Grid item xs={10} md={10} lg={10}>
              <Paper className="redacted" sx={{ boxShadow: "none", mt: 0 }}>
                {renderCurrency(account.cashflow.expense, palette.grey.main)}
              </Paper>
              <Typography
                variant="body2"
                color={palette.primary.main}
                sx={{ mt: -0.5 }}
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
                background: palette.primary.dark,
                borderRadius: "4px",
                color: palette.primary.contrastText,
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
