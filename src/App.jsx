import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./components/Header";
import { Body } from "./components/Body";
import { createBrowserRouter, Outlet, Route, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestarurantMenu from "./components/RestaurantMenu";

const Grocery = lazy(() => import("./components/Grocery"))

const AppLayout = () => (
  <div className="app">
    <Header />
    <Outlet />
  </div>
);

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Body />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loadign...</h1>}>
            <Grocery />
          </Suspense>
        )
      },
      {
        path: "/restaurant/:resId",
        element: <RestarurantMenu />
      }
    ],
    errorElement: <Error />
  }

])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
