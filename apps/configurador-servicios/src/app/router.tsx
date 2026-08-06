// ==================================================
// IMPORTACIONES
// ==================================================

import { createBrowserRouter, Navigate } from "react-router-dom";

import App from "./App";
import { CatalogPage } from "../pages/CatalogPage";

// ==================================================
// CONSTANTES
// ==================================================

const routerBase =
  import.meta.env.BASE_URL === "/"
    ? "/"
    : import.meta.env.BASE_URL.replace(/\/$/, "");

// ==================================================
// ENRUTADOR
// ==================================================

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        {
          index: true,
          element: <CatalogPage />,
        },
        {
          path: "plataformas/:platformId",
          element: <CatalogPage />,
        },
        {
          path: "*",
          element: <Navigate replace to="/" />,
        },
      ],
    },
  ],
  {
    basename: routerBase,
  },
);
