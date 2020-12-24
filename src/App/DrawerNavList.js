import {
  makeStyles,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Button,
  ListSubheader,
  Link,
  Box
} from '@material-ui/core';

import { grey } from '@material-ui/core/colors'

import {
  AccountCircle as AccountCircleIcon,
  Home as HomeIcon,
  AddCircle as AddCircleIcon,
  Announcement as AnnouncementIcon,
  EmojiObjects as EmojiObjectsIcon,
  Settings as SettingsIcon,
  SportsVolleyball as SportsVolleyballIcon,
  SportsEsports as SportsEsportsIcon,
  Subscriptions as SubscriptionsIcon,
  Theaters as TheatersIcon,
  VideoLibrary as VideoLibraryIcon,
  Whatshot as WhatshotIcon,
  WifiTethering as WifiTetheringIcon,
  YouTube as YouTubeIcon,
  MusicNote as MusicNoteIcon,
  Help as HelpIcon,
  Flag as FlagIcon,
  History as HistoryIcon
} from '@material-ui/icons';


const useStyles = makeStyles(theme => ({
  drawerBody: {
    overflowY: 'scroll',
    '&::-webkit-scrollbar': {
      width: 5
    },
    '&::-webkit-scrollbar-thumb': {
      background: theme.palette.grey[400]
    }
  },
  btnLogin: {
    fontWeight: "500"
  },
  iconDark: {
    background: theme.palette.grey[700],
    color: theme.palette.grey[100],
    borderRadius: '50%',
    padding: theme.spacing(0.5)
  },
  links: {
    fontWeight: "bold",
    fontSize: 12.5,
    color: theme.palette.grey[600],
    paddingRight: theme.spacing(1)
  },
  textFooter: {
    color: theme.palette.grey[500],
    fontSize: 12.5
  }
}));

