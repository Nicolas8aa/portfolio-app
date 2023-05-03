import { createTheme, PaletteMode, ThemeOptions } from "@mui/material";
import { blueGrey, deepOrange, grey, indigo } from "@mui/material/colors";

const firaSansFont = ["Fira Sans", "sans-serif"].join(",");
const nunitoFont = ["Nunito", "sans-serif"].join(",");

declare module "@mui/material/styles" {
  interface Palette {}
  interface TypeBackground {
    lighter: string;
  }
  interface PaletteOptions {}
}

export const theme = createTheme({
  palette: {
    primary: {
      main: "#10A37F",
      contrastText: "#fff",
    },
    text: {
      primary: "#F1F6F9",
      secondary: "#9BA4B5",
    },
    background: {
      default: grey[900],
      lighter: grey[800],
      paper: "#212A3E",
    },
    secondary: {
      main: "#F1F6F9",
    },
  },
  typography: {
    fontFamily: firaSansFont,
    h1: {
      fontFamily: nunitoFont,
    },
    h2: {
      fontFamily: nunitoFont,
    },
    h3: {
      fontFamily: nunitoFont,
    },
    h4: {
      fontFamily: nunitoFont,
    },
    h5: {
      fontFamily: firaSansFont,
    },
  },
  components: {
    MuiTypography: {
      defaultProps: {
        color: "textPrimary",
      },
    },
    MuiButton: {
      defaultProps: {
        variant: "contained",
      },
      styleOverrides: {
        root: {
          borderRadius: 8,
          boxShadow: "none",
          letterSpacing: 0.5,
          fontWeight: "normal",
          textTransform: "none",
          transition:
            "box-shadow 0.3s ease-in-out borderColor 0.3s ease-in-out  color 0.3s ease-in-out",
          "&:hover": {
            // blue glow shadow related to the main color
            // get main theme color and convert it to rgba

            // boxShadow: `0 2px 6px 0 rgba(${r},${g},${b},0.5)`,
            boxShadow: "none",
            backgroundColor: "transparent",
          },
        },
        contained: {},
        outlined: {
          "&:hover": {
            backgroundColor: "white",
          },
        },
        text: {
          "&:hover": {
            // backgroundColor: "#fff",
          },
        },
      },
    },
  },
});
