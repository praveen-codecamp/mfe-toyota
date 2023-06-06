import React, { useState } from "react";
import { Paper, Grid, TextField, Typography, Button, Box } from "@mui/material";
import palette from "../../../shared/theme/palette";
import { formatedDate } from "../../../shared/helper";

export default ({ userDetails, data, submitCreateEdit, setOpen }) => {
  const [action, setAction] = useState(data || {});
  const handleInputChange = (event) => {
    setAction({ ...action, [event?.target?.name]: event?.target?.value });
  };
  const handleSubmit = () => {
    const date = formatedDate();
    submitCreateEdit({
      ...action,
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
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} md={12} lg={12} sx={{ mb: 2 }}>
          <Typography variant="h6" color={palette.primary.main}>
            Action
          </Typography>
        </Grid>
        <Grid item xs={4} md={4} lg={4}>
          <Typography variant="subtitle1" color={palette.primary.main}>
            Action name*
          </Typography>
        </Grid>
        <Grid item xs={8} md={8} lg={8}>
          <TextField
            value={action?.description || ""}
            name="description"
            placeholder="Enter action name"
            onChange={handleInputChange}
            variant="outlined"
            size="small"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="flex-start"
            sx={{ pt: 2 }}
          >
            <Button
              variant="contained"
              color="primary"
              sx={{ fontWeight: 400, fontSize: ".7rem" }}
              onClick={handleSubmit}
            >
              {data ? "Edit Action" : "Add Action"}
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
              Close
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};
