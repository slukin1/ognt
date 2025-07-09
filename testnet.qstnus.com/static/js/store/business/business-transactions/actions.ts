import { createAsyncThunk } from "@reduxjs/toolkit";

import { isErrorResult, makeApiRequest, ENDPOINTS_TRANSACTIONS } from "services";

import { ErrorResult } from "services/types";
import { BusinessTransactionResponse, BusinessTransactionsPayload } from "./types";

export const getBusinessTransactions = createAsyncThunk<
  BusinessTransactionResponse,
  BusinessTransactionsPayload,
  { rejectValue: ErrorResult }
>("business/get-transactions", async (data, { rejectWithValue }) => {
  const result = await makeApiRequest<BusinessTransactionResponse>({
    method: "GET",
    url: ENDPOINTS_TRANSACTIONS.transaction,
    params: data,
  });

  if (isErrorResult(result)) {
    return rejectWithValue(result);
  }

  return result;
});
