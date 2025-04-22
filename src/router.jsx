import { createBrowserRouter } from "react-router";
import { Experience } from "./pages/ExperiencePage";
import { Profile } from "./pages/ProfilePage";
import { Project } from "./pages/ProjectPage";
import Welcome from "./pages/WelcomePage";
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
