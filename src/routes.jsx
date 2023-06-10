import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainLayout} from "./layouts/main/MainLayout";
import {DashboardLayout} from "./layouts/dashboard/DashboardLayout";
import {DashboardAppPage} from "./pages/DashboardAppPage";
import {Page404} from "./pages/Page404";
import {FrontPage} from "./pages/FrontPage";
import {LoginPage} from "./pages/LoginPage";
import {RegisterPage} from "./pages/RegisterPage";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {element: <FrontPage />, index: true},
      {path: '404', element: <Page404 />},
    ],
  },
  {
    path: '/dashboard',
    element: <DashboardLayout />,
    children: [
      {element: <Navigate to="/dashboard/app" replace />, index: true},
      {path: 'app', element: <DashboardAppPage />},
    ],
  },
  {
    path: '/login',
    element: <LoginPage />,  // Merge with RegisterPage as children with Layout
  },
  {
    path: '/register',
    element: <RegisterPage />,
  },
  {
    path: '*',
    element: <Navigate to='/404' replace />,
  },
])