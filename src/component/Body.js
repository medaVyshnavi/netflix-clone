import React from "react";
import Header from "./Header";
import Browse from "./Browse";
import SignIn from "./SignIn";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SignIn />,
  },
  {
    path: "/browse",
    element: <Browse />,
  },
]);

const Body = () => {
  return (
    <RouterProvider router={router}>
      <Header />
    </RouterProvider>
  );
};

export default Body;
