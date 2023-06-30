import {Link as RouterLink} from "react-router-dom";
import {Button} from "@mui/material";

export const RouterButton = ({path, ...props}) => {
  return (
    <Button component={RouterLink} to={path} {...props} />
  )
}