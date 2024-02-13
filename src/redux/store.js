import { configureStore } from "@reduxjs/toolkit";
import movieSlice from "./movieSlice";
import songSlice from "./songSlice";

export const store = configureStore({
  reducer: {
    movie: movieSlice,
    song: songSlice
  }
});
