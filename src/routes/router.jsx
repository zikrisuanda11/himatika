import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../ErrorPage";
import Index from "../pages/Index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
    errorElement: <ErrorPage />
  },
]);

export default router;