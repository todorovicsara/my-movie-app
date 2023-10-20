import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      const errorMessage = document.getElementById("error-message");
      errorMessage.innerText = "An error occurred during logout. Please try again.";
    }
  };

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between p-4 z-[100] w-full absolute">
      <Link to="/">
        <h1 className="text-carnation text-4xl font-bold cursor-pointer">
          COPYFLIX
        </h1>
      </Link>
      <div id="error-message" className="text-red-600"></div>

      {user?.email ? (
        <div className="flex space-x-4 sm:space-x-0 sm:ml-4">
          <Link to="/account">
            <button className="text-white p-4">Account</button>
          </Link>

          <button
            onClick={handleLogout}
            className="bg-carnation px-6 py-2 rounded cursor-pointer text-white"
          >
            Logout
          </button>
        </div>
      ) : (
        <div className="flex space-x-4 sm:space-x-0 sm:ml-4">
          <Link to="/login">
            <button className="text-white p-4">Sign In</button>
          </Link>
          <Link to="/signup">
            <button className="bg-carnation px-6 py-2 rounded cursor-pointer text-white">
              Sign Up
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
