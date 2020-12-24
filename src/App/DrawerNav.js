import {
  makeStyles,
  Drawer,
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
    width: drawerWidth
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
  },
  logo: {
    height: 26,
    paddingLeft: theme.spacing(1)
  }
}));


const toggleDrawer = () => {

}

function DrawerNav() {
  const classes = useStyles();
  return (
    <Drawer open className={classes.drawer} classes={{ paper: classes.drawerPaper }}>
      <div className={classes.drawerHeader}>
        <IconButton><MenuIcon /></IconButton>
        <img src="/images/logo.png" alt="Logotipo do Youtube" className={classes.logo} />
      </div>
      <Divider />
      <DrawerNavList />
      <Divider />
    </Drawer>
  );
}

export default DrawerNav;