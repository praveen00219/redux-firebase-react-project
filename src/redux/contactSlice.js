import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Firebase base URL
const BASE_URL =
  "https://contact-list-app-ae749-default-rtdb.asia-southeast1.firebasedatabase.app";

// Async thunk for adding a contact
export const addContact = createAsyncThunk(
  "contactList/addContact",
  async (contactData, { rejectWithValue }) => {
    try {
      const response = await fetch(`${BASE_URL}/contact-list.json`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contactData),
      });
      if (!response.ok) {
        throw new Error("Failed to add contact");
      }
      const data = await response.json();
      return { id: data.name, ...contactData }; // Return the unique ID with the contact data
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Async thunk for deleting a contact
export const deleteContact = createAsyncThunk(
  "contactList/deleteContact",
  async (contactId, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `${BASE_URL}/contact-list/${contactId}.json`,
        {
          method: "DELETE",
        }
      );
      if (!response.ok) {
        throw new Error("Failed to delete contact");
      }
      return contactId;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Async thunk for updating a contact
export const updateContact = createAsyncThunk(
  "contactList/updateContact",
  async ({ id, name, surname, tel, photoUrl }, { rejectWithValue }) => {
    try {
      const response = await fetch(`${BASE_URL}/contact-list/${id}.json`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, surname, tel, photoUrl }),
      });
      if (!response.ok) {
        throw new Error("Failed to update contact");
      }
      return { id, name, surname, tel, photoUrl };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Async thunk for fetching contacts
export const fetchContacts = createAsyncThunk(
  "contactList/fetchContacts",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(`${BASE_URL}/contact-list.json`);
      if (!response.ok) {
        throw new Error("Failed to fetch contacts");
      }
      const data = await response.json();
      const contacts = Object.keys(data).map((key) => ({
        id: key,
        ...data[key],
      }));
      return contacts; // Return the array of contacts with their IDs
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Initial state
const initialState = {
  id: "",
  contacts: [],
  loading: false,
  error: null,
};

const contactSlice = createSlice({
  name: "contactList",
  initialState,
  reducers: {
    setExistingContactID: (state, action) => {
      state.id = action.payload;
    },
  },
  extraReducers: (builder) => {
    // Add Contact
    builder
      .addCase(addContact.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.contacts.push(action.payload); // Add the new contact with the ID
        state.loading = false;
      })
      .addCase(addContact.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // Delete Contact
    builder
      .addCase(deleteContact.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.contacts = state.contacts.filter(
          (contact) => contact.id !== action.payload
        );
        state.loading = false;
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // Update Contact
    builder
      .addCase(updateContact.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateContact.fulfilled, (state, action) => {
        const index = state.contacts.findIndex(
          (contact) => contact.id === action.payload.id
        );
        if (index !== -1) {
          state.contacts[index] = {
            ...state.contacts[index],
            ...action.payload,
          };
        }
        state.loading = false;
      })
      .addCase(updateContact.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // Fetch Contacts
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.contacts = action.payload; // Set contacts with the fetched data
        state.loading = false;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setExistingContactID } = contactSlice.actions;

export default contactSlice.reducer;
