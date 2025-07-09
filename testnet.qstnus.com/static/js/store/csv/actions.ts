import { createAsyncThunk } from "@reduxjs/toolkit";

import { isErrorResult, makeApiRequest, ENDPOINTS_SURVEY } from "services";
import { ErrorResult } from "services/types";

import { GetSurveyUserCSVPayload, GetSurveyCSVPayload } from "./types";

export const getSurveyCSV = createAsyncThunk<string, GetSurveyCSVPayload, { rejectValue: ErrorResult }>(
  "csv/get-survey-csv",
  async ({ surveyId }, { rejectWithValue }) => {
    const result = await makeApiRequest<string>({
      method: "GET",
      url: `${ENDPOINTS_SURVEY.businessSurvey}/${surveyId}${ENDPOINTS_SURVEY.response}${ENDPOINTS_SURVEY.csv}`,
      isShowError: false,
    });

    if (isErrorResult(result)) {
      return rejectWithValue(result);
    }

    return result;
  },
);

export const getSurveyUserCSV = createAsyncThunk<string, GetSurveyUserCSVPayload, { rejectValue: ErrorResult }>(
  "csv/get-survey-user-csv",
  async ({ surveyId, resId }, { rejectWithValue }) => {
    const result = await makeApiRequest<string>({
      method: "GET",
      url: `${ENDPOINTS_SURVEY.businessSurvey}/${surveyId}${ENDPOINTS_SURVEY.response}/${resId}${ENDPOINTS_SURVEY.csv}`,
    });

    if (isErrorResult(result)) {
      return rejectWithValue(result);
    }

    return result;
  },
);
