import {Button, Stack, Typography} from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google.js";
import FacebookIcon from "@mui/icons-material/Facebook.js";

export const OAuthStack = () => {
	return (
		<Stack direction="column" spacing={2}>
			<Button fullWidth color="inherit" variant="outlined">
				<Typography variant="body2" component="p" sx={{display: "flex", alignItems: "center"}}>
					<GoogleIcon sx={{marginRight: 0.5}} />
					Continue with Google
				</Typography>
			</Button>

			<Button fullWidth color="inherit" variant="outlined">
				<Typography variant="body2" component="p" sx={{display: "flex", alignItems: "center"}}>
					<FacebookIcon sx={{marginRight: 0.5}} />
					Continue with Facebook
				</Typography>
			</Button>
		</Stack>
	)
}