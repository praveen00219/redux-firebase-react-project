import { setContactId } from "./favContactSlice";

export const addToFavContacts = (id) => {
  return async (dispatch) => {
    try {
      const contactResponse = await fetch(
        `https://contact-list-app-ae749-default-rtdb.asia-southeast1.firebasedatabase.app/contact-list/${id}.json`
      );
      const contactData = await contactResponse.json();

      const favResponse = await fetch(
        "https://contact-list-app-ae749-default-rtdb.asia-southeast1.firebasedatabase.app/fav-contact-list.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(contactData),
        }
      );

      const favData = await favResponse.json();
      const newId = favData.name;

      dispatch(setContactId({ id, favId: newId }));
    } catch (error) {
      console.error("Error adding to favorite contacts:", error);
    }
  };
};

export const removeFromFavContact = (id, contactIds) => {
  return async () => {
    try {
      const contactToRemove = contactIds.find((contact) => contact.id === id);

      if (contactToRemove) {
        await fetch(
          `https://contact-list-app-ae749-default-rtdb.asia-southeast1.firebasedatabase.app/fav-contact-list/${contactToRemove.favId}.json`,
          { method: "DELETE" }
        );
      }
    } catch (error) {
      console.error("Error removing from favorite contacts:", error);
    }
  };
};
