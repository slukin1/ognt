import { createAsyncThunk } from "@reduxjs/toolkit";

import { isErrorResult, makeApiRequest, ENDPOINTS_SURVEY } from "services";
import { ErrorResult } from "services/types";

import { GetSurveyStatUsersPayload, SurveyStatUserItem, UserSurveyPayload, GetSurveyStatUsersResponse } from "./types";

export const getUserSurveyAnswers = createAsyncThunk<
  SurveyStatUserItem,
  UserSurveyPayload,
  { rejectValue: ErrorResult }
>("survey/get-user-answers", async ({ surveyId, userId }, { rejectWithValue }) => {
  const result = await makeApiRequest<SurveyStatUserItem>({
    method: "GET",
    url: `${ENDPOINTS_SURVEY.businessSurvey}/${surveyId}${ENDPOINTS_SURVEY.response}/${userId}`,
  });

  if (isErrorResult(result)) {
    return rejectWithValue(result);
  }

  return result;
});

export const getSurveyStatUsers = createAsyncThunk<
  GetSurveyStatUsersResponse,
  GetSurveyStatUsersPayload,
  { rejectValue: ErrorResult }
>("survey/get-survey-stat-users", async ({ id, params }, { rejectWithValue }) => {
  const result = await makeApiRequest<GetSurveyStatUsersResponse>({
    method: "GET",
    url: `${ENDPOINTS_SURVEY.businessSurvey}/${id}${ENDPOINTS_SURVEY.response}`,
    params,
  });

  if (isErrorResult(result)) {
    return rejectWithValue(result);
  }

  return result;
});

export const getSurveyStatAllUsers = createAsyncThunk<
  GetSurveyStatUsersResponse,
  GetSurveyStatUsersPayload,
  { rejectValue: ErrorResult }
>("survey/get-survey-stat-all-users", async ({ id, params }, { rejectWithValue }) => {
  const result = await makeApiRequest<GetSurveyStatUsersResponse>({
    method: "GET",
    url: `${ENDPOINTS_SURVEY.businessSurvey}/${id}${ENDPOINTS_SURVEY.response}`,
    params,
  });

  if (isErrorResult(result)) {
    return rejectWithValue(result);
  }

  return result;
});
