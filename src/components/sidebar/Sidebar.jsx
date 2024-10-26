import React, { useEffect, useState } from "react";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../../firebaseConfig";
import OfficeWork from "../../assets/Office Work.png";
import { useDispatch, useSelector } from "react-redux";
import {
  addContact,
  fetchTotalContacts,
  updateContact,
} from "../../redux/contactSlice";
import CountContact from "./CountContact";
import Navbar from "../navbar/Navbar";

function Sidebar() {
  const dispatch = useDispatch();
  const totalContacts = useSelector((state) => state.contacts.totalContacts);

  const existingContactId = useSelector((state) => state.contacts.id);

  const [file, setFile] = useState(null); // Handle file input
  const [loading, setLoading] = useState(false); // Loading state for the form
  const [error, setError] = useState(null); // Error state

  const [userData, setUserData] = useState({
    name: "",
    surname: "",
    tel: "",
    photoUrl: "",
  });

  // Fetch existing contact and total contacts in one effect
  useEffect(() => {
    const fetchExistingContactAndTotal = async () => {
      try {
        // Fetch existing contact
        if (existingContactId) {
          const response = await fetch(
            `https://contact-list-app-ae749-default-rtdb.asia-southeast1.firebasedatabase.app/contact-list/${existingContactId}.json`
          );
          const existingContact = await response.json();
          setUserData({
            name: existingContact?.name || "",
            surname: existingContact?.surname || "",
            tel: existingContact?.tel || "",
            photoUrl: existingContact?.photoUrl || "",
          });
        }

        // Fetch total contacts
        // const totalResponse = await fetch(
        //   `https://contact-list-app-ae749-default-rtdb.asia-southeast1.firebasedatabase.app/contact-list.json`
        // );
        // const totalData = await totalResponse.json();
        // console.log("totalData", totalData);
        // dispatch(fetchTotalContacts(totalData));
      } catch (err) {
        setError("Failed to fetch data. Please try again later.");
        console.error(err);
      }
    };

    dispatch(fetchTotalContacts());
    fetchExistingContactAndTotal();
  }, [existingContactId || totalContacts]);

  // Handle file selection
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  // Handle file upload to Firebase Storage
  const handleUpload = async () => {
    if (!file) return;
    setLoading(true); // Set loading state during upload
    const storageRef = ref(storage, `images/${file.name}`);
    try {
      const snapshot = await uploadBytes(storageRef, file);
      const url = await getDownloadURL(snapshot.ref);
      setUserData((prevData) => ({
        ...prevData,
        photoUrl: url,
      }));
    } catch (err) {
      setError("File upload failed. Please try again.");
      console.error(err);
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  // Handle form submission
  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading state during submission

    try {
      if (existingContactId) {
        // Update existing contact
        dispatch(
          updateContact({
            id: existingContactId,
            ...userData,
          })
        );
      } else {
        // Add new contact
        dispatch(addContact(userData));
      }

      // Reset form and file
      setUserData({
        name: "",
        surname: "",
        tel: "",
        photoUrl: "",
      });
      setFile(null);
    } catch (err) {
      setError("Failed to save contact. Please try again.");
      console.error(err);
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  // Handle input change for form fields
  const inputHandler = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="w-[25%]  border-r-2 px-4">
      <Navbar />
      <form onSubmit={submitHandler}>
        <CountContact totalContacts={totalContacts} />
        <div>
          <img src={OfficeWork} alt="Office Work" />
        </div>
        {error && <div className="text-red-500">{error}</div>}{" "}
        {/* Error message */}
        {loading && <div className="text-blue-500">Loading...</div>}{" "}
        {/* Loading state */}
        <div className="flex flex-col gap-3 mt-4">
          <div className="flex items-center justify-between gap-3 w-full">
            <div>
              <div className="flex items-center justify-center">
                <label className="flex flex-col items-center px-1 py-1 bg-white text-blue-500 rounded-full shadow-lg tracking-wide uppercase border border-blue-200 cursor-pointer hover:bg-blue-500 hover:text-white transition duration-200 ease-in-out">
                  <svg
                    className="w-5 h-8"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M16.88 6.59l-2.12-2.12A1 1 0 0014 4H6a1 1 0 00-.71.29L3.17 6.59A2 2 0 002 8.17V16a2 2 0 002 2h12a2 2 0 002-2V8.17a2 2 0 00-.59-1.41zM10 18a3.5 3.5 0 110-7 3.5 3.5 0 010 7zM4.41 6l1.3-1.29C6.03 4.29 6.51 4 7 4h6c.49 0 .97.29 1.29.71L15.59 6H4.41z" />
                  </svg>
                  <span className="mt-0.5 leading-normal text-[9px]">
                    Take Photo
                  </span>
                  <input
                    type="file"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                </label>
              </div>
              <button
                type="button"
                className="mt-1 border border-[#724b68] text-[9px] text-[#724b68] hover:bg-[#724b68] hover:text-white font-bold py-1 px-3 rounded transition duration-300"
                onClick={handleUpload}
                disabled={loading} // Disable button during loading
              >
                Upload
              </button>
            </div>

            <div className="flex flex-col gap-3 my-1">
              <input
                type="text"
                placeholder="First Name"
                name="name"
                required
                value={userData.name}
                onChange={inputHandler}
                className="w-full px-2 py-1 border-b border-[#57bbd3] rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition duration-200 ease-in-out placeholder-gray-400 placeholder-opacity-75 placeholder-italic placeholder:text-sm"
              />
              <input
                type="text"
                placeholder="Surname"
                name="surname"
                required
                value={userData.surname}
                onChange={inputHandler}
                className="w-full px-2 py-1 border-b border-[#57bbd3] rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition duration-200 ease-in-out placeholder-gray-400 placeholder-opacity-75 placeholder-italic placeholder:text-sm"
              />
            </div>
          </div>

          <input
            type="text"
            placeholder="Tel +91 123456****"
            name="tel"
            required
            pattern="^[1-9]\d*$"
            maxLength="10"
            minLength="10"
            value={userData.tel}
            onChange={inputHandler}
            className="w-full px-2 py-1 border-b border-[#57bbd3] rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition duration-200 ease-in-out placeholder-gray-400 placeholder-opacity-75 placeholder-italic placeholder:text-sm"
          />
        </div>
        <div className="mt-8">
          <button
            className="w-full border-2 border-[#724b68] text-[#724b68] hover:bg-[#724b68] hover:text-white font-bold py-1 px-3 rounded transition duration-300 mt-4"
            type="submit"
            disabled={loading} // Disable button during loading
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default Sidebar;
