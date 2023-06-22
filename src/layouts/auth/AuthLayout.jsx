import {Container, Paper, Stack} from "@mui/material";
import {Outlet} from "react-router-dom";

export const AuthLayout = () => {
	return (
		<Container>
			<Paper elevation={3} sx={{m: "3rem auto", maxWidth: "400px"}}>
				<Stack
					direction="column"
					spacing={3}
					useFlexGap
					padding={4}
					textAlign="center"
				>
					<Outlet />
				</Stack>
			</Paper>
		</Container>
	)
}