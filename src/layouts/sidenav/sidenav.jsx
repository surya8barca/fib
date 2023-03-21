import * as React from 'react';
import { styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
// import IconButton from '@mui/material/IconButton';
// import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import SideNavItems from './sideNavItems';
import Tooltip from '@mui/material/Tooltip';
import GmailTreeView from './sideNavTree';

const drawerWidth = 280;
let mainMenuStyle={
  fontSize:'16px',
  fontWeight:'bold',
  fontStyle:'Graphik'
}

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(6)})`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(7)})`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

let heading = 'Accenture';




export default function Sidenav() {
  const [open, setOpen] = React.useState(false);


  return (
    <>
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            {heading}
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer PaperProps={{
        sx: {
          backgroundColor: "#fafafa",
        }
  }} variant="permanent" open={open}>
        <DrawerHeader>
        </DrawerHeader>
        <Divider />
        <List
          sx={{
             width: '100%',
            maxWidth: 360,
         }}
          component="nav" disablePadding>
          <ListItemButton style={{
  backgroundColor: '#E8EDFA', 
} } onClick={() => { setOpen(!open) }}>
            <Tooltip title="Main Menu">
              <ListItemIcon>
                <ChevronRightIcon />
              </ListItemIcon>
            </Tooltip>
            <ListItemText primaryTypographyProps={{ style: mainMenuStyle }} primary="Main Menu" />
          </ListItemButton>
          {/* <GmailTreeView></GmailTreeView> */}
          <SideNavItems></SideNavItems>
        </List>
        <Divider />
      </Drawer>
    </>
  );
}