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
import styled from "@emotion/styled";
import palette from "../../../shared/theme/palette";

const TableRowStyled = styled(TableRow)`
  &:nth-of-type(odd) {
    background-color: white;
  }
  &:nth-of-type(even) {
    background-color: ${palette.primary.lighter};
  }
`;
export default ({ account, currency, hight }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const sxhdcell = {
    font: "Roboto, medium",
    px: "5px",
    py: "10px",
    fontSize: "0.8rem",
    border: "none",
  };
  const sxbdcell = {
    px: "5px",
    py: "5px",
    color: palette.grey.darker,
    fontSize: "0.8rem",
    border: "none",
  };
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
                <TableRowStyled>
                  <TableCell sx={sxhdcell}>Sort Code</TableCell>
                  <TableCell sx={sxhdcell}>Account Number</TableCell>
                  <TableCell sx={sxhdcell}>Currency</TableCell>
                  <TableCell sx={sxhdcell}>Account Alias</TableCell>
                  <TableCell sx={sxhdcell}>Account Type</TableCell>
                </TableRowStyled>
              </TableHead>
              <TableBody>
                <TableRowStyled>
                  <TableCell
                    component="th"
                    scope="row"
                    className="redacted"
                    sx={sxbdcell}
                  >
                    {account.code}
                  </TableCell>
                  <TableCell sx={sxbdcell}>{account.accountNo}</TableCell>
                  <TableCell sx={sxbdcell}>{currency}</TableCell>
                  <TableCell sx={sxbdcell}>{account.name}</TableCell>
                  <TableCell sx={sxbdcell}>{account.accountType}</TableCell>
                </TableRowStyled>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </Paper>
  );
};
