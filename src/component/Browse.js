import React from "react";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useSelector } from "react-redux";

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
        <img
          src="https://occ-0-993-988.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABY20DrC9-11ewwAs6nfEgb1vrORxRPP9IGmlW1WtKuaLIz8VxCx5NryzDK3_ez064IsBGdXjVUT59G5IRuFdqZlCJCneepU.png?r=229"
          alt="user-logo"
        />
        <h2>{user?.name}</h2>
      </div>
    </div>
  );
};

export default Browse;
