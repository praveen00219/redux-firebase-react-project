import React from "react";
import AllContact from "../../assets/All Contact.png";
import FavPersonImg from "../../assets/Fav Person.png";
import { NavLink } from "react-router-dom";

function CountContact({ totalContacts }) {
  return (
    <div className="flex flex-col w-full items-center">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `flex gap-3 mb-4 w-full shadow-lg px-6 py-1 border rounded-md cursor-pointer ${
            isActive ? "border-blue-500 text-blue-500" : "hover:border-blue-500"
          }`
        }
      >
        <img src={AllContact} alt="All Contact" className="w-8 h-8" />
        <div>
          <p className="font-semibold">All Contact</p>
          <p>{totalContacts} Contact</p>
        </div>
      </NavLink>

      <NavLink
        to="/favouritesContactList"
        className={({ isActive }) =>
          `flex gap-3 w-full shadow-lg px-6 py-1 border rounded-md cursor-pointer ${
            isActive ? "border-blue-500 text-blue-500" : "hover:border-blue-500"
          }`
        }
      >
        <img src={FavPersonImg} alt="Fav Person" className="w-8 h-8" />
        <div className="flex items-center">
          <p className="font-semibold">Favourites</p>
          {/* <p>0 Contact</p> */}
        </div>
      </NavLink>
    </div>
  );
}

export default CountContact;
