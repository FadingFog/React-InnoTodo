import {Outlet} from "react-router-dom";
import {Navbar} from "src/layouts/main/Navbar";

export const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}