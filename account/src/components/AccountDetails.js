import React from "react";
import { Paper, Grid, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

export default ({ account, currency }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <Paper
      sx={{
        background: "#FFFFFF 0% 0% no-repeat padding-box;",
        boxShadow: "0px 3px 6px #0000001F",
        borderRadius: "10px",
        height: matches ? "10rem" : undefined,
        mb: 4,
        mt: 1,
        pl: 1,
      }}
    >
      <Grid container spacing={1}>
        <Grid item xs={12} md={12} lg={12}>
          <Grid container spacing={2} sx={{ px: 1, pt: 1 }}>
            <Grid
              item
              xs={12}
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
                  fontSize: "1rem",
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
        sx={{ border: "none", boxShadow: "none" }}
      >
        <Table aria-label="simple table">
          <TableHead>
            <TableRow sx={{ color: "#41414180" }}>
              <TableCell
                sx={{ padding: "5px", fontSize: "0.5rem", border: "none" }}
              >
                Sort Code
              </TableCell>
              <TableCell
                sx={{ padding: "5px", fontSize: "0.5rem", border: "none" }}
              >
                Account Number
              </TableCell>
              <TableCell
                sx={{ padding: "5px", fontSize: "0.5rem", border: "none" }}
              >
                Currency
              </TableCell>
              <TableCell
                sx={{ padding: "5px", fontSize: "0.5rem", border: "none" }}
              >
                Account Alias
              </TableCell>
              <TableCell
                sx={{ padding: "5px", fontSize: "0.5rem", border: "none" }}
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
                  fontSize: "0.6rem",
                  border: "none",
                }}
              >
                {account.code}
              </TableCell>
              <TableCell
                sx={{
                  padding: "5px",
                  fontWeight: "bold",
                  color: "#204f88",
                  fontSize: "0.6rem",
                  border: "none",
                }}
              >
                {account.accountNo}
              </TableCell>
              <TableCell
                sx={{
                  padding: "5px",
                  fontWeight: "bold",
                  color: "#204f88",
                  fontSize: "0.6rem",
                  border: "none",
                }}
              >
                {currency}
              </TableCell>
              <TableCell
                sx={{
                  padding: "5px",
                  fontWeight: "bold",
                  color: "#204f88",
                  fontSize: "0.6rem",
                  border: "none",
                }}
              >
                {account.name}
              </TableCell>
              <TableCell
                sx={{
                  padding: "5px",
                  fontWeight: "bold",
                  color: "#204f88",
                  fontSize: "0.6rem",
                  border: "none",
                }}
              >
                {account.accountType}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};
