import { createMuiTheme } from "@material-ui/core/styles";

// Aqui customizamos las partes principales del estilo de la pagina, como colores primarios, colores de fondo tipografia, ...
const theme = createMuiTheme({
  mixins: {
    toolbar: {
      minHeight: 78,
    },
  },
  palette: {
    common: {
      black: "#000",
      white: "#fff",
    },
    background: {
      /* paper: "rgba(255, 244, 228, 1)", */
      default: "rgba(255, 255, 255, 1)",
    },
    primary: {
      light: "#ffffff",
      main: "#f5f5f5",
      dark: "#c2c2c2",
      contrastText: "#000000",
    },
    secondary: {
      light: "#4f5b62",
      main: "#263238",
      dark: "##000a12",
      contrastText: "#ffffff",
    },
    error: {
      light: "#e57373",
      main: "#f44336",
      dark: "#d32f2f",
      contrastText: "#fff",
    },
    text: {
      primary: "#000000",
      secondary: "#ffffff",
      disabled: "rgba(0, 0, 0, 0.38)",
      hint: "rgba(0, 0, 0, 0.38)",
    },
  },
  typography: {
    fontFamily: "Barlow Condensed",
    fontSize: 18,
  },
});

theme.overrides = {
  /* MuiCssBaseline: {
    "@global": {
      html: {
        height: "100vh",
        paddingInlineStart: "1em",
        paddingInlineEnd: "1em",
      },
    },
  }, */
  MuiGrid: {
    root: {
      /* border: "1px solid black", */
    },
  },
  MuiPaper: {
    root: {
      marginBottom: theme.spacing(2),
    },
  },
  MuiButton: {
    root: {
      /* borderRadius: 0, */
    },
    containedPrimary: {
      backgroundColor: theme.palette.secondary.main,
      "&:hover": {
        backgroundColor: theme.palette.secondary.dark,
      },
    },
  },
};

export default theme;
