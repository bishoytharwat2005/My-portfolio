import Navbar from "@/components/Navbar";
import HomePage from "@/components/Pages/HomePage";
import { createBrowserRouter } from "react-router";

export const Routers = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
        index: true,
        element: <HomePage />,
      }
    ],
  },
]);