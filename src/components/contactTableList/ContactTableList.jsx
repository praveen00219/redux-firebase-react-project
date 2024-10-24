import React, { useEffect, useState } from "react";
import ContactDataListing from "./ContactDataListing"; // Import the component responsible for displaying each row

function ContactTableList() {
  const [contacts, setContacts] = useState([]);

  // Fetching contacts from Firebase
  const fetchContacts = async () => {
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
  };

  // Fetch contacts on component mount
  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <div className="px-6 flex flex-1 flex-col items-center">
      <div className="overflow-x-auto w-full">
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
            {/* Pass the contacts data to ContactDataListing */}
            <ContactDataListing contacts={contacts} />
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ContactTableList;
