import { createSlice } from "@reduxjs/toolkit";

import { createNFT, getNftData, deleteSurveyNft, confirmSurveyNft } from "./actions";

import { CreateNFTState } from "./types";

const initialState: CreateNFTState = {
  pending: false,
  error: null,
};

const createNftSlice = createSlice({
  name: "createNft",
  initialState: {
    ...initialState,
  },
  reducers: {
    resetCreateNftState: () => {
      return initialState;
    },
  },
  extraReducers: builder => {
    builder
      // create NFT
      .addCase(createNFT.pending, state => {
        state.pending = true;
      })
      .addCase(createNFT.fulfilled, (state, action) => {
        state.nftData = action.payload;
        state.error = null;
        state.pending = false;
      })
      .addCase(createNFT.rejected, (state, action) => {
        if (action.payload) {
          state.error = action.payload;
          state.pending = false;
        }
      })
      // get createdNftData NFT
      .addCase(getNftData.pending, state => {
        state.pending = true;
      })
      .addCase(getNftData.fulfilled, (state, action) => {
        const {
          copies,
          surveyHash,
          collectionMetaDataUrl,
          amount,
          managerAddress,
          collectionName,
          symbol,
          token,
          signature,
          timeToExpire,
          imageUrl,
          commonFee,
          gasFee,
          mintFee,
          mediaUrl,
        } = action.payload;
        state.createdNftData = action.payload;
        state.nftData = {
          copies,
          surveyHash,
          collectionMetaDataUrl,
          amount,
          managerAddress,
          collectionName,
          symbol,
          token,
          signature,
          timeToExpire,
          imageUrl,
          commonFee,
          gasFee,
          mintFee,
          mediaUrl,
        };
        state.error = null;
        state.pending = false;
      })
      .addCase(getNftData.rejected, (state, action) => {
        if (action.payload) {
          state.error = action.payload;
          state.pending = false;
        }
      })
      // delete Survey NFT
      .addCase(deleteSurveyNft.pending, state => {
        state.pending = true;
      })
      .addCase(deleteSurveyNft.fulfilled, state => {
        state.createdNftData = undefined;
        state.nftData = undefined;
        state.error = null;
        state.pending = false;
      })
      .addCase(deleteSurveyNft.rejected, (state, action) => {
        if (action.payload) {
          state.error = action.payload;
          state.pending = false;
        }
      })
      // confirm Survey NFT
      .addCase(confirmSurveyNft.pending, state => {
        state.pending = true;
      })
      .addCase(confirmSurveyNft.fulfilled, state => {
        state.error = null;
        state.pending = false;
      })
      .addCase(confirmSurveyNft.rejected, (state, action) => {
        if (action.payload) {
          state.error = action.payload;
          state.pending = false;
        }
      });
  },
});

export const { resetCreateNftState } = createNftSlice.actions;

export default createNftSlice;
