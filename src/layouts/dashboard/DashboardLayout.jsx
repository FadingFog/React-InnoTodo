import {NavLink, Outlet} from "react-router-dom";
import AccountBoxIcon from "@mui/icons-material/AccountBox.js";
import DashboardIcon from "@mui/icons-material/Dashboard.js";
import ChecklistIcon from "@mui/icons-material/Checklist.js";
import QueryStatsIcon from "@mui/icons-material/QueryStats.js";
import {
  Box,
  Drawer as MuiDrawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled
} from "@mui/material";
import {useState} from "react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft.js";
import ChevronRightIcon from "@mui/icons-material/ChevronRight.js";


const drawerItems = [
  {title: 'Account', icon: <AccountBoxIcon />, path: '/app/account'},
  {title: 'Dashboard', icon: <DashboardIcon />, path: '/app/dashboard'},
  {title: 'Lists', icon: <ChecklistIcon />, path: '/app/lists'},
  {title: 'Statistics', icon: <QueryStatsIcon />, path: '/app/statistics'},
]

const drawerWidth = 180;

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
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({theme}) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
}));

const Drawer = styled(MuiDrawer, {shouldForwardProp: (prop) => prop !== 'open'})(
  ({theme, open}) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
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

export const DashboardLayout = () => {
  const [open, setOpen] = useState(true) // Move to props and pass value in layout

  const toggleDrawerState = () => {
    open ? setOpen(false) : setOpen(true)
  }

  return (
    <>
      <Box sx={{display: 'flex'}}>
        <Drawer variant="permanent" open={open}>
          <DrawerHeader>
            <IconButton onClick={toggleDrawerState}>
              {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </DrawerHeader>

          <List>
            {drawerItems.map((item, index) => (
              <ListItem
                key={index}
                component={NavLink}
                to={item.path}
                sx={{
                  '&.active': {
                    color: 'text.primary',
                    bgcolor: 'action.selected',
                    fontWeight: 'fontWeightBold',
                  },
                  color: 'inherit'
                }}
                disablePadding>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.title} sx={{opacity: open ? 1 : 0}} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>

        <Box id="content">
          <Outlet />
        </Box>
			</Box>
    </>
  )
}