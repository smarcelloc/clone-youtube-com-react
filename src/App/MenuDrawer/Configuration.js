import React from 'react';

import {
  makeStyles,
  IconButton,
  Tooltip,
  Menu,
  MenuItem,
  ListItemIcon,
  Typography,
  Divider,
  Hidden
} from '@material-ui/core';

import {
  MoreVert as MoreVertIcon,
  AccountCircle as AccountCircleIcon,
  Settings as SettingsIcon,
  Keyboard as KeyboardIcon,
  Help as HelpIcon,
  Feedback as FeedbackIcon,
  Brightness4 as Brightness4Icon,
  Language as LanguageIcon,
  Translate as TranslateIcon,
  Apps as AppsIcon,
  VideoCall as VideoCallIcon
} from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  icons: {
    marginRight: theme.spacing(1)
  }
}));

function Configuration() {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const toggleMenuOpen = (event) => {
    setAnchorEl((anchorEl) ? null : event.currentTarget);
  }

  return (
    <div>
      <Tooltip title="Configuração" onClick={toggleMenuOpen} aria-controls="configuration" aria-haspopup="true">
        <IconButton className={classes.icons} color="inherit" aria-label="Configuração do Youtube">
          <MoreVertIcon />
        </IconButton>
      </Tooltip>
      <Menu
        id="configuration"
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        keepMounted
        onClose={toggleMenuOpen}
        getContentAnchorEl={null}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "bottom", horizontal: "right" }}
      >

        <Hidden mdUp>
          <MenuItem>
            <ListItemIcon><VideoCallIcon /></ListItemIcon>
            <Typography variant="inherit">Criar</Typography>
          </MenuItem>

          <MenuItem>
            <ListItemIcon><AppsIcon /></ListItemIcon>
            <Typography variant="inherit">Aplicativos do Youtube</Typography>
          </MenuItem>

          <Divider />
        </Hidden>

        <MenuItem>
          <ListItemIcon><Brightness4Icon /></ListItemIcon>
          <Typography variant="inherit">Aparência: Claro</Typography>
        </MenuItem>

        <MenuItem>
          <ListItemIcon><TranslateIcon /></ListItemIcon>
          <Typography variant="inherit">Idioma: Português</Typography>
        </MenuItem>

        <MenuItem>
          <ListItemIcon><LanguageIcon /></ListItemIcon>
          <Typography variant="inherit">Local: Brasil</Typography>
        </MenuItem>

        <MenuItem>
          <ListItemIcon><SettingsIcon /></ListItemIcon>
          <Typography variant="inherit">Configurações</Typography>
        </MenuItem>

        <MenuItem>
          <ListItemIcon><AccountCircleIcon /></ListItemIcon>
          <Typography variant="inherit">Seu dados no YouTube</Typography>
        </MenuItem>


        <MenuItem>
          <ListItemIcon><HelpIcon /></ListItemIcon>
          <Typography variant="inherit">Ajuda</Typography>
        </MenuItem>

        <MenuItem>
          <ListItemIcon><FeedbackIcon /></ListItemIcon>
          <Typography variant="inherit">Enviar feedback</Typography>
        </MenuItem>

        <Hidden smDown>
          <Divider />

          <MenuItem>
            <ListItemIcon><KeyboardIcon /></ListItemIcon>
            <Typography variant="inherit">Atalhos do teclado</Typography>
          </MenuItem>
        </Hidden>
      </Menu>
    </div>
  );
}

export default Configuration;