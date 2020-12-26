import {
  makeStyles,
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Tooltip,
  Paper,
  InputBase,
  Divider,
  Hidden,
  useTheme
} from '@material-ui/core';

import {
  Menu as MenuIcon,
  AccountCircle as AccountCircleIcon,
  VideoCall as VideoCallIcon,
  Keyboard as KeyboardIcon,
  Search as SearchIcon
} from '@material-ui/icons';

import { grey } from '@material-ui/core/colors';
import { join } from 'path';
import AppYouTube from "./MenuDrawer/AppYouTube";
import Configuration from './MenuDrawer/Configuration';

// theme -> App.js -> const const theme = createMuiTheme({ ... })
const useStyles = makeStyles((theme) => ({
  separador: {
    flexGrow: 1
  },
  icons: {
    marginRight: theme.spacing(1)
  },
  logo: {
    height: 25,
  },
  btnLogin: {
    fontWeight: "500"
  },
  paper: {
    display: 'flex',
    alignItems: 'center',
    width: '40%',
    background: grey[50],
  },
  paperDark: {
    display: 'flex',
    alignItems: 'center',
    width: '40%',
    background: grey[700],
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
}));

function TopBar(props) {
  const classes = useStyles();
  const modoDark = useTheme().palette.type === 'dark';

  return (
    <AppBar position="fixed" color="inherit">
      <Toolbar>
        <IconButton onClick={props.toggleDrawer} edge="start" className={classes.icons} aria-label="menu">
          <MenuIcon />
        </IconButton>
        <img src={join('images', (modoDark ? 'logo-dark.png' : 'logo.png'))} alt="Logotipo do Youtube" className={classes.logo} />

        <div className={classes.separador} />

        <Hidden xsDown>
          <Paper component="form" className={(modoDark) ? classes.paperDark : classes.paper}>
            <InputBase
              className={classes.input}
              placeholder="Pesquisar ..."
              inputProps={{ 'aria-label': 'Pesquisar no Youtube ...' }}
            />
            <IconButton type="submit" className={classes.iconButton} aria-label="search">
              <SearchIcon />
            </IconButton>

            <Hidden smDown>
              <Divider orientation="vertical" flexItem />

              <IconButton className={classes.iconButton} aria-label="teclado virtual">
                <KeyboardIcon />
              </IconButton>
            </Hidden>
          </Paper>
        </Hidden>

        <div className={classes.separador} />

        <Hidden smUp>
          <Tooltip title="Pesquisar">
            <IconButton className={classes.icons} aria-label="Pesquisar">
              <SearchIcon />
            </IconButton>
          </Tooltip>
        </Hidden>

        <Hidden smDown>
          <Tooltip title="Criar">
            <IconButton className={classes.icons} aria-label="Criar">
              <VideoCallIcon />
            </IconButton>
          </Tooltip>

          <AppYouTube />
        </Hidden>
        <Configuration darkMode={props.darkMode} setDarkMode={props.setDarkMode} />
        <Hidden smDown>
          <Button variant="outlined" className={classes.btnLogin} startIcon={<AccountCircleIcon />} color="secondary">
            Fazer login
          </Button>
        </Hidden>
        <Hidden mdUp>
          <IconButton
            aria-label="account of current user"
            color="secondary"
          >
            <AccountCircleIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;