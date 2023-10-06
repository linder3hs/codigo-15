import { createSlice } from "@reduxjs/toolkit";
// vamos a crear un objeto que sea el valor inicial de mi variable
const initialState = {
  titles: [],
};

export const netflixSlice = createSlice({
  name: "titles",
  initialState,
});

export default netflixSlice.reducer;
