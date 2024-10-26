import React, { useState, useEffect } from "react";
import style from "./ContactListApp.module.css";
import Sidebar from "../../components/sidebar/Sidebar";
import ContactTableList from "../../components/contactTableList/ContactTableList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FavContactsTableList from "../../components/favContactsTableList/FavContactsTableList";

function ContactListApp() {
  const [filteredContacts, setFilteredContacts] = useState([]);

  useEffect(() => {
    // Fetch contacts from your data source (API or local storage)
    const fetchContacts = async () => {
      // Replace with your API call
      const response = await fetch(
        "https://contact-list-app-ae749-default-rtdb.asia-southeast1.firebasedatabase.app/contact-list.json"
      );
      const data = await response.json();
      const contactsArray = Object.keys(data).map((key) => ({
        id: key,
        ...data[key],
      }));
      setFilteredContacts(contactsArray); // Initialize with all contacts
    };

    fetchContacts();
  }, []);

  return (
    <div className={style.contactList}>
      <Router>
        <div className={style.container}>
          <Sidebar />
          <Routes>
            <Route
              path="/"
              element={<ContactTableList contacts={filteredContacts} />}
            />
            <Route
              path="/favouritesContactList"
              element={<FavContactsTableList />}
            />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default ContactListApp;
