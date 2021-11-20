import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let Theme = createTheme({
  palette: {
    primary: {
      light: '#55d97d',
      main: '#02A64F',
      dark: '#007623',
      contrastText: '#fff',
    },
    secondary: {
      main: '#f44336',
    },
    tertiari: {
      main: '#e6b000',
    },
    error: {
      main: '#f44336',
    },
  },
  typography: {
    fontFamily: ['Poppins', 'sans-serif'].join(','),
    fontSize: 16,
    h3: { fontSize: 50, fontWeight: 600 },
    h4: { fontWeight: 500 },
    h6: { fontSize: 16, fontWeight: 550, marginBottom: 12 },
    body1: { fontSize: 20 },
  },
});

Theme = responsiveFontSizes(Theme);

export default Theme;
