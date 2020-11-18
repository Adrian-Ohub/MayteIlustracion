import { red, orange } from "@material-ui/core/colors";
import { createMuiTheme } from "@material-ui/core/styles";

// Aqui customizamos las partes principales del estilo de la pagina, como colores primarios, colores de fondo tipografia, ...
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "rgb(77, 182, 172)",
    },
    secondary: {
      main: orange[500],
    },
  },
  error: {
    main: red.A400,
  },
  typography: {
    fontFamily: "Amatic SC",
    fontSize: 24,
  },
});

export default theme;
