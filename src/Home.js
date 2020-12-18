import React from 'react';
import { makeStyles } from '@material-ui/core';

// theme -> App.js -> const const theme = createMuiTheme({ ... })
const useStyles = makeStyles((theme) => ({
  root: {
    //background: 'red',
    background: theme.palette.primary.main,
    height: '100vh'
  }
}));

function Home() {
  const classes = useStyles();
  return (
    <div className={classes.root}></div>
  );
}

export default Home;