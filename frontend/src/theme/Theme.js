import { createTheme } from '@mui/material/styles';

const Theme = createTheme({
  typography: {
    h2: {
      fontFamily: 'Playfair Display,serif',
      fontSize: 48,
    },
    h3: {
      fontFamily: 'Playfair Display,serif',
      fontSize: 34,
    },
    body1: {
      fontFamily: 'Playfair Display,serif',
      fontSize: 12,
    },
    caption: {
      color: '#fff',
      fontSize: 18,
    },
  },
  palette: {
    primary: {
      main: '#ef6817',
      contrastText: '#fff',
    },
    secondary: {
      main: '#11589F',
      contrastText: '#fff',
    },
  },
});

export default Theme;
