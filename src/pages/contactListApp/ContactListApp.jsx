import React from "react";
import style from "./ContactListApp.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCompass } from "@fortawesome/free-solid-svg-icons";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import ContactTableList from "../../components/contactTableList/ContactTableList";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FavContactsTableList from "../../components/favContactsTableList/FavContactsTableList";

function ContactListApp() {
  return (
    <div className={style.contactList}>
      <Router>
        <Navbar />
        <div className={style.container}>
          <Sidebar />
          <Routes>
            <Route path="/" element={<ContactTableList />} />
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
