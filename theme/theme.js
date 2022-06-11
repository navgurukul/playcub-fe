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
    fontFamily: "Noto Sans",

    fontSize: 18,


    h1: {
      fontWeight: 700,
      fontSize: "96px",
      lineHeight: 1.3,
      fontFamily: "Noto Sans",
      [theme.breakpoints.down("sm")]: {
        fontSize: "4.875rem",
      },
    },

    h2: {
      fontSize: "72px",
      lineHeight: "93.6px",
      fontFamily: "Noto Sans",
      letterSpacing:"-0.5px",
      [theme.breakpoints.down("sm")]: {
        fontSize: "3.625rem",
      },
      fontWeight: 700,
    },


    h3: {
      fontSize: "56px",
      [theme.breakpoints.down("sm")]: {
        fontSize: "2.75rem",
      },
      fontWeight: 700,
      fontFamily: "Noto Sans",
      lineHeight: "72.8px",
    },


    h4: {
      fontWeight: 700,
      fontSize: "42px",
      [theme.breakpoints.down("sm")]: {
        fontSize: "	2rem",
      },
      fontFamily: "Noto Sans",
      lineHeight: "54.6px",
    },



    h5: {
      fontWeight: 700,
      fontSize: "32px",
      [theme.breakpoints.down("sm")]: {
        fontSize: "	1.5rem",
      },
      lineHeight: "48px",
      fontFamily: "Noto Sans",
    },

    h6: {
      fontSize: "24px",
      [theme.breakpoints.down("sm")]: {
        fontSize: "	1.125rem",
      },
      lineHeight: "36px",
      fontWeight: 700,
      fontFamily: "Noto Sans",
    },
    
   
    subtitle: {
      fontSize: "32px",
      fontFamily: "Noto Sans",
      color:"#6D6D6D",
      [theme.breakpoints.down("sm")]: {
        fontSize: "0.875rem",
      },
      lineHeight: "48px",
      fontWeight: 400,
    },


    subtitle1: {
      fontSize: "18px",
      fontFamily: "Noto Sans",
      // color:'#6D6D6D',
      [theme.breakpoints.down("sm")]: {
        fontSize: "0.75rem",
      },
      fontWeight: 700,
      lineHeight: "27px",
    },


    body1: {
      fontWeight: 400,
      fontSize: "18px",
      fontFamily: "Noto Sans",
      [theme.breakpoints.down("sm")]: {
        fontSize: "0.875rem",
      },
      lineHeight: "27px",
    },

    overline: {
      fontFamily: "Noto Sans",
      fontSize: "12px",
      lineHeight: '18px',
      fontWeight:400,
      color:'#666699',
      [theme.breakpoints.down("sm")]: {
        fontSize: "12px",
      },
    },
   
    button: {
      fontSize: "18px",
      fontFamily: "Noto Sans",
      Padding:"8px, 16px, 8px, 16px",
      background:'#FFCC00',
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
        color:"#2E2E2E",
        "&:hover":{
          background:"#FFF5CC",
        }
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
