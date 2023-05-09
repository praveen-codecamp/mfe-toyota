import React, { useState } from "react";
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

const data = [
  { type: "Income", value: 4038555 },
  { type: "Expense", value: 1536719 },
];
const Root = (props) => (
  <Legend.Root
    {...props}
    sx={{ display: "flex", margin: "auto", flexDirection: "row" }}
  />
);
const Label = (props) => (
  <Legend.Label {...props} sx={{ whiteSpace: "nowrap" }} />
);
export default () => {
  const [chartData, setChartData] = useState(data);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  const renderCurrency = (type, amount) => {
    return (
      <>
        <Typography
          variant="subtitle1"
          sx={{
            opacity: 1,
            font: "Roboto, Regular",
            fontSize: ".7rem",
            color: "#41414180",
          }}
        >
          {type}
        </Typography>
        <Typography
          variant="body2"
          display="inline"
          sx={{
            opacity: 0.7,
            color: "#414141",
            font: "Roboto, medium",
            fontSize: ".7rem",
          }}
        >
          USD
        </Typography>
        <Typography
          variant="body2"
          display="inline"
          sx={{
            opacity: 1,
            color: "#204F88",
            font: "Roboto, medium",
            fontSize: ".7rem",
            fontWeight: "bold",
          }}
        >
          {" "}
          {amount}
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
            color: "#41414180",
            fontWeight: "bold",
            width: "5rem",
          }}
          size="small"
        >
          <MenuItem
            sx={{
              opacity: 0.7,
              color: "#414141",
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
              color: "#414141",
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
              color: "#414141",
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
              color: "#414141",
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
        height: matches ? "23rem" : undefined,
      }}
    >
      <Grid container spacing={1} direction={"column"}>
        <Grid item>
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
                Cashflow
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
        <Grid item>
          <Grid container spacing={2} sx={{ px: 2 }}>
            <Grid item xs={4} md={4} lg={3}>
              {renderCurrency("Daily", "750")}
            </Grid>
            <Grid item xs={4} md={4} lg={3}>
              {renderCurrency("Weekly", "3,550")}
            </Grid>
            <Grid item xs={4} md={4} lg={3}>
              {renderCurrency("Mothly", "11,230")}
            </Grid>
          </Grid>
        </Grid>
        <Grid item>{renderSelect()}</Grid>
        <Grid item>
          <Box sx={{ height: "3rem", p: 0 }}>
            <Chart data={chartData} height={180}>
              <Palette scheme={["#204F88", "#F97C28"]} />
              <PieSeries
                valueField="value"
                argumentField="type"
                outerRadius={0.8}
                innerRadius={0.72}
              />
              <Animation />

              <Legend
                position="right"
                rootComponent={Root}
                labelComponent={Label}
              />
            </Chart>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};
