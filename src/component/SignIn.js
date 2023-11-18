import React, { useRef, useState } from "react";
import { validate } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isUser, setIsUser] = useState(true);
  const [errMsg, setErrMsg] = useState(null);

  const emailRef = useRef();
  const passwordRef = useRef();
  const fullNameRef = useRef();

  const handleUser = () => {
    setIsUser(!isUser);
  };

  const handleValidation = (e) => {
    e.preventDefault();
    const message = validate(
      emailRef.current.value,
      passwordRef?.current?.value,
      fullNameRef?.current?.value,
      isUser
    );
    setErrMsg(message);
    if (message) return;

    if (!isUser) {
      createUserWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef?.current?.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: fullNameRef?.current?.value,
            photoURL: "https://example.com/jane-q-user/profile.jpg",
          })
            .then(() => {
              const { uid, displayName, email } = auth.currentUser;
              dispatch(addUser({ uid: uid, name: displayName, email: email }));
              navigate("/browse");
            })
            .catch((error) => {
              setErrMsg(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMsg(errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef?.current?.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          if (user) {
            navigate("/browse");
          }
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMsg(errorMessage);
        });
    }
  };
  return (
    <>
      <div>
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/a09bb938-2d90-42ae-986e-5a3e4abf9e77/f81f5535-4709-4205-be63-32f3706a64c5/JP-en-20231113-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="netflix-background"
        />
        <div className="bg-gradient-to-b from-black w-full h-4/5 absolute top-0" />
      </div>

      <div className="absolute top-0 left-0 w-1/2">
        <img
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="netflix-logo"
          className="w-4/12"
        />
      </div>
      <form className="absolute top-28 left-0 right-0 m-auto bg-[#000000bf] w-1/3 text-white">
        <div className="py-20 px-20 ">
          <h1 className="text-3xl font-bold py-3">
            {isUser ? "Sign In" : "Sign Up"}
          </h1>
          <input
            type="text"
            placeholder="Email or phone number"
            className="bg-[#333] px-5 py-3 rounded-md mt-4 mb-2 w-full"
            ref={emailRef}
          />
          {isUser ? (
            ""
          ) : (
            <input
              type="text"
              placeholder="Full Name"
              ref={fullNameRef}
              className="bg-[#333] px-5 py-3 rounded-md my-3 w-full"
            />
          )}
          <input
            type="password"
            placeholder="Password"
            className="bg-[#333] px-5 py-3 rounded-md mb-4 mt-2 w-full"
            ref={passwordRef}
          />
          <div className="text-red-700 font-normal">{errMsg}</div>
          <button
            className="bg-red-500 text-white rounded-md px-28 py-3 my-6 w-full cursor-pointer"
            onClick={handleValidation}
          >
            {isUser ? "Sign In" : "Sign Up"}
          </button>
          <div className="flex justify-between items-center text-[#b3b3b3]">
            {isUser ? (
              <div>
                <input
                  type="checkbox"
                  id="rememberMe"
                  checked={true}
                  readOnly
                />
                <label htmlFor="rememberMe"> Remember Me</label>
              </div>
            ) : (
              ""
            )}
            <div>Need Help?</div>
          </div>
          <div className="text-[#b3b3b3] mt-20">
            <h2>
              {isUser ? "New to Netflix?" : "Already an user?"}{" "}
              <span
                className="text-white font-bold cursor-pointer"
                onClick={handleUser}
              >
                {isUser ? "SignUp Now" : "Sign In"}
              </span>
            </h2>
          </div>
        </div>
      </form>
    </>
  );
};

export default SignIn;
