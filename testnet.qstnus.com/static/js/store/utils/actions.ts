import { createAsyncThunk } from "@reduxjs/toolkit";

import { isErrorResult, makeApiRequest, ENDPOINTS_HOME, ENDPOINTS_SURVEY } from "services";

import { ErrorResult } from "services/types";
import { GetConfigsResponse, SurveyTemplateItem } from "./types";
import { StatusResponse } from "store/auth/types";

export const getConfigs = createAsyncThunk<GetConfigsResponse, undefined, { rejectValue: ErrorResult }>(
  "home/getConfigs",
  async (data, { rejectWithValue }) => {
    const result = await makeApiRequest<GetConfigsResponse>({
      method: "GET",
      url: ENDPOINTS_HOME.configs,
      data,
    });

    if (isErrorResult(result)) {
      return rejectWithValue(result);
    }

    return result;
  },
);

export const getSurveyTemplates = createAsyncThunk<SurveyTemplateItem[], undefined, { rejectValue: ErrorResult }>(
  "home/getSurveyTemplates",
  async (data, { rejectWithValue }) => {
    const result = await makeApiRequest<SurveyTemplateItem[]>({
      method: "GET",
      url: `${ENDPOINTS_SURVEY.businessSurvey}${ENDPOINTS_SURVEY.templates}`,
      data,
    });

    if (isErrorResult(result)) {
      return rejectWithValue(result);
    }

    return result;
  },
);
