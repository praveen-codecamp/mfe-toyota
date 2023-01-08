import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontSize: 12,
    h6: {
      fontSize: 16,
      fontWeight: 600,
      color: "#cd2026",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.variant === "contained" &&
            ownerState.color === "primary" && {
              backgroundColor: "#cd2026",
              color: "#fff",
              ":hover": {
                backgroundColor: "#b3050b",
              },
            }),
        }),
      },
    },
    MuiInputBase: {},
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
