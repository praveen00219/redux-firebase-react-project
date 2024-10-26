import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faUserPen } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import Profile from "../../assets/All Contact.png";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact, setExistingContactID } from "../../redux/contactSlice";
import {
  addToFavContacts,
  removeFromFavContact,
} from "../../redux/favContact-action";

function ContactDataListing({ contacts }) {
  const dispatch = useDispatch();
  const contactIds = useSelector((state) => state.favContacts.contactIds);
  const [favToggles, setFavToggles] = useState({});

  const deleteContactHandler = (id) => dispatch(deleteContact(id));
  const updateContactHandler = (id) => dispatch(setExistingContactID(id));

  const toggleFavContactHandler = (id) => {
    const isFavorite = favToggles[id];
    if (isFavorite) {
      dispatch(removeFromFavContact(id, contactIds));
    } else {
      dispatch(addToFavContacts(id));
    }
    setFavToggles((prevState) => ({ ...prevState, [id]: !isFavorite }));
  };

  return (
    <>
      {contacts.length > 0 ? (
        contacts.map((contact) => (
          <tr key={contact.id} className="border-b">
            <td className="py-2 px-4 text-sm text-center text-gray-700">
              <img
                src={contact.photoUrl || Profile}
                alt={contact.name}
                className="w-10 h-10 rounded-full"
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
                  onClick={() => updateContactHandler(contact.id)}
                  className="hover:text-[#b4962a] hover:scale-105 active:scale-100"
                >
                  <FontAwesomeIcon
                    icon={faUserPen}
                    style={{ color: "#FFD43B" }}
                  />
                </button>
                <button
                  onClick={() => deleteContactHandler(contact.id)}
                  className="hover:scale-105 active:scale-100"
                >
                  <FontAwesomeIcon
                    icon={faTrash}
                    style={{ color: "#cd3737" }}
                  />
                </button>
                <button
                  onClick={() => toggleFavContactHandler(contact.id)}
                  className="hover:scale-105 active:scale-100"
                >
                  <FontAwesomeIcon
                    icon={faHeart}
                    style={{
                      color: favToggles[contact.id] ? "#d0161f" : "#74C0FC",
                    }}
                  />
                </button>
              </div>
            </td>
          </tr>
        ))
      ) : (
        <tr className="text-red-400 font-semibold text-xl">
          <td colSpan="4" className="text-center h-[65vh]">
            No contacts found!
          </td>
        </tr>
      )}
    </>
  );
}

export default ContactDataListing;
