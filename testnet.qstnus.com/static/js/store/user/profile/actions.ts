import { createAsyncThunk } from "@reduxjs/toolkit";

import { isErrorResult, makeApiRequest, ENDPOINTS_HOME, ENDPOINTS_SURVEY } from "services";
import { ErrorResult } from "services/types";

import { CountriesListResponse } from "./types";

export const getCountriesList = createAsyncThunk<CountriesListResponse, undefined, { rejectValue: ErrorResult }>(
  "home/get-countries-list",
  async (data, { rejectWithValue }) => {
    const result = await makeApiRequest<CountriesListResponse>({
      method: "GET",
      url: ENDPOINTS_HOME.countries,
    });

    if (isErrorResult(result)) {
      return rejectWithValue(result);
    }

    return result;
  },
);

export const getStripeBalance = createAsyncThunk<number, undefined, { rejectValue: ErrorResult }>(
  "user/get-stripe-balance",
  async (data, { rejectWithValue }) => {
    const result = await makeApiRequest<number>({
      method: "GET",
      url: `${ENDPOINTS_SURVEY.payment}${ENDPOINTS_SURVEY.stripe}${ENDPOINTS_SURVEY.account}${ENDPOINTS_SURVEY.balance}`,
      data,
    });

    if (isErrorResult(result)) {
      return rejectWithValue(result);
    }

    return result;
  },
);
