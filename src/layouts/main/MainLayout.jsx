import {Outlet} from "react-router-dom";
import {Navbar} from "src/layouts/main/Navbar.jsx";

export const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}