import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: []
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    addMovie: (state, { payload }) => {
      state.data.push(payload);
    },
    removeMovie: (state, { payload }) => {
      state.data = state.data.filter((movie) => movie.id !== payload.id);
    },
    removeAllMovie: (state) => {
      state.data = [];
    }
  }
});

export const { addMovie, removeMovie, removeAllMovie } = movieSlice.actions;
export default movieSlice.reducer;
