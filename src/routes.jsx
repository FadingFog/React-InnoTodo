import {createBrowserRouter, Navigate} from "react-router-dom";
import {AccountAppPage} from "pages/app/AccountAppPage";
import {AppLayout} from "layouts/app/AppLayout";
import {AuthLayout} from "layouts/auth/AuthLayout";
import {DashboardAppPage} from "src/pages/app/DashboardAppPage";
import {FrontPage} from "pages/FrontPage";
import {ListsAppPage} from "pages/app/ListsAppPage";
import {LoginPage} from "pages/LoginPage";
import {MainLayout} from "layouts/main/MainLayout";
import {Page404} from "pages/Page404";
import {RegisterPage} from "pages/RegisterPage";
import {StatisticsAppPage} from "pages/app/StatisticsAppPage";

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
    element: <AppLayout />,
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