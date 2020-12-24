// estrutura = https://material-ui.com/customization/default-theme/
// cores = https://material-ui.com/customization/color/#color
// (theme) => {...} = https://material-ui.com/customization/theming/#theme-provider
import React from "react";

import { ThemeProvider, createMuiTheme } from "@material-ui/core";
import { red, indigo, grey } from '@material-ui/core/colors';

import TopBar from './App/TopBar'
import DrawerNav from './App/DrawerNav'
import Home from './Home/Index'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: red[500] // ou main: '#f44336'
    },
    secondary: {
      main: indigo[500]
    },
    text: {
      secondary: grey[700]
    },
  }
});

function App() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = () => {
    //setOpen((open) ? false : true);
    setOpen(!open);
  }

  return (
    <ThemeProvider theme={theme}>
      <TopBar toggleDrawer={toggleDrawer} />
      <DrawerNav toggleDrawer={toggleDrawer} openDrawer={open} />
      <Home />
    </ThemeProvider>
  );
}

export default App;
