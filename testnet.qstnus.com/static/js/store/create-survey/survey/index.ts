import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import _ from "lodash";

import {
  createSurvey,
  getSurveyInfo,
  updateSurvey,
  getSurveyPaymentTrxData,
  getSurveyPaymentFiatData,
  confirmSurveyPaymentTrx,
  publishSurvey,
  sendInvites,
  createSurveyWithAI,
  addPaymentAnsrForSurvey,
  deleteSurveyInfo,
} from "./actions";

import {
  CreateSurveyState,
  PaymentCryptoType,
  PaymentMethod,
  PaymentNetwork,
  SurveyData,
  SurveyGenerateTypeEnum,
  SurveyObjectiveEnum,
  SurveyTypeEnum,
  SetSurveyAnswersPayload,
} from "./types";

import { handleSurveyAnswers } from "./utils";

const initialState: CreateSurveyState = {
  pending: false,
  error: null,
  participants: 1,
  paymentCryptoType: PaymentCryptoType.native,
  answers: {},
  reward: 0.01,
  totalRewardAmount: 0.01,
  cryptoPaymentData: null,
  fiatPaymentData: null,
};

const createSurveySlice = createSlice({
  name: "createSurvey",
  initialState: {
    ...initialState,
  },
  reducers: {
    resetCreateSurveyState: () => {
      return initialState;
    },
    setSurveyData: (state, action: PayloadAction<SurveyData | undefined>) => {
      state.surveyData = action.payload;
    },
    setSurveyAnswers: (state, action: PayloadAction<SetSurveyAnswersPayload>) => {
      state.answers = { ...state.answers, [action.payload.key]: action.payload.value };
    },
    setPaymentMethod: (state, action: PayloadAction<PaymentMethod>) => {
      state.paymentMethod = action.payload;
    },
    setPaymentCryptoType: (state, action: PayloadAction<PaymentCryptoType>) => {
      state.paymentCryptoType = action.payload;
    },
    setPaymentNetwork: (state, action: PayloadAction<PaymentNetwork | undefined>) => {
      state.paymentNetwork = action.payload;
    },
    setParticipants: (state, action: PayloadAction<number>) => {
      state.participants = action.payload;
      state.totalRewardAmount = state.reward * action.payload;
    },
    setSurveyGenerateType: (state, action: PayloadAction<SurveyGenerateTypeEnum | undefined>) => {
      state.surveyGenerateType = action.payload;
    },
    setReward: (state, action: PayloadAction<number>) => {
      state.reward = action.payload;
      state.totalRewardAmount = state.participants * action.payload;
    },
    setSurveyObjective: (state, action: PayloadAction<SurveyObjectiveEnum>) => {
      state.surveyObjective = action.payload;
    },
    setSurveyType: (state, action: PayloadAction<SurveyTypeEnum>) => {
      state.surveyType = action.payload;
    },
    resetCryptoPaymentData: state => {
      state.cryptoPaymentData = null;
    },
    resetFiatPaymentData: state => {
      state.fiatPaymentData = null;
    },
  },
  extraReducers: builder => {
    builder
      // Create Survey
      .addCase(createSurvey.pending, state => {
        state.pending = true;
      })
      .addCase(createSurvey.fulfilled, state => {
        state.error = null;
        state.pending = false;
      })
      .addCase(createSurvey.rejected, (state, action) => {
        if (action.payload) {
          state.error = action.payload;
          state.pending = false;
        }
      })
      // Create Survey with AI
      .addCase(createSurveyWithAI.pending, state => {
        state.pending = true;
      })
      .addCase(createSurveyWithAI.fulfilled, state => {
        state.error = null;
        state.pending = false;
      })
      .addCase(createSurveyWithAI.rejected, (state, action) => {
        if (action.payload) {
          state.error = action.payload;
          state.pending = false;
        }
      })
      // Update Survey
      .addCase(updateSurvey.pending, state => {
        state.pending = true;
      })
      .addCase(updateSurvey.fulfilled, state => {
        state.error = null;
        state.pending = false;
      })
      .addCase(updateSurvey.rejected, (state, action) => {
        if (action.payload) {
          state.error = action.payload;
          state.pending = false;
        }
      })
      // get Survey Info
      .addCase(getSurveyInfo.pending, state => {
        state.pending = true;
      })
      .addCase(getSurveyInfo.fulfilled, (state, action) => {
        const { isPrivate, isQualitative } = action.payload;
        state.surveyDetail = action.payload;
        state.surveyType = isPrivate ? SurveyTypeEnum.private : SurveyTypeEnum.public;
        state.surveyObjective = isQualitative ? SurveyObjectiveEnum.qualitative : SurveyObjectiveEnum.quantitative;
        state.answers = handleSurveyAnswers(action.payload);
        state.error = null;
        state.pending = false;
      })
      .addCase(getSurveyInfo.rejected, (state, action) => {
        if (action.payload) {
          state.error = action.payload;
          state.pending = false;
        }
      })
      // Get payment trx data
      .addCase(getSurveyPaymentFiatData.pending, state => {
        state.pending = true;
      })
      .addCase(getSurveyPaymentFiatData.fulfilled, (state, action) => {
        state.fiatPaymentData = action.payload;
        state.error = null;
        state.pending = false;
      })
      .addCase(getSurveyPaymentFiatData.rejected, (state, action) => {
        if (action.payload) {
          state.fiatPaymentData = null;
          state.error = action.payload;
          state.pending = false;
        }
      })
      // Get payment fiat data
      .addCase(getSurveyPaymentTrxData.pending, state => {
        state.pending = true;
      })
      .addCase(getSurveyPaymentTrxData.fulfilled, (state, action) => {
        state.cryptoPaymentData = action.payload;
        state.error = null;
        state.pending = false;
      })
      .addCase(getSurveyPaymentTrxData.rejected, (state, action) => {
        if (action.payload) {
          state.cryptoPaymentData = null;
          state.error = action.payload;
          state.pending = false;
        }
      })
      // Confirm trx
      .addCase(confirmSurveyPaymentTrx.pending, state => {
        state.pending = true;
      })
      .addCase(confirmSurveyPaymentTrx.fulfilled, state => {
        state.cryptoPaymentData = null;
        state.error = null;
        state.pending = false;
      })
      .addCase(confirmSurveyPaymentTrx.rejected, (state, action) => {
        if (action.payload) {
          state.cryptoPaymentData = null;
          state.error = action.payload;
          state.pending = false;
        }
      })
      // Publish survey
      .addCase(publishSurvey.pending, state => {
        state.pending = true;
      })
      .addCase(publishSurvey.fulfilled, state => {
        state.cryptoPaymentData = null;
        state.error = null;
        state.pending = false;
      })
      .addCase(publishSurvey.rejected, (state, action) => {
        if (action.payload) {
          state.cryptoPaymentData = null;
          state.error = action.payload;
          state.pending = false;
        }
      })
      // Send invites to survey
      .addCase(sendInvites.pending, state => {
        state.pending = true;
      })
      .addCase(sendInvites.fulfilled, state => {
        state.cryptoPaymentData = null;
        state.error = null;
        state.pending = false;
      })
      .addCase(sendInvites.rejected, (state, action) => {
        if (action.payload) {
          state.cryptoPaymentData = null;
          state.error = action.payload;
          state.pending = false;
        }
      })
      // payment ansr survey
      .addCase(addPaymentAnsrForSurvey.pending, state => {
        state.pending = true;
      })
      .addCase(addPaymentAnsrForSurvey.fulfilled, state => {
        state.error = null;
        state.pending = false;
      })
      .addCase(addPaymentAnsrForSurvey.rejected, (state, action) => {
        if (action.payload) {
          state.error = action.payload;
          state.pending = false;
        }
      })
      // delete survey
      .addCase(deleteSurveyInfo.pending, state => {
        state.pending = true;
      })
      .addCase(deleteSurveyInfo.fulfilled, state => {
        state.error = null;
        state.pending = false;
      })
      .addCase(deleteSurveyInfo.rejected, (state, action) => {
        if (action.payload) {
          state.error = action.payload;
          state.pending = false;
        }
      });
  },
});

export const {
  resetCreateSurveyState,
  resetCryptoPaymentData,
  resetFiatPaymentData,
  setSurveyData,
  setPaymentMethod,
  setPaymentNetwork,
  setPaymentCryptoType,
  setParticipants,
  setReward,
  setSurveyObjective,
  setSurveyType,
  setSurveyGenerateType,
  setSurveyAnswers,
} = createSurveySlice.actions;

export default createSurveySlice;
