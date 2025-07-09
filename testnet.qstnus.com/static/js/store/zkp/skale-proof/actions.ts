import { createAsyncThunk } from "@reduxjs/toolkit";

import { isErrorResult, makeApiRequest, ENDPOINTS_PROOF } from "services";

import { ErrorResult } from "services/types";
import { CheckSkaleProofPayload } from "./types";
import { TokenProofResponse } from "../solana-proof/types";

export const checkSkaleProof = createAsyncThunk<
  TokenProofResponse,
  CheckSkaleProofPayload,
  { rejectValue: ErrorResult }
>("zkp/check-skale-proof", async (data, { rejectWithValue }) => {
  const result = await makeApiRequest<TokenProofResponse>({
    method: "POST",
    url: ENDPOINTS_PROOF.checkSkaleProof,
    data,
  });

  if (isErrorResult(result)) {
    return rejectWithValue(result);
  }

  return result;
});
