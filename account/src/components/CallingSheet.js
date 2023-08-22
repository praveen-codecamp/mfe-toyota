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
import CallingSheetCard from "./CallingSheetCard";
import CallingSheetForm from "./CallingSheetForm";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  // "& .MuiDialogContent-root": {
  //   padding: theme.spacing(2),
  // },
  // "& .MuiDialogActions-root": {
  //   padding: theme.spacing(1),
  // },
}));

//2020 LOAD
// container
// auth
// dashboard
// account

const TextFieldModified = styled(TextField)(({ theme }) => ({
  "& .MuiInputBase-root": {
    height: "5.5vh",
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

  const [openJobSheet, setOpenJobSheet] = useState(false);

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
          <FormControlLabel
            value={lbl}
            control={<Radio />}
            label={lbl}
            className="custom-radio-button"
          />
        </RadioGroup>
      </FormControl>
    );
  };
  const renderAuto = () => {
    return (
      <Grid container spacing={3} sx={{ px: 2 }}>
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
          sx={{
            borderBottom: "1px solid #DEDEDE",
            paddingTop: "8px !important",
          }}
        >
          <Typography variant="body2">
            Calling Sheet Complete Remaining
          </Typography>
        </Grid>
        <DomesticAndShuttleOption value={value} handleChange={handleChange} />
        <Grid item xs={12} md={12} lg={6} sx={{ paddingTop: "5px !importnat" }}>
          <Typography variant="subtitle2" sx={{ marginBottom: "5px" }}>
            Export
          </Typography>
          <Box sx={{ borderBottom: "1px solid #DEDEDE", width: "80%" }}>
            <FormControl>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={value}
                onChange={handleChange}
                size="small"
              >
                <FormControlLabel
                  value="ShuttleSR"
                  control={<Radio size="small" />}
                  label="Export SR"
                  className="custom-radio-button"
                />
                <FormControlLabel
                  value="ShuttleSRBP"
                  control={<Radio size="small" />}
                  label="Export SR (Commuter)"
                  className="custom-radio-button"
                />
                <FormControlLabel
                  value="ShuttleSRBL"
                  control={<Radio size="small" />}
                  label="Export SR A1-Morocco"
                  className="custom-radio-button"
                />
              </RadioGroup>
            </FormControl>
          </Box>
        </Grid>
        <Grid item xs={12} md={12} lg={6}>
          <Typography variant="subtitle2" sx={{ marginBottom: "5px" }}>
            Conversion
          </Typography>
          <Box
            sx={{
              height: "4.7rem",
              borderBottom: "1px solid #DEDEDE",
              width: "80%",
            }}
          ></Box>
        </Grid>
      </Grid>
    );
  };
  const renderManual = () => {
    return (
      <>
        <Grid container spacing={1} sx={{ paddingRight: 2 }}>
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
            <InputLabel id="demo-modal" sx={{ fontSize: "0.8rem" }}>
              Trailer loading
            </InputLabel>
          </Grid>
          <Grid container spacing={1}>
            <Grid item>
              <TextFieldModified
                id="outlined-multiline-flexible"
                placeholder="..."
                sx={{ marginLeft: "2px" }}
              />
            </Grid>
            <Grid item>
              <Button
                variant="outlined"
                color="error"
                sx={{ height: "5.5vh", fontsize: "0.8rem" }}
                onClick={() => console.log("i am here")}
              >
                Generate
              </Button>
            </Grid>
          </Grid>

          <Grid container sx={{ pt: 1 }}>
            <Grid
              item
              xs={12}
              md={12}
              lg={12}
              sx={{ borderBottom: "1px solid #DEDEDE" }}
            >
              <FormControl
                fullWidth
                sx={{
                  borderRadius: "0px",
                  borderColor: "#FFFFFF",
                }}
              >
                <TextField
                  id="filled-multiline-flexible"
                  multiline
                  rows={2}
                  sx={{ padding: "3px !important" }}
                />
              </FormControl>
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            md={12}
            lg={12}
            sx={{
              borderBottom: "1px solid #DEDEDE",
            }}
          >
            <Typography variant="body2" sx={{ fontSize: "0.8rem" }}>
              Transportation Route Group
            </Typography>
          </Grid>
          <DomesticAndShuttleOption value={value} handleChange={handleChange} />
          <Grid item xs={12} md={12} lg={6}>
            <Typography variant="subtitle2">Export</Typography>
            <Box sx={{ borderBottom: "1px solid #DEDEDE", width: "80%" }}>
              <FormControl>
                <RadioGroup
                  aria-labelledby="demo-controlled-radio-buttons-group"
                  name="controlled-radio-buttons-group"
                  value={value}
                  onChange={handleChange}
                >
                  <FormControlLabel
                    value="ShuttleSR"
                    control={<Radio size="small" />}
                    label="Dealer/Port"
                    className="custom-radio-button"
                  />
                  <FormControlLabel
                    value="ShuttleSRBP"
                    control={<Radio size="small" />}
                    label="Shuttle to other yard"
                    className="custom-radio-button"
                  />
                  <FormControlLabel
                    value="ShuttleSRBL"
                    control={<Radio size="small" />}
                    label="Conversion"
                    className="custom-radio-button"
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
    <>
      <Grid
        container
        spacing={2}
        key="main-grid"
        justifyContent="end"
        sx={{
          my: matches ? 0 : undefined,
          px: matches ? 0 : 0,
          paddingBottom: "30px",
        }}
      >
        <Grid
          item
          xs={12}
          md={12}
          lg={12}
          sx={{
            borderBottom: "1px solid #dc000d",
            padding: "5px 0 5px 40px !important",
            fontSize: ".8rem",
            fontWeight: "bold",
          }}
        >
          Calling Sheet Making - H/O Yard
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <Grid container spacing={2}>
            <Grid
              item
              xs={12}
              md={12}
              lg={6}
              sx={{
                borderRight: "1px solid #DEDEDE",
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
              sx={{
                mt: 1,
                px: 1,
                borderTop: "1px solid #DEDEDE",
                paddingTop: "5px !important",
              }}
            >
              <Stack
                spacing={2}
                direction="row"
                display="flex"
                justifyContent="flex-end"
              >
                <Button
                  variant="contained"
                  size="small"
                  onClick={handleClickOpen}
                >
                  Preview
                </Button>
                <Button variant="contained" size="small">
                  Edit Delivery Plan Matching
                </Button>
                <Button variant="contained" size="small">
                  Refresh
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </Grid>
        <BootstrapDialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
          maxWidth="md"
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
              onClick={() => setOpenJobSheet(true)}
              sx={{ paddingRight: 2, color: "white", background: "#656565" }}
              variant="outlined"
            >
              Preview
            </Button>
          </DialogActions>
        </BootstrapDialog>
      </Grid>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title-sheet"
        open={openJobSheet}
        fullWidth={true}
        maxWidth="lg"
        sx={{ height: "lg", width: "xl", overflowY: "hidden" }}
      >
        <BootstrapDialogTitle
          id="call-sheet-card-sheet"
          onClose={() => setOpenJobSheet(false)}
          sx={{
            background: "red",
            color: "#fff",
            fontWeight: "200",
            padding: 2,
          }}
        >
          Calling Sheet Preview
        </BootstrapDialogTitle>
        <DialogContent dividers>
          {" "}
          <Grid
            container
            key="main-grid"
            sx={{
              background: "#EEE",
              overflowY: "hidden",
            }}
          >
            <Grid item xs={12} md={12} lg={8}>
              <CallingSheetCard />
              <CallingSheetCard />
            </Grid>
            <Grid item xs={12} md={12} lg={4} sx={{ borderLeft: "1px solid" }}>
              <CallingSheetForm />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            sx={{ paddingRight: 2, color: "white", background: "#656565" }}
            variant="outlined"
            onClick={() => setOpenJobSheet(false)}
          >
            Cancel
          </Button>
          <Button
            onClick={handleClose}
            sx={{ paddingRight: 2, color: "white", background: "#656565" }}
            variant="outlined"
          >
            Printing Calling sheet
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </>
  );
};
export default CallingSheet;
