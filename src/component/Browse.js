import React from "react";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useSelector } from "react-redux";
import { USER_LOGO } from "../utils/constant";

const Browse = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const logoutUser = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {});
  };
  return (
    <div className="flex justify-around items-center">
      <Header />
      <div className="cursor-pointer tooltip" onClick={logoutUser}>
        <img src={USER_LOGO} alt="user-logo" />
        <h2>{user?.name}</h2>
      </div>
    </div>
  );
};

export default Browse;
