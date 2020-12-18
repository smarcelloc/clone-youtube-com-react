import React from 'react';
import { Button, ThemeProvider, createMuiTheme } from '@material-ui/core';
import { indigo, red } from '@material-ui/core/colors';

function App() {
  // estrutura = https://material-ui.com/customization/default-theme/
  // cores = https://material-ui.com/customization/color/#color
  // https://material-ui.com/customization/theming/#theme-provider
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: red[500] // ou main: '#f44336'
      },
      secondary: {
        main: indigo[500] // ou main: '#3f51b5'
      }
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <Button variant="contained" color="primary">
        Primary
      </Button>
    </ThemeProvider>
  );
}

export default App;
