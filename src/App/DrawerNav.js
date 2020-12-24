import {
  makeStyles,
  SwipeableDrawer, // TouchScreen
  IconButton,
  Divider
} from '@material-ui/core';

import {
  Menu as MenuIcon
} from '@material-ui/icons';

import DrawerNavList from './DrawerNavList'

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  drawerPaper: {
    width: drawerWidth
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
  },
  logo: {
    height: 25,
    paddingLeft: theme.spacing(1)
  }
}));


function DrawerNav(props) {

  const classes = useStyles();
  return (
    <SwipeableDrawer
      open={props.openDrawer}
      className={classes.drawer}
      onClose={props.toggleDrawer}
      onOpen={props.toggleDrawer}
      classes={{ paper: classes.drawerPaper }}
    >
      <div className={classes.drawerHeader}>
        <IconButton onClick={props.toggleDrawer}><MenuIcon /></IconButton>
        <img src="/images/logo.png" alt="Logotipo do Youtube" className={classes.logo} />
      </div>
      <Divider />
      <DrawerNavList />
      <Divider />
    </SwipeableDrawer>
  );
}

export default DrawerNav;