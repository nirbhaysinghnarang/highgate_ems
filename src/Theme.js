import { createTheme } from "@mui/material/styles";
export const AppTheme = createTheme({
  typography: {
    allVariants: {
      fontFamily: "Futura",
      color: "black",
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
