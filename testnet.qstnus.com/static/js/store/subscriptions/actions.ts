import { createAsyncThunk } from "@reduxjs/toolkit";

import { isErrorResult, makeApiRequest, ENDPOINTS_BUSINESS } from "services";

import { ErrorResult } from "services/types";
import {
  SubscriptionsResponse,
  SubscriptionIntent,
  GetSubscriptionIntentPayload,
  UsersSubscriptionsResponse,
  CancelSubscriptionPayload,
  CancelSubscriptionResponse,
  SubscribeToNewsletterPayload,
} from "./types";
import { StatusResponse } from "store/auth/types";

export const getPlans = createAsyncThunk<SubscriptionsResponse, undefined, { rejectValue: ErrorResult }>(
  "business/plans",
  async (data, { rejectWithValue }) => {
    const result = await makeApiRequest<SubscriptionsResponse>({
      method: "GET",
      url: ENDPOINTS_BUSINESS.plans,
      data,
    });

    if (isErrorResult(result)) {
      return rejectWithValue(result);
    }

    return result;
  },
);

export const getPaymentIntent = createAsyncThunk<
  SubscriptionIntent,
  GetSubscriptionIntentPayload,
  { rejectValue: ErrorResult }
>("business/paymentIntent", async (data, { rejectWithValue }) => {
  const result = await makeApiRequest<SubscriptionIntent>({
    method: "POST",
    url: ENDPOINTS_BUSINESS.subscriptionIntent,
    data,
  });

  if (isErrorResult(result)) {
    return rejectWithValue(result);
  }

  return result;
});

export const getUserSubscriptions = createAsyncThunk<
  UsersSubscriptionsResponse,
  undefined,
  { rejectValue: ErrorResult }
>("business/getUserSubscriptions", async (data, { rejectWithValue }) => {
  const result = await makeApiRequest<UsersSubscriptionsResponse>({
    method: "GET",
    url: ENDPOINTS_BUSINESS.usersSubscriptions,
    data,
    params: {
      pageOrderBy: "createdAt",
      pageOrder: "desc",
      pageNumber: 1,
      pageSize: 10,
    },
  });

  if (isErrorResult(result)) {
    return rejectWithValue(result);
  }

  return result;
});

export const cancelSubscription = createAsyncThunk<
  CancelSubscriptionResponse,
  CancelSubscriptionPayload,
  { rejectValue: ErrorResult }
>("business/cancelSubscription", async ({ subscriptionId, ...otherData }, { rejectWithValue }) => {
  const result = await makeApiRequest<CancelSubscriptionResponse>({
    method: "PUT",
    url: `${ENDPOINTS_BUSINESS.usersSubscriptions}/${subscriptionId}/cancel`,
    data: otherData,
  });

  if (isErrorResult(result)) {
    return rejectWithValue(result);
  }

  return result;
});

export const resubscribeSubscription = createAsyncThunk<
  CancelSubscriptionResponse,
  CancelSubscriptionPayload,
  { rejectValue: ErrorResult }
>("business/resubscribe-subscription", async ({ subscriptionId, ...otherData }, { rejectWithValue }) => {
  const result = await makeApiRequest<CancelSubscriptionResponse>({
    method: "PUT",
    url: `${ENDPOINTS_BUSINESS.usersSubscriptions}/${subscriptionId}/enable`,
    data: otherData,
  });

  if (isErrorResult(result)) {
    return rejectWithValue(result);
  }

  return result;
});

export const subscribeToNewsletter = createAsyncThunk<
  StatusResponse,
  SubscribeToNewsletterPayload,
  { rejectValue: ErrorResult }
>("account/subscribeToNewsletter", async (data, { rejectWithValue }) => {
  const result = await makeApiRequest<StatusResponse>({
    method: "POST",
    url: ENDPOINTS_BUSINESS.subscription,
    data,
  });

  if (isErrorResult(result)) {
    return rejectWithValue(result);
  }

  return result;
});
