import { createBrowserRouter } from "react-router";
import App from "../App";
import Skills from "../components/Skills";
import Contacts from "../components/Contacts";
import Projects from "../components/Projects";
import ProjectDetails from "../components/ProjectDetails";
import Home from "../components/Home";
const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: `projects/:id`,
        Component: ProjectDetails,
      },
    ],
  },
  {
    path: `projects/:id`,
    Component: ProjectDetails,
  },
]);
export default router;
