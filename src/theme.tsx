import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { green, grey,} from '@mui/material/colors';

let theme = createTheme({
  palette: {
    primary: {
      main: grey[700],
    },
    secondary: {
      main: green[500],
    },
  },
  typography: {
    fontFamily: ['"Helvetica Neue"'].join(','),
  }
});

theme = responsiveFontSizes(theme);

export default theme;