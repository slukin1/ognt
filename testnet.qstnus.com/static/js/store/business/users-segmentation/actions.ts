import { createAsyncThunk } from "@reduxjs/toolkit";

import { isErrorResult, makeApiRequest, ENDPOINTS_SURVEY } from "services";
import { ErrorResult } from "services/types";

import { SurveyUserResponse, UsersPayload } from "./types";

export const getSurveyUsers = createAsyncThunk<SurveyUserResponse, UsersPayload, { rejectValue: ErrorResult }>(
  "survey/get-surveys-users",
  async (params, { rejectWithValue }) => {
    const result = await makeApiRequest<SurveyUserResponse>({
      method: "GET",
      url: `${ENDPOINTS_SURVEY.business}${ENDPOINTS_SURVEY.users}`,
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
