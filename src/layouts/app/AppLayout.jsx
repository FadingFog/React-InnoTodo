import {Box} from "@mui/material";
import {AppDrawer} from "layouts/app/AppDrawer.jsx";
import {Outlet} from "react-router-dom";

export const AppLayout = () => {


  return (
    <>
      <Box sx={{display: 'flex'}}>
        <AppDrawer />

        <Box id="content">
          <Outlet />
        </Box>
      </Box>
    </>
  )
}