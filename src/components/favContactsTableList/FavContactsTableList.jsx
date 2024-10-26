import React, { useEffect, useState } from "react";
import FavContactDataListing from "./FavContactDataListing";

function FavContactsTableList() {
  const [favContacts, setFavContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetching fav contacts from Firebase
  const fetchContacts = async () => {
    try {
      const response = await fetch(
        "https://contact-list-app-ae749-default-rtdb.asia-southeast1.firebasedatabase.app/fav-contact-list.json"
      );
      const data = await response.json();

      // Transforming Firebase data into a usable format
      const contactsData = [];
      for (let key in data) {
        contactsData.push({
          id: key,
          name: data[key].name,
          surname: data[key].surname,
          tel: data[key].tel,
          photoUrl: data[key].photoUrl,
        });
      }
      setFavContacts(contactsData);
    } catch (error) {
      console.error("Error fetching contacts:", error);
    } finally {
      setLoading(false); // Set loading to false after fetch
    }
  };

  // Fetch contacts on component mount
  useEffect(() => {
    fetchContacts();
  }, []); // Remove favContacts from dependencies to prevent refetching

  return (
    <div className="px-6 flex flex-1 flex-col items-center">
      <input
        type="text"
        placeholder="Search by name or phone"
        className="mb-4 p-2 border w-full  border-gray-300 rounded-lg"
      />
      <div className="overflow-x-auto mt-4 w-full">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-2 px-4 text-center text-sm font-semibold text-gray-700 border-b">
                Profile
              </th>
              <th className="py-2 px-4 text-center text-sm font-semibold text-gray-700 border-b">
                Full Name
              </th>
              <th className="py-2 px-4 text-center text-sm font-semibold text-gray-700 border-b">
                Phone
              </th>
              <th className="py-2 px-4 text-center text-sm font-semibold text-gray-700 border-b">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {loading ? ( // Show loading message while fetching
              <tr>
                <td colSpan="4" className="text-center py-4">
                  Loading...
                </td>
              </tr>
            ) : favContacts.length > 0 ? ( // Show contacts if available
              <FavContactDataListing favContacts={favContacts} />
            ) : (
              // Show empty message if no contacts found
              <tr className="text-red-400 font-semibold text-md">
                <th colSpan="4" className="text-center">
                  Favourites Contact List Is Empty!
                </th>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default FavContactsTableList;
