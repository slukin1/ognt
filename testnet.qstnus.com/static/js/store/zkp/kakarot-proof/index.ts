import { createSlice } from "@reduxjs/toolkit";

import { checkKakarotProof } from "./actions";
import { getProof } from "../solana-proof/actions";

import { KakarotProofState } from "./types";
import { LOCAL_STORAGE_KEYS } from "configs";

export const applyKakarotToken = (key: string, token: KakarotProofState["kakarotProofToken"]) => {
  if (token) {
    localStorage.setItem(key, token);
  } else {
    localStorage.removeItem(key);
  }

  return token;
};

const initialState: KakarotProofState = {
  pending: false,
  error: null,
  kakarotProofToken: null,
};

const kakarotSlice = createSlice({
  name: "kakarotProof",
  initialState: {
    ...initialState,
    kakarotProofToken: localStorage.getItem(LOCAL_STORAGE_KEYS.kakarotToken),
  },
  reducers: {
    resetKakarotProofState: () => {
      applyKakarotToken(LOCAL_STORAGE_KEYS.kakarotToken, null);
      localStorage.removeItem(LOCAL_STORAGE_KEYS.kakarotWallet);
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
        state.kakarotPayload = action.payload;
        state.error = null;
        state.pending = false;
      })
      .addCase(getProof.rejected, (state, action) => {
        if (action.payload) {
          state.error = action.payload;
          state.pending = false;
        }
      })
      // check kakarot proof
      .addCase(checkKakarotProof.pending, state => {
        state.pending = true;
      })
      .addCase(checkKakarotProof.fulfilled, (state, action) => {
        const { token } = action.payload;
        state.error = null;
        state.kakarotProofToken = applyKakarotToken(LOCAL_STORAGE_KEYS.kakarotToken, token);
        state.pending = false;
      })
      .addCase(checkKakarotProof.rejected, (state, action) => {
        if (action.payload) {
          state.error = action.payload;
          state.kakarotProofToken = applyKakarotToken(LOCAL_STORAGE_KEYS.kakarotToken, null);
          state.pending = false;
        }
      });
  },
});

export const { resetKakarotProofState } = kakarotSlice.actions;

export default kakarotSlice;
