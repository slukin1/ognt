import { createSlice } from "@reduxjs/toolkit";

import { checkBobaProof } from "./actions";
import { getProof } from "../solana-proof/actions";

import { BobaProofState } from "./types";
import { LOCAL_STORAGE_KEYS } from "configs";

export const applyBobaToken = (key: string, token: BobaProofState["bobaProofToken"]) => {
  if (token) {
    localStorage.setItem(key, token);
  } else {
    localStorage.removeItem(key);
  }

  return token;
};

const initialState: BobaProofState = {
  pending: false,
  error: null,
  bobaProofToken: null,
};

const bobaSlice = createSlice({
  name: "bobaProof",
  initialState: {
    ...initialState,
    bobaProofToken: localStorage.getItem(LOCAL_STORAGE_KEYS.bobaToken),
  },
  reducers: {
    resetBobaProofState: () => {
      applyBobaToken(LOCAL_STORAGE_KEYS.bobaToken, null);
      localStorage.removeItem(LOCAL_STORAGE_KEYS.bobaWallet);
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
        state.bobaPayload = action.payload;
        state.error = null;
        state.pending = false;
      })
      .addCase(getProof.rejected, (state, action) => {
        if (action.payload) {
          state.error = action.payload;
          state.pending = false;
        }
      })
      // check boba proof
      .addCase(checkBobaProof.pending, state => {
        state.pending = true;
      })
      .addCase(checkBobaProof.fulfilled, (state, action) => {
        const { token } = action.payload;
        state.error = null;
        state.bobaProofToken = applyBobaToken(LOCAL_STORAGE_KEYS.bobaToken, token);
        state.pending = false;
      })
      .addCase(checkBobaProof.rejected, (state, action) => {
        if (action.payload) {
          state.error = action.payload;
          state.bobaProofToken = applyBobaToken(LOCAL_STORAGE_KEYS.bobaToken, null);
          state.pending = false;
        }
      });
  },
});

export const { resetBobaProofState } = bobaSlice.actions;

export default bobaSlice;
