import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { checkSolanaProof, getProof } from "./actions";

import { SolanaProofState } from "./types";
import { LOCAL_STORAGE_KEYS } from "configs";

export const applySolanaToken = (key: string, token: SolanaProofState["solanaProofToken"]) => {
  if (token) {
    localStorage.setItem(key, token);
  } else {
    localStorage.removeItem(key);
  }

  return token;
};

const initialState: SolanaProofState = {
  pending: false,
  solanaConnectPending: false,
  error: null,
  solanaProofToken: null,
};

const tonPaymentSlice = createSlice({
  name: "solanaProof",
  initialState: {
    ...initialState,
    solanaProofToken: localStorage.getItem(LOCAL_STORAGE_KEYS.solanaToken),
  },
  reducers: {
    resetSolanaProofState: () => {
      applySolanaToken(LOCAL_STORAGE_KEYS.solanaToken, null);
      localStorage.removeItem(LOCAL_STORAGE_KEYS.solanaWallet);
      return initialState;
    },
    setTonSolanaPending: (state, action: PayloadAction<boolean>) => {
      state.solanaConnectPending = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      // get proof payload
      .addCase(getProof.pending, state => {
        state.pending = true;
      })
      .addCase(getProof.fulfilled, (state, action) => {
        state.proofPayload = action.payload;
        state.error = null;
        state.pending = false;
      })
      .addCase(getProof.rejected, (state, action) => {
        if (action.payload) {
          state.error = action.payload;
          state.pending = false;
        }
      })
      // check solana proof
      .addCase(checkSolanaProof.pending, state => {
        state.pending = true;
      })
      .addCase(checkSolanaProof.fulfilled, (state, action) => {
        const { token } = action.payload;
        state.error = null;
        state.solanaProofToken = applySolanaToken(LOCAL_STORAGE_KEYS.solanaToken, token);
        state.pending = false;
      })
      .addCase(checkSolanaProof.rejected, (state, action) => {
        if (action.payload) {
          state.error = action.payload;
          state.solanaProofToken = applySolanaToken(LOCAL_STORAGE_KEYS.solanaToken, null);
          state.pending = false;
        }
      });
  },
});

export const { resetSolanaProofState, setTonSolanaPending } = tonPaymentSlice.actions;

export default tonPaymentSlice;
