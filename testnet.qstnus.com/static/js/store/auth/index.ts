import { createSlice } from "@reduxjs/toolkit";

import { LOCAL_STORAGE_KEYS } from "configs";
import { loginUser, logoutUser, registerUser, setBiconomyWallet } from "./actions";
import { AuthState } from "./types";

export const applyToken = (key: string, token: AuthState["token"]) => {
  if (token) {
    localStorage.setItem(key, token);
  } else {
    localStorage.removeItem(key);
  }

  return token;
};

const initialState: AuthState = {
  token: null,
  pending: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: {
    ...initialState,
    token: localStorage.getItem(LOCAL_STORAGE_KEYS.token),
  },
  reducers: {
    resetAuth() {
      applyToken(LOCAL_STORAGE_KEYS.token, null);

      return initialState;
    },
  },
  extraReducers: builder => {
    builder
      // Login user
      .addCase(loginUser.pending, state => {
        state.pending = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        const { accessToken } = action.payload;

        state.token = applyToken(LOCAL_STORAGE_KEYS.token, accessToken);
        state.error = null;
        state.pending = false;
      })
      .addCase(loginUser.rejected, (state, action) => {
        if (action.payload) {
          state.error = action.payload;
          state.token = applyToken(LOCAL_STORAGE_KEYS.token, null);
          state.pending = false;
        }
      })
      // register user
      .addCase(registerUser.pending, state => {
        state.pending = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        const { accessToken } = action.payload;

        state.token = applyToken(LOCAL_STORAGE_KEYS.token, accessToken);
        state.error = null;
        state.pending = false;
      })
      .addCase(registerUser.rejected, (state, action) => {
        if (action.payload) {
          state.error = action.payload;
          state.token = applyToken(LOCAL_STORAGE_KEYS.token, null);
          state.pending = false;
        }
      })
      // logout user
      .addCase(logoutUser.pending, state => {
        state.pending = true;
      })
      .addCase(logoutUser.fulfilled, state => {
        state.token = applyToken(LOCAL_STORAGE_KEYS.token, null);
        state.error = null;
        state.pending = false;
      })
      .addCase(logoutUser.rejected, (state, action) => {
        if (action.payload) {
          state.error = action.payload;
          state.pending = false;
        }
      })
      // logout user
      .addCase(setBiconomyWallet.pending, state => {
        state.pending = true;
      })
      .addCase(setBiconomyWallet.fulfilled, state => {
        state.error = null;
        state.pending = false;
      })
      .addCase(setBiconomyWallet.rejected, (state, action) => {
        if (action.payload) {
          state.error = action.payload;
          state.pending = false;
        }
      });
  },
});

export const { resetAuth } = authSlice.actions;

export default authSlice;
