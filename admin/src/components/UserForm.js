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
import SelectOrganization from "./SelectOrganization";
import CheckboxRole from "./CheckboxRole";

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
        <Box sx={{ p: 2, width: "30rem", height: "15rem" }}>{children}</Box>
      )}
    </div>
  );
}
export default ({ userDetails, data, submitCreateEdit, setOpen }) => {
  const [user, setAction] = useState(
    data || { organization: userDetails?.organization }
  );
  const [value, setValue] = useState(0);

  const handleChangeTabs = (event, newValue) => {
    setValue(newValue);
  };
  const handleInputChange = (event) => {
    setAction({ ...user, [event?.target?.name]: event?.target?.value });
  };
  const isObjectExistInList = (obj, prop, value) => {
    if (!obj) return false;
    return obj.some((item) => item[prop] === value);
  };
  const handleUserRoleChecked = (role) => {
    let roleList = user.rolesDTO || [];
    if (isObjectExistInList(roleList, "roleId", role.roleId)) {
      roleList = roleList.filter((itm) => itm.roleId !== role.roleId);
    } else roleList.push(role);
    setAction({ ...user, rolesDTO: roleList });
  };
  const handleSubmit = () => {
    const date = formatedDate();
    submitCreateEdit({
      ...user,
      createdon: date,
      modifiedon: date,
      createdby: userDetails.uid,
      modifiedby: userDetails.uid,
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
          label="User"
          sx={{
            fontSize: ".7rem",
            "&.Mui-selected": { color: palette.primary.main },
          }}
        />
        <Tab
          label="User Role"
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
              First name*
            </Typography>
          </Grid>
          <Grid item xs={8} md={8} lg={8}>
            <TextField
              value={user?.firstname || ""}
              name="firstname"
              placeholder="Enter user's first name"
              onChange={handleInputChange}
              variant="outlined"
              size="small"
              fullWidth
            />
          </Grid>
          <Grid item xs={4} md={4} lg={4}>
            <Typography variant="subtitle1" color={palette.primary.main}>
              Last name*
            </Typography>
          </Grid>
          <Grid item xs={8} md={8} lg={8}>
            <TextField
              value={user?.lastname || ""}
              name="lastname"
              placeholder="Enter user's last name"
              onChange={handleInputChange}
              variant="outlined"
              size="small"
              fullWidth
            />
          </Grid>
          <Grid item xs={4} md={4} lg={4}>
            <Typography variant="subtitle1" color={palette.primary.main}>
              Email*
            </Typography>
          </Grid>
          <Grid item xs={8} md={8} lg={8}>
            <TextField
              value={user?.email || ""}
              name="email"
              placeholder="Enter user's email"
              onChange={handleInputChange}
              variant="outlined"
              size="small"
              fullWidth
            />
          </Grid>
          {/*
          <Grid item xs={4} md={4} lg={4}>
            <Typography variant="subtitle1" color={palette.primary.main}>
              Phone No.*
            </Typography>
          </Grid>
          <Grid item xs={8} md={8} lg={8}>
            <TextField
              value={user?.phone || ""}
              name="phone"
              onChange={handleInputChange}
              variant="outlined"
              size="small"
              fullWidth
            />
          </Grid>
           */}
          <Grid item xs={4} md={4} lg={4}>
            <Typography variant="subtitle1" color={palette.primary.main}>
              Organization
            </Typography>
          </Grid>
          <Grid item xs={8} md={8} lg={8}>
            <SelectOrganization
              selectedValue={user?.organization || ""}
              name="organization"
              handleInputChange={handleInputChange}
              userDetails={userDetails}
            />
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12} lg={12}>
            <CheckboxRole
              organization={user.organization}
              rolesDTO={user?.rolesDTO || []}
              handleUserRoleChecked={handleUserRoleChecked}
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
          {data ? "Edit User" : "Add User"}
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
