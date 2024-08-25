import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "../feature/auth";

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export default store;
