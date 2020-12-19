import React from 'react';
import { makeStyles } from '@material-ui/core';
import Header from './Header';

// theme -> App.js -> const const theme = createMuiTheme({ ... })
const useStyles = makeStyles((theme) => ({
  root: {
    //background: 'red',
    //background: theme.palette.primary.main,
    //padding: theme.spacing(2),
    height: '100vh'
  }
}));

function Home() {
  useStyles();
  return (
    <Header />
  );
}

export default Home;