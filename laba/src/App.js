import React, { useEffect, useState } from "react";
import Albums, { loader as albumsLoader } from "./routers/Albums";
import Users, { loader as usersLoader } from "./routers/Users";
import User, { loader as userLoader } from "./routers/User";
import Album, { loader as albumLoader } from "./routers/Album";
import NotFound from "./routers/NotFound";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./routers/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        loader: usersLoader,
        element: <Users />
      },
      {
        path: "/users/:id",
        loader: userLoader,
        element: <User />
      },
      {
        path: "/albums",
        loader: albumsLoader,
        element: <Albums />
      },
      {
        path: "/albums/:id/:userId",
        loader: albumLoader,
        element: <Album />
      },
      {
        path: "*",
        element: <NotFound />
      }
    ]
  }
]);

export default function App() {
  return <RouterProvider router={router} />;
}
