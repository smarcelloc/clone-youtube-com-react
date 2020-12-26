// estrutura = https://material-ui.com/customization/default-theme/
// cores = https://material-ui.com/customization/color/#color
// (theme) => {...} = https://material-ui.com/customization/theming/#theme-provider
import React from "react";

import { ThemeProvider, createMuiTheme } from "@material-ui/core";
import { red, indigo, grey } from '@material-ui/core/colors';

import TopBar from './App/TopBar'
import DrawerNav from './App/DrawerNav'
import Home from './Home/Index'

function App() {
  const [open, setOpen] = React.useState(false);
  const [darkMode, setDarkMode] = React.useState(false);

  const toggleDrawer = () => {
    //setOpen((open) ? false : true);
    setOpen(!open);
  }


  const theme = createMuiTheme({
    palette: {
      type: (darkMode ? 'dark' : 'light'),
      primary: {
        main: (darkMode ? red[200] : red[500]), // ou main: '#f44336',
      },
      secondary: {
        main: (darkMode ? indigo[200] : indigo[500])
      },
      text: {
        secondary: (darkMode ? grey[100] : grey[700])
      },
      background: {
        paper: (darkMode ? grey[900] : '#fff')
      }
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <div style={{ background: theme.palette.background.paper }}>
        <TopBar toggleDrawer={toggleDrawer} darkMode={darkMode} setDarkMode={setDarkMode} />
        <DrawerNav toggleDrawer={toggleDrawer} openDrawer={open} />
        <Home />
      </div>
    </ThemeProvider>
  );
}

export default App;
