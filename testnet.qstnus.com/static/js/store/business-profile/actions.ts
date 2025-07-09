import { createAsyncThunk } from "@reduxjs/toolkit";

import { isErrorResult, makeApiRequest, ENDPOINTS_SURVEY, ENDPOINTS_NFT } from "services";
import { ErrorResult } from "services/types";

import { BusinessesItemPayload, BusinessesCollectionsPayload, BusinessesCollectionsResponse } from "./types";
import { BusinessItem } from "store/discover-businesses/types";

export const getDiscoveredBusinessItem = createAsyncThunk<
  BusinessItem,
  BusinessesItemPayload,
  { rejectValue: ErrorResult }
>("survey/get-discovered-business-item", async ({ id }, { rejectWithValue }) => {
  const result = await makeApiRequest<BusinessItem>({
    method: "GET",
    url: `${ENDPOINTS_SURVEY.businessDid}/${id}`,
  });

  if (isErrorResult(result)) {
    return rejectWithValue(result);
  }

  return result;
});

export const getBusinessNftCollections = createAsyncThunk<
  BusinessesCollectionsResponse,
  BusinessesCollectionsPayload,
  { rejectValue: ErrorResult }
>("survey/get-business-nft-collections", async (params, { rejectWithValue }) => {
  const result = await makeApiRequest<BusinessesCollectionsResponse>({
    method: "GET",
    url: `${ENDPOINTS_NFT.nftCollections}`,
    params,
  });

  if (isErrorResult(result)) {
    return rejectWithValue(result);
  }

  return result;
});
