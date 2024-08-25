import { createBrowserRouter } from "react-router-dom";
import { PrivateLayout, PublicLayout } from "./common/layouts";
import { Login, Signup } from "./feature/auth";
import { ErrorPage, NotFoundPage } from "./common/components";

import {
  CreateProject,
  ProjectDetails,
  Projects,
} from "./feature/project/components";

import CanActivate from "./common/guards/canActivate";

const appRoutes = createBrowserRouter([
  {
    path: "/",
    element: (
      <CanActivate authentication={true}>
        <PublicLayout />
      </CanActivate>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },

  {
    path: "/",
    element: (
      <CanActivate authentication={true} isPrivate={true}>
        <PrivateLayout />
      </CanActivate>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "projects/:projectId",
        element: <ProjectDetails />,
      },
      {
        path: "projects/create-project",
        element: <CreateProject />,
      },
      {
        path: "projects/edit-project/:projectId",
        element: <CreateProject />,
      },
    ],
  },

  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

export default appRoutes;
