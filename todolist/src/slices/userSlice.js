import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    data: JSON.parse(localStorage.getItem("user")),
    access_token: localStorage.getItem("access_token"),
  },
  reducers: {
    saveUser: (state, action) => {
      state.data = action.payload.user;
      state.access_token = action.payload.access_token;
      localStorage.setItem("user", JSON.stringify(action.payload.user));
      localStorage.setItem("access_token", action.payload.access_token)
    },
  },
});

export const { saveUser } = userSlice.actions;

export default userSlice.reducer;
