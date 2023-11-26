import { createBrowserRouter } from "react-router-dom";

import Main from "../layouts/MainLayout";
import DashboardLayout from "../layouts/DashboardLayout";

import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import AllContests from "../pages/AllContests";
import ContestDetails from "../pages/ContestDetails";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import MyRegisteredContest from "../pages/user/MyRegisteredContest";
import MyWinningContest from "../pages/user/MyWinningContest";
import MyProfile from "../pages/user/MyProfile";
import AddContest from "../pages/creator/AddContest";
import ManageUser from "../pages/admin/ManageUser";
import ManageContest from "../pages/admin/ManageContest";
import MyCreatedContest from "../pages/creator/MyCreatedContest";
import UpdateContest from "../pages/creator/UpdateContest";
import ContestRegistration from "../pages/ContestRegistration";
import ContestSubmission from "../pages/creator/ContestSubmission";

import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
import TaskSubmission from "../pages/user/TaskSubmission";

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
        element: (
          <PrivateRoute>
            <ContestDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/contests/:contestId/register",
        element: (
          <PrivateRoute>
            <ContestRegistration />
          </PrivateRoute>
        ),
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
        path: "task/:contestId",
        element: <TaskSubmission />,
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
      {
        path: "contests/new",
        element: <AddContest />,
      },
      {
        path: "contests/:id/update",
        element: <UpdateContest />,
      },
      {
        path: "creator/contests",
        element: <MyCreatedContest />,
      },
      {
        path: "contests/:id/submissions",
        element: <ContestSubmission />,
      },
      // admin routes
      {
        path: "users",
        element: <ManageUser />,
      },
      {
        path: "contests",
        element: <ManageContest />,
      },
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
