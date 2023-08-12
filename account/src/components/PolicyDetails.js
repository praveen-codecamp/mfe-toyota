import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import palette from "../../../shared/theme/palette";
import { filterPolicyData } from "./policyData";
import Print from "./Print";

const PolicyDetails = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  let { policynumber } = useParams();
  const policyData = filterPolicyData(policynumber);
  const policyDetails = policyData[0];
  const renderPrintScreen = () => {
    return (
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="Download Policy"
        aria-describedby="Save Policy in pdf"
      >
        <Print docName={policynumber} callBack={handleClose}>
          {renderPolicyDetails()}
        </Print>
      </Modal>
    );
  };
  const renderPolicyDetails = () => {
    return (
      <Paper
        sx={{
          background: "#FFFFFF 0% 0% no-repeat padding-box;",
          p: 2,
        }}
      >
        <Grid container spacing={1} direction={"column"}>
          <Grid item xs={12} md={6} lg={6}>
            <Grid
              container
              justifyContent={"space-between"}
              sx={{ background: "#e6f2fd", p: 1, py: 2 }}
            >
              <Grid item>
                <Typography
                  variant="h6"
                  sx={{ display: "inline" }}
                  color={palette.primary.main}
                >
                  Policy Certificate
                </Typography>
              </Grid>
              <Grid item>
                <img
                  width="120rem"
                  height="30rem"
                  src={"/assets/img/assurant-logo.webp"}
                  loading="lazy"
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <Grid
              container
              justifyContent={"center"}
              sx={{ background: "#e6f2fd", p: 1 }}
            >
              <Grid item>
                <Typography variant="subtitle1">Policy information</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <Grid
              container
              justifyContent={"space-between"}
              sx={{ px: 3, my: 1 }}
            >
              <Grid item>
                <Typography variant="subtitle1">Policy Number</Typography>
                <Typography variant="body2">
                  {policyDetails.policyNumber}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1">Date</Typography>
                <Typography variant="body2">
                  {policyDetails.effectiveDate}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <Grid
              container
              justifyContent={"center"}
              sx={{ background: "#e6f2fd", p: 1 }}
            >
              <Grid item>
                <Typography variant="subtitle1">General information</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <Grid container spacing={2} sx={{ px: 3, mt: 1 }}>
              <Grid item xs={12} md={6} lg={6}>
                <Grid container spacing={3} direction={"column"}>
                  <Grid item>
                    <Typography variant="subtitle1">
                      Policy Initial Owner/Applicant
                    </Typography>
                    <Typography variant="body2">
                      {policyDetails.name}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="subtitle1">
                      Birthday of Applicant
                    </Typography>
                    <Typography variant="body2">17 Oct 1984</Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="subtitle1">
                      Birthplace of Applicant
                    </Typography>
                    <Typography variant="body2">NYC</Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="subtitle1">Email Address</Typography>
                    <Typography variant="body2">
                      {policyDetails.email}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={6} lg={6}>
                <Grid container spacing={3} direction={"column"}>
                  <Grid item>
                    <Typography variant="subtitle1">
                      Residance Address of Applicant
                    </Typography>
                    <Typography variant="body2">123 Main Steet NY</Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="subtitle1">
                      Gender of Applicant
                    </Typography>
                    <Typography variant="body2">Male</Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="subtitle1">
                      Civil Status of Applicant
                    </Typography>
                    <Typography variant="body2">Married</Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="subtitle1">Contact Number</Typography>
                    <Typography variant="body2">8588838177</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    );
  };
  return (
    <>
      <Grid
        container
        spacing={3}
        justifyContent="end"
        sx={{
          background: "#EEE",
          my: matches ? "2rem" : undefined,
          px: matches ? 2 : 0,
        }}
      >
        <Grid item xs={12} md={12} lg={12}>
          <Paper
            sx={{
              background: "#FFFFFF 0% 0% no-repeat padding-box;",
              boxShadow: "0px 3px 6px #0000001F",
              borderRadius: "10px",
              p: 2,
            }}
          >
            <Box textAlign={"right"}>
              <Button onClick={handleOpen} title="Download as PDF">
                <FileDownloadOutlinedIcon />
              </Button>
            </Box>
            {renderPolicyDetails()}
          </Paper>
        </Grid>
      </Grid>
      {renderPrintScreen()}
    </>
  );
};
export default PolicyDetails;
