import { createMuiTheme } from "@material-ui/core/styles";

const mainBlack = "#212121";
const mainWhite = "#fafafa";
const mainBg = "#1b1f4f";
const mainCol = "#28c89c";

const blue = "#757ce8";
// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    common: {
      black: mainBlack,
      white: mainWhite,
      blue: blue,
    },
    primary: {
      main: mainBg,
    },
    secondary: {
      main: mainWhite,
    },
    info: {
      main: blue,
    },
  },
  typography: {
    h1: {
      fontSize: "2.25rem",
      fontWeight: 500,
    },
    h2: {
      fontSize: "1.5rem",
      fontWeight: 500,
    },
    h3: {
      fontSize: "1.25rem",
      fontWeight: 500,
    },
    a: {
      color: mainBlack,
    },
  },
});

export default theme;
