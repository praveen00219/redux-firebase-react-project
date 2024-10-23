import React from "react";
import style from "./ContactListApp.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCompass } from "@fortawesome/free-solid-svg-icons";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import ContactTableList from "../../components/contactTableList/ContactTableList";

function ContactListApp() {
  return (
    <div className={style.contactList}>
      <Navbar />
      <div className={style.container}>
        <Sidebar />
        <ContactTableList />
      </div>
    </div>
  );
}

export default ContactListApp;
