// estrutura = https://material-ui.com/customization/default-theme/
// cores = https://material-ui.com/customization/color/#color
// (theme) => {...} = https://material-ui.com/customization/theming/#theme-provider

import { ThemeProvider, createMuiTheme } from "@material-ui/core";
import { red, indigo } from '@material-ui/core/colors';

import Home from './Home/Index'

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
