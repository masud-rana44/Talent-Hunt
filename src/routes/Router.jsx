import { createBrowserRouter } from "react-router-dom";

import Main from "../layouts/MainLayout";
import DashboardLayout from "../layouts/DashboardLayout";

import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import AllContests from "../pages/AllContests";
import ContestDetails from "../pages/ContestDetails";
import Login from "../pages/Login";
import Registration from "../pages/Registration";

import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
import MyRegisteredContest from "../pages/user/MyRegisteredContest";
import MyWinningContest from "../pages/user/MyWinningContest";
import MyProfile from "../pages/user/MyProfile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contests",
        element: <AllContests />,
      },
      {
        path: "/contests/:id",
        element: <ContestDetails />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      // user routes
      {
        path: "registered-contests",
        element: <MyRegisteredContest />,
      },
      {
        path: "winning-contests",
        element: <MyWinningContest />,
      },
      {
        path: "profile",
        element: <MyProfile />,
      },
      // creator routes
      // admin routes
    ],
  },
  {
    path: "/login",
    element: (
      <PublicRoute>
        <Login />
      </PublicRoute>
    ),
  },
  {
    path: "/signup",
    element: (
      <PublicRoute>
        <Registration />
      </PublicRoute>
    ),
  },
]);

export default router;
