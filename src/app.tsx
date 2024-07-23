import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { MainProfilePage } from "./pages/profile";
import { MainProjectsPage } from "./pages/projects";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainProfilePage/>,
  },
  {
    path: "/projects",
    element: <MainProjectsPage/>,
  }
]);

export function App() {
  return(
    <RouterProvider router={router} />
  )
}
