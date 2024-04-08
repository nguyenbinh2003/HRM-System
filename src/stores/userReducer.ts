import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUserStore: (state, action) => {
      return (state = action.payload);
    },

    clearUserStore: (state, action) => {
      return (state = action.payload);
    },
  },
});

export const { addUserStore, clearUserStore } = userSlice.actions;

export default userSlice.reducer;
