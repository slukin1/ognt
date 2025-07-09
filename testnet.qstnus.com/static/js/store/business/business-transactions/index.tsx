import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { getBusinessTransactions } from "./actions";

import { BusinessTransactionsPayload, BusinessTransactionsState } from "./types";

const initialState: BusinessTransactionsState = {
  pending: false,
  error: null,
  transactions: [],
  transactionPayload: {
    pageNumber: 1,
    pageOrder: "desc",
    pageSize: 10,
    pageOrderBy: "createdAt",
  },
};

const businessTransactionsSlice = createSlice({
  name: "businessTransactions",
  initialState: {
    ...initialState,
  },
  reducers: {
    resetBusinessTransactionsState: () => {
      return initialState;
    },
    setBusinessTransactionsPayload: (
      state,
      action: PayloadAction<Partial<BusinessTransactionsPayload | undefined>>,
    ) => {
      state.transactionPayload = { ...state.transactionPayload, ...action.payload };
    },
  },
  extraReducers: builder => {
    builder
      // Get Business Transactions
      .addCase(getBusinessTransactions.pending, state => {
        state.pending = true;
      })
      .addCase(getBusinessTransactions.fulfilled, (state, action) => {
        const { items, total } = action.payload;
        if (state.transactionPayload.pageNumber === 1) {
          state.transactions = items;
        } else {
          state.transactions = [...state.transactions, ...items];
        }
        state.totalTransaction = total;
        state.error = null;
        state.pending = false;
      })
      .addCase(getBusinessTransactions.rejected, (state, action) => {
        if (action.payload) {
          state.error = action.payload;
          state.pending = false;
        }
      });
  },
});

export const { resetBusinessTransactionsState, setBusinessTransactionsPayload } = businessTransactionsSlice.actions;

export default businessTransactionsSlice;
