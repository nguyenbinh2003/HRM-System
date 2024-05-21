import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUserStore: (state, action) => {
      // Sửa đổi trực tiếp đối tượng state
      Object.assign(state, action.payload);
    },
    clearUserStore: (state) => {
      // Đặt lại đối tượng state thành một đối tượng rỗng hoặc trạng thái ban đầu
      Object.keys(state).forEach(key => {
        delete state[key];
      });
    },
  },
});

export const { addUserStore, clearUserStore } = userSlice.actions;

export default userSlice.reducer;
