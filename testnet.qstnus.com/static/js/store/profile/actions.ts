import { createAsyncThunk } from "@reduxjs/toolkit";

import { isErrorResult, makeApiRequest, ENDPOINTS_USER } from "services";

import { ErrorResult } from "services/types";
import { ProfileData, UpdateProfilePayload } from "./types";

export const getProfile = createAsyncThunk<ProfileData, undefined, { rejectValue: ErrorResult }>(
  "user/profile",
  async (data, { rejectWithValue }) => {
    const result = await makeApiRequest<ProfileData>({
      method: "GET",
      url: ENDPOINTS_USER.profile,
      data,
    });

    if (isErrorResult(result)) {
      return rejectWithValue(result);
    }

    return result;
  },
);

export const updateProfile = createAsyncThunk<
  ProfileData,
  UpdateProfilePayload | FormData,
  { rejectValue: ErrorResult }
>("user/update-profile", async (data, { rejectWithValue }) => {
  const result = await makeApiRequest<ProfileData>({
    method: "PUT",
    url: ENDPOINTS_USER.profile,
    data,
  });

  if (isErrorResult(result)) {
    return rejectWithValue(result);
  }

  return result;
});
