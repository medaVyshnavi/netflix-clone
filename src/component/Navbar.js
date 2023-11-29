import React from "react";
import Header from "./Header";
import { useDispatch, useSelector } from "react-redux";
import { toggleGptSearchView } from "../utils/gptSlice";
import { USER_LOGO } from "../utils/constant";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleToggleAction = () => {
    dispatch(toggleGptSearchView());
  };

  const logoutUser = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {});
  };

  return (
    <div>
      <div className="flex justify-between items-center fixed bg-gradient-to-r from-black z-10 px-5">
        <Header />
        <div className="flex justify-evenly items-center">
          <button
            className="px-4 py-2 mx-4 bg-purple-700 text-white rounded-md"
            onClick={handleToggleAction}
          >
            Gpt Search
          </button>
          <div
            className="cursor-pointer tooltip flex justify-evenly items-center"
            onClick={logoutUser}
          >
            <img src={USER_LOGO} alt="user-logo" />
            <h2 className="mx-4 my-2">{user?.name}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
