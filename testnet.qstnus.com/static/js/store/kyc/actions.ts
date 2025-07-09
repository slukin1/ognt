import { createAsyncThunk } from "@reduxjs/toolkit";

import { isErrorResult, makeApiRequest, ENDPOINTS_KYC } from "services";

import { ErrorResult } from "services/types";
import { UpdateKYCPayload, GetKYCUrlResponse } from "./types";
import { StatusResponse } from "store/auth/types";

export const updateKYC = createAsyncThunk<StatusResponse, UpdateKYCPayload, { rejectValue: ErrorResult }>(
  "user/verify-kyc",
  async (data, { rejectWithValue }) => {
    const result = await makeApiRequest<StatusResponse>({
      method: "POST",
      url: ENDPOINTS_KYC.verifyKYC,
      data,
    });

    if (isErrorResult(result)) {
      return rejectWithValue(result);
    }

    return result;
  },
);

export const getKYCUrl = createAsyncThunk<GetKYCUrlResponse, undefined, { rejectValue: ErrorResult }>(
  "user/get-kyc-url",
  async (data, { rejectWithValue }) => {
    const result = await makeApiRequest<GetKYCUrlResponse>({
      method: "GET",
      url: ENDPOINTS_KYC.getKYCUrl,
      data,
    });

    if (isErrorResult(result)) {
      return rejectWithValue(result);
    }

    return result;
  },
);
