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
import VehicleLeadTime from "./VehicleLeadTime";

const Visualization = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  const renderTables = () => {
    return (
      <Grid container spacing={0.5}>
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
        <Grid item xs={12} md={12} lg={2}>
          <VehicleLeadTime />
        </Grid>
        <Grid item xs={12} md={12} lg={2}></Grid>
      </Grid>
    );
  };
  const parkingStatusByAreaType = () => {
    const tbclass = {
      fontSize: ".4rem",
      "& th": {
        color: "rgba(96, 96, 96)",
      },
      lineHeight: "0.5rem",
      padding: "2px",
    };
    const rowclass = {
      fontSize: ".4rem",
      border: "1px solid #DEDEDE",
      lineHeight: "0.5rem",
      padding: "2px",
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
      {
        color: "#FF33E6",
        area: "Shuttle Receiving",
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
      {
        color: "#bde4f8",
        area: "PIO Pre-Installation",
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
      {
        color: "#DAF7A6",
        area: "Export Lanes",
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
      {
        color: "#82aaff",
        area: "Export Japan 2",
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
      {
        color: "#ffcb6b",
        area: "Cambodia",
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
      {
        color: "#AD401C",
        area: "Export to ",
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
      {
        color: "Abnormal Parking",
        area: "Abnormal Parking",
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
      {
        color: "Abnormal Parking",
        area: "Total Volume",
        doAssign: "1",
        demo: "",
        doUnAssigned: "30",
        damage: "",
        beforePDI: "",
        exAssign: "7",
        laos: "",
        cambodia: "1",
        exUnAssigned: "",
        total: "324",
        capacity: "1227",
        remain: "903",
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
            >
              Remain/
            </TableCell>
          </TableRow>
          <TableRow sx={tbclass}>
            <TableCell
              width={arcellWidth}
              sx={{ ...tbclass, borderLeft: "1px solid #DEDEDE" }}
              colSpan={1}
              align="center"
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
              Over
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
              PDI
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
            >
              Capacity
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {areaType.map((data, i) => (
            <TableRow
              sx={
                i == areaType.length - 1
                  ? { ...tbclass, backgroundColor: "#d3d3d3" }
                  : { ...tbclass }
              }
              key={data.number}
            >
              <TableCell width={arcellWidth} sx={rowclass} align="center">
                <Box
                  sx={{
                    width: "0.9rem",
                    height: ".4rem",
                    background: data.color,
                    display: "inline-block",
                    padding: "0",
                    float: "left",
                  }}
                />
                <Box sx={{ display: "inline-block" }}>{data.area}</Box>
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
      spacing={1}
      key="main-grid"
      justifyContent="end"
      sx={{
        background: "#EEE",
        my: matches ? ".1rem" : undefined,
        px: matches ? 1 : 0,
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
