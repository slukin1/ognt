import { createAsyncThunk } from "@reduxjs/toolkit";

import { isErrorResult, makeApiRequest, ENDPOINTS_SURVEY } from "services";

import { ErrorResult } from "services/types";
import { LeaderBoardPayload, LeaderBoardResponse } from "./types";

export const getLeaderBoardData = createAsyncThunk<
  LeaderBoardResponse,
  LeaderBoardPayload,
  { rejectValue: ErrorResult }
>("survey/get-leader-board-data", async (params, { rejectWithValue }) => {
  if (params.chainId && params.chainId === "all") {
    delete params.chainId;
  }

  const result = await makeApiRequest<LeaderBoardResponse>({
    method: "GET",
    url: `${ENDPOINTS_SURVEY.survey}${ENDPOINTS_SURVEY.leaderboard}`,
    params,
  });

  if (isErrorResult(result)) {
    return rejectWithValue(result);
  }

  return result;
});
