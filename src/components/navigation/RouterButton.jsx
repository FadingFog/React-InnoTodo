import {Button} from "@mui/material";
import {Link as RouterLink} from "react-router-dom";

export const RouterButton = ({path, ...props}) => {
	return (
		<Button component={RouterLink} to={path} {...props} />
	)
}