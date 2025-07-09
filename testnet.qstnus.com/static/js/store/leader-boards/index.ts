import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { LeaderBoardActiveTab, LeaderBoardState, Period, leaderBoardPeriod } from "./types";

import { getLeaderBoardData } from "./actions";

const initialState: LeaderBoardState = {
  pending: false,
  leaderBoardData: [],
  error: null,
  activeTab: LeaderBoardActiveTab.week,
  leaderBoardPayload: {
    period: Period.week,
    chainId: "all",
  },
};

const profileSlice = createSlice({
  name: "leaderBoard",
  initialState: {
    ...initialState,
  },
  reducers: {
    resetLeaderBoardState: () => {
      return initialState;
    },
    setLeaderBoardActiveTab: (state, action: PayloadAction<string>) => {
      state.activeTab = action.payload;

      state.leaderBoardPayload = {
        ...state.leaderBoardPayload,
        period: leaderBoardPeriod[action.payload as LeaderBoardActiveTab],
      };
    },
    setLeaderBoardPayloadChainId: (state, action: PayloadAction<string>) => {
      state.leaderBoardPayload = {
        ...state.leaderBoardPayload,
        chainId: action.payload,
      };
    },
  },
  extraReducers: builder => {
    builder
      // get leader board data
      .addCase(getLeaderBoardData.pending, state => {
        state.pending = true;
      })
      .addCase(getLeaderBoardData.fulfilled, (state, action) => {
        const { items, me } = action.payload;
        state.leaderBoardData = items;
        state.userLeaderBoardItem = me;
        state.error = null;
        state.pending = false;
      })
      .addCase(getLeaderBoardData.rejected, (state, action) => {
        if (action.payload) {
          state.error = action.payload;
          state.pending = false;
        }
      });
  },
});

export const { resetLeaderBoardState, setLeaderBoardActiveTab, setLeaderBoardPayloadChainId } = profileSlice.actions;

export default profileSlice;
