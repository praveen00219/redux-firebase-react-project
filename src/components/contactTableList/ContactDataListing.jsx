import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faUserPen } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

import Profile from "../../assets/All Contact.png";
import { useDispatch } from "react-redux";
import { deleteContact, setExistingContactID } from "../../redux/contactSlice";

function ContactDataListing({ contacts }) {
  const dispatch = useDispatch();

  const deleteContactHandler = (id) => {
    dispatch(deleteContact(id));
  };

  const updateContactHandler = (id) => {
    dispatch(setExistingContactID(id));
  };

  return (
    <>
      {contacts.map((contact, index) => {
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
            <td className="py-2 px-4 text-sm text-center text-gray-700">
              <div className="flex gap-3 items-center justify-center">
                <button
                  onClick={() => {
                    updateContactHandler(contact.id);
                  }}
                  className="hover:text-[#b4962a] hover:scale-105 active:scale-100"
                >
                  <FontAwesomeIcon
                    icon={faUserPen}
                    style={{ color: "#FFD43B" }}
                  />
                </button>
                <button
                  onClick={() => {
                    deleteContactHandler(contact.id);
                  }}
                  className="hover:scale-105 active:scale-100"
                >
                  <FontAwesomeIcon
                    icon={faTrash}
                    style={{ color: "#cd3737" }}
                  />
                </button>
                <button className="hover:scale-105 active:scale-100">
                  <FontAwesomeIcon
                    icon={faHeart}
                    style={{ color: "#74C0FC" }}
                  />
                </button>
              </div>
            </td>
          </tr>
        );
      })}
    </>
  );
}

export default ContactDataListing;
