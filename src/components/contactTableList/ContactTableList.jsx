import React, { useEffect, useState } from "react";
import ContactDataListing from "./ContactDataListing"; // Import the component responsible for displaying each row
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ContactTableList() {
  const [contacts, setContacts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);

  // Fetching contacts from Firebase
  const fetchContacts = async () => {
    try {
      const response = await fetch(
        "https://contact-list-app-ae749-default-rtdb.asia-southeast1.firebasedatabase.app/contact-list.json"
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
      setContacts(contactsData);
    } catch (error) {
      toast.error("Error fetching contacts!");
    } finally {
      setLoading(false); // Set loading to false after fetching
    }
  };

  // Fetch contacts on component mount
  useEffect(() => {
    fetchContacts();
  }, [contacts]); // Changed to an empty array

  // Function to handle delete contact
  const handleDeleteContact = async (id) => {
    try {
      await fetch(
        `https://contact-list-app-ae749-default-rtdb.asia-southeast1.firebasedatabase.app/contact-list/${id}.json`,
        { method: "DELETE" }
      );
      setContacts((prev) => prev.filter((contact) => contact.id !== id));
      toast.success("Contact deleted successfully!");
    } catch (error) {
      toast.error("Error deleting contact!");
    }
  };

  // Function to handle search query changes
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Filter contacts based on the search query
  const filteredContacts = contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      contact.tel.includes(searchQuery)
  );

  return (
    <div className="px-6 flex flex-1 flex-col items-center">
      <ToastContainer />
      <input
        type="text"
        placeholder="Search by name or phone"
        value={searchQuery}
        onChange={handleSearchChange}
        className="mb-4 p-2 w-full border border-gray-300 rounded-lg"
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
                <td colSpan="4" className="text-center text-gray-500">
                  Loading...
                </td>
              </tr>
            ) : filteredContacts.length > 0 ? (
              <ContactDataListing
                contacts={filteredContacts}
                onDelete={handleDeleteContact}
              />
            ) : (
              <tr className="text-red-400 font-semibold text-md">
                <td colSpan="4" className="text-center">
                  Contact List Is Empty!
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ContactTableList;
