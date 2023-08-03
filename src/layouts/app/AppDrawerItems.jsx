import {NavLink} from "react-router-dom";
import {
  ListItem as MuiListItem,
  ListItemButton as MuiListItemButton,
  ListItemIcon as MuiListItemIcon,
  ListItemText as MuiListItemText, styled
} from "@mui/material";

const StyledHeadingListItem = styled(MuiListItem)({
  color: 'inherit',
  '&.active': {
    color: 'text.primary',
    bgcolor: 'action.selected',
    fontWeight: 'fontWeightBold',
  },
});

export const DrawerHeadingItem = ({title, icon, path, open}) => {
  return (
    <StyledHeadingListItem component={NavLink} to={path} disablePadding>
      <MuiListItemButton
        sx={{
          minHeight: 48,
          px: 2.5,
          justifyContent: open ? 'initial' : 'center',
        }}
      >
        <MuiListItemIcon
          sx={{
            minWidth: 0,
            mr: open ? 2 : 'auto',
            justifyContent: 'center',
          }}
        >
          {icon}
        </MuiListItemIcon>
        <MuiListItemText primary={title} sx={{opacity: open ? 1 : 0}} />
      </MuiListItemButton>
    </StyledHeadingListItem>
  )
}