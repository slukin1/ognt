import { createAsyncThunk } from "@reduxjs/toolkit";

import { isErrorResult, makeApiRequest, ENDPOINTS_AUTH } from "services";
import { ErrorResult } from "services/types";

import {
  LoginUserPayload,
  LoginUserResponse,
  RegistrationBusinessPayload,
  RegistrationResponse,
  RegistrationUserPayload,
  SetWalletPayload,
  StatusResponse,
} from "./types";

export const loginUser = createAsyncThunk<LoginUserResponse, LoginUserPayload, { rejectValue: ErrorResult }>(
  "auth/login",
  async ({ isAnon = false, ...data }, { rejectWithValue }) => {
    const result = await makeApiRequest<LoginUserResponse>({
      method: "POST",
      url: ENDPOINTS_AUTH.login,
      data,
      isAnonHeaderArray: isAnon,
    });

    if (isErrorResult(result)) {
      return rejectWithValue(result);
    }

    return result;
  },
);

export const setBiconomyWallet = createAsyncThunk<StatusResponse, SetWalletPayload, { rejectValue: ErrorResult }>(
  "auth/set-biconomy-wallet",
  async (data, { rejectWithValue }) => {
    const result = await makeApiRequest<StatusResponse>({
      method: "POST",
      url: ENDPOINTS_AUTH.wallet,
      data,
    });

    if (isErrorResult(result)) {
      return rejectWithValue(result);
    }

    return result;
  },
);

export const registerUser = createAsyncThunk<
  RegistrationResponse,
  RegistrationUserPayload | RegistrationBusinessPayload,
  { rejectValue: ErrorResult }
>("auth/register", async ({ isAnon = false, ...data }, { rejectWithValue }) => {
  const result = await makeApiRequest<RegistrationResponse>({
    method: "POST",
    url: ENDPOINTS_AUTH.register,
    data,
    isAnonHeaderArray: isAnon,
  });

  if (isErrorResult(result)) {
    return rejectWithValue(result);
  }

  return result;
});

export const logoutUser = createAsyncThunk<StatusResponse, undefined, { rejectValue: ErrorResult }>(
  "auth/logout-user",
  async (data, { rejectWithValue }) => {
    const result = await makeApiRequest<StatusResponse>({
      method: "POST",
      url: ENDPOINTS_AUTH.logout,
      data,
    });

    if (isErrorResult(result)) {
      return rejectWithValue(result);
    }

    return result;
  },
);
