import { createSlice } from "@reduxjs/toolkit";

export const mainSlice = createSlice({
  name: "mainSlice",
  initialState: {
    value: "",
    showLoader: false,
   
  },
  reducers: {
    showLoader: (state) => {
      state.showLoader = true;
    },
    hideLoader: (state) => {
      state.showLoader = false;
    },
   
  },
});

export const {
  showLoader,
  hideLoader,
 
} = mainSlice.actions;

export default mainSlice.reducer;
