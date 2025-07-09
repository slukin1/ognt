import { createAsyncThunk } from "@reduxjs/toolkit";

import { isErrorResult, makeApiRequest, ENDPOINTS_SURVEY } from "services";
import { ErrorResult } from "services/types";

import { DiscoveredSurveysResponse, SurveyPayload } from "./types";

export const getAllDiscoveredSurveys = createAsyncThunk<
  DiscoveredSurveysResponse,
  SurveyPayload,
  { rejectValue: ErrorResult }
>("survey/get-discovered-surveys", async (params, { rejectWithValue }) => {
  if (params.chainId && params.chainId === "all") {
    delete params.chainId;
  }

  if (params.currencyCode && params.currencyCode === "all") {
    delete params.currencyCode;
  }

  const result = await makeApiRequest<DiscoveredSurveysResponse>({
    method: "GET",
    url: ENDPOINTS_SURVEY.survey,
    params,
    paramsSerializer: {
      indexes: null, // no brackets at all
    },
  });

  if (isErrorResult(result)) {
    return rejectWithValue(result);
  }

  return result;
});
