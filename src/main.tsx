import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import ErrorPage from "./pages/ErrorPage";
import About from "./pages/About";
import { MainProjectsContextProvider } from "./contexts/MainProjectsContext";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />,
    },
    {
        path: "contact",
        element: <Contact />,
    },
    {
        path: "about",
        element: <About />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <MainProjectsContextProvider>
            <RouterProvider router={router} />
        </MainProjectsContextProvider>
    </React.StrictMode>
);
