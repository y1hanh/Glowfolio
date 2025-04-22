import { createBrowserRouter } from "react-router";
import { Experience } from "./pages/experience";
import { Profile } from "./pages/profile";
import { Project } from "./pages/project";
import Welcome from "./pages/welcome";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        Component: Welcome,
      },
      {
        path: "/profile",
        Component: Profile,
      },
      {
        path: "/experience",
        Component: Experience,
      },
      {
        path: "/project",
        Component: Project,
      },
    ],
  },
]);

export default router;
