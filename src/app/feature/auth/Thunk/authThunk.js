import { createAsyncThunk } from "@reduxjs/toolkit";

import authService from "../services/auth.service";
import { setError, setInitialState, setLoading } from "../slices/authSlice";
import { auth } from "../../../../config/firebase.config";

const signup = createAsyncThunk("auth/signup", async (payload, thunkAPI) => {
  thunkAPI.dispatch(setLoading(true));

  const { email, password, username } = payload;
  try {
    const user = await authService.signup({ email, password, username });
    console.log(user);

    thunkAPI.dispatch(setError(null));
  } catch (error) {
    thunkAPI.dispatch(setError(error.response?.data?.message));
  } finally {
    thunkAPI.dispatch(setLoading(false));
  }
});

const login = createAsyncThunk("auth/login", async (payload, thunkAPI) => {
  thunkAPI.dispatch(setLoading(true));

  const { email, password } = payload;
  try {
    const user = await authService.login({ email, password });
    console.log(user);
    thunkAPI.dispatch(setError(null));
  } catch (error) {
    thunkAPI.dispatch(setError(error.code));
  } finally {
    thunkAPI.dispatch(setLoading(false));
  }
});

const fetchLoggedInUser = createAsyncThunk(
  "auth/fetchLoggedInUser",
  async (_, thunkAPI) => {
    thunkAPI.dispatch(setLoading(true));
    auth.onAuthStateChanged((user) => {
      if (user) {
        const {
          email,
          displayName,
          emailVerified,
          phoneNumber,
          photoURL,
          uid,
        } = user;
        thunkAPI.dispatch(
          setInitialState({
            email,
            displayName,
            emailVerified,
            phoneNumber,
            photoURL,
            uid,
          })
        );
      } else {
        thunkAPI.dispatch(setInitialState(null));
      }
    });
  }
);

export { signup, fetchLoggedInUser, login };
