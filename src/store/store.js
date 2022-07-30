import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import applicationSlice from "./applicationSlice";


const rootReducer = combineReducers({
  user: userSlice,
  application: applicationSlice,
});

export const store = configureStore({
  reducer: rootReducer
})


