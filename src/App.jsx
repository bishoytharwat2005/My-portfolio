import React from "react";
import { RouterProvider } from "react-router";
import { Routers } from "./Router/router";
import ThemeProvider from "@/components/Provider/ThemeProvider";

function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={Routers} />
    </ThemeProvider>
  );
}

export default App;