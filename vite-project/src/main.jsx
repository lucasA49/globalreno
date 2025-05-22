import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./Styles/index.css"; //Fichier pour le style du html de base !

// import App from "./App";
import Home from "./Pages/Home";
import Toiture from "./Pages/Toiture";
import Isolation from "./Pages/Isolation";
import Facade from "./Pages/Facade";
import Devis from "./Pages/Devis";
import ConditionGene from "./Pages/ConditionsGene";
import Propos from "./Pages/Propos";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/toiture",
    element: <Toiture />,
  },
  {
    path: "/isolation",
    element: <Isolation />,
  },
  {
    path: "/facade",
    element: <Facade />,
  },
  {
    path: "/Contact",
    element: <Devis />,
  },
  {
    path: "/ConditionsGénérales",
    element: <ConditionGene />,
  },
   {
    path: "/apropos",
    element: <Propos />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
