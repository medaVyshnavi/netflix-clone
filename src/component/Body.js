import React, { useEffect } from "react";
import Header from "./Header";
import Browse from "./Browse";
import SignIn from "./SignIn";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const appRouter = createBrowserRouter([
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
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, displayName, email } = user;
        dispatch(addUser({ uid: uid, name: displayName, email: email }));
      } else {
        dispatch(removeUser());
      }
    });
    // unsubscribe the component when unmounted
    return () => unsubscribe();
  }, []);
  return (
    <RouterProvider router={appRouter}>
      <Header />
    </RouterProvider>
  );
};

export default Body;
