import {Link as RouterLink} from "react-router-dom";
import {Button, Link, Stack, TextField, Typography} from "@mui/material";
import {OAuthStack} from "components/auth/OAuthStack";

export const RegisterPage = () => {
  return (
    <>
      <Typography variant="h6">Sign up for your account</Typography>
      <Stack spacing={2} component="form" autoComplete="off">
        <TextField label="Enter email" />
        <TextField label="Enter password" type="password"/>
        <Button fullWidth variant="contained" sx={{textTransform: "none"}}>
          <Typography variant="h6">Continue</Typography>
        </Button>
      </Stack>

      <Typography variant="body2" component="p">OR</Typography>
      <OAuthStack />

      <Link component={RouterLink} to="/login">Already have an account? Log In</Link>
    </>
  )
}