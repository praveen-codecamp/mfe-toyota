import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import { Button, Select, MenuItem, InputLabel } from "@mui/material";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import FormLabel from "@mui/material/FormLabel";
import SearchIcon from "@mui/icons-material/Search";
import { useTheme } from "@mui/material/styles";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import useMediaQuery from "@mui/material/useMediaQuery";
import { DomesticAndShuttleOption } from "./DomesticAndShuttleOption";
import CallingSheetTable from "./CallingSheetTable";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 1 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 3,
          }}
        >
          <CloseIcon sx={{ color: "#fff" }} />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

const CallingSheet = () => {
  const [value, setValue] = React.useState("Auto");
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  const renderRadio = (lbl) => {
    return (
      <FormControl>
        <RadioGroup
          row
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          value={value}
          onChange={handleChange}
        >
          <FormControlLabel value={lbl} control={<Radio />} label={lbl} />
        </RadioGroup>
      </FormControl>
    );
  };
  const renderAuto = () => {
    return (
      <Grid container spacing={3} sx={{ px: 3 }}>
        <Grid
          item
          xs={12}
          md={12}
          lg={12}
          sx={{ borderBottom: "1px solid #DEDEDE" }}
        >
          {renderRadio("Auto")}
        </Grid>
        <Grid
          item
          xs={12}
          md={12}
          lg={12}
          sx={{ borderBottom: "1px solid #DEDEDE" }}
        >
          <Typography variant="body2">
            Calling Sheet Complete Remaining
          </Typography>
        </Grid>
        <DomesticAndShuttleOption value={value} handleChange={handleChange} />
        <Grid item xs={12} md={12} lg={6}>
          <Typography variant="subtitle2">Export</Typography>
          <Box sx={{ borderBottom: "1px solid #DEDEDE" }}>
            <FormControl>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={value}
                onChange={handleChange}
              >
                <FormControlLabel
                  value="ShuttleSR"
                  control={<Radio />}
                  label="Export SR"
                />
                <FormControlLabel
                  value="ShuttleSRBP"
                  control={<Radio />}
                  label="Export SR (Commuter)"
                />
                <FormControlLabel
                  value="ShuttleSRBL"
                  control={<Radio />}
                  label="Export SR A1-Morocco"
                />
              </RadioGroup>
            </FormControl>
          </Box>
        </Grid>
        <Grid item xs={12} md={12} lg={6}>
          <Typography variant="subtitle2">Conversion</Typography>
          <Box sx={{ height: "8rem", borderBottom: "1px solid #DEDEDE" }}></Box>
        </Grid>
      </Grid>
    );
  };
  const renderManual = () => {
    return (
      <>
        <Grid container spacing={3} sx={{ px: 3 }}>
          <Grid
            item
            xs={12}
            md={12}
            lg={12}
            sx={{ borderBottom: "1px solid #DEDEDE" }}
          >
            {renderRadio("Manual")}
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <InputLabel id="demo-modal">Trailer loading</InputLabel>
          </Grid>
          <Grid container spacing={2} sx={{ px: 3 }}>
            <Grid item>
              <TextField
                size="small"
                id="outlined-multiline-flexible"
                placeholder="..."
              />
            </Grid>
            <Grid item>
              <Button
                variant="outlined"
                color="error"
                onClick={() => console.log("i am here")}
              >
                Generate
              </Button>
            </Grid>
          </Grid>

          <Grid container sx={{ pt: 3, px: 2, mx: 1 }}>
            <Grid
              item
              xs={12}
              md={12}
              lg={12}
              sx={{ borderBottom: "1px solid #DEDEDE" }}
            >
              <FormControl
                fullWidth
                sx={{ borderRadius: "0px", borderColor: "#FFFFFF" }}
              >
                <TextField id="filled-multiline-flexible" multiline rows={3} />
              </FormControl>
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            md={12}
            lg={12}
            sx={{ borderBottom: "1px solid #DEDEDE" }}
          >
            <Typography variant="body2">Transportation Route Group</Typography>
          </Grid>
          <DomesticAndShuttleOption value={value} handleChange={handleChange} />
          <Grid item xs={12} md={12} lg={6}>
            <Typography variant="subtitle2">Export</Typography>
            <Box sx={{ borderBottom: "1px solid #DEDEDE" }}>
              <FormControl>
                <RadioGroup
                  aria-labelledby="demo-controlled-radio-buttons-group"
                  name="controlled-radio-buttons-group"
                  value={value}
                  onChange={handleChange}
                >
                  <FormControlLabel
                    value="ShuttleSR"
                    control={<Radio />}
                    label="Dealer/Port"
                  />
                  <FormControlLabel
                    value="ShuttleSRBP"
                    control={<Radio />}
                    label="Shuttle to other yard"
                  />
                  <FormControlLabel
                    value="ShuttleSRBL"
                    control={<Radio />}
                    label="Conversion"
                  />
                </RadioGroup>
              </FormControl>
            </Box>
          </Grid>
        </Grid>
      </>
    );
  };
  return (
    <Grid
      container
      spacing={2}
      key="main-grid"
      justifyContent="end"
      sx={{
        background: "#EEE",
        my: matches ? "2rem" : undefined,
        px: matches ? 2 : 0,
      }}
    >
      <Grid
        item
        xs={12}
        md={12}
        lg={12}
        sx={{
          borderBottom: "1px solid #dc000d",
          paddingTop: "5px !important",
          paddingBottom: "5px",
          fontSize: ".8rem",
          fontWeight: "bold",
        }}
      >
        Calling Sheet Making - H/O Yard
      </Grid>
      <Grid item xs={12} md={12} lg={12}>
        <Paper
          sx={{
            background: "#FFFFFF 0% 0% no-repeat padding-box;",
            boxShadow: "0px 3px 6px #0000001F",
            borderRadius: "10px",
            p: 2,
          }}
        >
          <Grid container spacing={2}>
            <Grid
              item
              xs={12}
              md={12}
              lg={6}
              sx={{
                borderRight: "1px solid #DEDEDE",
                mt: 1,
              }}
            >
              {renderAuto()}
            </Grid>

            {/* <Divider
              orientation="vertical"
              variant="middle"
              flexItem
              sx={{
                align: "center",
                mt: 2,
              }}
            /> */}
            <Grid item xs={12} md={12} lg={6}>
              {renderManual()}
            </Grid>
            <Grid
              item
              xs={12}
              md={12}
              lg={12}
              sx={{ mt: 2, px: 3, borderTop: "1px solid #DEDEDE" }}
            >
              <Stack
                spacing={2}
                direction="row"
                display="flex"
                justifyContent="flex-end"
              >
                <Button variant="contained" onClick={handleClickOpen}>
                  Preview
                </Button>
                <Button variant="contained">Edit Delivery Plan Matching</Button>
                <Button variant="contained">Refresh</Button>
              </Stack>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid item xs={12} md={12} lg={12}></Grid>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
          sx={{
            background: "red",
            color: "#fff",
            fontWeight: "200",
            padding: 2,
          }}
        >
          Complete Calling Sheet Remaining
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <CallingSheetTable />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            sx={{ paddingRight: 2, color: "white", background: "#656565" }}
            variant="outlined"
          >
            Cancel
          </Button>
          <Button
            onClick={handleClose}
            sx={{ paddingRight: 2, color: "white", background: "#656565" }}
            variant="outlined"
          >
            Preview
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </Grid>
  );
};
export default CallingSheet;
