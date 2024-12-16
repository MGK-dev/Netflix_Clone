import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const logInHandler = () => {
    setIsLoggedIn(!isLoggedIn);
  };
  return (
    <>
      <div>
        <Header />
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src="https://wallpapers.com/images/hd/netflix-background-gs7hjuwvv2g0e9fj.jpg"
            alt="banner"
          />
        </div>

        {/* Form Centered */}

        <form
          action=""
          className="flex flex-col justify-center items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black opacity-80 p-12 rounded-md shadow-lg"
        >
          <h1 className="text-white text-3xl font-bold">
            {isLoggedIn ? "LogIn" : "SignUp"}
          </h1>
          <div className=" flex flex-col p-6 rounded shadow-lg">
            {!isLoggedIn && (
              <input
                type="text"
                placeholder="Full Name"
                id="fullName"
                className="px-3 py-2 my-2 border rounded bg-gray-800 text-white focus:outline-none focus:ring focus:ring-white"
              />
            )}

            <input
              type="email"
              placeholder="Email"
              id="email"
              className="px-3 py-2 my-2 border rounded bg-gray-800 text-white focus:outline-none focus:ring focus:ring-white"
            />

            <input
              type="password"
              placeholder="Password"
              id="password"
              className="px-3 py-2 my-2 border rounded bg-gray-800 text-white focus:outline-none focus:ring focus:ring-white"
            />
            <p className="text-white">
              {isLoggedIn ? "New to Netflix ?" : "Already have an account ?"}
              <span
                onClick={logInHandler}
                className="ml-1 text-blue-900 font-medium cursor-pointer"
              >
                {isLoggedIn ? " SignUp" : " LogIn"}
              </span>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
