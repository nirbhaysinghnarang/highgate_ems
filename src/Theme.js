import { createTheme } from "@mui/material/styles";
export const AppTheme = createTheme({
  typography: {
    allVariants: {
      fontFamily: "Oswald",
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
