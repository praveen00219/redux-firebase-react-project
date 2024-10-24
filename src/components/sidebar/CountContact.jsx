import React from "react";
import AllContact from "../../assets/All Contact.png";
import FavPersonImg from "../../assets/Fav Person.png";

function CountContact({ totalContacts }) {
  return (
    <>
      <div className="flex flex-col w-full items-center">
        <div className="flex gap-3 mb-4 w-full shadow-lg px-6 py-1 border rounded-md hover:border-blue-500 cursor-pointer">
          <img src={AllContact} alt="All Contact" className="w-8 h-8" />
          <div>
            <p className="font-semibold">All Contact</p>
            <p>{totalContacts} Contact</p>
          </div>
        </div>
        <div className="flex gap-3 w-full shadow-lg px-6 py-1 border rounded-md hover:border-blue-500 cursor-pointer">
          <img src={FavPersonImg} alt="Fav Person" className="w-8 h-8" />
          <div>
            <p className="font-semibold">Favourites</p>
            <p>0 Contact</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default CountContact;
