import {styled, Typography} from "@mui/material";
import {RouterButton} from "components/navigation/RouterButton";

export const NavButton = ({title, ...props}) => {
  return (
    <RouterButton {...props} >
      <Typography variant="h6">{title}</Typography>
    </RouterButton>
  )
}

export const StyledNavButton = styled(NavButton)(({theme}) => ({
  color: theme.palette.text.primary,
  padding: "1.25rem 1rem 1rem",
  textTransform: "none"
}))
