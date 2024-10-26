import React from "react";
import profile from "../../assets/Profile.png";

function Navbar() {
  return (
    <div className="profile flex items-center mb-6">
      <img src={profile} alt="Profile" className="w-12 h-12" />
      <h1 className="text-xl font-bold text-[#57bbd3]">MakeContact</h1>
    </div>
  );
}

export default Navbar;
