import { createSlice } from "@reduxjs/toolkit";

import { getReclaimProof, checkReclaimStatus, verifyReclaim } from "./actions";

import { ReclaimProofState } from "./types";

const initialState: ReclaimProofState = {
  pending: false,
  error: null,
  statusUrl: null,
  requestUrl: null,
  session: null,
};

const reclaimSlice = createSlice({
  name: "reclaimProof",
  initialState: {
    ...initialState,
  },
  reducers: {
    resetReclaimProofState: () => {
      return initialState;
    },
  },
  extraReducers: builder => {
    builder
      // get proof
      .addCase(getReclaimProof.pending, state => {
        state.pending = true;
      })
      .addCase(getReclaimProof.fulfilled, (state, action) => {
        state.statusUrl = action.payload.statusUrl;
        state.requestUrl = action.payload.requestUrl;
        state.error = null;
        state.pending = false;
      })
      .addCase(getReclaimProof.rejected, (state, action) => {
        if (action.payload) {
          state.statusUrl = null;
          state.requestUrl = null;
          state.error = action.payload;
          state.pending = false;
        }
      })
      // check status
      .addCase(checkReclaimStatus.pending, state => {
        state.pending = true;
      })
      .addCase(checkReclaimStatus.fulfilled, (state, action) => {
        state.session = action.payload;
        state.error = null;
        state.pending = false;
      })
      .addCase(checkReclaimStatus.rejected, (state, action) => {
        if (action.payload) {
          state.session = null;
          state.error = action.payload;
          state.pending = false;
        }
      })

      // verify
      .addCase(verifyReclaim.pending, state => {
        state.pending = true;
      })
      .addCase(verifyReclaim.fulfilled, state => {
        state.error = null;
        state.pending = false;
      })
      .addCase(verifyReclaim.rejected, (state, action) => {
        if (action.payload) {
          state.error = action.payload;
          state.pending = false;
        }
      });
  },
});

export const { resetReclaimProofState } = reclaimSlice.actions;

export default reclaimSlice;
