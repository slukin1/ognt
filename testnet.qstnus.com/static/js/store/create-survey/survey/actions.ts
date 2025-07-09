import { createAsyncThunk } from "@reduxjs/toolkit";

import { isErrorResult, makeApiRequest, ENDPOINTS_SURVEY, ENDPOINTS_ADMIN } from "services";
import { ErrorResult } from "services/types";

import {
  CreateSurveyResponse,
  CreateSurveyPayload,
  SurveyInfoPayload,
  SurveyDetailResponseItem,
  UpdateSurveyPayload,
  SurveyPaymentData,
  SurveyPaymentTrxData,
  ConfirmPaymentData,
  SendInvitesPayload,
  CreateSurveyWithAIPayload,
  PaymentAnsrSurveyPayload,
  SurveyPaymentFiatDataPayload,
  DeleteSurveyPayload,
  SurveyPaymentFiatData,
} from "./types";
import { StatusResponse } from "store/auth/types";

export const createSurvey = createAsyncThunk<
  CreateSurveyResponse,
  CreateSurveyPayload | FormData,
  { rejectValue: ErrorResult }
>("survey/create-survey", async (data, { rejectWithValue }) => {
  const result = await makeApiRequest<CreateSurveyResponse>({
    method: "POST",
    url: ENDPOINTS_SURVEY.businessSurvey,
    data,
  });

  if (isErrorResult(result)) {
    return rejectWithValue(result);
  }

  return result;
});

export const createSurveyWithAI = createAsyncThunk<
  CreateSurveyResponse,
  CreateSurveyWithAIPayload,
  { rejectValue: ErrorResult }
>("survey/create-survey-with-ai", async (data, { rejectWithValue }) => {
  const result = await makeApiRequest<CreateSurveyResponse>({
    method: "POST",
    url: `${ENDPOINTS_SURVEY.businessSurvey}${ENDPOINTS_SURVEY.ai}`,
    data,
    timeout: 30_000,
  });

  if (isErrorResult(result)) {
    return rejectWithValue(result);
  }

  return result;
});

export const updateSurvey = createAsyncThunk<CreateSurveyResponse, UpdateSurveyPayload, { rejectValue: ErrorResult }>(
  "survey/update-survey",
  async ({ data, id }, { rejectWithValue }) => {
    const result = await makeApiRequest<CreateSurveyResponse>({
      method: "PUT",
      url: `${ENDPOINTS_SURVEY.businessSurvey}/${id}`,
      data,
    });

    if (isErrorResult(result)) {
      return rejectWithValue(result);
    }

    return result;
  },
);

export const getSurveyInfo = createAsyncThunk<
  SurveyDetailResponseItem,
  SurveyInfoPayload,
  { rejectValue: ErrorResult }
>("survey/get-survey-info", async ({ id }, { rejectWithValue }) => {
  const result = await makeApiRequest<SurveyDetailResponseItem>({
    method: "GET",
    url: `${ENDPOINTS_SURVEY.businessSurvey}/${id}`,
  });

  if (isErrorResult(result)) {
    return rejectWithValue(result);
  }

  return result;
});

export const deleteSurveyInfo = createAsyncThunk<StatusResponse, DeleteSurveyPayload, { rejectValue: ErrorResult }>(
  "survey/delete-survey-info",
  async ({ id }, { rejectWithValue }) => {
    const result = await makeApiRequest<SurveyDetailResponseItem>({
      method: "DELETE",
      url: `${ENDPOINTS_SURVEY.businessSurvey}/${id}`,
    });

    if (isErrorResult(result)) {
      return rejectWithValue(result);
    }

    return result;
  },
);

export const getSurveyPaymentFiatData = createAsyncThunk<
  SurveyPaymentFiatData,
  SurveyPaymentFiatDataPayload,
  { rejectValue: ErrorResult }
>("survey/get-survey-fiat-data", async ({ surveyId, ...payload }, { rejectWithValue }) => {
  const result = await makeApiRequest<SurveyPaymentFiatData>({
    method: "POST",
    url: `${ENDPOINTS_SURVEY.businessSurvey}/${surveyId}${ENDPOINTS_SURVEY.fiat}`,
    data: payload,
  });

  if (isErrorResult(result)) {
    return rejectWithValue(result);
  }

  return result;
});

export const getSurveyPaymentTrxData = createAsyncThunk<
  SurveyPaymentTrxData,
  SurveyPaymentData,
  { rejectValue: ErrorResult }
>(
  "survey/get-survey-trx-data",
  async (
    {
      data: { surveyId, ...payload },
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
    const result = await makeApiRequest<SurveyPaymentTrxData>({
      method: "POST",
      url: `${ENDPOINTS_SURVEY.businessSurvey}/${surveyId}${ENDPOINTS_SURVEY.payment}`,
      data: payload,
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

export const confirmSurveyPaymentTrx = createAsyncThunk<undefined, ConfirmPaymentData, { rejectValue: ErrorResult }>(
  "survey/confirm-survey-trx",
  async (
    { data: { surveyId, ...data }, isRootstockProof, isKakarotProof, isBobaProof, isSomniaProof, isSkaleProof },
    { rejectWithValue },
  ) => {
    const result = await makeApiRequest<undefined>({
      method: "POST",
      url: `${ENDPOINTS_SURVEY.businessSurvey}/${surveyId}${ENDPOINTS_SURVEY.payment}${ENDPOINTS_SURVEY.confirm}`,
      data,
      isShowError: false,
      isRootstockProof,
      isKakarotProof,
      isBobaProof,
      isSomniaProof,
      isSkaleProof,
    });

    if (isErrorResult(result)) {
      return rejectWithValue(result);
    }

    return result;
  },
);

export const publishSurvey = createAsyncThunk<StatusResponse, SurveyInfoPayload, { rejectValue: ErrorResult }>(
  "survey/publish-survey",
  async ({ id }, { rejectWithValue }) => {
    const result = await makeApiRequest<StatusResponse>({
      method: "PUT",
      url: `${ENDPOINTS_SURVEY.businessSurvey}/${id}${ENDPOINTS_SURVEY.status}`,
    });

    if (isErrorResult(result)) {
      return rejectWithValue(result);
    }

    return result;
  },
);

export const sendInvites = createAsyncThunk<StatusResponse, SendInvitesPayload, { rejectValue: ErrorResult }>(
  "survey/send-invites",
  async ({ data, surveyId }, { rejectWithValue }) => {
    const result = await makeApiRequest<StatusResponse>({
      method: "POST",
      url: `${ENDPOINTS_SURVEY.businessSurvey}/${surveyId}${ENDPOINTS_SURVEY.invite}`,
      data,
    });

    if (isErrorResult(result)) {
      return rejectWithValue(result);
    }

    return result;
  },
);

export const addPaymentAnsrForSurvey = createAsyncThunk<
  StatusResponse,
  PaymentAnsrSurveyPayload,
  { rejectValue: ErrorResult }
>("survey/payment-ansr-survey", async ({ data, surveyId }, { rejectWithValue }) => {
  const result = await makeApiRequest<StatusResponse>({
    method: "POST",
    url: `${ENDPOINTS_ADMIN.root}${ENDPOINTS_SURVEY.survey}/${surveyId}${ENDPOINTS_ADMIN.paymentAnsr}`,
    data,
  });

  if (isErrorResult(result)) {
    return rejectWithValue(result);
  }

  return result;
});
