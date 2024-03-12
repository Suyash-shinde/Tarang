import React from "react";
import ReactDOM from "react-dom/client";
// import { ReactProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
// const router = createBrowserRouter([

// ])
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <RouterProvider router={router} /> */}
    <App />
  </React.StrictMode>
);
