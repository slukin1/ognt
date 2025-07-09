import { createSlice } from "@reduxjs/toolkit";

import { checkNearProof } from "./actions";
import { getProof } from "../solana-proof/actions";

import { LOCAL_STORAGE_KEYS } from "configs";

import { NearProofState } from "./types";

export const applyToken = (key: string, token: NearProofState["nearProofToken"]) => {
  if (token) {
    localStorage.setItem(key, token);
  } else {
    localStorage.removeItem(key);
  }

  return token;
};

const initialState: NearProofState = {
  pending: false,
  error: null,
  nearProofToken: null,
};

const nearProofSlice = createSlice({
  name: "nearProof",
  initialState: {
    ...initialState,
    nearProofToken: localStorage.getItem(LOCAL_STORAGE_KEYS.nearToken),
  },
  reducers: {
    resetNearProofState: () => {
      applyToken(LOCAL_STORAGE_KEYS.nearToken, null);
      return initialState;
    },
  },
  extraReducers: builder => {
    builder
      // get proof payload
      .addCase(getProof.pending, state => {
        state.pending = true;
      })
      .addCase(getProof.fulfilled, (state, action) => {
        state.nearProofPayload = action.payload;
        state.error = null;
        state.pending = false;
      })
      .addCase(getProof.rejected, (state, action) => {
        if (action.payload) {
          state.error = action.payload;
          state.pending = false;
        }
      })
      // check near proof
      .addCase(checkNearProof.pending, state => {
        state.pending = true;
      })
      .addCase(checkNearProof.fulfilled, (state, action) => {
        const { token } = action.payload;
        state.error = null;
        state.nearProofToken = applyToken(LOCAL_STORAGE_KEYS.nearToken, token);
        state.pending = false;
      })
      .addCase(checkNearProof.rejected, (state, action) => {
        if (action.payload) {
          state.error = action.payload;
          state.nearProofToken = applyToken(LOCAL_STORAGE_KEYS.nearToken, null);
          state.pending = false;
        }
      });
  },
});

export const { resetNearProofState } = nearProofSlice.actions;

export default nearProofSlice;
