import {
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
import {NavLink} from "react-router-dom";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ChecklistIcon from "@mui/icons-material/Checklist";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";


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

const StyledListItem = styled(ListItem)({
  color: 'inherit',
  '&.active': {
    color: 'text.primary',
    bgcolor: 'action.selected',
    fontWeight: 'fontWeightBold',
  },
});


export const AppDrawer = () => {
  const [open, setOpen] = useState(true)

  const toggleDrawerState = () => {
    open ? setOpen(false) : setOpen(true)
  }

  return (
    <>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={toggleDrawerState} sx={{mx: !open ? 'auto' : ''}}>
            {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>

        <List>
          {drawerItems.map((item, index) => (
            <StyledListItem key={index} component={NavLink} to={item.path} disablePadding>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  px: 2.5,
                  justifyContent: open ? 'initial' : 'center',
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
            </StyledListItem>
          ))}
        </List>
      </Drawer>
    </>
  )
}