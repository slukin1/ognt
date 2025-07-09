import { createSlice } from "@reduxjs/toolkit";

import { checkRootstockProof } from "./actions";
import { getProof } from "../solana-proof/actions";

import { RootStockProofState } from "./types";
import { LOCAL_STORAGE_KEYS } from "configs";

export const applyRootstockToken = (key: string, token: RootStockProofState["rootstockProofToken"]) => {
  if (token) {
    localStorage.setItem(key, token);
  } else {
    localStorage.removeItem(key);
  }

  return token;
};

const initialState: RootStockProofState = {
  pending: false,
  error: null,
  rootstockProofToken: null,
};

const rootstockSlice = createSlice({
  name: "rootstockProof",
  initialState: {
    ...initialState,
    rootstockProofToken: localStorage.getItem(LOCAL_STORAGE_KEYS.rootstockToken),
  },
  reducers: {
    resetRootstockProofState: () => {
      applyRootstockToken(LOCAL_STORAGE_KEYS.rootstockToken, null);
      localStorage.removeItem(LOCAL_STORAGE_KEYS.rootstockWallet);
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
        state.rootstockPayload = action.payload;
        state.error = null;
        state.pending = false;
      })
      .addCase(getProof.rejected, (state, action) => {
        if (action.payload) {
          state.error = action.payload;
          state.pending = false;
        }
      })
      // check rootstock proof
      .addCase(checkRootstockProof.pending, state => {
        state.pending = true;
      })
      .addCase(checkRootstockProof.fulfilled, (state, action) => {
        const { token } = action.payload;
        state.error = null;
        state.rootstockProofToken = applyRootstockToken(LOCAL_STORAGE_KEYS.rootstockToken, token);
        state.pending = false;
      })
      .addCase(checkRootstockProof.rejected, (state, action) => {
        if (action.payload) {
          state.error = action.payload;
          state.rootstockProofToken = applyRootstockToken(LOCAL_STORAGE_KEYS.rootstockToken, null);
          state.pending = false;
        }
      });
  },
});

export const { resetRootstockProofState } = rootstockSlice.actions;

export default rootstockSlice;
