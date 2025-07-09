import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { getReferrals, inviteReferrals } from "./actions";

import { GetReferralsPayload, ReferralsState } from "./types";

const initialState: ReferralsState = {
  referrals: [],
  pending: false,
  error: null,
  referralsPayload: {
    pageNumber: 1,
    pageSize: 10,
    pageOrder: "desc",
    pageOrderBy: "createdAt",
  },
};

const referralsSlice = createSlice({
  name: "referrals",
  initialState: {
    ...initialState,
  },
  reducers: {
    resetReferralsState: () => {
      return initialState;
    },

    resetReferrals: state => {
      state.referrals = [];
    },

    setReferralPayload: (state, action: PayloadAction<Partial<GetReferralsPayload | undefined>>) => {
      state.referralsPayload = { ...state.referralsPayload, ...action.payload };
    },
  },
  extraReducers: builder => {
    builder
      // get referrals
      .addCase(getReferrals.pending, state => {
        state.pending = true;
      })
      .addCase(getReferrals.fulfilled, (state, action) => {
        const { items, total } = action.payload;
        if (state.referralsPayload.pageNumber === 1) {
          state.referrals = items;
        } else {
          state.referrals = [...state.referrals, ...items];
        }
        state.referralsCount = total;
        state.error = null;
        state.pending = false;
      })
      .addCase(getReferrals.rejected, (state, action) => {
        if (action.payload) {
          state.error = action.payload;
          state.pending = false;
        }
      })
      // invite referrals
      .addCase(inviteReferrals.pending, state => {
        state.pending = true;
      })
      .addCase(inviteReferrals.fulfilled, state => {
        state.error = null;
        state.pending = false;
      })
      .addCase(inviteReferrals.rejected, (state, action) => {
        if (action.payload) {
          state.error = action.payload;
          state.pending = false;
        }
      });
  },
});

export const { resetReferralsState, setReferralPayload, resetReferrals } = referralsSlice.actions;

export default referralsSlice;
