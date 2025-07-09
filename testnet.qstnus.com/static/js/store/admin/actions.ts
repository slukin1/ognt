import { createAsyncThunk } from "@reduxjs/toolkit";

import { isErrorResult, makeApiRequest, ENDPOINTS_ADMIN } from "services";
import { ErrorResult } from "services/types";

import { ProfileData } from "store/profile/types";

import {
  AdminSurveyResponse,
  AdminSurveyPayload,
  AdminUsersResponse,
  AdminUsersPayload,
  AdminUserPayload,
  BanUsersPayload,
} from "./types";
import { LeaderboardRewardSchedule } from "store/utils/types";

export const getAdminSurveys = createAsyncThunk<AdminSurveyResponse, AdminSurveyPayload, { rejectValue: ErrorResult }>(
  "admin/get-all-surveys",
  async (params, { rejectWithValue }) => {
    const result = await makeApiRequest<AdminSurveyResponse>({
      method: "GET",
      url: `${ENDPOINTS_ADMIN.getAdminSurveys}`,
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

export const getAdminUsers = createAsyncThunk<AdminUsersResponse, AdminUsersPayload, { rejectValue: ErrorResult }>(
  "admin/get-all-users",
  async (params, { rejectWithValue }) => {
    const result = await makeApiRequest<AdminUsersResponse>({
      method: "GET",
      url: `${ENDPOINTS_ADMIN.getAdminUsers}`,
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

export const getAdminUser = createAsyncThunk<ProfileData, AdminUserPayload, { rejectValue: ErrorResult }>(
  "admin/get-single-user",
  async ({ id }, { rejectWithValue }) => {
    const result = await makeApiRequest<ProfileData>({
      method: "GET",
      url: `${ENDPOINTS_ADMIN.getAdminUsers}/${id}`,
    });

    if (isErrorResult(result)) {
      return rejectWithValue(result);
    }

    return result;
  },
);

export const adminBanUsers = createAsyncThunk<undefined, BanUsersPayload, { rejectValue: ErrorResult }>(
  "admin/ban-user",
  async (data, { rejectWithValue }) => {
    const result = await makeApiRequest<undefined>({
      method: "POST",
      url: `${ENDPOINTS_ADMIN.banUser}`,
      data,
    });

    if (isErrorResult(result)) {
      return rejectWithValue(result);
    }

    return result;
  },
);

export const adminUnbanUsers = createAsyncThunk<undefined, BanUsersPayload, { rejectValue: ErrorResult }>(
  "admin/unban-user",
  async (data, { rejectWithValue }) => {
    const result = await makeApiRequest<undefined>({
      method: "POST",
      url: `${ENDPOINTS_ADMIN.unbanUser}`,
      data,
    });

    if (isErrorResult(result)) {
      return rejectWithValue(result);
    }

    return result;
  },
);

export const adminDeleteUsers = createAsyncThunk<undefined, BanUsersPayload, { rejectValue: ErrorResult }>(
  "admin/delete-user",
  async (data, { rejectWithValue }) => {
    const result = await makeApiRequest<undefined>({
      method: "DELETE",
      url: `${ENDPOINTS_ADMIN.deleteUser}`,
      data,
    });

    if (isErrorResult(result)) {
      return rejectWithValue(result);
    }

    return result;
  },
);

export const adminUpdateLeaderboardRewards = createAsyncThunk<
  undefined,
  LeaderboardRewardSchedule,
  { rejectValue: ErrorResult }
>("admin/update-leaderboard-rewards", async (data, { rejectWithValue }) => {
  const result = await makeApiRequest<undefined>({
    method: "POST",
    url: `${ENDPOINTS_ADMIN.updateLeaderboardRewards}`,
    data,
  });

  if (isErrorResult(result)) {
    return rejectWithValue(result);
  }

  return result;
});
