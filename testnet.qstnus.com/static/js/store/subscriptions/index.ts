import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import {
  getPlans,
  getPaymentIntent,
  getUserSubscriptions,
  cancelSubscription,
  resubscribeSubscription,
  subscribeToNewsletter,
} from "./actions";

import { SubscriptionsState } from "./types";

const initialState: SubscriptionsState = {
  couponId: null,
  availablePlans: null,
  paymentIntent: null,
  usersSubscriptions: null,
  pending: false,
  error: null,
};

const subscriptionsSlice = createSlice({
  name: "subscriptions",
  initialState: {
    ...initialState,
  },
  reducers: {
    resetSubscriptionsState: () => {
      return initialState;
    },
    resetPaymentIntentState: state => {
      state.paymentIntent = null;
    },
    setCouponId: (state, action: PayloadAction<string>) => {
      state.couponId = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      // get plans
      .addCase(getPlans.pending, state => {
        state.pending = true;
      })
      .addCase(getPlans.fulfilled, (state, action) => {
        state.availablePlans = action.payload.items;
        state.error = null;
        state.pending = false;
      })
      .addCase(getPlans.rejected, (state, action) => {
        if (action.payload) {
          state.error = action.payload;
          state.pending = false;
        }
      })
      // get payment intent
      .addCase(getPaymentIntent.pending, state => {
        state.pending = true;
      })
      .addCase(getPaymentIntent.fulfilled, (state, action) => {
        state.paymentIntent = action.payload;
        state.error = null;
        state.pending = false;
      })
      .addCase(getPaymentIntent.rejected, (state, action) => {
        if (action.payload) {
          state.paymentIntent = null;
          state.error = action.payload;
          state.pending = false;
        }
      })
      // get users subscriptions
      .addCase(getUserSubscriptions.pending, state => {
        state.pending = true;
      })
      .addCase(getUserSubscriptions.fulfilled, (state, action) => {
        state.usersSubscriptions = action.payload.items;
        state.error = null;
        state.pending = false;
      })
      .addCase(getUserSubscriptions.rejected, (state, action) => {
        if (action.payload) {
          state.usersSubscriptions = null;
          state.error = action.payload;
          state.pending = false;
        }
      })
      // cancel subscription
      .addCase(cancelSubscription.pending, state => {
        state.pending = true;
      })
      .addCase(cancelSubscription.fulfilled, state => {
        state.error = null;
        state.pending = false;
      })
      .addCase(cancelSubscription.rejected, (state, action) => {
        if (action.payload) {
          state.error = action.payload;
          state.pending = false;
        }
      })
      // resubscribe subscription
      .addCase(resubscribeSubscription.pending, state => {
        state.pending = true;
      })
      .addCase(resubscribeSubscription.fulfilled, state => {
        state.error = null;
        state.pending = false;
      })
      .addCase(resubscribeSubscription.rejected, (state, action) => {
        if (action.payload) {
          state.error = action.payload;
          state.pending = false;
        }
      })
      // subscribe to newsletter
      .addCase(subscribeToNewsletter.pending, state => {
        state.pending = true;
      })
      .addCase(subscribeToNewsletter.fulfilled, state => {
        state.error = null;
        state.pending = false;
      })
      .addCase(subscribeToNewsletter.rejected, (state, action) => {
        if (action.payload) {
          state.error = action.payload;
          state.pending = false;
        }
      });
  },
});

export const { resetSubscriptionsState, resetPaymentIntentState, setCouponId } = subscriptionsSlice.actions;

export default subscriptionsSlice;
