import { createAsyncThunk } from "@reduxjs/toolkit";

import { isErrorResult, makeApiRequest, ENDPOINTS_PROOF } from "services";

import { ErrorResult } from "services/types";
import { CheckTonProofPayload } from "./types";
import { TokenProofResponse } from "../solana-proof/types";

export const checkTonProof = createAsyncThunk<TokenProofResponse, CheckTonProofPayload, { rejectValue: ErrorResult }>(
  "ton/check-ton-proof",
  async (data, { rejectWithValue }) => {
    const result = await makeApiRequest<TokenProofResponse>({
      method: "POST",
      url: ENDPOINTS_PROOF.checkTonProof,
      data,
    });

    if (isErrorResult(result)) {
      return rejectWithValue(result);
    }

    return result;
  },
);
