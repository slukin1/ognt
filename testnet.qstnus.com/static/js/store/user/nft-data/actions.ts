import { createAsyncThunk } from "@reduxjs/toolkit";

import { isErrorResult, makeApiRequest, ENDPOINTS_TRANSACTIONS, ENDPOINTS_NFT } from "services";
import { ErrorResult } from "services/types";

import { NftItemsResponse, NftItemsPayload } from "./types";

export const getNftItems = createAsyncThunk<NftItemsResponse, NftItemsPayload, { rejectValue: ErrorResult }>(
  "nft/get-nft-items",
  async (params, { rejectWithValue }) => {
    const result = await makeApiRequest<NftItemsResponse>({
      method: "GET",
      url: `${ENDPOINTS_TRANSACTIONS.reward}${ENDPOINTS_NFT.nftItems}`,
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
