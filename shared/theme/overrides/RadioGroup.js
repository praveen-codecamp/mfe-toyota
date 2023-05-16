// ----------------------------------------------------------------------

export default function RadioGroup(theme) {
  return {
    MuiFormControl: {
      styleOverrides: {
        root: {
          "&.MuiFormControl-root": {
            "& svg": {
              size: "small",
            },
            "& .MuiFormControlLabel-label": {
              color: theme.palette.text.disabled,
              fontSize: ".8rem",
            },
          },
        },
      },
    },
  };
}
