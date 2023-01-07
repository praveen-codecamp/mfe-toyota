import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.variant === "contained" &&
            ownerState.color === "primary" && {
              backgroundColor: "#cd2026",
              color: "#fff",
            }),
        }),
      },
    },
    MuiCardHeader: {
      styleOverrides: {
        root: {
          backgroundColor: "#cd2026",
          color: "#fff",
          padding: ".4rem",
        },
      },
    },
  },
});

export default theme;
