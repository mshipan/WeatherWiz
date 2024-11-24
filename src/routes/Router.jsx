import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: "Homepage",
      },
    ],
  },
]);

export default Router;
