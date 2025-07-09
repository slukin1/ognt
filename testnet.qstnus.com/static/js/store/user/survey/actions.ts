import { createAsyncThunk } from "@reduxjs/toolkit";

import { isErrorResult, makeApiRequest, ENDPOINTS_SURVEY } from "services";
import { ErrorResult } from "services/types";

import { ActiveSurveyResponse, UserSurveyPayload } from "./types";

export const getUserActiveSurveys = createAsyncThunk<
  ActiveSurveyResponse,
  UserSurveyPayload,
  { rejectValue: ErrorResult }
>("survey/get-all-user-active-surveys", async (params, { rejectWithValue }) => {
  const result = await makeApiRequest<ActiveSurveyResponse>({
    method: "GET",
    url: `${ENDPOINTS_SURVEY.survey}${ENDPOINTS_SURVEY.response}`,
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
