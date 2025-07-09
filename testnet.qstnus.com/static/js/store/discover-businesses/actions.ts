import { createAsyncThunk } from "@reduxjs/toolkit";

import { isErrorResult, makeApiRequest, ENDPOINTS_SURVEY } from "services";
import { ErrorResult } from "services/types";

import { DiscoveredBusinessesResponse, BusinessesPayload } from "./types";
export const getAllDiscoveredBusinesses = createAsyncThunk<
  DiscoveredBusinessesResponse,
  BusinessesPayload,
  { rejectValue: ErrorResult }
>("survey/get-discovered-businesses", async (params, { rejectWithValue }) => {
  const result = await makeApiRequest<DiscoveredBusinessesResponse>({
    method: "GET",
    url: ENDPOINTS_SURVEY.business,
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
