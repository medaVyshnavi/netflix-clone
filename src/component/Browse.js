import React from "react";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useSelector } from "react-redux";
import { USER_LOGO } from "../utils/constant";
import { useNowPlayingMovies } from "../hooks/useNowPlayingMovies";
import PrimaryComponent from "./PrimaryComponent";
import SecondaryComponent from "./SecondaryComponent";

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

  useNowPlayingMovies();

  return (
    <div className="text-white">
      <div className="flex justify-between items-center absolute bg-gradient-to-r from-black z-10 px-5">
        <Header />
        <div className="cursor-pointer tooltip" onClick={logoutUser}>
          <img src={USER_LOGO} alt="user-logo" />
          <h2>{user?.name}</h2>
        </div>
      </div>
      <div>
        <PrimaryComponent />
        <SecondaryComponent />
      </div>
    </div>
  );
};

export default Browse;
