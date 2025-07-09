import { createAsyncThunk } from "@reduxjs/toolkit";

import { isErrorResult, makeApiRequest, ENDPOINTS_USER } from "services";
import { ErrorResult } from "services/types";

import { GetReferralsResponse, GetReferralsPayload, InviteReferralsPayload } from "./types";

export const getReferrals = createAsyncThunk<GetReferralsResponse, GetReferralsPayload, { rejectValue: ErrorResult }>(
  "user/getReferrals",
  async (params, { rejectWithValue }) => {
    const result = await makeApiRequest<GetReferralsResponse>({
      method: "GET",
      url: ENDPOINTS_USER.referral,
      params,
      paramsSerializer: {
        indexes: null, // no brackets at all
      },
    });

    if (isErrorResult(result)) {
      return rejectWithValue(result);
    }

    return result;
  },
);

export const inviteReferrals = createAsyncThunk<undefined, InviteReferralsPayload, { rejectValue: ErrorResult }>(
  "user/inviteReferrals",
  async (data, { rejectWithValue }) => {
    const result = await makeApiRequest<undefined>({
      method: "POST",
      url: ENDPOINTS_USER.inviteReferrals,
      data,
    });

    if (isErrorResult(result)) {
      return rejectWithValue(result);
    }

    return result;
  },
);
