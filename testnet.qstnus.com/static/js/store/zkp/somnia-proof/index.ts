import { createSlice } from "@reduxjs/toolkit";

import { checkSomniaProof } from "./actions";
import { getProof } from "../solana-proof/actions";

import { SomniaProofState } from "./types";
import { LOCAL_STORAGE_KEYS } from "configs";

export const applySomniaToken = (key: string, token: SomniaProofState["somniaProofToken"]) => {
  if (token) {
    localStorage.setItem(key, token);
  } else {
    localStorage.removeItem(key);
  }

  return token;
};

const initialState: SomniaProofState = {
  pending: false,
  error: null,
  somniaProofToken: null,
};

const somniaSlice = createSlice({
  name: "somniaProof",
  initialState: {
    ...initialState,
    somniaProofToken: localStorage.getItem(LOCAL_STORAGE_KEYS.somniaToken),
  },
  reducers: {
    resetSomniaProofState: () => {
      applySomniaToken(LOCAL_STORAGE_KEYS.somniaToken, null);
      localStorage.removeItem(LOCAL_STORAGE_KEYS.somniaWallet);
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
        state.somniaPayload = action.payload;
        state.error = null;
        state.pending = false;
      })
      .addCase(getProof.rejected, (state, action) => {
        if (action.payload) {
          state.error = action.payload;
          state.pending = false;
        }
      })
      // check somnia proof
      .addCase(checkSomniaProof.pending, state => {
        state.pending = true;
      })
      .addCase(checkSomniaProof.fulfilled, (state, action) => {
        const { token } = action.payload;
        state.error = null;
        state.somniaProofToken = applySomniaToken(LOCAL_STORAGE_KEYS.somniaToken, token);
        state.pending = false;
      })
      .addCase(checkSomniaProof.rejected, (state, action) => {
        if (action.payload) {
          state.error = action.payload;
          state.somniaProofToken = applySomniaToken(LOCAL_STORAGE_KEYS.somniaToken, null);
          state.pending = false;
        }
      });
  },
});

export const { resetSomniaProofState } = somniaSlice.actions;

export default somniaSlice;
