import { createTheme } from "@mui/material/styles";
import { breakpoints } from "./constant";

let theme = createTheme();
const shadows = theme.shadows;
shadows[2] =
  "0px 1px 2px rgba(0, 0, 0, 0.06), 0px 2px 1px rgba(0, 0, 0, 0.04), 0px 1px 5px rgba(0, 0, 0, 0.08)";
shadows[8] =
  "0px 16px 24px rgba(0, 0, 0, 0.06), 0px 6px 30px rgba(0, 0, 0, 0.04), 0px 8px 10px rgba(0, 0, 0, 0.08)";
shadows[8] =
  "0px 24px 38px rgba(0, 0, 0, 0.06), 0px 9px 46px rgba(0, 0, 0, 0.04), 0px 11px 15px rgba(0, 0, 0, 0.08)";

theme = createTheme(theme, {
  breakpoints,
  palette: { 
    warning: {
      //Yellow
      main: "#ffc107",
      contrastText: "#2e2e2e",
      light: "#fff3cd",
      dark: "#cc9a06",
    },
    background: {
      default: "#FFFFFF",
      paper: "#ffffff",
    },
    
  },

  typography: {
    fontFamily: "Nunito Sans , Lusitana",

    fontSize: 18,


    h1: {
      fontWeight: 700,
      fontSize: "96px",
      lineHeight: 1.3,
      fontFamily: "Lusitana",
      [theme.breakpoints.down("sm")]: {
        fontSize: "4.875rem",
      },
    },

    h2: {
      fontSize: "72px",
      lineHeight: "93.6px",
      fontFamily: "Lusitana",
      letterSpacing:"-0.5px",
      [theme.breakpoints.down("sm")]: {
        fontSize: "3.625rem",
      },
      fontWeight: 700,
    },


    h3: {
      fontSize: "3.5rem",
      [theme.breakpoints.down("sm")]: {
        fontSize: "2.75rem",
      },
      fontWeight: 700,
      fontFamily: "Lusitana",
      lineHeight: 1.3,
    },


    h4: {
      fontWeight: 700,
      fontSize: "42px",
      letterSpacing:"0.25px",
      [theme.breakpoints.down("sm")]: {
        fontSize: "	2rem",
      },
      fontFamily: "Lusitana",
      lineHeight: 1.3,
    },



    h5: {
      fontWeight: 700,
      fontSize: "2rem",
      [theme.breakpoints.down("sm")]: {
        fontSize: "	1.5rem",
      },
      lineHeight: 1.5,
      fontFamily: "Lusitana",
    },
    h6: {
      fontSize: "1.5rem",
      [theme.breakpoints.down("sm")]: {
        fontSize: "	1.125rem",
      },
      lineHeight: 1.5,
      fontWeight: 700,
      fontFamily: "Lusitana",
    },


    subtitle0: {
      fontSize: "32px",
      fontFamily: "Nunito Sans",
      [theme.breakpoints.down("sm")]: {
        fontSize: "0.875rem",
      },
      lineHeight: "41.6px",
      fontWeight: 700,
    },


    subtitle1: {
      fontSize: "18px",
      fontFamily: "Nunito Sans",
      letterSpacing:"0.15px",
      [theme.breakpoints.down("sm")]: {
        fontSize: "0.75rem",
      },
      fontWeight: 700,
      lineHeight: "27px",
    },


    body1: {
      fontWeight: 400,
      fontSize: "18px",
      fontFamily: "Nunito Sans",
      letterSpacing:"0.15px",
      [theme.breakpoints.down("sm")]: {
        fontSize: "0.875rem",
      },
      lineHeight: "27px",
    },
    button: {
      fontSize: "18px",
      fontFamily: "Nunito Sans",
      letterSpacing:"0.15px",
      [theme.breakpoints.down("sm")]: {
        fontSize: "0.875rem",
      },
      lineHeight: "27px",
      fontWeight: 700,
      textTransform: "none",
    },    
  },
});

theme.components = {
  

  MuiButton: {
    styleOverrides: {
      root: {
        borderRadius: "8px",
        height: "48px",
      },
    },
  },
  MuiCard: {
    styleOverrides: {
      root: {
        borderRadius: 8,

        "&:hover": {
          boxShadow:
            "0px 16px 24px rgba(0, 0, 0, 0.06), 0px 6px 30px rgba(0, 0, 0, 0.04), 0px 8px 10px rgba(0, 0, 0, 0.08)",
        },
      },
    },
  },
};

export default theme;
