import {
  makeStyles,
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Tooltip
} from '@material-ui/core';

import {
  Menu as MenuIcon,
  AccountCircle as AccountCircleIcon,
  VideoCall as VideoCallIcon,
  Apps as AppsIcon,
  MoreVert as MoreVertIcon
} from '@material-ui/icons';

// theme -> App.js -> const const theme = createMuiTheme({ ... })
const useStyles = makeStyles((theme) => ({
  appBar: {
    boxShadow: 'none'
  },
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
  }
}));

function TopBar() {
  const classes = useStyles();
  return (
    <AppBar position="fixed" color="inherit" className={classes.appBar}>
      <Toolbar>
        <IconButton edge="start" className={classes.icons} color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>

        <img src="/images/logo.png" alt="Logotipo do Youtube" className={classes.logo} />

        <div className={classes.separador} />

        <Tooltip title="Criar">
          <IconButton className={classes.icons} color="inherit" aria-label="Criar">
            <VideoCallIcon />
          </IconButton>
        </Tooltip>

        <Tooltip title="Aplicativo do Youtube">
          <IconButton className={classes.icons} color="inherit" aria-label="Aplicativo do Youtube">
            <AppsIcon />
          </IconButton>
        </Tooltip>

        <Tooltip title="Configuração">
          <IconButton className={classes.icons} color="inherit" aria-label="Configuração">
            <MoreVertIcon />
          </IconButton>
        </Tooltip>

        <Button variant="outlined" className={classes.btnLogin} startIcon={<AccountCircleIcon />} color="secondary">
          Fazer login
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;