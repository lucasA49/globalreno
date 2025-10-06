import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./Styles/index.css";

// Pages publiques
import Home from "./Pages/Home";
import Toiture from "./Pages/Toiture";
import Isolation from "./Pages/Isolation";
import Facade from "./Pages/Facade";
import Devis from "./Pages/Devis";
import ConditionGene from "./Pages/ConditionsGene";
import Propos from "./Pages/Propos";
import ArticlesPublic from "./Pages/ArticlesPublic";
import ArticleDetail from "./Pages/ArticlesDetail";

// Pages admin
import Login from "./Admin/Login";
import Dashboard from "./Admin/Dashboard";
import ArticlesList from "./Admin/ArticlesList";
import ArticleForm from "./Admin/ArticlesForm";
import ChangePassword from "./Admin/ChangePassword";
import Statistics from "./Admin/Statistics";

// Context et protection
import { AuthProvider } from "./Context/AuthContext";
import ProtectedRoute from "./Components/ProtectedRoute";
import AppLayout from "./Components/AppLayout";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      // Routes publiques
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
      {
        path: "/articles",
        element: <ArticlesPublic />,
      },
      {
        path: "/articles/:id",
        element: <ArticleDetail />,
      },
      
      // Routes admin
      {
        path: "/admin/login",
        element: <Login />,
      },
      {
        path: "/admin/dashboard",
        element: (
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        ),
      },
      {
        path: "/admin/articles",
        element: (
          <ProtectedRoute>
            <ArticlesList />
          </ProtectedRoute>
        ),
      },
      {
        path: "/admin/articles/new",
        element: (
          <ProtectedRoute>
            <ArticleForm />
          </ProtectedRoute>
        ),
      },
      {
        path: "/admin/articles/edit/:id",
        element: (
          <ProtectedRoute>
            <ArticleForm />
          </ProtectedRoute>
        ),
      },
      {
        path: "/admin/change-password",
        element: (
          <ProtectedRoute>
            <ChangePassword />
          </ProtectedRoute>
        ),
      },
      {
        path: "/admin/statistics",
        element: (
          <ProtectedRoute>
            <Statistics />
          </ProtectedRoute>
        ),
      },
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);