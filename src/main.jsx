import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import SideBar from "./pages/SideBar";
import App from "./App";
import ErrorPage from "./pages/error-page";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/dashboard",
    element: <SideBar />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
