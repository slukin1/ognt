import { createAsyncThunk } from "@reduxjs/toolkit";

import { isErrorResult, makeApiRequest, ENDPOINTS_SURVEY } from "services";
import { ErrorResult } from "services/types";

import { SurveyTagsResponse, SetSurveyBusinessTags } from "./types";
import { StatusResponse } from "store/auth/types";

export const getSurveyTags = createAsyncThunk<SurveyTagsResponse, undefined, { rejectValue: ErrorResult }>(
  "survey/get-survey-tags",
  async (_, { rejectWithValue }) => {
    const result = await makeApiRequest<SurveyTagsResponse>({
      method: "GET",
      url: `${ENDPOINTS_SURVEY.getSurveyTags}`,
    });

    if (isErrorResult(result)) {
      return rejectWithValue(result);
    }

    return result;
  },
);

export const setSurveyBusinessTags = createAsyncThunk<
  StatusResponse,
  SetSurveyBusinessTags,
  { rejectValue: ErrorResult }
>("survey/set-survey-business-tags", async ({ data, surveyId }, { rejectWithValue }) => {
  const result = await makeApiRequest<StatusResponse>({
    method: "POST",
    url: `${ENDPOINTS_SURVEY.businessSurvey}/${surveyId}${ENDPOINTS_SURVEY.surveyBusinessTag}`,
    data,
  });

  if (isErrorResult(result)) {
    return rejectWithValue(result);
  }

  return result;
});
