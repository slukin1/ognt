import { createAsyncThunk } from "@reduxjs/toolkit";

import { isErrorResult, makeApiRequest, ENDPOINTS_PROOF } from "services";

import { ErrorResult } from "services/types";
import { CheckSomniaProofPayload } from "./types";
import { TokenProofResponse } from "../solana-proof/types";

export const checkSomniaProof = createAsyncThunk<
  TokenProofResponse,
  CheckSomniaProofPayload,
  { rejectValue: ErrorResult }
>("zkp/check-somnia-proof", async (data, { rejectWithValue }) => {
  const result = await makeApiRequest<TokenProofResponse>({
    method: "POST",
    url: ENDPOINTS_PROOF.checkSomniaProof,
    data,
  });

  if (isErrorResult(result)) {
    return rejectWithValue(result);
  }

  return result;
});
