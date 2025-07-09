import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { NftDataActiveTab, NftItemsPayload, NftState } from "./types";

import { getNftItems } from "./actions";

const initialState: NftState = {
  pending: false,
  error: null,
  nftItems: [],
  activeTab: NftDataActiveTab.rewards,
  nftPayload: {
    pageOrderBy: "createdAt",
    pageOrder: "desc",
    pageSize: 10,
    pageNumber: 1,
  },
};

const nftDataSlice = createSlice({
  name: "nftData",
  initialState: {
    ...initialState,
  },
  reducers: {
    resetNftDataState: () => {
      return initialState;
    },
    resetNftItems: state => {
      state.nftItems = [];
    },

    setNftDataPayload: (state, action: PayloadAction<Partial<NftItemsPayload>>) => {
      state.nftPayload = { ...state.nftPayload, ...action.payload };
    },
    setActiveTab: (state, action: PayloadAction<NftDataActiveTab>) => {
      state.activeTab = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      // Get Nft Data
      .addCase(getNftItems.pending, state => {
        state.pending = true;
      })
      .addCase(getNftItems.fulfilled, (state, action) => {
        const { items, total } = action.payload;
        state.totalNftItems = total;
        if (state.nftPayload.pageNumber === 1) {
          state.nftItems = items;
        } else {
          state.nftItems = [...state.nftItems, ...items];
        }
        state.error = null;
        state.pending = false;
      })
      .addCase(getNftItems.rejected, (state, action) => {
        if (action.payload) {
          state.error = action.payload;
          state.pending = false;
        }
      });
  },
});

export const { resetNftDataState, resetNftItems, setNftDataPayload, setActiveTab } = nftDataSlice.actions;

export default nftDataSlice;
