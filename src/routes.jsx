import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainLayout} from "./layouts/main/MainLayout";
import {DashboardLayout} from "./layouts/dashboard/DashboardLayout";
import {DashboardAppPage} from "src/pages/app/DashboardAppPage.jsx";
import {Page404} from "./pages/Page404";
import {FrontPage} from "./pages/FrontPage";
import {LoginPage} from "./pages/LoginPage";
import {RegisterPage} from "./pages/RegisterPage";
import {AuthLayout} from "layouts/auth/AuthLayout.jsx";
import {AccountAppPage} from "pages/app/AccountAppPage.jsx";
import {ListsAppPage} from "pages/app/ListsAppPage.jsx";
import {StatisticsAppPage} from "pages/app/StatisticsAppPage.jsx";

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
    path: '/',
    element: <AuthLayout />,
    children: [
      {path: 'register', element: <RegisterPage />},
      {path: 'login', element: <LoginPage />},
    ]
  },
  {
    path: '/app',
    element: <DashboardLayout />,
    children: [
      {element: <Navigate to="/app/dashboard" replace />, index: true},
      {path: 'dashboard', element: <DashboardAppPage />},
      {path: 'lists', element: <ListsAppPage />},
      {path: 'statistics', element: <StatisticsAppPage />},
      {path: 'account', element: <AccountAppPage />},
    ],
  },
  {
    path: '*',
    element: <Navigate to='/404' replace />,
  },
])