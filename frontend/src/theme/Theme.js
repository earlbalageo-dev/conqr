import { createTheme } from '@mui/material/styles';

const Theme = createTheme({
  typography: {
    h2: {
      fontFamily: 'Playfair Display,serif',
      fontSize: 48,
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
      main: '#383838',
    },
  },
});

export default Theme;
