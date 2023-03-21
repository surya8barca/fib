import * as React from 'react';
import { styled } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import SideNavItems from '../sidenav/sideNavItems'
import Tooltip from '@mui/material/Tooltip';
import Navbar from '../navbar/navbar';
import { Box } from '@mui/system';
import EnterpriseStructure from '../../components/enterpriseStructure'


const drawerWidth = 280;
let mainMenuStyle = {
    fontSize: '16px',
    fontWeight: 'bold',
    fontStyle: 'Graphik'
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
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }));

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
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



export default function MainLayout() {
    const [open, setOpen] = React.useState(false);

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            {/* navbar */}
            <AppBar position="fixed">
                <Navbar></Navbar>
            </AppBar>

            {/* sidenav */}
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
                    }} onClick={() => { setOpen(!open) }}>
                        <Tooltip title="Main Menu">
                            <ListItemIcon>
                                <ChevronRightIcon />
                            </ListItemIcon>
                        </Tooltip>
                        <ListItemText primaryTypographyProps={{ style: mainMenuStyle }} primary="Main Menu" />
                    </ListItemButton>
                    <SideNavItems></SideNavItems>
                </List>
                <Divider />
            </Drawer>

            {/* Main content */}
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <>
                    <DrawerHeader />
                    <EnterpriseStructure></EnterpriseStructure>
                </>
            </Box>
        </Box>
    );
}