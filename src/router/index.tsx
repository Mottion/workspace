import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router";
import { MainLayout } from "../layouts/main_layout";
import { RegisterOfValues } from "../pages/register_of_values";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    ErrorBoundary: () => <Navigate to="/financial/register_of_values"/>,
    children: [
      {index: true, path: "/financial/register_of_values", element: <RegisterOfValues />}
    ]
  },
]);

export const Router: React.FC = () => <RouterProvider router={router} />  