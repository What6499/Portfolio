import { createBrowserRouter } from "react-router";
import App from "../App";
import Skills from "../components/Skills";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        path: "skills",
        Component: Skills,
      },
    ],
  },
]);
export default router;
