import { createAsyncThunk } from "@reduxjs/toolkit";

import { isErrorResult, makeApiRequest, ENDPOINTS_SURVEY } from "services";
import { ErrorResult } from "services/types";

import { CampaignsResponse, CampaignPayload } from "./types";

export const getAllSurveys = createAsyncThunk<CampaignsResponse, CampaignPayload, { rejectValue: ErrorResult }>(
  "survey/get-surveys",
  async (params, { rejectWithValue }) => {
    const modifiedParams = { ...params };

    if (modifiedParams.chainId && modifiedParams.chainId === "all") {
      delete modifiedParams.chainId;
    }

    const result = await makeApiRequest<CampaignsResponse>({
      method: "GET",
      url: ENDPOINTS_SURVEY.businessSurvey,
      params: modifiedParams,
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
