import { createSlice } from "@reduxjs/toolkit";

import { ProfileState } from "./types";
import { getProfile, updateProfile } from "./actions";
import { loginUser, registerUser } from "store/auth/actions";

const initialState: ProfileState = {
  profileData: null,
  pending: false,
  error: null,
};

const profileSlice = createSlice({
  name: "profile",
  initialState: {
    ...initialState,
  },
  reducers: {
    resetProfileState: () => {
      return initialState;
    },
  },
  extraReducers: builder => {
    builder
      // register user
      .addCase(getProfile.pending, state => {
        state.pending = true;
      })
      .addCase(getProfile.fulfilled, (state, action) => {
        state.profileData = action.payload;
        state.error = null;
        state.pending = false;
      })
      .addCase(getProfile.rejected, (state, action) => {
        if (action.payload) {
          state.error = action.payload;
          state.pending = false;
        }
      })
      // update user
      .addCase(updateProfile.pending, state => {
        state.pending = true;
      })
      .addCase(updateProfile.fulfilled, (state, action) => {
        state.profileData = action.payload;
        state.error = null;
        state.pending = false;
      })
      .addCase(updateProfile.rejected, (state, action) => {
        if (action.payload) {
          state.error = action.payload;
          state.pending = false;
        }
      })
      // register user
      .addCase(registerUser.pending, state => {
        state.pending = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        const { user } = action.payload;
        state.profileData = user;
        state.error = null;
        state.pending = false;
      })
      .addCase(registerUser.rejected, (state, action) => {
        if (action.payload) {
          state.profileData = null;
          state.error = action.payload;
          state.pending = false;
        }
      })
      // login user
      .addCase(loginUser.pending, state => {
        state.pending = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        const { user } = action.payload;
        state.profileData = user;
        state.error = null;
        state.pending = false;
      })
      .addCase(loginUser.rejected, (state, action) => {
        if (action.payload) {
          state.profileData = null;
          state.error = action.payload;
          state.pending = false;
        }
      });
  },
});

export const { resetProfileState } = profileSlice.actions;

export default profileSlice;
