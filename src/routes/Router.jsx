import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import AllContests from "../pages/AllContests";
import ContestDetails from "../pages/ContestDetails";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import PublicRoute from "./PublicRoute";

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
