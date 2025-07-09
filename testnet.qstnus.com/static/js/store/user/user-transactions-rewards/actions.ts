import { createAsyncThunk } from "@reduxjs/toolkit";

import { isErrorResult, makeApiRequest, ENDPOINTS_TRANSACTIONS } from "services";

import { ErrorResult } from "services/types";
import { UserTransactionResponse, UserTransactionPayload, UserRewardsResponse } from "./types";

export const getUserTransactions = createAsyncThunk<
  UserTransactionResponse,
  UserTransactionPayload,
  { rejectValue: ErrorResult }
>("user/get-transactions", async (data, { rejectWithValue }) => {
  const result = await makeApiRequest<UserTransactionResponse>({
    method: "GET",
    url: ENDPOINTS_TRANSACTIONS.transaction,
    params: data,
  });

  if (isErrorResult(result)) {
    return rejectWithValue(result);
  }

  return result;
});

export const getUserRewards = createAsyncThunk<
  UserRewardsResponse,
  UserTransactionPayload,
  { rejectValue: ErrorResult }
>("user/get-rewards", async (data, { rejectWithValue }) => {
  const result = await makeApiRequest<UserRewardsResponse>({
    method: "GET",
    url: ENDPOINTS_TRANSACTIONS.reward,
    params: data,
  });

  if (isErrorResult(result)) {
    return rejectWithValue(result);
  }

  return result;
});

export const requestDistributeFuel = createAsyncThunk<
  undefined,
  { chainId: string; address: string },
  { rejectValue: ErrorResult }
>("user/request-distribute-fuel", async (data, { rejectWithValue }) => {
  const result = await makeApiRequest<undefined>({
    method: "POST",
    url: ENDPOINTS_TRANSACTIONS.distributeFuel,
    data,
  });

  if (isErrorResult(result)) {
    return rejectWithValue(result);
  }

  return result;
});
