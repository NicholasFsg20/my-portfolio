import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { green, grey,} from '@mui/material/colors';

let theme = createTheme({
  palette: {
    primary: {
      main: grey[900],
    },
    secondary: {
      main: green[400],
    },
  },
  typography: {
    fontFamily: "system-ui"
  }
});

theme = responsiveFontSizes(theme);

export default theme;