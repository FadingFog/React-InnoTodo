import {AppBar, Box, Toolbar} from "@mui/material";
import {Logo} from "components/navigation/Logo.jsx";
import {StyledNavButton} from "components/navigation/NavButtons.jsx";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";


const navItems = [
  {title: 'Features', path: '/features'},
  {title: 'Blog', path: '/blog'},
  {title: 'Pricing', path: '/pricing'},
]

export const Navbar = () => {
  return (
    <AppBar position="sticky" color="secondary">
      <Toolbar disableGutters sx={{padding: '0 5%'}}>
        <Logo icon={<AppRegistrationIcon sx={{mr: 1}} />} title="InnoTodo"/>
        <Box className="NavGroup" sx={{display: 'flex'}}>
          {navItems.map((item) => (
            <StyledNavButton key={item.title} title={item.title} path={item.path} />
          ))}
        </Box>
        <Box className="ButtonGroup" sx={{display: 'flex', marginLeft: 'auto'}}>
          <StyledNavButton title="Log in" path="/login" />
          <StyledNavButton title="Get started" path="/register" variant="contained" sx={{color: "white", borderRadius: 0, boxShadow: 0}}/>
        </Box>
      </Toolbar>
    </AppBar>
  )
}