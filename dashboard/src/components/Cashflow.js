import React, { useEffect, useState } from "react";
import {
  Paper,
  Grid,
  Typography,
  Box,
  FormControl,
  Select,
  MenuItem,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {
  Chart,
  PieSeries,
  Legend,
} from "@devexpress/dx-react-chart-material-ui";
import { Animation, Palette } from "@devexpress/dx-react-chart";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { defaultCurrency } from "../../../shared/constants";
import palette from "../../../shared/theme/palette";
import { formatAmount } from "../../../shared/helper";

const Root = (props) => (
  <Legend.Root
    {...props}
    sx={{ display: "flex", margin: "auto", flexDirection: "row" }}
  />
);
const Label = (props) => (
  <Legend.Label {...props} sx={{ whiteSpace: "nowrap" }} />
);
export default ({ cashflow }) => {
  const [chartData, setChartData] = useState([
    { type: "Income", value: cashflow.income },
    { type: "Expense", value: cashflow.expense },
  ]);
  useEffect(() => {
    setChartData([
      { type: "Income", value: cashflow.income },
      { type: "Expense", value: cashflow.expense },
    ]);
  }, [cashflow]);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  const renderCurrency = (type, amount) => {
    const formatedAmount = formatAmount(amount);
    return (
      <>
        <Typography variant="subtitle1" color={palette.grey.lighter}>
          {type}
        </Typography>
        <Typography
          variant="caption"
          color={palette.grey.lighter}
          display="inline"
          className="redacted"
        >
          {defaultCurrency.symbol}
        </Typography>
        <Typography
          variant="subtitle1"
          color={palette.primary.main}
          display="inline"
          className="redacted"
        >
          {" "}
          {formatedAmount}
        </Typography>
      </>
    );
  };
  const renderSelect = () => {
    return (
      <FormControl size="small" variant="standard" sx={{ m: 1 }} fullWidth>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={10}
          sx={{
            opacity: 1,
            font: "Roboto, Regular",
            fontSize: ".6rem",
            color: palette.grey.lighter,
            fontWeight: "bold",
            width: "5rem",
          }}
          size="small"
        >
          <MenuItem
            sx={{
              opacity: 0.7,
              color: palette.grey.darker,
              font: "Roboto, medium",
              fontSize: ".7rem",
            }}
            value={10}
          >
            Last Month
          </MenuItem>
          <MenuItem
            sx={{
              opacity: 0.7,
              color: palette.grey.darker,
              font: "Roboto, medium",
              fontSize: ".7rem",
            }}
            value={1}
          >
            January
          </MenuItem>
          <MenuItem
            sx={{
              opacity: 0.7,
              color: palette.grey.darker,
              font: "Roboto, medium",
              fontSize: ".7rem",
            }}
            value={2}
          >
            February
          </MenuItem>
          <MenuItem
            sx={{
              opacity: 0.7,
              color: palette.grey.darker,
              font: "Roboto, medium",
              fontSize: ".7rem",
            }}
            value={3}
          >
            March
          </MenuItem>
        </Select>
      </FormControl>
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
        height: matches ? "23rem" : "20rem",
      }}
    >
      <Grid container spacing={1} direction={"column"}>
        <Grid item>
          <Grid container spacing={2} sx={{ px: 2, pt: 1 }}>
            <Grid item xs={8} md={8} lg={8}>
              <Typography variant="h6" color={palette.primary.main}>
                Cashflow
              </Typography>
            </Grid>
            <Grid item xs={4} md={4} lg={4}>
              <Paper sx={{ textAlign: "end", boxShadow: "none" }}>
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
        </Grid>
        <Grid item>
          <Grid container spacing={2} sx={{ px: 2 }}>
            <Grid item xs={4} md={4} lg={3}>
              {renderCurrency("Daily", cashflow.daily)}
            </Grid>
            <Grid item xs={4} md={4} lg={3}>
              {renderCurrency("Weekly", cashflow.weekly)}
            </Grid>
            <Grid item xs={4} md={4} lg={3}>
              {renderCurrency("Monthly", cashflow.monthy[0])}
            </Grid>
          </Grid>
        </Grid>
        <Grid item>{renderSelect()}</Grid>
        {/* <Grid item>
          <Box sx={{ height: "3rem", p: 0 }}>
            <Chart data={chartData} height={180}>
              <Palette
                scheme={[palette.primary.main, palette.secondary.main]}
              />
              <PieSeries
                valueField="value"
                argumentField="type"
                outerRadius={0.8}
                innerRadius={0.6}
              />
              <Animation />
              <Legend
                position="right"
                rootComponent={Root}
                labelComponent={Label}
              />
            </Chart>
          </Box>
                </Grid>*/}
      </Grid>
    </Paper>
  );
};
