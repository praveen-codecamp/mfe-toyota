import React, { useState } from "react";
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
import SelectOrganization from "./SelectOrganization";
import CustomTreeView from "./CustomTreeView";

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
      {value === index && <Box sx={{ p: 2, width: "30rem" }}>{children}</Box>}
    </div>
  );
}
export default ({ data, submitCreateEdit, userDetails, setOpen }) => {
  const [role, setAction] = useState(
    data || { organization: userDetails.organization }
  );
  const [value, setValue] = useState(0);

  const handleChangeTabs = (event, newValue) => {
    setValue(newValue);
  };
  const handleInputChange = (event) => {
    setAction({ ...role, [event?.target?.name]: event?.target?.value });
  };
  const setSelectedPermission = (permissions) => {
    setAction({ ...role, businessFunctions: permissions });
  };
  const handleSubmit = () => {
    const date = formatedDate();
    submitCreateEdit({
      ...role,
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
          label="Role"
          sx={{
            fontSize: ".7rem",
            "&.Mui-selected": { color: palette.primary.main },
          }}
        />
        <Tab
          label="Permissions"
          sx={{
            fontSize: ".7rem",
            "&.Mui-selected": { color: palette.primary.main },
          }}
        />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={4} md={4} lg={4}>
            <Typography variant="subtitle1" color={palette.primary.main}>
              Role name*
            </Typography>
          </Grid>
          <Grid item xs={8} md={8} lg={8}>
            <TextField
              value={role?.description || ""}
              name="description"
              placeholder="Enter role name"
              onChange={handleInputChange}
              variant="outlined"
              size="small"
              fullWidth
            />
          </Grid>
          <Grid item xs={4} md={4} lg={4}>
            <Typography variant="subtitle1" color={palette.primary.main}>
              Organization
            </Typography>
          </Grid>
          <Grid item xs={8} md={8} lg={8}>
            <SelectOrganization
              selectedValue={role?.organization || ""}
              name="organization"
              handleInputChange={handleInputChange}
              userDetails={userDetails}
            />
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <CustomTreeView
          roleId={role?.roleId}
          setSelectedPermission={setSelectedPermission}
        />
      </TabPanel>
      <Box
        display="flex"
        justifyContent="flex-end"
        alignItems="flex-start"
        sx={{ mt: 2 }}
      >
        <Button
          variant="contained"
          color="primary"
          sx={{ mr: 2 }}
          onClick={handleSubmit}
        >
          {data ? "Edit Role" : "Add Role"}
        </Button>
        <Button
          variant="outlined"
          color="primary"
          alignItems="end"
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
