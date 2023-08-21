import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

const routeSubHeadStyle = {
  fontSize: 12,
  lineHeight: "0.8",
  paddingTop: 1,
  paddingLeft: 0.5,
};

export default function CallingSheetForm() {
  return (
    <>
      <Typography sx={routeSubHeadStyle}>Transportation Route Group</Typography>
      <Typography sx={routeSubHeadStyle}>Export SR</Typography>
      <Typography sx={routeSubHeadStyle}>
        Transportation Route/Sub-Transportation Route
      </Typography>
      <Button
        variant="outlined"
        sx={{
          height: "5.5vh",
          minWidth: "90%",
          fontsize: "1rem",
          background: "#F3F3F3",
          color: "black",
          border: "none",
          pointerEvents: "none",
          borderRadius: "0px",
        }}
        onClick={() => console.log("i am here")}
      >
        Export SR 76rai
      </Button>

      <Box component="form" noValidate autoComplete="off">
        <Grid container spacing={1} sx={{ px: 1, maxHeight: "10vh" }}>
          <Grid item lg={4}>
            <InputLabel id="demo-modal" sx={{ width: "10ch" }}>
              วัน-เวลารับเอกสาร
            </InputLabel>
          </Grid>
          <Grid item lg={8}>
            <TextField
              id="standard-basic"
              size="small"
              margin="none"
              variant="standard"
            />
          </Grid>
        </Grid>
        <Grid container spacing={1} sx={{ px: 1 }}>
          <Grid item lg={4}>
            <InputLabel id="demo-modal" sx={{ width: "10ch" }}>
              ผู้รับเอก?สาร
            </InputLabel>
          </Grid>
          <Grid item lg={8}>
            <TextField id="standard-basic" variant="standard" />
          </Grid>
        </Grid>
        <Divider></Divider>
        <Grid container>
          <Grid item lg={4}>
            <Grid container>
              <Grid item lg={4}>
                <InputLabel id="demo-modal">บริษัท</InputLabel>
              </Grid>
              <Grid item lg={8}>
                <TextField id="standard-basic" variant="standard" />
              </Grid>
            </Grid>
          </Grid>
          <Grid item lg={8}>
            <TextField id="standard-basic" variant="standard" />
          </Grid>
        </Grid>
        <Grid container spacing={1} sx={{ px: 1 }}>
          <Grid item lg={4}>
            <InputLabel id="demo-modal" sx={{ width: "10ch" }}>
              ผู้รับเอก?สาร
            </InputLabel>
          </Grid>
          <Grid item lg={8}>
            <TextField id="standard-basic" variant="standard" />
          </Grid>
        </Grid>
        <Grid container spacing={1} sx={{ px: 1 }}>
          <Grid item lg={4}>
            <InputLabel id="demo-modal" sx={{ width: "10ch" }}>
              ผู้รับเอก?สาร
            </InputLabel>
          </Grid>
          <Grid item lg={8}>
            <TextField id="standard-basic" variant="standard" />
          </Grid>
        </Grid>
        <Grid container spacing={1} sx={{ px: 1 }}>
          <Grid item lg={4}>
            <InputLabel id="demo-modal" sx={{ width: "10ch" }}>
              ผู้ออกเอกสาร
            </InputLabel>
          </Grid>
          <Grid item lg={8}>
            <TextField id="standard-basic" variant="standard" />
          </Grid>
        </Grid>
        <Grid container spacing={1} sx={{ px: 1 }}>
          <Grid item lg={4}>
            <InputLabel id="demo-modal" sx={{ width: "10ch" }}>
              ผู้อนุมัติ
            </InputLabel>
          </Grid>
          <Grid item lg={8}>
            <TextField id="standard-basic" variant="standard" />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
