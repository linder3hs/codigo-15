import { configureStore } from "@reduxjs/toolkit";
import netflixSlice from "../slices/netflixSlice";

export const store = configureStore({
  reducer: {
    netflix: netflixSlice,
  },
});
