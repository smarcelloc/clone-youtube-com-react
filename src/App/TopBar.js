import {
  makeStyles,
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Tooltip,
  Paper,
  InputBase,
  Divider
} from '@material-ui/core';

import {
  Menu as MenuIcon,
  AccountCircle as AccountCircleIcon,
  VideoCall as VideoCallIcon,
  Keyboard as KeyboardIcon,
  Search as SearchIcon
} from '@material-ui/icons';

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
    background: theme.palette.grey[50],
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
  return (
    <AppBar position="fixed" color="inherit">
      <Toolbar>
        <IconButton onClick={props.toggleDrawer} edge="start" className={classes.icons} color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>

        <img src="/images/logo.png" alt="Logotipo do Youtube" className={classes.logo} />

        <div className={classes.separador} />

        <Paper component="form" className={classes.paper}>
          <InputBase
            className={classes.input}
            placeholder="Pesquisar ..."
            inputProps={{ 'aria-label': 'Pesquisar no Youtube ...' }}
          />
          <IconButton type="submit" className={classes.iconButton} aria-label="search">
            <SearchIcon />
          </IconButton>

          <Divider orientation="vertical" flexItem />

          <IconButton className={classes.iconButton} aria-label="teclado virtual">
            <KeyboardIcon />
          </IconButton>
        </Paper>

        <div className={classes.separador} />

        <Tooltip title="Criar">
          <IconButton className={classes.icons} color="inherit" aria-label="Criar">
            <VideoCallIcon />
          </IconButton>
        </Tooltip>

        <AppYouTube />

        <Configuration />

        <Button variant="outlined" className={classes.btnLogin} startIcon={<AccountCircleIcon />} color="secondary">
          Fazer login
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;