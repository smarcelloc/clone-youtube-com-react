import React from 'react';

import {
  makeStyles,
  IconButton,
  Tooltip,
  Menu,
  MenuItem,
  ListItemIcon,
  Typography,
  Divider
} from '@material-ui/core';

import {
  Apps as AppsIcon,
  ChildCare as ChildCareIcon,
  LiveTv as LiveTvIcon,
  MusicVideo as MusicVideoIcon,
  School as SchoolIcon,
  PlayCircleFilledWhite as PlayCircleFilledWhiteIcon
} from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  icons: {
    marginRight: theme.spacing(1)
  }
}));

function AppYouTube() {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const toggleMenuOpen = (event) => {
    setAnchorEl((anchorEl) ? null : event.currentTarget);
  }

  return (
    <div>
      <Tooltip title="Aplicativo do Youtube" onClick={toggleMenuOpen} aria-controls="app-youtube-menu" aria-haspopup="true">
        <IconButton className={classes.icons} aria-label="Aplicativo do Youtube">
          <AppsIcon />
        </IconButton>
      </Tooltip>
      <Menu
        id="app-youtube-menu"
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        keepMounted
        onClose={toggleMenuOpen}
        getContentAnchorEl={null}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <MenuItem>
          <ListItemIcon><LiveTvIcon color="primary" /></ListItemIcon>
          <Typography variant="inherit">YouTube TV</Typography>
        </MenuItem>

        <Divider />

        <MenuItem>
          <ListItemIcon><MusicVideoIcon color="primary" /></ListItemIcon>
          <Typography variant="inherit">YouTube Music</Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon><ChildCareIcon color="primary" /></ListItemIcon>
          <Typography variant="inherit">YouTube Kids</Typography>
        </MenuItem>

        <Divider />

        <MenuItem>
          <ListItemIcon><SchoolIcon color="primary" /></ListItemIcon>
          <Typography variant="inherit">Escola de Criadores de Conteúdo</Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon><PlayCircleFilledWhiteIcon color="primary" /></ListItemIcon>
          <Typography variant="inherit">YouTube para Artistas</Typography>
        </MenuItem>
      </Menu>
    </div>
  );
}

export default AppYouTube;