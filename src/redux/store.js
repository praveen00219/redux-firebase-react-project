import { configureStore } from "@reduxjs/toolkit";
import contactReducer from "./contactSlice";
import favContactReducer from "./favContactSlice";

const store = configureStore({
  reducer: {
    contacts: contactReducer,
    favContacts: favContactReducer,
  },
});

export default store;
