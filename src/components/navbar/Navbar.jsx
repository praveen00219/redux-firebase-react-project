import React from "react";
import style from "./Navbar.module.css";
import profile from "../../assets/Profile.png";

function Navbar() {
  return (
    <div className="flex flex-row gap-8 justify-between items-center w-full px-5 py-3">
      <div className="profile flex items-center">
        <img src={profile} alt="Profile" className="w-12 h-12" />
        <h1 className="text-xl font-bold text-[#57bbd3]">MakeContact</h1>
      </div>
      <div className="search flex-1">
        <input
          type="text"
          placeholder="Search Person..."
          className="w-full px-4 py-1 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition duration-200 ease-in-out focus:border-transparent  placeholder-gray-400 placeholder-opacity-75 placeholder-italic placeholder:text-sm"
        />
      </div>
    </div>
  );
}

export default Navbar;
