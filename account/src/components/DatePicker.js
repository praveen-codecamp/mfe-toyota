import * as React from "react";
import dayjs from "dayjs";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";

export default function MaterialUIPickers({ device, lable }) {
  const [value, setValue] = React.useState(dayjs(new Date()));

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack spacing={3}>
        {device === "mobile" ? (
          <MobileDatePicker
            label={lable}
            inputFormat="MM/DD/YYYY"
            value={value}
            onChange={handleChange}
            renderInput={(params) => (
              <TextField
                sx={{
                  background: "#F3F7FD 0% 0% no-repeat padding-box",
                  border: "1px solid #345E9245",
                  borderRadius: "5px",
                  font: "#F3F7FD",
                }}
                size="small"
                {...params}
              />
            )}
          />
        ) : (
          <DesktopDatePicker
            label={lable}
            inputFormat="MM/DD/YYYY"
            value={value}
            onChange={handleChange}
            inputStyle={{ fontSize: "5px" }}
            renderInput={(params) => (
              <TextField
                sx={{
                  background: "#F3F7FD 0% 0% no-repeat padding-box",
                  borderColor: "#345E9245",
                  borderRadius: "5px",
                }}
                inputStyle={{ fontSize: "10px" }}
                filled
                size="small"
                {...params}
              />
            )}
          />
        )}
      </Stack>
    </LocalizationProvider>
  );
}
