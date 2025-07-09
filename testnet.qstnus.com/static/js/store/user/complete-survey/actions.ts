import { createAsyncThunk } from "@reduxjs/toolkit";

import { isErrorResult, makeApiRequest, ENDPOINTS_SURVEY } from "services";
import { ErrorResult } from "services/types";

import { SurveyInfoPayload } from "store/create-survey/survey/types";
import {
  SurveyFillingResponse,
  SurveyAnswersResponse,
  SurveyAnswerPayload,
  SurveyClaimRequestPayload,
  SendClaimRequestPayload,
  StipeConnectionResponse,
  StipeSessionResponse,
} from "./types";
import { StatusResponse } from "store/auth/types";

export const getSurveyFillingInfo = createAsyncThunk<
  SurveyFillingResponse,
  SurveyInfoPayload,
  { rejectValue: ErrorResult }
>("survey/get-survey-filling-info", async ({ id }, { rejectWithValue }) => {
  const result = await makeApiRequest<SurveyFillingResponse>({
    method: "GET",
    url: `${ENDPOINTS_SURVEY.survey}/${id}`,
  });

  if (isErrorResult(result)) {
    return rejectWithValue(result);
  }

  return result;
});

export const getSurveyAnswers = createAsyncThunk<
  SurveyAnswersResponse,
  SurveyInfoPayload,
  { rejectValue: ErrorResult }
>("survey/get-survey-answers", async ({ id, isAnon = false }, { rejectWithValue }) => {
  const result = await makeApiRequest<SurveyAnswersResponse>({
    method: "GET",
    url: `${ENDPOINTS_SURVEY.survey}/${id}${ENDPOINTS_SURVEY.response}`,
    isAnonHeaderId: isAnon,
  });

  if (isErrorResult(result)) {
    return rejectWithValue(result);
  }

  return result;
});

export const sendSurveyAnswers = createAsyncThunk<StatusResponse, SurveyAnswerPayload, { rejectValue: ErrorResult }>(
  "survey/send-survey-answers",
  async ({ id, data, isAnon = false, isShowError = true }, { rejectWithValue }) => {
    const result = await makeApiRequest<StatusResponse>({
      method: "POST",
      url: `${ENDPOINTS_SURVEY.survey}/${id}${ENDPOINTS_SURVEY.response}`,
      data,
      isAnonHeaderId: isAnon,
      isShowError: isShowError,
    });

    if (isErrorResult(result)) {
      return rejectWithValue(result);
    }

    return result;
  },
);

export const sendProtectRequest = createAsyncThunk<
  undefined,
  { id: string; protectedData: string },
  { rejectValue: ErrorResult }
>("survey/send-protect-request", async ({ id, protectedData }, { rejectWithValue }) => {
  const result = await makeApiRequest<undefined>({
    method: "POST",
    url: `${ENDPOINTS_SURVEY.survey}${ENDPOINTS_SURVEY.response}/${id}/protect`,
    data: { protectedData },
  });

  if (isErrorResult(result)) {
    return rejectWithValue(result);
  }

  return result;
});

export const sendClaimRequest = createAsyncThunk<StatusResponse, SendClaimRequestPayload, { rejectValue: ErrorResult }>(
  "survey/send-claim-request",
  async (
    {
      id,
      data,
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
    const result = await makeApiRequest<StatusResponse>({
      method: "POST",
      url: `${ENDPOINTS_SURVEY.survey}/${id}${ENDPOINTS_SURVEY.claim}`,
      data,
      isTonProof,
      isSolanaProof,
      isRootstockProof,
      isKakarotProof,
      isBobaProof,
      isSomniaProof,
      isSkaleProof,
      isNearProof,
      timeout: 60_000,
    });

    if (isErrorResult(result)) {
      return rejectWithValue(result);
    }

    return result;
  },
);

export const checkClaim = createAsyncThunk<StatusResponse, SurveyClaimRequestPayload, { rejectValue: ErrorResult }>(
  "survey/check-claim-request",
  async ({ id, data }, { rejectWithValue }) => {
    const result = await makeApiRequest<StatusResponse>({
      method: "POST",
      url: `${ENDPOINTS_SURVEY.survey}/${id}${ENDPOINTS_SURVEY.checkClaim}`,
      data,
      isShowError: false,
    });

    if (isErrorResult(result)) {
      return rejectWithValue(result);
    }

    return result;
  },
);

export const skaleClaimApprove = createAsyncThunk<undefined, { id: string }, { rejectValue: ErrorResult }>(
  "survey/skale-claim-approve",
  async ({ id }, { rejectWithValue }) => {
    const result = await makeApiRequest<undefined>({
      method: "POST",
      url: `${ENDPOINTS_SURVEY.survey}/${id}${ENDPOINTS_SURVEY.skaleClaimApprove}`,
      isShowError: false,
    });

    if (isErrorResult(result)) {
      return rejectWithValue(result);
    }

    return result;
  },
);

export const getStripeAccountId = createAsyncThunk<StipeConnectionResponse, undefined, { rejectValue: ErrorResult }>(
  "survey/get-stripe-account-id",
  async (data, { rejectWithValue }) => {
    const result = await makeApiRequest<StipeConnectionResponse>({
      method: "POST",
      url: `${ENDPOINTS_SURVEY.payment}${ENDPOINTS_SURVEY.stripe}${ENDPOINTS_SURVEY.account}${ENDPOINTS_SURVEY.connect}`,
      isShowError: false,
    });

    if (isErrorResult(result)) {
      return rejectWithValue(result);
    }

    return result;
  },
);

export const getStripeSessionSecret = createAsyncThunk<
  StipeSessionResponse,
  StipeConnectionResponse,
  { rejectValue: ErrorResult }
>("survey/get-stripe-session-secret", async (data, { rejectWithValue }) => {
  const result = await makeApiRequest<StipeSessionResponse>({
    method: "POST",
    url: `${ENDPOINTS_SURVEY.payment}${ENDPOINTS_SURVEY.stripe}${ENDPOINTS_SURVEY.account}${ENDPOINTS_SURVEY.session}`,
    data,
    isShowError: false,
  });

  if (isErrorResult(result)) {
    return rejectWithValue(result);
  }

  return result;
});

export const updateTimeCompleted = createAsyncThunk<
  StatusResponse,
  SurveyClaimRequestPayload,
  { rejectValue: ErrorResult }
>("survey/update-time-completed", async ({ id, isAnon = false }, { rejectWithValue }) => {
  const result = await makeApiRequest<StatusResponse>({
    method: "POST",
    url: `${ENDPOINTS_SURVEY.survey}/${id}${ENDPOINTS_SURVEY.response}${ENDPOINTS_SURVEY.time}`,
    isAnonHeaderId: isAnon,
  });

  if (isErrorResult(result)) {
    return rejectWithValue(result);
  }

  return result;
});
