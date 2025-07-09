import { createAsyncThunk } from "@reduxjs/toolkit";

import { isErrorResult, makeApiRequest, ENDPOINTS_NFT, ENDPOINTS_SURVEY } from "services";

import { ErrorResult } from "services/types";
import { CreateNftPayload, CreateNftResponse, NftDataResponse } from "./types";
import { SurveyInfoPayload } from "store/create-survey/survey/types";
import { StatusResponse } from "store/auth/types";

export const createNFT = createAsyncThunk<CreateNftResponse, CreateNftPayload, { rejectValue: ErrorResult }>(
  "nft/create-nft",
  async (
    {
      data,
      id,
      isTonProof,
      isSolanaProof,
      isRootstockProof,
      isKakarotProof,
      isBobaProof,
      isSomniaProof,
      isSkaleProof,
      isNearProof,
    },
    { rejectWithValue },
  ) => {
    const result = await makeApiRequest<CreateNftResponse>({
      method: "POST",
      url: `${ENDPOINTS_SURVEY.businessSurvey}/${id}${ENDPOINTS_NFT.nft}`,
      data,
      isTonProof,
      isSolanaProof,
      isRootstockProof,
      isKakarotProof,
      isBobaProof,
      isSomniaProof,
      isSkaleProof,
      isNearProof,
    });

    if (isErrorResult(result)) {
      return rejectWithValue(result);
    }

    return result;
  },
);

export const getNftData = createAsyncThunk<NftDataResponse, SurveyInfoPayload, { rejectValue: ErrorResult }>(
  "nft/get-nft-data",
  async ({ id }, { rejectWithValue }) => {
    const result = await makeApiRequest<NftDataResponse>({
      method: "GET",
      url: `${ENDPOINTS_SURVEY.businessSurvey}/${id}${ENDPOINTS_NFT.nft}`,
      isShowError: false,
    });

    if (isErrorResult(result)) {
      return rejectWithValue(result);
    }

    return result;
  },
);

export const deleteSurveyNft = createAsyncThunk<StatusResponse, SurveyInfoPayload, { rejectValue: ErrorResult }>(
  "nft/delete-nft",
  async ({ id }, { rejectWithValue }) => {
    const result = await makeApiRequest<StatusResponse>({
      method: "DELETE",
      url: `${ENDPOINTS_SURVEY.businessSurvey}/${id}${ENDPOINTS_NFT.nft}`,
    });

    if (isErrorResult(result)) {
      return rejectWithValue(result);
    }

    return result;
  },
);

export const confirmSurveyNft = createAsyncThunk<StatusResponse, SurveyInfoPayload, { rejectValue: ErrorResult }>(
  "nft/confirm-nft-creator",
  async ({ id, data }, { rejectWithValue }) => {
    const result = await makeApiRequest<StatusResponse>({
      method: "POST",
      url: `${ENDPOINTS_SURVEY.businessSurvey}/${id}${ENDPOINTS_NFT.nft}${ENDPOINTS_SURVEY.confirm}`,
      data,
      isShowError: false,
    });

    if (isErrorResult(result)) {
      return rejectWithValue(result);
    }

    return result;
  },
);
