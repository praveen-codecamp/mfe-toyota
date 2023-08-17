import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import Divider from "@mui/material/Divider";

export default function CallingSheetForm() {
  return (
    <>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1 },
        }}
        noValidate
        autoComplete="off"
      >
        <Grid container spacing={1} sx={{ px: 1 }}>
          <Grid item lg={4}>
            <InputLabel id="demo-modal" sx={{ width: "10ch" }}>
              วัน-เวลารับเอกสาร
            </InputLabel>
          </Grid>
          <Grid item lg={8}>
            <TextField
              id="standard-basic"
              variant="standard"
              sx={{ width: "15ch" }}
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
            <TextField
              id="standard-basic"
              variant="standard"
              sx={{ width: "15ch" }}
            />
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
            <TextField
              id="standard-basic"
              variant="standard"
              sx={{ width: "15ch" }}
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
            <TextField
              id="standard-basic"
              variant="standard"
              sx={{ width: "15ch" }}
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
            <TextField
              id="standard-basic"
              variant="standard"
              sx={{ width: "15ch" }}
            />
          </Grid>
        </Grid>
        <Grid container spacing={1} sx={{ px: 1 }}>
          <Grid item lg={4}>
            <InputLabel id="demo-modal" sx={{ width: "10ch" }}>
              ผู้ออกเอกสาร
            </InputLabel>
          </Grid>
          <Grid item lg={8}>
            <TextField
              id="standard-basic"
              variant="standard"
              sx={{ width: "15ch" }}
            />
          </Grid>
        </Grid>
        <Grid container spacing={1} sx={{ px: 1 }}>
          <Grid item lg={4}>
            <InputLabel id="demo-modal" sx={{ width: "10ch" }}>
              ผู้อนุมัติ
            </InputLabel>
          </Grid>
          <Grid item lg={8}>
            <TextField
              id="standard-basic"
              variant="standard"
              sx={{ width: "15ch" }}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
