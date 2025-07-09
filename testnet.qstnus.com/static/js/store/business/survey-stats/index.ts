import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { getSurveyStatUsers, getUserSurveyAnswers, getSurveyStatAllUsers } from "./actions";
import { getSurveyInfo } from "store/create-survey/survey/actions";

import { SurveyStatsState, UsersPayload } from "./types";
// import { SurveyDetailResponseItem } from "store/create-survey/survey/types";

const initialState: SurveyStatsState = {
  pending: false,
  error: null,
  title: "",
  pages: [],
  surveyUserAnswers: [],
  protectedDataAddress: null,
  useDataProtector: null,
  chartsData: null,
  usersData: {
    users: [],
    title: "",
    usersPayload: {
      pageNumber: 1,
      pageOrder: "desc",
      pageOrderBy: "updatedAt",
      pageSize: 10,
    },
  },
};

const surveyStatsSlice = createSlice({
  name: "surveyStats",
  initialState: {
    ...initialState,
  },
  reducers: {
    resetSurveyStatsSliceState: () => {
      return initialState;
    },
    resetSurveyStatsUserState: state => {
      return { ...state, usersData: initialState.usersData };
    },
    setStatUsersPayload: (state, action: PayloadAction<Partial<UsersPayload>>) => {
      state.usersData.usersPayload = { ...state.usersData.usersPayload, ...action.payload };
    },
    // setChartsDataSurvey: (state, action: PayloadAction<SurveyDetailResponseItem>) => {
    //   state.chartsData = { survey: action.payload };
    // },
  },
  extraReducers: builder => {
    builder
      // Get Survey Answers
      .addCase(getUserSurveyAnswers.pending, state => {
        state.pending = true;
      })
      .addCase(getUserSurveyAnswers.fulfilled, (state, action) => {
        const { answers, protectedData, useDataProtector } = action.payload;
        state.surveyUserAnswers = answers;
        state.protectedDataAddress = protectedData ?? null;
        state.useDataProtector = useDataProtector ?? false;
        state.error = null;
        state.pending = false;
      })
      .addCase(getUserSurveyAnswers.rejected, (state, action) => {
        if (action.payload) {
          state.error = action.payload;
          state.pending = false;
        }
      })
      // Get Survey Pages
      .addCase(getSurveyInfo.pending, state => {
        state.pending = true;
      })
      .addCase(getSurveyInfo.fulfilled, (state, action) => {
        const { pages, title } = action.payload;
        state.title = title;
        state.pages = pages;
        state.error = null;
        state.pending = false;
      })
      .addCase(getSurveyInfo.rejected, (state, action) => {
        if (action.payload) {
          state.error = action.payload;
          state.pending = false;
        }
      })
      // Get Survey Users
      .addCase(getSurveyStatUsers.pending, state => {
        state.pending = true;
      })
      .addCase(getSurveyStatUsers.fulfilled, (state, action) => {
        const { items, total, title } = action.payload;
        if (state.usersData.usersPayload.pageNumber === 1) {
          state.usersData.users = items;
        } else {
          state.usersData.users = [...state.usersData.users, ...items];
        }
        state.usersData.title = title;
        state.usersData.totalUsers = total;
        state.error = null;
        state.pending = false;
      })
      .addCase(getSurveyStatUsers.rejected, (state, action) => {
        if (action.payload) {
          state.error = action.payload;
          state.pending = false;
        }
      })
      // Get All Survey Users
      .addCase(getSurveyStatAllUsers.pending, state => {
        state.pending = true;
      })
      .addCase(getSurveyStatAllUsers.fulfilled, (state, action) => {
        const { items } = action.payload;
        state.chartsData = { answers: items };
        state.error = null;
        state.pending = false;
      })
      .addCase(getSurveyStatAllUsers.rejected, (state, action) => {
        if (action.payload) {
          state.error = action.payload;
          state.pending = false;
        }
      });
  },
});

export const { resetSurveyStatsSliceState, setStatUsersPayload, resetSurveyStatsUserState } = surveyStatsSlice.actions;

export default surveyStatsSlice;
