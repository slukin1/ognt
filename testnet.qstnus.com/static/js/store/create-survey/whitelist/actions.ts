import { createAsyncThunk } from "@reduxjs/toolkit";

import { isErrorResult, makeApiRequest, ENDPOINTS_SURVEY } from "services";
import { ErrorResult } from "services/types";

import { SaveUsersToWhitelistPayload } from "./types";
import { StatusResponse } from "store/auth/types";

export const saveUsersToWhitelist = createAsyncThunk<
  StatusResponse,
  SaveUsersToWhitelistPayload,
  { rejectValue: ErrorResult }
>("survey/save-users-to-whitelist", async ({ data, surveyId }, { rejectWithValue }) => {
  const result = await makeApiRequest<StatusResponse>({
    method: "POST",
    url: `${ENDPOINTS_SURVEY.businessSurvey}/${surveyId}${ENDPOINTS_SURVEY.whitelist}`,
    data,
  });

  if (isErrorResult(result)) {
    return rejectWithValue(result);
  }

  return result;
});

export const inviteUsersToSurvey = createAsyncThunk<StatusResponse, string, { rejectValue: ErrorResult }>(
  "survey/invite-users-to-survey",
  async (data, { rejectWithValue }) => {
    const result = await makeApiRequest<StatusResponse>({
      method: "POST",
      url: `${ENDPOINTS_SURVEY.businessSurvey}/${data}${ENDPOINTS_SURVEY.inviteUsers}`,
      data,
    });

    if (isErrorResult(result)) {
      return rejectWithValue(result);
    }

    return result;
  },
);
