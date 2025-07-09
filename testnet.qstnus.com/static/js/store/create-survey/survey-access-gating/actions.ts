import { createAsyncThunk } from "@reduxjs/toolkit";

import { isErrorResult, makeApiRequest, ENDPOINTS_SURVEY } from "services";

import { ErrorResult } from "services/types";
import { StatusResponse } from "store/auth/types";
import { AccessGatingPayload, GetAccessGatingPayload, SetAccessGatingPayload } from "./types";

export const getAccessGating = createAsyncThunk<
  AccessGatingPayload,
  GetAccessGatingPayload,
  { rejectValue: ErrorResult }
>("survey/get-access-gating", async ({ id }, { rejectWithValue }) => {
  const result = await makeApiRequest<AccessGatingPayload>({
    method: "GET",
    url: `${ENDPOINTS_SURVEY.businessSurvey}/${id}${ENDPOINTS_SURVEY.accessGating}`,
  });

  if (isErrorResult(result)) {
    return rejectWithValue(result);
  }

  return result;
});

export const setAccessGating = createAsyncThunk<StatusResponse, SetAccessGatingPayload, { rejectValue: ErrorResult }>(
  "survey/set-access-gating",
  async ({ data, id }, { rejectWithValue }) => {
    const result = await makeApiRequest<StatusResponse>({
      method: "POST",
      url: `${ENDPOINTS_SURVEY.businessSurvey}/${id}${ENDPOINTS_SURVEY.accessGating}`,
      data,
    });

    if (isErrorResult(result)) {
      return rejectWithValue(result);
    }

    return result;
  },
);