function DrawerNavList() {
  const classes = useStyles();

  return (
    <div className={classes.drawerBody}>
      <List dense>
        <ListItem button>
          <ListItemIcon><HomeIcon /></ListItemIcon>
          <ListItemText primary="Início" />
        </ListItem>
        <ListItem button>
          <ListItemIcon><WhatshotIcon /></ListItemIcon>
          <ListItemText primary="Em alta" />
        </ListItem>
        <ListItem button>
          <ListItemIcon><SubscriptionsIcon /></ListItemIcon>
          <ListItemText primary="Inscrição" />
        </ListItem>
      </List>

      <Divider />

      <List dense>
        <ListItem button>
          <ListItemIcon><VideoLibraryIcon /></ListItemIcon>
          <ListItemText primary="Biblioteca" />
        </ListItem>
        <ListItem button>
          <ListItemIcon><HistoryIcon /></ListItemIcon>
          <ListItemText primary="Histórico" />
        </ListItem>
      </List>

      <Divider />

      <Box paddingLeft={2} paddingBottom={2}>
        <p>Faça login para curtir vídeos, comentar e se inscrever.</p>
        <Button variant="outlined" className={classes.btnLogin} startIcon={<AccountCircleIcon />} color="secondary">
          Fazer login
        </Button>
      </Box>

      <Divider />

      <List dense>
        <ListSubheader disableSticky>O MELHOR DO YOUTUBE</ListSubheader>
        <ListItem button>
          <ListItemIcon><MusicNoteIcon className={classes.iconDark} /></ListItemIcon>
          <ListItemText primary="Música" />
        </ListItem>
        <ListItem button>
          <ListItemIcon><SportsVolleyballIcon className={classes.iconDark} /></ListItemIcon>
          <ListItemText primary="Esporte" />
        </ListItem>
        <ListItem button>
          <ListItemIcon><SportsEsportsIcon className={classes.iconDark} /></ListItemIcon>
          <ListItemText primary="Jogos" />
        </ListItem>
        <ListItem button>
          <ListItemIcon><TheatersIcon className={classes.iconDark} /></ListItemIcon>
          <ListItemText primary="Filmes" />
        </ListItem>
        <ListItem button>
          <ListItemIcon><WifiTetheringIcon className={classes.iconDark} /></ListItemIcon>
          <ListItemText primary="Ao vivo" />
        </ListItem>
        <ListItem button>
          <ListItemIcon><EmojiObjectsIcon className={classes.iconDark} /></ListItemIcon>
          <ListItemText primary="Aprender" />
        </ListItem>
      </List>

      <Divider />
      <List dense>
        <ListItem button>
          <ListItemIcon><AddCircleIcon /></ListItemIcon>
          <ListItemText primary="Procurar mais canais" />
        </ListItem>
      </List>
      <Divider />

      <List dense>
        <ListSubheader disableSticky>MAIS DO YOUTUBE</ListSubheader>
        <ListItem button>
          <ListItemIcon><YouTubeIcon /></ListItemIcon>
          <ListItemText primary="Youtube Premium" />
        </ListItem>
        <ListItem button>
          <ListItemIcon><WifiTetheringIcon /></ListItemIcon>
          <ListItemText primary="Ao vivo" />
        </ListItem>
      </List>

      <Divider />

      <List dense>
        <ListItem button>
          <ListItemIcon><SettingsIcon /></ListItemIcon>
          <ListItemText primary="Configurações" />
        </ListItem>
        <ListItem button>
          <ListItemIcon><FlagIcon /></ListItemIcon>
          <ListItemText primary="Histórico de denúncias" />
        </ListItem>
        <ListItem button>
          <ListItemIcon><HelpIcon /></ListItemIcon>
          <ListItemText primary="Ajuda" />
        </ListItem>
        <ListItem button>
          <ListItemIcon><AnnouncementIcon /></ListItemIcon>
          <ListItemText primary="Enviar feedback" />
        </ListItem>
      </List>

      <Divider />

      <List dense>
        <ListItem>
          <Link className={classes.links} href="https://www.youtube.com/about/">Sobre</Link>
          <Link className={classes.links} href="https://www.youtube.com/about/press/">Imprensa</Link>
        </ListItem>
        <ListItem>
          <Link className={classes.links} href="https://www.youtube.com/about/copyright/">Direitos autorais</Link>
        </ListItem>
        <ListItem>
          <Link className={classes.links} href="https://www.youtube.com/t/contact_us/">Entre em contato</Link>
        </ListItem>
        <ListItem>
          <Link className={classes.links} href="https://www.youtube.com/creators/">Criadores de conteúdo</Link>
        </ListItem>
        <ListItem>
          <Link className={classes.links} href="https://www.youtube.com/ads/">Publicidade</Link>
          <Link className={classes.links} href="https://developers.google.com/youtube">Desenvolvedores</Link>
        </ListItem>
      </List>

      <List dense>
        <ListItem>
          <Link className={classes.links} href="https://www.youtube.com/t/terms">Termos</Link>
          <Link className={classes.links} href="https://policies.google.com/privacy?hl=pt-BR">Privacidade</Link>
        </ListItem>
        <ListItem>
          <Link className={classes.links} href="https://www.youtube.com/about/policies/">Política e segurança</Link>
        </ListItem>
        <ListItem>
          <Link className={classes.links} href="https://www.youtube.com/howyoutubeworks?utm_campaign=ytgen&utm_source=ythp&utm_medium=LeftNav&utm_content=txt&u=https%3A%2F%2Fwww.youtube.com%2Fhowyoutubeworks%3Futm_source%3Dythp%26utm_medium%3DLeftNav%26utm_campaign%3Dytgen">Como funciona o YouTube</Link>
        </ListItem>
        <ListItem>
          <Link className={classes.links} href="https://www.youtube.com/new">Testar os novos recursos</Link>
        </ListItem>
      </List>

      <Box color={grey[500]} fontSize={12.5} padding={2}>&copy; 2020 Google LLC</Box>
    </div>
  );
}

export default DrawerNavList;