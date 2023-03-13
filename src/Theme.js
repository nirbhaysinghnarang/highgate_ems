import { createTheme } from "@mui/material/styles";
export const AppTheme = createTheme({
  typography: {
    allVariants: {
      fontFamily: "Futura",
      color: "#6F7378",
    },
  },

  overrides: {
    MuiButton: {
      label: {
        color: "white",
        fontWeight: "fontWeightBold",
      },
    },
  },
});
