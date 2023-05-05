import React, { useState } from "react";
import { Paper, Stack, Grid, Typography, Divider } from "@mui/material";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme, isSelected }) => ({
  backgroundColor: isSelected ? "#0179BF" : "#FFFFFF",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "left",
  color: theme.palette.text.secondary,
  height: "7rem",
  width: "14.2rem",
  boxShadow: "0px 3px 6px #0000001F",
  borderRadius: "3px",
}));
const accounts = [
  {
    accountNo: "DE00 45678 89876 5678",
    accountType: "Current Account",
    balance: "3,234.09",
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
];
export default function AccountStack() {
  const [selectedAccount, setSelectedAccount] = useState(accounts[0]);
  const renderItem = (isSelected, account = {}) => {
    return (
      <Grid
        container
        spacing={0.3}
        sx={{
          px: ".5rem",
        }}
      >
        <Grid item lg={12} sx={{ textAlign: "end" }}>
          <MoreVertIcon
            sx={{
              color: isSelected ? "#f0f8fc" : undefined,
              fontSize: "small",
            }}
          />
        </Grid>
        <Grid item>
          <AccountBalanceIcon
            sx={{
              color: "#0179BF",
              border: "solid 1px",
              padding: ".4rem",
              mx: ".4rem",
              borderRadius: 50,
              background: "#f0f8fc",
              width: "1.8rem",
              height: "1.8rem",
            }}
          />
        </Grid>
        <Grid item>
          <Typography
            sx={{
              color: isSelected ? "#FFFFFF" : undefined,
              font: "Roboto, medium",
              fontSize: ".7rem",
              opacity: 0.9,
            }}
          >
            Account Balance
          </Typography>
          <Typography
            sx={{
              color: isSelected ? "#FFFFFF" : undefined,
              font: "Roboto, medium",
              fontSize: ".7rem",
              opacity: 0.9,
              display: "inline",
            }}
          >
            USD{" "}
          </Typography>
          <Typography
            sx={{
              color: isSelected ? "#FFFFFF" : undefined,
              font: "Roboto, medium",
              opacity: 0.9,
              display: "inline",
            }}
          >
            {account.balance}
          </Typography>
        </Grid>
        <Divider
          sx={{
            color: isSelected ? "#FFFFFF" : undefined,
            mt: ".8rem",
            opacity: 1,
            width: "12rem",
          }}
          variant="middle"
        />
        <Grid item lg={12}>
          <Typography
            sx={{
              color: isSelected ? "#FFFFFF" : undefined,
              font: "Roboto, small",
              fontSize: "1rem",
              fontSize: ".6rem",
              opacity: 0.7,
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
            <Typography
              variant="subtitle1"
              sx={{
                opacity: 1,
                color: "#204F88",
                font: "Roboto, medium",
                fontSize: "1.rem",
              }}
            >
              All Account balances
            </Typography>
          </Grid>
          <Grid item xs={6} md={6} lg={6} sx={{ textAlign: "right" }}>
            <ArrowBackIosIcon />
            <ArrowForwardIosIcon sx={{ color: "#204F88" }} />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} md={12} lg={12}>
        <Stack direction="row" justifyContent={"space-around"}>
          {accounts.map((account) => {
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
