import React from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core';
import { indigo, red } from '@material-ui/core/colors';
import Home from './Home';

// estrutura = https://material-ui.com/customization/default-theme/
// cores = https://material-ui.com/customization/color/#color
// https://material-ui.com/customization/theming/#theme-provider

const theme = createMuiTheme({
  palette: {
    primary: {
      main: red[500] // ou main: '#f44336'
    },
    secondary: {
      main: indigo[500]
    }
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
