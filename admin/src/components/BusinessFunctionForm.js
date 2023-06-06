import React, { useState, useEffect } from "react";
import {
  Paper,
  Grid,
  TextField,
  Typography,
  Button,
  Tabs,
  Tab,
  Box,
} from "@mui/material";
import palette from "../../../shared/theme/palette";
import { formatedDate } from "../../../shared/helper";
import SelectBusinessFunctions from "./SelectBusinessFunctions";
import CheckboxActions from "./CheckboxActions";

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
      {value === index && (
        <Box sx={{ p: 2, width: "30rem", height: "10rem" }}>{children}</Box>
      )}
    </div>
  );
}
export default ({ userDetails, data, submitCreateEdit, setOpen }) => {
  const [businessFunction, setBusinessFunction] = useState(data || {});
  const [value, setValue] = useState(0);
  useEffect(() => {
    setBusinessFunction(data);
  }, [data]);
  const handleChangeTabs = (event, newValue) => {
    setValue(newValue);
  };
  const handleInputChange = (event) => {
    setBusinessFunction({
      ...businessFunction,
      [event?.target?.name]: event?.target?.value,
    });
  };
  const isObjectExistInList = (obj, prop, value) => {
    if (!obj) return false;
    return obj.some((item) => item[prop] === value);
  };
  const handleActionChecked = (ac) => {
    let actionList = businessFunction.actions || [];
    if (isObjectExistInList(actionList, "id", ac.id)) {
      actionList = actionList.filter((itm) => itm.id !== ac.id);
    } else actionList.push(ac);
    setBusinessFunction({ ...businessFunction, actions: actionList });
  };
  const handleSubmit = () => {
    const date = formatedDate();
    submitCreateEdit({
      ...businessFunction,
      createdOn: date,
      modifiedOn: date,
      createdBy: userDetails.uid,
      modifiedBy: userDetails.uid,
    });
  };
  return (
    <Paper
      sx={{
        background: "#FFFFFF 0% 0% no-repeat padding-box;",
        boxShadow: "0px 3px 6px #0000001F",
        borderRadius: "10px",
        p: 4,
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
          label="Business Function"
          sx={{
            fontSize: ".7rem",
            "&.Mui-selected": { color: palette.primary.main },
          }}
        />
        <Tab
          label="Actions"
          sx={{
            fontSize: ".7rem",
            "&.Mui-selected": { color: palette.primary.main },
          }}
        />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={4} md={4} lg={5}>
            <Typography variant="subtitle1" color={palette.primary.main}>
              Business function name*
            </Typography>
          </Grid>
          <Grid item xs={8} md={8} lg={7}>
            <TextField
              value={businessFunction?.description || ""}
              name="description"
              placeholder="Enter business function name"
              onChange={handleInputChange}
              variant="outlined"
              size="small"
              fullWidth
            />
          </Grid>
          <Grid item xs={4} md={4} lg={5}>
            <Typography variant="subtitle1" color={palette.primary.main}>
              Parent business function
            </Typography>
          </Grid>
          <Grid item xs={8} md={8} lg={7}>
            <SelectBusinessFunctions
              selectedValue={businessFunction?.parentBusinessFunction || ""}
              name="parentBusinessFunction"
              handleInputChange={handleInputChange}
            />
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Grid container spacing={2} justifyContent={"space-around"}>
          <Grid item xs={12} md={12} lg={12}>
            <CheckboxActions
              actionsDTO={businessFunction?.actions || []}
              handleActionChecked={handleActionChecked}
            />
          </Grid>
        </Grid>
      </TabPanel>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="flex-start"
        sx={{ px: 2 }}
      >
        <Button
          variant="contained"
          color="primary"
          sx={{ fontWeight: 400, fontSize: ".7rem" }}
          onClick={handleSubmit}
        >
          {data ? "Edit Business Function" : "Add Business Function"}
        </Button>
        <Button
          variant="outlined"
          color="primary"
          alignItems="end"
          sx={{ fontWeight: 400, fontSize: ".7rem" }}
          onClick={() => {
            setOpen(false);
          }}
        >
          Cancel
        </Button>
      </Box>
    </Paper>
  );
};
