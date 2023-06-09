import React, { useState } from "react";
import {
  Paper,
  Box,
  Typography,
  Tabs,
  Tab,
  TableContainer,
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import styled from "@emotion/styled";
import palette from "../../../shared/theme/palette";

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 2 }}>{children}</Box>}
    </div>
  );
}
const TableRowStyled = styled(TableRow)`
  &:nth-of-type(odd) {
    background-color: white;
  }
  &:nth-of-type(even) {
    background-color: ${palette.primary.lighter};
  }
`;
const AccountSummry = ({ account, currency, getAmont }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const [value, setValue] = useState(0);

  const handleChangeTabs = (event, newValue) => {
    setValue(newValue);
  };
  const sxhdcell = {
    font: "Roboto, medium",
    px: "5px",
    py: "10px",
    fontSize: "0.8rem",
    border: "none",
  };
  const sxbdcell = {
    p: "5px",
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
        height: matches ? "14rem" : undefined,
        p: 1,
      }}
    >
      <Tabs
        value={value}
        onChange={handleChangeTabs}
        TabIndicatorProps={{
          style: {
            backgroundColor: palette.primary.main,
          },
        }}
        fullWidth
      >
        <Tab
          sx={{
            fontSize: ".7rem",
            "&.Mui-selected": { color: palette.primary.main },
          }}
          label="Current & Deposits"
        />
        <Tab
          label="Foreign Curency"
          sx={{
            fontSize: ".7rem",
            "&.Mui-selected": { color: palette.primary.main },
          }}
        />
        <Tab
          label="Fixed Rate Deposit"
          sx={{
            fontSize: ".7rem",
            "&.Mui-selected": { color: palette.primary.main },
          }}
        />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Typography variant="h6" color={palette.primary.main}>
          Current Accounts Balance Summary
        </Typography>

        <TableContainer
          component={Paper}
          sx={{ mt: 2, border: 0, boxShadow: 0 }}
        >
          <Table
            aria-label="Current Accounts Balance Summary table"
            sx={{ border: 0 }}
          >
            <TableHead>
              <TableRowStyled>
                <TableCell sx={sxhdcell}>Account ID</TableCell>
                <TableCell sx={sxhdcell}>Currency</TableCell>
                <TableCell sx={sxhdcell}>Current Balance</TableCell>
                <TableCell sx={sxhdcell}>Current available Balance</TableCell>
                <TableCell sx={sxhdcell}>Actions</TableCell>
              </TableRowStyled>
            </TableHead>
            <TableBody
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
              }}
            >
              <TableRowStyled sx={{ border: 0 }}>
                <TableCell component="th" scope="row" sx={sxbdcell}>
                  {account.accountNo}
                </TableCell>
                <TableCell sx={sxbdcell}>{currency}</TableCell>
                <TableCell className="redacted" sx={sxbdcell}>
                  {currency} {getAmont(account.balance)}
                </TableCell>
                <TableCell className="redacted" sx={sxbdcell}>
                  {currency} {getAmont(account.balance)}
                </TableCell>
                <TableCell sx={sxbdcell}>...</TableCell>
              </TableRowStyled>
            </TableBody>
          </Table>
        </TableContainer>
      </TabPanel>
    </Paper>
  );
};
export default AccountSummry;
