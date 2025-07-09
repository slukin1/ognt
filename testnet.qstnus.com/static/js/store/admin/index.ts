import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import {
  getAdminSurveys,
  getAdminUsers,
  adminBanUsers,
  adminUnbanUsers,
  adminDeleteUsers,
  getAdminUser,
  adminUpdateLeaderboardRewards,
} from "./actions";
import { getSurveyTags } from "store/create-survey/survey-tags/actions";

import { AdminSurveyPayload, UserSurveyState, AdminUsersPayload } from "./types";
import { SurveyTags } from "store/create-survey/survey-tags/types";
import { ProfileData } from "store/profile/types";

const initialState: UserSurveyState = {
  pending: false,
  error: null,
  selectedTags: [],
  tags: [],
  adminSurveys: [],
  adminSurveyPayload: {
    pageOrder: "desc",
    pageSize: 10,
    pageNumber: 1,
    pageOrderBy: "createdAt",
    statuses: [],
  },
  adminUsers: [],
  adminUsersPayload: {
    pageOrder: "desc",
    pageSize: 10,
    pageNumber: 1,
    pageOrderBy: "createdAt",
  },
  singleUser: null,
  updateLeaderboardRewardsPending: false,
};

const adminSurveySlice = createSlice({
  name: "adminSurvey",
  initialState: {
    ...initialState,
  },
  reducers: {
    resetAdminSurveyState: () => {
      return initialState;
    },
    resetAdminSurveys: state => {
      state.adminSurveys = [];
    },
    resetAdminUsers: state => {
      state.adminUsers = [];
    },
    resetSingleUser: state => {
      state.singleUser = null;
    },
    // setUserSurveyActiveTab: (state, action: PayloadAction<string>) => {
    //   state.activeTab = action.payload;

    //   state.surveyPayload = {
    //     ...state.surveyPayload,
    //     status: userActiveSurveyStatuses[action.payload as UserActiveSurveysActiveTab],
    //     pageNumber: 1,
    //   };
    // },
    setAdminSurveySelectedTags: (state, action: PayloadAction<SurveyTags[]>) => {
      state.selectedTags = action.payload;

      state.adminSurveyPayload = {
        ...state.adminSurveyPayload,
        tagsIds: action.payload.map(({ id }) => id),
        pageNumber: 1,
        pageSize: 10,
      };
    },
    setAdminSurveyPayload: (state, action: PayloadAction<Partial<AdminSurveyPayload>>) => {
      state.adminSurveyPayload = { ...state.adminSurveyPayload, ...action.payload };
    },
    setAdminUsersPayload: (state, action: PayloadAction<Partial<AdminUsersPayload>>) => {
      state.adminUsersPayload = { ...state.adminUsersPayload, ...action.payload };
    },
    setSingleUser: (state, action: PayloadAction<ProfileData>) => {
      state.singleUser = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      // Get Admin Surveys
      .addCase(getAdminSurveys.pending, state => {
        state.pending = true;
      })
      .addCase(getAdminSurveys.fulfilled, (state, action) => {
        const { items, total } = action.payload;
        state.totalSurveys = total;
        if (state.adminSurveyPayload.pageNumber === 1) {
          state.adminSurveys = items;
        } else {
          state.adminSurveys = [...state.adminSurveys, ...items];
        }
        state.error = null;
        state.pending = false;
      })
      .addCase(getAdminSurveys.rejected, (state, action) => {
        if (action.payload) {
          state.error = action.payload;
          state.pending = false;
        }
      })
      // get Admin Survey Tags
      .addCase(getSurveyTags.pending, state => {
        state.pending = true;
      })
      .addCase(getSurveyTags.fulfilled, (state, action) => {
        const { items } = action.payload;
        state.tags = items;
        state.error = null;
        state.pending = false;
      })
      .addCase(getSurveyTags.rejected, (state, action) => {
        if (action.payload) {
          state.error = action.payload;
          state.pending = false;
        }
      })
      // Get Admin Users
      .addCase(getAdminUsers.pending, state => {
        state.pending = true;
      })
      .addCase(getAdminUsers.fulfilled, (state, action) => {
        const { items, total } = action.payload;
        state.totalUsers = total;
        if (state.adminSurveyPayload.pageNumber === 1) {
          state.adminUsers = items;
        } else {
          state.adminUsers = [...state.adminUsers, ...items];
        }
        state.error = null;
        state.pending = false;
      })
      .addCase(getAdminUsers.rejected, (state, action) => {
        if (action.payload) {
          state.error = action.payload;
          state.pending = false;
        }
      })

      // Get Admin User
      .addCase(getAdminUser.pending, state => {
        state.pending = true;
      })
      .addCase(getAdminUser.fulfilled, (state, action) => {
        state.singleUser = action.payload;
        state.error = null;
        state.pending = false;
      })
      .addCase(getAdminUser.rejected, (state, action) => {
        if (action.payload) {
          state.error = action.payload;
          state.pending = false;
        }
      })
      // Ban User
      .addCase(adminBanUsers.pending, state => {
        state.pending = true;
      })
      .addCase(adminBanUsers.fulfilled, state => {
        state.pending = false;
      })
      .addCase(adminBanUsers.rejected, (state, action) => {
        if (action.payload) {
          state.error = action.payload;
          state.pending = false;
        }
      })
      // Unban User
      .addCase(adminUnbanUsers.pending, state => {
        state.pending = true;
      })
      .addCase(adminUnbanUsers.fulfilled, state => {
        state.pending = false;
      })
      .addCase(adminUnbanUsers.rejected, (state, action) => {
        if (action.payload) {
          state.error = action.payload;
          state.pending = false;
        }
      })
      // Delete User
      .addCase(adminDeleteUsers.pending, state => {
        state.pending = true;
      })
      .addCase(adminDeleteUsers.fulfilled, state => {
        state.pending = false;
      })
      .addCase(adminDeleteUsers.rejected, (state, action) => {
        if (action.payload) {
          state.error = action.payload;
          state.pending = false;
        }
      })
      // Update Leaderboard Rewards
      .addCase(adminUpdateLeaderboardRewards.pending, state => {
        state.updateLeaderboardRewardsPending = true;
      })
      .addCase(adminUpdateLeaderboardRewards.fulfilled, state => {
        state.updateLeaderboardRewardsPending = false;
      })
      .addCase(adminUpdateLeaderboardRewards.rejected, (state, action) => {
        if (action.payload) {
          state.error = action.payload;
          state.updateLeaderboardRewardsPending = false;
        }
      });
  },
});

export const {
  resetAdminSurveyState,
  setAdminSurveyPayload,
  setAdminUsersPayload,
  resetAdminSurveys,
  setAdminSurveySelectedTags,
  resetAdminUsers,
  setSingleUser,
  resetSingleUser,
} = adminSurveySlice.actions;

export default adminSurveySlice;
