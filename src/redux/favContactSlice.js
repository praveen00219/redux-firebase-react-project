import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contactIds: [],
};

const favContactSlice = createSlice({
  name: "favContactList",
  initialState,
  reducers: {
    setContactId(state, action) {
      console.log(action.payload);
      const { id, favId } = action.payload;
      state.contactIds = [...state.contactIds, { id, favId }];
    },
  },
});

export const { setContactId } = favContactSlice.actions;
export default favContactSlice.reducer;
