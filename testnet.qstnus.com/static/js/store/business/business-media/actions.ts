import { createAsyncThunk } from "@reduxjs/toolkit";

import { isErrorResult, makeApiRequest, ENDPOINTS_BUSINESS } from "services";
import { ErrorResult } from "services/types";

import { BusinessMediaResponse, BusinessMediaPayload } from "./types";

export const getBusinessMediaData = createAsyncThunk<
  BusinessMediaResponse,
  BusinessMediaPayload,
  { rejectValue: ErrorResult }
>("nft/get-nft-items", async (params, { rejectWithValue }) => {
  const result = await makeApiRequest<BusinessMediaResponse>({
    method: "GET",
    url: `${ENDPOINTS_BUSINESS.getBusinessCollections}`,
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
