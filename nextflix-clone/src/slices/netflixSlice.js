import { createSlice } from "@reduxjs/toolkit";
// vamos a crear un objeto que sea el valor inicial de mi variable
const initialState = {
  titles: [],
};

export const netflixSlice = createSlice({
  name: "titles",
  initialState,
  reducers: {
    // crear la funciones para alterar el estado de titles
    setTitles: (state, action) => {
      state.titles = action.payload;
    },
  },
});

export const { setTitles } = netflixSlice.actions;

export default netflixSlice.reducer;
