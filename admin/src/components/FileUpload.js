import React from "react";
import { TextField, IconButton } from "@mui/material";
import AttachFileIcon from "@mui/icons-material/ExpandMore";
import { getBase64 } from "../util";

export default ({ handleImageUpload }) => {
  const [file, setFile] = React.useState(null);

  const handleChange = (event) => {
    const logoImg = event.target.files[0];
    setFile(logoImg);
    getBase64(logoImg, (result) => {
      handleImageUpload && handleImageUpload(result);
    });
  };

  return (
    <TextField
      value={file?.name || ""}
      size="small"
      InputProps={{
        fullWidth: true,
        startAdornment: (
          <IconButton component="label">
            <AttachFileIcon />
            <input type="file" hidden onChange={handleChange} name="logo" />
          </IconButton>
        ),
      }}
      fullWidth
    />
  );
};
