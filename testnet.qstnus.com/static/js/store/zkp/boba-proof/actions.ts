import { createAsyncThunk } from "@reduxjs/toolkit";

import { isErrorResult, makeApiRequest, ENDPOINTS_PROOF } from "services";

import { ErrorResult } from "services/types";
import { CheckBobaProofPayload } from "./types";
import { TokenProofResponse } from "../solana-proof/types";

export const checkBobaProof = createAsyncThunk<TokenProofResponse, CheckBobaProofPayload, { rejectValue: ErrorResult }>(
  "zkp/check-boba-proof",
  async (data, { rejectWithValue }) => {
    const result = await makeApiRequest<TokenProofResponse>({
      method: "POST",
      url: ENDPOINTS_PROOF.checkBobaProof,
      data,
    });

    if (isErrorResult(result)) {
      return rejectWithValue(result);
    }

    return result;
  },
);
