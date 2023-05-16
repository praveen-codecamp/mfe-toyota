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
import palette from "../../../shared/theme/palette";

export default ({ account, currency, hight }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <Paper
      sx={{
        background: "#FFFFFF 0% 0% no-repeat padding-box;",
        boxShadow: "0px 3px 6px #0000001F",
        borderRadius: "10px",
        height: matches ? hight || "14rem" : undefined,
        p: 2,
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} md={12} lg={12}>
          <Grid container spacing={2}>
            <Grid
              item
              xs={12}
              md={12}
              lg={12}
              container
              justifyContent="space-between"
            >
              <Typography variant="h6" color={palette.primary.main}>
                Account Details
              </Typography>
              <Typography variant="subtitle2" color={palette.grey.lighter}>
                Select Account <ExpandMoreIcon fontSize="0.7rem" />
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <TableContainer
            component={Paper}
            sx={{ border: "none", boxShadow: "none" }}
          >
            <Table aria-label="account table">
              <TableHead>
                <TableRow>
                  <TableCell
                    sx={{
                      font: "Roboto, medium",
                      padding: "5px",
                      fontSize: "0.6rem",
                      border: "none",
                    }}
                  >
                    Sort Code
                  </TableCell>
                  <TableCell
                    sx={{
                      font: "Roboto, medium",
                      padding: "5px",
                      fontSize: "0.6rem",
                      border: "none",
                    }}
                  >
                    Account Number
                  </TableCell>
                  <TableCell
                    sx={{
                      font: "Roboto, medium",
                      padding: "5px",
                      fontSize: "0.6rem",
                      border: "none",
                    }}
                  >
                    Currency
                  </TableCell>
                  <TableCell
                    sx={{
                      font: "Roboto, medium",
                      padding: "5px",
                      fontSize: "0.6rem",
                      border: "none",
                    }}
                  >
                    Account Alias
                  </TableCell>
                  <TableCell
                    sx={{
                      font: "Roboto, medium",
                      padding: "5px",
                      fontSize: "0.6rem",
                      border: "none",
                    }}
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
                      color: palette.primary.main,
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
                      color: palette.primary.main,
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
                      color: palette.primary.main,
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
                      color: palette.primary.main,
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
                      color: palette.primary.main,
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
        </Grid>
      </Grid>
    </Paper>
  );
};
