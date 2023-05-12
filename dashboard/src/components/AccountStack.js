import React, { useState } from "react";
import { Paper, Stack, Grid, Typography, Divider } from "@mui/material";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { styled } from "@mui/material/styles";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { defaultCurrency } from "../../../shared/constants";
import palette from "../../../shared/theme/palette";

const Item = styled(Paper)(({ theme, isSelected }) => ({
  backgroundColor: isSelected
    ? palette.primary.light
    : palette.primary.contrastText,
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "left",
  color: theme.palette.text.secondary,
  height: "7rem",
  width: "14.2rem",
  boxShadow: "0px 3px 6px #0000001F",
  borderRadius: "4px",
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));
const accounts = [
  {
    accountNo: "DE00 45678 89876 5678",
    accountType: "Current Account",
    balance: "71,38,657.45",
    balanceType: "Available",
  },
  {
    accountNo: 1000000216189,
    accountType: "Current Account",
    balance: "7,100.89",
    balanceType: "Available",
  },
  {
    accountNo: 1000000216150,
    accountType: "Current Account",
    balance: "75,500.77",
    balanceType: "Available",
  },
  {
    accountNo: 4000000698928,
    accountType: "Loan Account",
    balance: "23,234.09",
    balanceType: "Outstanding",
  },
  {
    accountNo: 4000000698988,
    accountType: "Loan Account",
    balance: "78,100.69",
    balanceType: "Outstanding",
  },
  {
    accountNo: 4000000698990,
    accountType: "Loan Account",
    balance: "89,197.75",
    balanceType: "Outstanding",
  },
];
export default function AccountStack() {
  const [selectedAccount, setSelectedAccount] = useState(accounts[0]);
  const [sliceIndex, setSliceIndex] = useState(0);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const renderItem = (isSelected, account = {}) => {
    return (
      <Grid
        container
        spacing={0.3}
        sx={{
          px: ".5rem",
        }}
      >
        <Grid item xs={12} md={12} lg={12} sx={{ textAlign: "end" }}>
          <MoreVertIcon
            sx={{
              color: isSelected ? palette.primary.contrastText : undefined,
              fontSize: "small",
            }}
          />
        </Grid>
        <Grid item xs={3} md={3} lg={3}>
          <AccountBalanceIcon
            sx={{
              color: palette.primary.main,
              border: "solid 1px",
              padding: ".4rem",
              mx: ".4rem",
              borderRadius: 50,
              background: palette.primary.lighter,
              width: "1.8rem",
              height: "1.8rem",
            }}
          />
        </Grid>
        <Grid item xs={9} md={9} lg={9}>
          <Typography
            variant="body2"
            sx={{
              color: isSelected ? palette.primary.contrastText : undefined,
              opacity: 0.9,
            }}
          >
            Account Balance
          </Typography>
          <Typography
            variant="caption"
            sx={{
              color: isSelected ? palette.primary.contrastText : undefined,
              display: "inline",
            }}
          >
            {defaultCurrency.symbol + " "}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: isSelected ? palette.primary.contrastText : undefined,
              display: "inline",
            }}
          >
            {account.balance}
          </Typography>
        </Grid>
        <Divider
          sx={{
            color: isSelected ? palette.primary.contrastText : undefined,
            mt: ".8rem",
            opacity: 1,
            width: "12rem",
          }}
          variant="middle"
        />
        <Grid item xs={12} md={12} lg={12}>
          <Typography
            variant="subtitle2"
            sx={{
              color: isSelected
                ? palette.primary.contrastText
                : palette.primary.main,
              textAlign: "center",
            }}
          >
            {account.accountNo}
          </Typography>
        </Grid>
      </Grid>
    );
  };
  return (
    <Grid container spacing={1}>
      <Grid item xs={12} md={12} lg={12}>
        <Grid container spacing={1}>
          <Grid item xs={6} md={6} lg={6}>
            <Typography variant="h6" color={palette.primary.main}>
              All Account balances
            </Typography>
          </Grid>
          <Grid item xs={6} md={6} lg={6} sx={{ textAlign: "right" }}>
            <ArrowBackIosIcon onClick={() => setSliceIndex(sliceIndex + 1)} />
            <ArrowForwardIosIcon
              sx={{ color: palette.primary.main }}
              onClick={() => setSliceIndex(sliceIndex - 1)}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} md={12} lg={12}>
        <Stack direction={matches ? "row" : "column"} spacing={3}>
          {accounts.slice(sliceIndex, matches ? 5 : 1).map((account) => {
            const isSelected = selectedAccount.accountNo === account.accountNo;
            return (
              <Item
                key={account.accountNo}
                isSelected={isSelected}
                onClick={() => setSelectedAccount(account)}
              >
                {renderItem(isSelected, account)}
              </Item>
            );
          })}
        </Stack>
      </Grid>
    </Grid>
  );
}
