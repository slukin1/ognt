import { createSlice } from "@reduxjs/toolkit";

import { checkTonProof } from "./actions";
import { getProof } from "../solana-proof/actions";

import { LOCAL_STORAGE_KEYS } from "configs";

import { TonProofState } from "./types";

export const applyToken = (key: string, token: TonProofState["tonProofToken"]) => {
  if (token) {
    localStorage.setItem(key, token);
  } else {
    localStorage.removeItem(key);
  }

  return token;
};

const initialState: TonProofState = {
  pending: false,
  error: null,
  tonProofToken: null,
};

const tonProofSlice = createSlice({
  name: "tonProof",
  initialState: {
    ...initialState,
    tonProofToken: localStorage.getItem(LOCAL_STORAGE_KEYS.tonProofToken),
  },
  reducers: {
    resetTonProofState: () => {
      applyToken(LOCAL_STORAGE_KEYS.tonProofToken, null);
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
        state.tonProofPayload = action.payload;
        state.error = null;
        state.pending = false;
      })
      .addCase(getProof.rejected, (state, action) => {
        if (action.payload) {
          state.error = action.payload;
          state.pending = false;
        }
      })
      // check ton proof
      .addCase(checkTonProof.pending, state => {
        state.pending = true;
      })
      .addCase(checkTonProof.fulfilled, (state, action) => {
        const { token } = action.payload;
        state.error = null;
        state.tonProofToken = applyToken(LOCAL_STORAGE_KEYS.tonProofToken, token);
        state.pending = false;
      })
      .addCase(checkTonProof.rejected, (state, action) => {
        if (action.payload) {
          state.error = action.payload;
          state.tonProofToken = applyToken(LOCAL_STORAGE_KEYS.tonProofToken, null);
          state.pending = false;
        }
      });
  },
});

export const { resetTonProofState } = tonProofSlice.actions;

export default tonProofSlice;
