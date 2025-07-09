import { createAsyncThunk } from "@reduxjs/toolkit";

import { isErrorResult, makeApiRequest, ENDPOINTS_PROOF } from "services";

import { ErrorResult } from "services/types";
import { TokenProofResponse, ProofPayload, CheckSolanaProofPayload } from "./types";

export const checkSolanaProof = createAsyncThunk<
  TokenProofResponse,
  CheckSolanaProofPayload,
  { rejectValue: ErrorResult }
>("zkp/check-solana-proof", async (data, { rejectWithValue }) => {
  const result = await makeApiRequest<TokenProofResponse>({
    method: "POST",
    url: ENDPOINTS_PROOF.checkSolanaProof,
    data,
  });

  if (isErrorResult(result)) {
    return rejectWithValue(result);
  }

  return result;
});

export const getProof = createAsyncThunk<ProofPayload, undefined, { rejectValue: ErrorResult }>(
  "zkp/get-proof",
  async (_, { rejectWithValue }) => {
    const result = await makeApiRequest<ProofPayload>({
      method: "POST",
      url: ENDPOINTS_PROOF.getProofPayload,
    });

    if (isErrorResult(result)) {
      return rejectWithValue(result);
    }

    return result;
  },
);
