import { createAsyncThunk } from "@reduxjs/toolkit";

import { isErrorResult, makeApiRequest, ENDPOINTS_PROOF } from "services";

import { ErrorResult } from "services/types";
import { CheckRootstockProofPayload } from "./types";
import { TokenProofResponse } from "../solana-proof/types";

export const checkRootstockProof = createAsyncThunk<
  TokenProofResponse,
  CheckRootstockProofPayload,
  { rejectValue: ErrorResult }
>("zkp/check-rootstock-proof", async (data, { rejectWithValue }) => {
  const result = await makeApiRequest<TokenProofResponse>({
    method: "POST",
    url: ENDPOINTS_PROOF.checkRootstockProof,
    data,
  });

  if (isErrorResult(result)) {
    return rejectWithValue(result);
  }

  return result;
});
