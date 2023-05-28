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
        <Box sx={{ p: 2, width: "30rem", height: "18rem" }}>{children}</Box>
      )}
    </div>
  );
}
export default ({ data, submitCreateEdit }) => {
  const [user, setAction] = useState(data || {});
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
    const date = new Date();
    const formatedDate =
      date.getFullYear() + "-0" + (date.getMonth() + 1) + "-" + date.getDate();
    submitCreateEdit({
      ...user,
      createdon: formatedDate,
      modifiedon: formatedDate,
      createdby: 10002,
      modifiedby: 10002,
    });
  };
  console.log(user);
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
        <Grid container spacing={2}>
          <Grid item xs={4} md={4} lg={4}>
            <Typography variant="subtitle1" color={palette.primary.main}>
              First Name*
            </Typography>
          </Grid>
          <Grid item xs={8} md={8} lg={8}>
            <TextField
              value={user?.firstname || ""}
              name="firstname"
              onChange={handleInputChange}
              variant="outlined"
              size="small"
              fullWidth
            />
          </Grid>
          <Grid item xs={4} md={4} lg={4}>
            <Typography variant="subtitle1" color={palette.primary.main}>
              Last Name*
            </Typography>
          </Grid>
          <Grid item xs={8} md={8} lg={8}>
            <TextField
              value={user?.lastname || ""}
              name="lastname"
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
              onChange={handleInputChange}
              variant="outlined"
              size="small"
              fullWidth
            />
          </Grid>
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
          <Grid item xs={4} md={4} lg={4}>
            <Typography variant="subtitle1" color={palette.primary.main}>
              Organization*
            </Typography>
          </Grid>
          <Grid item xs={8} md={8} lg={8}>
            <SelectOrganization
              selectedValue={user?.organization || ""}
              name="organization"
              handleInputChange={handleInputChange}
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
      <Button
        variant="contained"
        color="primary"
        sx={{ fontWeight: 400, fontSize: ".7rem", mr: 1, mt: 3 }}
        onClick={handleSubmit}
      >
        {data ? "Edit User" : "Add User"}
      </Button>
    </Paper>
  );
};
