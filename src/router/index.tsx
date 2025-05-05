import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import { MainLayout } from "../layouts/main_layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
  },
]);

export const Router: React.FC = () => <RouterProvider router={router} />  