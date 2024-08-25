import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  loading: false,
  error: null,
  isAppReady: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setInitialState: (state, action) => {
      state.user = action.payload;
      state.isAppReady = true;
      state.loading = false;
    },

    setLoading: (state, action) => {
      state.loading = action.payload;
    },

    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setInitialState, setLoading, setError } = authSlice.actions;

export const authSelector = (store) => store.auth;

export default authSlice.reducer;
