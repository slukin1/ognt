import { createAsyncThunk } from "@reduxjs/toolkit";

import { isErrorResult, makeApiRequest, ENDPOINTS_PROOF } from "services";

import { ErrorResult } from "services/types";
import { CheckKakarotProofPayload } from "./types";
import { TokenProofResponse } from "../solana-proof/types";

export const checkKakarotProof = createAsyncThunk<
  TokenProofResponse,
  CheckKakarotProofPayload,
  { rejectValue: ErrorResult }
>("zkp/check-kakarot-proof", async (data, { rejectWithValue }) => {
  const result = await makeApiRequest<TokenProofResponse>({
    method: "POST",
    url: ENDPOINTS_PROOF.checkKakarotProof,
    data,
  });

  if (isErrorResult(result)) {
    return rejectWithValue(result);
  }

  return result;
});
