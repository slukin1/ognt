import { createAsyncThunk } from "@reduxjs/toolkit";

import { isErrorResult, makeApiRequest, ENDPOINTS_PROOF } from "services";

import { ErrorResult } from "services/types";
import { CheckNearProofPayload } from "./types";
import { TokenProofResponse } from "../solana-proof/types";

export const checkNearProof = createAsyncThunk<TokenProofResponse, CheckNearProofPayload, { rejectValue: ErrorResult }>(
  "near/check-near-proof",
  async (data, { rejectWithValue }) => {
    const result = await makeApiRequest<TokenProofResponse>({
      method: "POST",
      url: ENDPOINTS_PROOF.checkNearProof,
      data,
    });

    if (isErrorResult(result)) {
      return rejectWithValue(result);
    }

    return result;
  },
);
