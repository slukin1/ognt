import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { getCountriesList } from "store/user/profile/actions";
import { getAccessGating, setAccessGating } from "./actions";

import { AccessGatingPayload, AccessGatingState } from "./types";
import { SurveyTags } from "../survey-tags/types";

const initialState: AccessGatingState = {
  pending: false,
  error: null,
  countries: [],
  accessGatingPayload: {
    countries: [],
    genders: [],
    kysLevels: [],
  },
  selectedAccessGating: {
    countries: [],
    genders: [],
    kysLevels: [],
  },
};

const accessGatingSlice = createSlice({
  name: "accessGating",
  initialState: {
    ...initialState,
  },
  reducers: {
    resetAccessGatingState: () => {
      return initialState;
    },
    resetAccessGatingPayload: state => {
      state.accessGatingPayload = initialState.accessGatingPayload;
    },
    setAccessGatingPayload: (state, action: PayloadAction<Partial<AccessGatingPayload>>) => {
      state.accessGatingPayload = { ...state.accessGatingPayload, ...action.payload };
    },
    setSelectedCountries: (state, action: PayloadAction<SurveyTags>) => {
      if (state.accessGatingPayload.countries.some(countryId => countryId === action.payload.id)) {
        state.accessGatingPayload.countries = state.accessGatingPayload.countries.filter(
          country => country !== action.payload.id,
        );
      } else {
        state.accessGatingPayload.countries = [...state.accessGatingPayload.countries, action.payload.id.toString()];
      }
    },
    setSelectedGenders: (state, action: PayloadAction<SurveyTags>) => {
      if (state.accessGatingPayload.genders.some(gender => gender === action.payload.id)) {
        state.accessGatingPayload.genders = state.accessGatingPayload.genders.filter(gen => gen !== action.payload.id);
      } else {
        state.accessGatingPayload.genders = [...state.accessGatingPayload.genders, action.payload.id.toString()];
      }
    },
    setSelectedKycLevels: (state, action: PayloadAction<SurveyTags>) => {
      if (state.accessGatingPayload.kysLevels.some(kys => kys === action.payload.id)) {
        state.accessGatingPayload.kysLevels = state.accessGatingPayload.kysLevels.filter(
          kysLevel => kysLevel !== action.payload.id,
        );
      } else {
        state.accessGatingPayload.kysLevels = [...state.accessGatingPayload.kysLevels, action.payload.id.toString()];
      }
    },
    setSelectedAllCountries: (state, action: PayloadAction<SurveyTags[]>) => {
      state.accessGatingPayload.countries = action.payload.map(country => country.id.toString());
    },
    setSelectedAllGenders: (state, action: PayloadAction<SurveyTags[]>) => {
      state.accessGatingPayload.genders = action.payload.map(gender => gender.id.toString());
    },
    setSelectedAllLevels: (state, action: PayloadAction<SurveyTags[]>) => {
      state.accessGatingPayload.kysLevels = action.payload.map(kycLevel => kycLevel.id.toString());
    },
  },
  extraReducers: builder => {
    builder
      // Get Countries List
      .addCase(getCountriesList.pending, state => {
        state.pending = true;
      })
      .addCase(getCountriesList.fulfilled, (state, action) => {
        const { items } = action.payload;
        state.countries = items.map(({ code, name }) => ({ id: code, title: name }));
        state.error = null;
        state.pending = false;
      })
      .addCase(getCountriesList.rejected, (state, action) => {
        if (action.payload) {
          state.error = action.payload;
          state.pending = false;
        }
      })
      // Get Access Gating Data
      .addCase(getAccessGating.pending, state => {
        state.pending = true;
      })
      .addCase(getAccessGating.fulfilled, (state, action) => {
        state.accessGatingPayload = action.payload;
        state.selectedAccessGating = action.payload;
        state.error = null;
        state.pending = false;
      })
      .addCase(getAccessGating.rejected, (state, action) => {
        if (action.payload) {
          state.error = action.payload;
          state.pending = false;
        }
      })
      // Set Access Gating Data
      .addCase(setAccessGating.pending, state => {
        state.pending = true;
      })
      .addCase(setAccessGating.fulfilled, state => {
        state.error = null;
        state.pending = false;
      })
      .addCase(setAccessGating.rejected, (state, action) => {
        if (action.payload) {
          state.error = action.payload;
          state.pending = false;
        }
      });
  },
});

export const {
  resetAccessGatingState,
  setSelectedAllCountries,
  setSelectedCountries,
  setSelectedGenders,
  setAccessGatingPayload,
  setSelectedAllGenders,
  resetAccessGatingPayload,
  setSelectedAllLevels,
  setSelectedKycLevels,
} = accessGatingSlice.actions;

export default accessGatingSlice;
