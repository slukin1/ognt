import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { getSurveyUsers } from "./actions";

import { UserSegmentationState, UsersPayload } from "./types";

const initialState: UserSegmentationState = {
  pending: false,
  error: null,
  surveyUser: [],
  usersPayload: {
    pageNumber: 1,
    pageSize: 10,
  },
};

const userSegmentationSlice = createSlice({
  name: "usersSegmentation",
  initialState: {
    ...initialState,
  },
  reducers: {
    resetUserSegmentationState: () => {
      return initialState;
    },
    resetSurveyUsers: state => {
      state.surveyUser = [];
    },
    setUsersPayload: (state, action: PayloadAction<Partial<UsersPayload>>) => {
      state.usersPayload = { ...state.usersPayload, ...action.payload };
    },
  },
  extraReducers: builder => {
    builder
      // Get Survey Users
      .addCase(getSurveyUsers.pending, state => {
        state.pending = true;
      })
      .addCase(getSurveyUsers.fulfilled, (state, action) => {
        const { items, total } = action.payload;
        if (state.usersPayload.pageNumber === 1) {
          state.surveyUser = items;
        } else {
          state.surveyUser = [...state.surveyUser, ...items];
        }
        state.totalUsers = total;
        state.error = null;
        state.pending = false;
      })
      .addCase(getSurveyUsers.rejected, (state, action) => {
        if (action.payload) {
          state.error = action.payload;
          state.pending = false;
        }
      });
  },
});

export const { resetUserSegmentationState, setUsersPayload, resetSurveyUsers } = userSegmentationSlice.actions;

export default userSegmentationSlice;
