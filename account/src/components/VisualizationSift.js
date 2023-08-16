import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import palette from "../../../shared/theme/palette";

const VisualizationSift = ({ title }) => {
  const tbclass = {
    fontSize: ".6rem",
    lineHeight: 1,
    "& th": {
      color: "rgba(96, 96, 96)",
    },
  };
  const rowclass = {
    fontSize: ".6rem",
    border: "1px solid #DEDEDE",
  };
  const arcellWidth = "700";
  return (
    <Grid container spacing={0}>
      <Grid item xs={12} md={12} lg={12} sx={{ background: palette.grey[300] }}>
        <Box display="flex" justifyContent={"center"}>
          <Typography variant="subtitle2">{title}</Typography>
        </Box>
      </Grid>
      <Grid item xs={12} md={12} lg={12}>
        <Table aria-label="customized table">
          <TableHead>
            <TableRow sx={{ ...tbclass, borderTop: "1px solid #DEDEDE" }}>
              <TableCell
                sx={{ ...tbclass, border: "1px solid #DEDEDE" }}
                align="center"
              >
                From Yord
              </TableCell>
              <TableCell
                sx={{ ...tbclass, border: "1px solid #DEDEDE" }}
                align="center"
              >
                7:30-8:30
              </TableCell>
              <TableCell
                sx={{ ...tbclass, border: "1px solid #DEDEDE" }}
                align="center"
              >
                9:30-9:30
              </TableCell>
              <TableCell
                sx={{ ...tbclass, border: "1px solid #DEDEDE" }}
                align="center"
              >
                9:30-10:30
              </TableCell>
              <TableCell
                sx={{ ...tbclass, border: "1px solid #DEDEDE" }}
                align="center"
              >
                10:30-11:30
              </TableCell>
              <TableCell
                sx={{
                  ...tbclass,
                  border: "1px solid #DEDEDE",
                }}
                align="center"
              >
                11:30-12:30
              </TableCell>
              <TableCell
                sx={{ ...tbclass, border: "1px solid #DEDEDE" }}
                align="center"
              >
                12:30-13:30
              </TableCell>
              <TableCell
                sx={{ ...tbclass, border: "1px solid #DEDEDE" }}
                align="center"
              >
                14:30-15:30
              </TableCell>
              <TableCell
                sx={{ ...tbclass, border: "1px solid #DEDEDE" }}
                align="center"
              >
                15:30-16:30
              </TableCell>
              <TableCell
                sx={{ ...tbclass, border: "1px solid #DEDEDE" }}
                align="center"
              >
                16:30-17:30
              </TableCell>
              <TableCell
                sx={{ ...tbclass, border: "1px solid #DEDEDE" }}
                align="center"
              >
                17:30-18:30
              </TableCell>
              <TableCell
                sx={{ ...tbclass, border: "1px solid #DEDEDE" }}
                align="center"
              >
                18:30-19:30
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow sx={{ ...tbclass, borderTop: "1px solid #DEDEDE" }}>
              <TableCell
                sx={{ ...tbclass, border: "1px solid #DEDEDE" }}
                align="center"
              >
                H/O
              </TableCell>
              <TableCell
                sx={{ ...tbclass, border: "1px solid #DEDEDE" }}
                align="center"
              ></TableCell>
              <TableCell
                sx={{ ...tbclass, border: "1px solid #DEDEDE" }}
                align="center"
              ></TableCell>
              <TableCell
                sx={{ ...tbclass, border: "1px solid #DEDEDE" }}
                align="center"
              ></TableCell>
              <TableCell
                sx={{ ...tbclass, border: "1px solid #DEDEDE" }}
                align="center"
              ></TableCell>
              <TableCell
                sx={{
                  ...tbclass,
                  border: "1px solid #DEDEDE",
                }}
                align="center"
              ></TableCell>
              <TableCell
                sx={{ ...tbclass, border: "1px solid #DEDEDE" }}
                align="center"
              ></TableCell>
              <TableCell
                sx={{ ...tbclass, border: "1px solid #DEDEDE" }}
                align="center"
              ></TableCell>
              <TableCell
                sx={{ ...tbclass, border: "1px solid #DEDEDE" }}
                align="center"
              ></TableCell>
              <TableCell
                sx={{ ...tbclass, border: "1px solid #DEDEDE" }}
                align="center"
              ></TableCell>
              <TableCell
                sx={{ ...tbclass, border: "1px solid #DEDEDE" }}
                align="center"
              ></TableCell>
              <TableCell
                sx={{ ...tbclass, border: "1px solid #DEDEDE" }}
                align="center"
              ></TableCell>
            </TableRow>
            <TableRow sx={{ ...tbclass, borderTop: "1px solid #DEDEDE" }}>
              <TableCell
                sx={{ ...tbclass, border: "1px solid #DEDEDE" }}
                align="center"
              >
                Bangplee
              </TableCell>
              <TableCell
                sx={{ ...tbclass, border: "1px solid #DEDEDE" }}
                align="center"
              ></TableCell>
              <TableCell
                sx={{ ...tbclass, border: "1px solid #DEDEDE" }}
                align="center"
              ></TableCell>
              <TableCell
                sx={{ ...tbclass, border: "1px solid #DEDEDE" }}
                align="center"
              ></TableCell>
              <TableCell
                sx={{ ...tbclass, border: "1px solid #DEDEDE" }}
                align="center"
              ></TableCell>
              <TableCell
                sx={{
                  ...tbclass,
                  border: "1px solid #DEDEDE",
                }}
                align="center"
              ></TableCell>
              <TableCell
                sx={{ ...tbclass, border: "1px solid #DEDEDE" }}
                align="center"
              ></TableCell>
              <TableCell
                sx={{ ...tbclass, border: "1px solid #DEDEDE" }}
                align="center"
              ></TableCell>
              <TableCell
                sx={{ ...tbclass, border: "1px solid #DEDEDE" }}
                align="center"
              ></TableCell>
              <TableCell
                sx={{ ...tbclass, border: "1px solid #DEDEDE" }}
                align="center"
              ></TableCell>
              <TableCell
                sx={{ ...tbclass, border: "1px solid #DEDEDE" }}
                align="center"
              ></TableCell>
              <TableCell
                sx={{ ...tbclass, border: "1px solid #DEDEDE" }}
                align="center"
              ></TableCell>
            </TableRow>
            <TableRow sx={{ ...tbclass, borderTop: "1px solid #DEDEDE" }}>
              <TableCell
                sx={{ ...tbclass, border: "1px solid #DEDEDE" }}
                align="center"
              >
                Gateway
              </TableCell>
              <TableCell
                sx={{ ...tbclass, border: "1px solid #DEDEDE" }}
                align="center"
              ></TableCell>
              <TableCell
                sx={{ ...tbclass, border: "1px solid #DEDEDE" }}
                align="center"
              ></TableCell>
              <TableCell
                sx={{ ...tbclass, border: "1px solid #DEDEDE" }}
                align="center"
              ></TableCell>
              <TableCell
                sx={{ ...tbclass, border: "1px solid #DEDEDE" }}
                align="center"
              ></TableCell>
              <TableCell
                sx={{
                  ...tbclass,
                  border: "1px solid #DEDEDE",
                }}
                align="center"
              ></TableCell>
              <TableCell
                sx={{ ...tbclass, border: "1px solid #DEDEDE" }}
                align="center"
              ></TableCell>
              <TableCell
                sx={{ ...tbclass, border: "1px solid #DEDEDE" }}
                align="center"
              ></TableCell>
              <TableCell
                sx={{ ...tbclass, border: "1px solid #DEDEDE" }}
                align="center"
              ></TableCell>
              <TableCell
                sx={{ ...tbclass, border: "1px solid #DEDEDE" }}
                align="center"
              ></TableCell>
              <TableCell
                sx={{ ...tbclass, border: "1px solid #DEDEDE" }}
                align="center"
              ></TableCell>
              <TableCell
                sx={{ ...tbclass, border: "1px solid #DEDEDE" }}
                align="center"
              ></TableCell>
            </TableRow>
            <TableRow sx={{ ...tbclass, borderTop: "1px solid #DEDEDE" }}>
              <TableCell
                sx={{ ...tbclass, border: "1px solid #DEDEDE" }}
                align="center"
              >
                Total
              </TableCell>
              <TableCell
                sx={{ ...tbclass, border: "1px solid #DEDEDE" }}
                align="center"
              >
                0
              </TableCell>
              <TableCell
                sx={{ ...tbclass, border: "1px solid #DEDEDE" }}
                align="center"
              >
                0
              </TableCell>
              <TableCell
                sx={{ ...tbclass, border: "1px solid #DEDEDE" }}
                align="center"
              >
                0
              </TableCell>
              <TableCell
                sx={{ ...tbclass, border: "1px solid #DEDEDE" }}
                align="center"
              >
                0
              </TableCell>
              <TableCell
                sx={{
                  ...tbclass,
                  border: "1px solid #DEDEDE",
                }}
                align="center"
              >
                0
              </TableCell>
              <TableCell
                sx={{ ...tbclass, border: "1px solid #DEDEDE" }}
                align="center"
              >
                0
              </TableCell>
              <TableCell
                sx={{ ...tbclass, border: "1px solid #DEDEDE" }}
                align="center"
              >
                0
              </TableCell>
              <TableCell
                sx={{ ...tbclass, border: "1px solid #DEDEDE" }}
                align="center"
              >
                0
              </TableCell>
              <TableCell
                sx={{ ...tbclass, border: "1px solid #DEDEDE" }}
                align="center"
              >
                0
              </TableCell>
              <TableCell
                sx={{ ...tbclass, border: "1px solid #DEDEDE" }}
                align="center"
              >
                0
              </TableCell>
              <TableCell
                sx={{ ...tbclass, border: "1px solid #DEDEDE" }}
                align="center"
              >
                0
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Grid>
    </Grid>
  );
};
export default VisualizationSift;
