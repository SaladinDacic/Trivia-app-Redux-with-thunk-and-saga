import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  finished: false,
};

export const gameStarterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    toogleFinished: (state) => {
      state.finished = !state.finished;
    },
  },
});

export const { toogleFinished } = gameStarterSlice.actions;
export default gameStarterSlice.reducer;
