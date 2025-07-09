import { createAsyncThunk } from "@reduxjs/toolkit";

import { isErrorResult, makeApiRequest, ENDPOINTS_SURVEY } from "services";

import { ErrorResult } from "services/types";
import { UserAnalyticsResponse, AnalyticsPayload } from "./types";

export const getUserAnalytics = createAsyncThunk<UserAnalyticsResponse, AnalyticsPayload, { rejectValue: ErrorResult }>(
  "business/getUserAnalytics",
  async (params, { rejectWithValue }) => {
    const result = await makeApiRequest<UserAnalyticsResponse>({
      method: "GET",
      url: `${ENDPOINTS_SURVEY.business}${ENDPOINTS_SURVEY.analytics}`,
      params,
    });

    if (isErrorResult(result)) {
      return rejectWithValue(result);
    }

    return result;
  },
);
