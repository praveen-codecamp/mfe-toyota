import { alpha } from "@mui/material/styles";

// ----------------------------------------------------------------------

// SETUP COLORS
const GREY = {
  lighter: "#999999",
  light: "#919eab",
  main: "#555555",
  dark: "#333333",
  darker: "#111111",
  contrastText: "#fff",
  0: "#FFFFFF",
  100: "#F9FAFB",
  200: "#F4F6F8",
  300: "#DFE3E8",
  400: "#C4CDD5",
  500: "#919EAB",
  600: "#637381",
  700: "#454F5B",
  800: "#212B36",
  900: "#161C24",
};
//Red theme
const PRIMARY_RED = {
  lighter: "#FFE5E5",
  light: "#FF3333",
  main: "#cd2026",
  dark: "#CC0000",
  darker: "#B30000",
  contrastText: "#f4f4f4",
  highlightText: "#FF8080",
};
//Green theme
const PRIMARY_GREEN = {
  lighter: "#aaf0d1",
  light: "#4cbb17",
  main: "#228b22",
  dark: "#00693e",
  darker: "#008080",
  contrastText: "#f4f4f4",
  highlightText: "#7fff00",
};
//Blue theme
const PRIMARY_BLUE = {
  lighter: "#f0f8fc",
  light: "#0179BF",
  main: "#204F88",
  dark: "#054FA8",
  darker: "#061B64",
  contrastText: "#f4f4f4",
  highlightText: "#00C4FF",
};
const themeLS = localStorage.getItem("theme");
const PRIMARY =
  themeLS === "blue"
    ? PRIMARY_BLUE
    : themeLS === "green"
    ? PRIMARY_GREEN
    : PRIMARY_RED;

const SECONDARY = {
  lighter: "#F97C2840",
  light: "#FFB400",
  main: "#F97C28",
  dark: "#1939B7",
  darker: "#091A7A",
  contrastText: "#fff",
};

const INFO = {
  lighter: "#D0F2FF",
  light: "#B8DAFF",
  main: "#1890FF",
  dark: "#0C53B7",
  darker: "#04297A",
  contrastText: "#fff",
};

const SUCCESS = {
  lighter: "#E9FCD4",
  light: "#AAF27F",
  main: "#54D62C",
  dark: "#229A16",
  darker: "#08660D",
  contrastText: GREY[800],
};

const WARNING = {
  lighter: "#FFF7CD",
  light: "#FFE16A",
  main: "#FFC107",
  dark: "#B78103",
  darker: "#7A4F01",
  contrastText: GREY[800],
};

const ERROR = {
  lighter: "#FFE7D9",
  light: "#FFA48D",
  main: "#FF4842",
  dark: "#B72136",
  darker: "#7A0C2E",
  contrastText: "#fff",
};

const palette = {
  common: { black: "#000", white: "#fff" },
  primary: PRIMARY,
  secondary: SECONDARY,
  info: INFO,
  success: SUCCESS,
  warning: WARNING,
  error: ERROR,
  grey: GREY,
  folderColor: "#ffc700",
  divider: alpha(GREY[500], 0.24),
  text: {
    primary: GREY[800],
    secondary: GREY[600],
    disabled: GREY[500],
  },
  background: {
    paper: "#fff",
    default: GREY[100],
    neutral: GREY[200],
  },
  action: {
    active: GREY[600],
    hover: alpha(GREY[500], 0.08),
    selected: alpha(GREY[500], 0.16),
    disabled: alpha(GREY[500], 0.8),
    disabledBackground: alpha(GREY[500], 0.24),
    focus: alpha(GREY[500], 0.24),
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
  },
};

export default palette;
