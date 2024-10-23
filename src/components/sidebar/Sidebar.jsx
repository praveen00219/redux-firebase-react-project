import React from "react";
import style from "./Sidebar.module.css";
import AllContact from "../../assets/All Contact.png";
import FavPersonImg from "../../assets/Fav Person.png";
import OfficeWork from "../../assets/Office Work.png";

function Sidebar() {
  return (
    <div className="w-[25%] h-[70vh] border-r-2 p-3">
      <div className="flex flex-col w-full items-center">
        <div className="flex gap-3 mb-4">
          <img src={AllContact} alt={AllContact} className="w-8 h-8" />
          <div>
            <p className="font-semibold">All Contact</p>
            <p>1 Contact</p>
          </div>
        </div>
        <div className="flex gap-3">
          <img src={FavPersonImg} alt={FavPersonImg} className="w-8 h-8" />
          <div>
            <p className="font-semibold">Favourites</p>
            <p>0 Contact</p>
          </div>
        </div>
      </div>

      <div>
        <img src={OfficeWork} alt={OfficeWork} className="" />
      </div>

      <div className="flex flex-col gap-3 px-2 mt-4">
        <div className="flex items-center justify-between gap-3  w-full">
          <div class="flex items-center justify-center">
            <label class="flex flex-col items-center px-2 py-2 bg-white text-blue-500 rounded-lg shadow-lg tracking-wide uppercase border border-blue-200 cursor-pointer hover:bg-blue-500 hover:text-white transition duration-200 ease-in-out">
              <svg
                class="w-5 h-8"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M16.88 6.59l-2.12-2.12A1 1 0 0014 4H6a1 1 0 00-.71.29L3.17 6.59A2 2 0 002 8.17V16a2 2 0 002 2h12a2 2 0 002-2V8.17a2 2 0 00-.59-1.41zM10 18a3.5 3.5 0 110-7 3.5 3.5 0 010 7zM4.41 6l1.3-1.29C6.03 4.29 6.51 4 7 4h6c.49 0 .97.29 1.29.71L15.59 6H4.41z" />
              </svg>
              <span class="mt-2 leading-normal text-xs">Photo</span>
              <input type="file" class="hidden" />
            </label>
          </div>
          <div className="flex flex-col gap-2 my-1">
            <input
              type="text"
              placeholder="First Name"
              class="w-full px-2 py-1 border-b border-[#57bbd3] rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition duration-200 ease-in-out focus:border-transparent placeholder-gray-400 placeholder-opacity-75 placeholder-italic placeholder:text-sm"
            />
            <input
              type="text"
              placeholder="Last Name"
              class="w-full px-2 py-1 border-b border-[#57bbd3] rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition duration-200 ease-in-out focus:border-transparent placeholder-gray-400 placeholder-opacity-75 placeholder-italic placeholder:text-sm"
            />
          </div>
        </div>
        <input
          type="text"
          placeholder="Mobile"
          class="w-full px-2 py-1 border-b border-[#57bbd3] rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition duration-200 ease-in-out focus:border-transparent placeholder-gray-400 placeholder-opacity-75 placeholder-italic placeholder:text-sm"
        />
      </div>

      <div className="px-2 mt-8">
        <button class="w-full border-2 border-[#724b68] text-[#724b68] hover:bg-[#724b68] hover:text-white font-bold py-1 px-3 rounded transition duration-300">
          Save
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
