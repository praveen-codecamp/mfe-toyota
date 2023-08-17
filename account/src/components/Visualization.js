import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Box,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Chip from "@mui/material/Chip";
import SearchIcon from "@mui/icons-material/Search";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import VisualizationSift from "./VisualizationSift";

const Visualization = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  const renderTables = () => {
    return (
      <Grid container spacing={2}>
        <Grid item xs={12} md={12} lg={4}>
          <Typography variant="subtitle2">
            Summary Parking Status By Area type
          </Typography>
        </Grid>
        <Grid item xs={12} md={12} lg={4}>
          <Typography variant="subtitle2">
            Estimate Arrival Time and Volume of Shuttle Vehicle
          </Typography>
        </Grid>
        <Grid item xs={12} md={12} lg={2}>
          <Typography variant="subtitle2">Vehicle Lead Time Status</Typography>
        </Grid>
        <Grid item xs={12} md={12} lg={2}>
          <Typography variant="subtitle2">Trailer Lane Status</Typography>
        </Grid>
        <Grid item xs={12} md={12} lg={4}>
          {parkingStatusByAreaType()}
        </Grid>
        <Grid item xs={12} md={12} lg={4}>
          <VisualizationSift title="Day-Shift" />
          <VisualizationSift title="Night-Shift" />
        </Grid>
        <Grid item xs={12} md={12} lg={2}></Grid>
        <Grid item xs={12} md={12} lg={2}></Grid>
      </Grid>
    );
  };
  const parkingStatusByAreaType = () => {
    const tbclass = {
      fontSize: ".6rem",
      "& th": {
        color: "rgba(96, 96, 96)",
      },
    };
    const rowclass = {
      fontSize: ".6rem",
      border: "1px solid #DEDEDE",
    };
    const arcellWidth = "700";
    const areaType = [
      {
        color: "#a4f0d6",
        area: "Domestic Pre-loading",
        doAssign: "197",
        demo: "",
        doUnAssigned: "28",
        damage: "",
        beforePDI: "",
        exAssign: "3",
        laos: "",
        cambodia: "",
        exUnAssigned: "",
        total: "228",
        capacity: "783",
        remain: "555",
      },
      {
        color: "#bde4f8",
        area: "Unassign Stock",
        doAssign: "1",
        demo: "",
        doUnAssigned: "30",
        damage: "",
        beforePDI: "",
        exAssign: "7",
        laos: "",
        cambodia: "1",
        exUnAssigned: "",
        total: "39",
        capacity: "136",
        remain: "97",
      },
    ];
    return (
      <Table aria-label="customized table">
        <TableHead>
          <TableRow sx={tbclass}>
            <TableCell
              width={arcellWidth}
              rowSpan={1}
              sx={{
                ...tbclass,
                borderLeft: "1px solid #DEDEDE",
                borderTop: "1px solid #DEDEDE",
              }}
            />
            <TableCell
              sx={{ ...tbclass, border: "1px solid #DEDEDE" }}
              colSpan={9}
              align="center"
            >
              Vehicle Status
            </TableCell>
            <TableCell
              colSpan={1}
              sx={{
                ...tbclass,
                borderRight: "1px solid #DEDEDE",
                borderTop: "1px solid #DEDEDE",
              }}
            />
            <TableCell
              colSpan={1}
              sx={{
                ...tbclass,
                borderRight: "1px solid #DEDEDE",
                borderTop: "1px solid #DEDEDE",
              }}
            />
            <TableCell
              colSpan={1}
              sx={{
                ...tbclass,
                borderRight: "1px solid #DEDEDE",
                borderTop: "1px solid #DEDEDE",
              }}
            />
          </TableRow>
          <TableRow sx={tbclass}>
            <TableCell
              width={arcellWidth}
              sx={{ ...tbclass, borderLeft: "1px solid #DEDEDE" }}
              colSpan={1}
            >
              Area Type
            </TableCell>
            <TableCell
              sx={{ ...tbclass, border: "1px solid #DEDEDE" }}
              colSpan={5}
              align="center"
            >
              Domestic
            </TableCell>
            <TableCell
              sx={{ ...tbclass, border: "1px solid #DEDEDE" }}
              colSpan={4}
              align="center"
            >
              Export
            </TableCell>
            <TableCell
              sx={{ ...tbclass, borderRight: "1px solid #DEDEDE" }}
              colSpan={1}
              align="center"
            >
              Total
            </TableCell>
            <TableCell
              sx={{ ...tbclass, borderRight: "1px solid #DEDEDE" }}
              colSpan={1}
              align="center"
            >
              Capacity
            </TableCell>
            <TableCell
              sx={{ ...tbclass, borderRight: "1px solid #DEDEDE" }}
              rowSpan={1}
              align="center"
            >
              Remain / Over Capacity
            </TableCell>
          </TableRow>
          <TableRow sx={{ ...tbclass, borderTop: "1px solid #DEDEDE" }}>
            <TableCell
              width={arcellWidth}
              sx={{
                ...tbclass,
                borderLeft: "1px solid #DEDEDE",
                borderBottom: "1px solid #DEDEDE",
              }}
            />
            <TableCell
              sx={{ ...tbclass, border: "1px solid #DEDEDE" }}
              align="center"
            >
              Assign
            </TableCell>
            <TableCell
              sx={{ ...tbclass, border: "1px solid #DEDEDE" }}
              align="center"
            >
              Demo
            </TableCell>
            <TableCell
              sx={{ ...tbclass, border: "1px solid #DEDEDE" }}
              align="center"
            >
              Unassign
            </TableCell>
            <TableCell
              sx={{ ...tbclass, border: "1px solid #DEDEDE" }}
              align="center"
            >
              Damage
            </TableCell>
            <TableCell
              sx={{ ...tbclass, border: "1px solid #DEDEDE" }}
              align="center"
            >
              Before PDI
            </TableCell>
            <TableCell
              sx={{
                ...tbclass,
                border: "1px solid #DEDEDE",
              }}
              align="center"
            >
              Assign
            </TableCell>
            <TableCell
              sx={{ ...tbclass, border: "1px solid #DEDEDE" }}
              align="center"
            >
              LAOS
            </TableCell>
            <TableCell
              sx={{ ...tbclass, border: "1px solid #DEDEDE" }}
              align="center"
            >
              Cambodia
            </TableCell>
            <TableCell
              sx={{ ...tbclass, border: "1px solid #DEDEDE" }}
              align="center"
            >
              Unassign
            </TableCell>
            <TableCell
              sx={{
                ...tbclass,
                borderRight: "1px solid #DEDEDE",
                borderBottom: "1px solid #DEDEDE",
              }}
            />
            <TableCell
              sx={{
                ...tbclass,
                borderRight: "1px solid #DEDEDE",
                borderBottom: "1px solid #DEDEDE",
              }}
            />
            <TableCell
              sx={{
                ...tbclass,
                borderRight: "1px solid #DEDEDE",
                borderBottom: "1px solid #DEDEDE",
              }}
            />
          </TableRow>
        </TableHead>
        <TableBody>
          {areaType.map((data) => (
            <TableRow sx={tbclass} key={data.number}>
              <TableCell width={arcellWidth} sx={rowclass} align="center">
                <Box
                  sx={{
                    width: "1.2rem",
                    height: ".6rem",
                    background: data.color,
                  }}
                />
                {data.area}
              </TableCell>
              <TableCell sx={rowclass} align="center">
                {data.doAssign}
              </TableCell>
              <TableCell sx={rowclass} align="center">
                {data.demo}
              </TableCell>
              <TableCell sx={rowclass} align="center">
                {data.doUnAssigned}
              </TableCell>
              <TableCell sx={rowclass} align="center">
                {data.damage}
              </TableCell>
              <TableCell sx={rowclass} align="center">
                {data.beforePDI}
              </TableCell>
              <TableCell sx={rowclass} align="center">
                {data.exAssign}
              </TableCell>
              <TableCell sx={rowclass} align="center">
                {data.laos}
              </TableCell>
              <TableCell sx={rowclass} align="center">
                {data.cambodia}
              </TableCell>
              <TableCell sx={rowclass} align="center">
                {data.exUnAssigned}
              </TableCell>
              <TableCell sx={rowclass} align="center">
                {data.total}
              </TableCell>
              <TableCell sx={rowclass} align="center">
                {data.capacity}
              </TableCell>
              <TableCell sx={rowclass} align="center">
                {data.remain}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  };
  return (
    <Grid
      container
      spacing={2}
      key="main-grid"
      justifyContent="end"
      sx={{
        background: "#EEE",
        my: matches ? ".1rem" : undefined,
        px: matches ? 2 : 0,
      }}
    >
      <Grid
        item
        xs={12}
        md={12}
        lg={12}
        sx={{
          borderBottom: "1px solid #dc000d",
          paddingTop: "5px !important",
          paddingBottom: "5px",
          fontSize: ".8rem",
          fontWeight: "bold",
        }}
      >
        Yard Layout Status Visualization
      </Grid>

      <Grid item xs={12} md={12} lg={12}>
        {renderTables()}
      </Grid>
      <Grid item xs={12} md={12} lg={12}></Grid>
    </Grid>
  );
};
export default Visualization;
