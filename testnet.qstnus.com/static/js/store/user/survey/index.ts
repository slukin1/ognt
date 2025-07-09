import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { UserActiveSurveysActiveTab, UserSurveyPayload, UserSurveyState, userActiveSurveyStatuses } from "./types";

import { getUserActiveSurveys } from "./actions";

const initialState: UserSurveyState = {
  pending: false,
  error: null,
  surveys: [],
  activeTab: UserActiveSurveysActiveTab.all,

  surveyPayload: {
    pageOrder: "desc",
    pageSize: 10,
    pageNumber: 1,
    pageOrderBy: "createdAt",
    status: userActiveSurveyStatuses[UserActiveSurveysActiveTab.all],
  },
};

const surveySlice = createSlice({
  name: "userSurvey",
  initialState: {
    ...initialState,
  },
  reducers: {
    resetUserSurveyState: () => {
      return initialState;
    },
    resetUserSurveys: state => {
      state.surveys = [];
    },
    setUserSurveyActiveTab: (state, action: PayloadAction<string>) => {
      state.activeTab = action.payload;

      state.surveyPayload = {
        ...state.surveyPayload,
        status: userActiveSurveyStatuses[action.payload as UserActiveSurveysActiveTab],
        pageNumber: 1,
      };
    },
    setUserSurveyPayload: (state, action: PayloadAction<Partial<UserSurveyPayload>>) => {
      state.surveyPayload = { ...state.surveyPayload, ...action.payload };
    },
  },
  extraReducers: builder => {
    builder
      // Get Active Surveys
      .addCase(getUserActiveSurveys.pending, state => {
        state.pending = true;
      })
      .addCase(getUserActiveSurveys.fulfilled, (state, action) => {
        const { items, total } = action.payload;
        state.totalSurveys = total;
        if (state.surveyPayload.pageNumber === 1) {
          state.surveys = items;
        } else {
          state.surveys = [...state.surveys, ...items];
        }
        state.error = null;
        state.pending = false;
      })
      .addCase(getUserActiveSurveys.rejected, (state, action) => {
        if (action.payload) {
          state.error = action.payload;
          state.pending = false;
        }
      });
  },
});

export const { resetUserSurveyState, setUserSurveyActiveTab, setUserSurveyPayload, resetUserSurveys } =
  surveySlice.actions;

export default surveySlice;
