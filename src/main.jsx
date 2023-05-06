import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router-dom";
import { createRoutesFromElements, Route, RouterProvider } from "react-router";
import App from "./App";
import ErrorPage from "./pages/ErrorPage";
import Index from "./pages/Index";
import {MainPage, wordLoader} from "./pages/MainPage";
import "./index.scss";

const router = createBrowserRouter(
   createRoutesFromElements(
      <Route path="/" element={<App/>} errorElement={<ErrorPage />}>
            <Route index element={<Index />} />
            <Route path="/:word" element={<MainPage />} errorElement={<ErrorPage />} loader={wordLoader} />
      </Route>
   )
);

ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <RouterProvider router={router} />
   </React.StrictMode>
);
