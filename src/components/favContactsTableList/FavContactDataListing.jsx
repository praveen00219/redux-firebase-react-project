import React from "react";
import Profile from "../../assets/All Contact.png";

function FavContactDataListing({ favContacts }) {
  return (
    <>
      {favContacts.map((contact, index) => {
        return (
          <tr key={contact.id} className="border-b">
            <td className="py-2 px-4 text-sm text-center text-gray-700">
              <img
                src={contact.photoUrl === "" ? Profile : contact.photoUrl}
                alt={contact.photoUrl}
                className="w-10 h-10"
              />
            </td>
            <td className="py-2 px-4 text-sm text-center text-gray-700">
              {contact.name} {contact.surname}
            </td>
            <td className="py-2 px-4 text-sm text-center text-gray-700">
              {contact.tel}
            </td>
          </tr>
        );
      })}
    </>
  );
}

export default FavContactDataListing;
