import { createBrowserRouter } from "react-router";
import App from "../App";
import Skills from "../components/Skills";
import Contacts from "../components/Contacts";
import Projects from "../components/Projects"
const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        path: "skills",
        Component: Skills,
      },
      {
        path: "contacts",
        Component: Contacts,
      },
      {
        path:'projects',
        Component:Projects
      }
    ],
  },
]);
export default router;
