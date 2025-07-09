import { createSlice } from "@reduxjs/toolkit";

import { checkSkaleProof } from "./actions";
import { getProof } from "../solana-proof/actions";

import { SkaleProofState } from "./types";
import { LOCAL_STORAGE_KEYS } from "configs";

export const applySkaleToken = (key: string, token: SkaleProofState["skaleProofToken"]) => {
  if (token) {
    localStorage.setItem(key, token);
  } else {
    localStorage.removeItem(key);
  }

  return token;
};

const initialState: SkaleProofState = {
  pending: false,
  error: null,
  skaleProofToken: null,
};

const skaleSlice = createSlice({
  name: "skaleProof",
  initialState: {
    ...initialState,
    skaleProofToken: localStorage.getItem(LOCAL_STORAGE_KEYS.skaleToken),
  },
  reducers: {
    resetSkaleProofState: () => {
      applySkaleToken(LOCAL_STORAGE_KEYS.skaleToken, null);
      localStorage.removeItem(LOCAL_STORAGE_KEYS.skaleWallet);
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
        state.skalePayload = action.payload;
        state.error = null;
        state.pending = false;
      })
      .addCase(getProof.rejected, (state, action) => {
        if (action.payload) {
          state.error = action.payload;
          state.pending = false;
        }
      })
      // check skale proof
      .addCase(checkSkaleProof.pending, state => {
        state.pending = true;
      })
      .addCase(checkSkaleProof.fulfilled, (state, action) => {
        const { token } = action.payload;
        state.error = null;
        state.skaleProofToken = applySkaleToken(LOCAL_STORAGE_KEYS.skaleToken, token);
        state.pending = false;
      })
      .addCase(checkSkaleProof.rejected, (state, action) => {
        if (action.payload) {
          state.error = action.payload;
          state.skaleProofToken = applySkaleToken(LOCAL_STORAGE_KEYS.skaleToken, null);
          state.pending = false;
        }
      });
  },
});

export const { resetSkaleProofState } = skaleSlice.actions;

export default skaleSlice;
