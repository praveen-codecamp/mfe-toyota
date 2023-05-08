import React from "react";
import { Paper, Grid, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

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
        m: 2,
        height: matches ? "12rem" : undefined,
        width: matches ? "28rem" : undefined,
      }}
    >
      <Grid container spacing={1}>
        <Grid item xs={12} md={12} lg={12}>
          <Grid container spacing={2} sx={{ px: 1, pt: 1 }}>
            <Grid
              item
              xs={8}
              md={12}
              lg={12}
              container
              justifyContent="space-between"
            >
              <Typography
                variant="subtitle1"
                sx={{
                  opacity: 1,
                  color: "#204F88",
                  font: "Roboto, medium",
                  fontSize: "0.7rem",
                  fontWeight: "bold",
                }}
              >
                Account Details
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{
                  opacity: 1,
                  color: "#41414180",
                  font: "Roboto, medium",
                  fontSize: "0.7rem",
                }}
              >
                Select Account <ExpandMoreIcon fontSize="0.7rem" />
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <TableContainer
        component={Paper}
        sx={{ padding: "0", border: "none", boxShadow: "none" }}
      >
        <Table aria-label="simple table">
          <TableHead>
            <TableRow sx={{ color: "#41414180" }}>
              <TableCell
                sx={{ padding: "5px", fontSize: "0.7rem", border: "none" }}
              >
                Sort Code
              </TableCell>
              <TableCell
                sx={{ padding: "5px", fontSize: "0.7rem", border: "none" }}
              >
                Account Number
              </TableCell>
              <TableCell
                sx={{ padding: "5px", fontSize: "0.7rem", border: "none" }}
              >
                Currency
              </TableCell>
              <TableCell
                sx={{ padding: "5px", fontSize: "0.7rem", border: "none" }}
              >
                Account Alias
              </TableCell>
              <TableCell
                sx={{ padding: "5px", fontSize: "0.7rem", border: "none" }}
              >
                Account Type
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell
                component="th"
                scope="row"
                className="redacted"
                sx={{
                  padding: "5px",
                  fontWeight: "bold",
                  color: "#204f88",
                  fontSize: "0.7rem",
                  border: "none",
                }}
              >
                02-98-66
              </TableCell>
              <TableCell
                sx={{
                  padding: "5px",
                  fontWeight: "bold",
                  color: "#204f88",
                  fontSize: "0.7rem",
                  border: "none",
                }}
              >
                1000000212633
              </TableCell>
              <TableCell
                sx={{
                  padding: "5px",
                  fontWeight: "bold",
                  color: "#204f88",
                  fontSize: "0.7rem",
                  border: "none",
                }}
              >
                USD
              </TableCell>
              <TableCell
                sx={{
                  padding: "5px",
                  fontWeight: "bold",
                  color: "#204f88",
                  fontSize: "0.7rem",
                  border: "none",
                }}
              >
                Jon Yml
              </TableCell>
              <TableCell
                sx={{
                  padding: "5px",
                  fontWeight: "bold",
                  color: "#204f88",
                  fontSize: "0.7rem",
                  border: "none",
                }}
              >
                Business Current
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};
