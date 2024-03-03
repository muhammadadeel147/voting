import { combineReducers } from "redux";
import { mainSlice } from "./mainSlice";

export const rootReducer = combineReducers({
  mainSlice: mainSlice.reducer
});
