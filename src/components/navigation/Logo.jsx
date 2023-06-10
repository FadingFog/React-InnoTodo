import {Link as RouterLink} from "react-router-dom";
import {Link, Typography} from "@mui/material";


export const Logo = ({icon, title}) => {
  return (
    <>
      <Link
        component={RouterLink}
        to="/"
        sx={{
          display: "flex", alignItems: "center", padding: "1.25rem 1rem 1rem",
          color: "text.primary", textDecoration: "none"
        }}
      >
        {icon}
        <Typography variant="h5">{title}</Typography>
      </Link>
    </>
  )
}