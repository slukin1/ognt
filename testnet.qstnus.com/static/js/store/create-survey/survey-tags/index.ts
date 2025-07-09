import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { SurveyTagsState, SurveyTags } from "./types";
import { setSurveyBusinessTags, getSurveyTags } from "./actions";
import { getSurveyInfo } from "../survey/actions";

const initialState: SurveyTagsState = {
  pending: false,
  error: null,
  selectedTags: [],
  tags: [],
};

const surveyTagSlice = createSlice({
  name: "surveyTags",
  initialState: {
    ...initialState,
  },
  reducers: {
    resetSurveyTagsState: () => {
      return initialState;
    },
    setSelectedTags: (state, action: PayloadAction<SurveyTags>) => {
      if (state.selectedTags.some(({ id }) => id === action.payload.id)) {
        state.selectedTags = state.selectedTags.filter(tag => tag.id !== action.payload.id);
      } else {
        if (state.selectedTags.length === 3) {
          const newTags = state.selectedTags.slice(1);
          state.selectedTags = [...newTags, action.payload];
        } else {
          state.selectedTags = [...state.selectedTags, action.payload];
        }
      }
    },
    setSelectedAllTags: (state, action: PayloadAction<SurveyTags[]>) => {
      state.selectedTags = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      // get Survey Info
      .addCase(getSurveyInfo.pending, state => {
        state.pending = true;
      })
      .addCase(getSurveyInfo.fulfilled, (state, action) => {
        const { tags } = action.payload;
        state.selectedTags = tags.map(({ id, title }) => ({ id, title }));
        state.error = null;
        state.pending = false;
      })
      .addCase(getSurveyInfo.rejected, (state, action) => {
        if (action.payload) {
          state.error = action.payload;
          state.pending = false;
        }
      })
      // get Survey Tags
      .addCase(getSurveyTags.pending, state => {
        state.pending = true;
      })
      .addCase(getSurveyTags.fulfilled, (state, action) => {
        const { items } = action.payload;
        state.tags = items;
        state.error = null;
        state.pending = false;
      })
      .addCase(getSurveyTags.rejected, (state, action) => {
        if (action.payload) {
          state.error = action.payload;
          state.pending = false;
        }
      })
      // set Selected Tags to survey
      .addCase(setSurveyBusinessTags.pending, state => {
        state.pending = true;
      })
      .addCase(setSurveyBusinessTags.fulfilled, state => {
        state.error = null;
        state.pending = false;
      })
      .addCase(setSurveyBusinessTags.rejected, (state, action) => {
        if (action.payload) {
          state.error = action.payload;
          state.pending = false;
        }
      });
  },
});

export const { resetSurveyTagsState, setSelectedTags } = surveyTagSlice.actions;

export default surveyTagSlice;
