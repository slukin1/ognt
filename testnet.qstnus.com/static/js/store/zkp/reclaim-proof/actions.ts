import { createAsyncThunk } from "@reduxjs/toolkit";
import type { Proof } from "@reclaimprotocol/js-sdk";

import { isErrorResult, makeApiRequest, ENDPOINTS_PROOF } from "services";

import { ErrorResult } from "services/types";
import { ReclaimProofResponse, CheckReclaimPayload, CheckReclaimResponse, VerifyResponse } from "./types";

export const getReclaimProof = createAsyncThunk<ReclaimProofResponse, undefined, { rejectValue: ErrorResult }>(
  "zkp/get-reclaim-proof",
  async (data, { rejectWithValue }) => {
    const result = await makeApiRequest<ReclaimProofResponse>({
      method: "POST",
      url: ENDPOINTS_PROOF.reclaim,
      data,
    });

    if (isErrorResult(result)) {
      return rejectWithValue(result);
    }

    return result;
  },
);

export const checkReclaimStatus = createAsyncThunk<
  CheckReclaimResponse,
  CheckReclaimPayload,
  { rejectValue: ErrorResult }
>("zkp/check-reclaim-status", async ({ url, ...data }, { rejectWithValue }) => {
  const result = await makeApiRequest<CheckReclaimResponse>({
    method: "GET",
    url,
    data,
  });

  if (isErrorResult(result)) {
    return rejectWithValue(result);
  }

  return result;
});

export const verifyReclaim = createAsyncThunk<VerifyResponse, Proof, { rejectValue: ErrorResult }>(
  "zkp/verify-reclaim",
  async (data, { rejectWithValue }) => {
    const result = await makeApiRequest<VerifyResponse>({
      method: "POST",
      url: ENDPOINTS_PROOF.reclaimVerify,
      data,
    });

    if (isErrorResult(result)) {
      return rejectWithValue(result);
    }

    return result;
  },
);
