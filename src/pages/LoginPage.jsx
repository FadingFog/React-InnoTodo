import {useState} from "react";
import {Link as RouterLink} from "react-router-dom";
import {
  Button,
  Divider,
  IconButton,
  InputAdornment, InputLabel,
  FormControl,
  Link,
  OutlinedInput,
  Stack,
  TextField,
  Typography
} from "@mui/material";
import {OAuthStack} from "components/auth/OAuthStack";
import {Visibility, VisibilityOff} from "@mui/icons-material";

export const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false)
  const handleClickShowPassword = () => setShowPassword((show) => !show)
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };


  return (
    <>
      <Typography variant="h6">Log in to InnoTodo</Typography>
      <Stack spacing={2} component="form" autoComplete="off">
        <TextField label="Enter email" variant="outlined" />

        <FormControl variant="outlined">
          <InputLabel htmlFor="outlined-password">Enter password</InputLabel>
          <OutlinedInput
            id="outlined-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Enter password"
          />
        </FormControl>


        <Button fullWidth variant="contained" sx={{textTransform: "none"}}>
          <Typography variant="h6">Continue</Typography>
        </Button>
      </Stack>

      <Typography variant="body2" component="p">OR</Typography>
      <OAuthStack />

      <Divider />
      <Stack direction="row" spacing={1} justifyContent="center">
        <Link component={RouterLink} to="/forgot">Can't log in?</Link>
        <Divider orientation="vertical" variant="middle" flexItem />
        <Link component={RouterLink} to="/register">Sign up for an account</Link>
      </Stack>
    </>
  )
}