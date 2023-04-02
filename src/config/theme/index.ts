import { createTheme } from "@mui/material";
import themeTypography from "./typography";

const theme = createTheme({
  palette: {
    mode: "dark",
    // primary: {},
    background: {
      default: "#151515",
    },
    text: {
      primary: "#F1F1EC",
    },
  },
  typography: themeTypography,
});

export default theme;
