import React from "react";
import {
  TextField,
  IconButton,
  Box,
  Button,
  Paper,
  Avatar,
  Typography,
  Grid,
} from "@mui/material";
import AttachFileIcon from "@mui/icons-material/ExpandMore";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import ImageIcon from "@mui/icons-material/Image";
import { getBase64 } from "../util";
import palette from "../../../shared/theme/palette";

export default ({ handleImageUpload, logo }) => {
  const [file, setFile] = React.useState(null);
  const [fileBase64, setFileBase64] = React.useState(logo || null);

  const handleChange = (event) => {
    const logoImg = event.target.files[0];
    setFile(logoImg);
    getBase64(logoImg, (result) => {
      setFileBase64(result);
      handleImageUpload && handleImageUpload(result);
    });
  };
  return (
    <>
      <Box
        alignItems="center"
        display="flex"
        justifyContent="right"
        flexDirection="column"
      >
        <input
          id="upload-company-logo"
          type="file"
          hidden
          onChange={handleChange}
          name="logo"
        />
        <label htmlFor="upload-company-logo">
          <Paper
            elevation={0}
            sx={{
              width: "22rem",
              p: 1.5,
              border: "1px solid #d6d6d6",
            }}
          >
            <Grid
              container
              spacing={2}
              justifyContent={"center"}
              alignItems="center"
            >
              <Grid item xs={12} md={12} lg={2}>
                <Avatar src={fileBase64} variant="square" display="inline">
                  <ImageIcon />
                </Avatar>
              </Grid>
              <Grid item xs={12} md={12} lg={10}>
                <Typography
                  variant="subtitle1"
                  color={palette.grey.light}
                  sx={{ cursor: "pointer" }}
                >
                  Click here to choose the logo
                </Typography>
                {file?.name && (
                  <Typography variant="body2">{file?.name}</Typography>
                )}
              </Grid>
            </Grid>
          </Paper>
        </label>
      </Box>
    </>
  );
};
