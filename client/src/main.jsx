import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Layout from "./components/Layout.jsx";
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import Notes from "./Pages/Notes.jsx";
import Github from "./Pages/Github.jsx";
import Login from "./Pages/Login.jsx";
import ProtectedRoute from "./Authentication/Protectedroute.jsx";
import { Authentication } from "./Authentication/Authentication.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Authentication />}>
      {" "}
      {/* ✅ Wrap everything inside Authentication */}
      <Route path="login" element={<Login />} />
      <Route path="/" element={<ProtectedRoute />}>
        <Route path="/" element={<Layout />}>
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="notes" element={<Notes />} />
          <Route path="github" element={<Github />} />
        </Route>
      </Route>
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
