import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: []
};

const songSlice = createSlice({
  name: "song",
  initialState,
  reducers: {
    addMusic: (state, { payload }) => {
      state.data.push(payload);
    },
    removeMusic: (state, { payload }) => {
      state.data = state.data.filter((song) => song.id !== payload.id);
    },
    removeAllSong: (state) => {
      state.data = [];
    }
  }
});

export const { addMusic, removeMusic, removeAllSong } = songSlice.actions;
export default songSlice.reducer;
