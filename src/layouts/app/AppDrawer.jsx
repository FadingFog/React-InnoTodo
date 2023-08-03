import {useState} from "react";
import {Drawer as MuiDrawer, IconButton, List as MuiList, styled} from "@mui/material";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ChecklistIcon from "@mui/icons-material/Checklist";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import {DrawerHeadingItem} from "layouts/app/AppDrawerItems";

const drawerHeadingItems = [
  {title: 'Account', icon: <AccountBoxIcon />, path: '/app/account'},
  {title: 'Dashboard', icon: <DashboardIcon />, path: '/app/dashboard'},
  {title: 'Statistics', icon: <QueryStatsIcon />, path: '/app/statistics'},
  {title: 'Lists', icon: <ChecklistIcon />, path: '/app/lists'},
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

        <MuiList>
          {drawerHeadingItems.map((item, index) => (
            <DrawerHeadingItem key={index} {...item} open={open} />
          ))}
        </MuiList>
      </Drawer>
    </>
  )
}