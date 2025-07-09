import { createSlice } from "@reduxjs/toolkit";

import { UserProfileState } from "./types";

import { getCountriesList, getStripeBalance } from "./actions";

const initialState: UserProfileState = {
  pending: false,
  error: null,
  countries: [],
  stripeBalance: 0,
};

const userProfileSlice = createSlice({
  name: "userProfile",
  initialState: {
    ...initialState,
  },
  reducers: {
    resetUserProfileState: () => {
      return initialState;
    },
  },
  extraReducers: builder => {
    builder
      // Get Countries List
      .addCase(getCountriesList.pending, state => {
        state.pending = true;
      })
      .addCase(getCountriesList.fulfilled, (state, action) => {
        const { items } = action.payload;
        state.countries = items;
        state.error = null;
        state.pending = false;
      })
      .addCase(getCountriesList.rejected, (state, action) => {
        if (action.payload) {
          state.error = action.payload;
          state.pending = false;
        }
      })
      // update stripe balance
      .addCase(getStripeBalance.pending, state => {
        state.pending = true;
      })
      .addCase(getStripeBalance.fulfilled, (state, action) => {
        state.stripeBalance = action.payload;
        state.error = null;
        state.pending = false;
      })
      .addCase(getStripeBalance.rejected, (state, action) => {
        if (action.payload) {
          state.stripeBalance = 0;
          state.error = action.payload;
          state.pending = false;
        }
      });
  },
});

export const { resetUserProfileState } = userProfileSlice.actions;

export default userProfileSlice;
