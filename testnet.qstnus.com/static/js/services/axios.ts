import axios from "axios";
import { toast } from "react-hot-toast";

import store from "store/store";
import { resetAuth } from "store/auth";
import { resetProfileState } from "store/profile";
import { LOCAL_STORAGE_KEYS } from "configs";
import { resetDiscoverSurveyState } from "store/discover-survey";
import { resetDiscoverBusinessesState } from "store/discover-businesses";
import { resetLeaderBoardState } from "store/leader-boards";
import { resetAnalyticsState } from "store/business/analytics";
import { resetCampaignsState } from "store/business/campaigns";
import { resetUserSegmentationState } from "store/business/users-segmentation";
import { resetBusinessTransactionsState } from "store/business/business-transactions";
import { resetSubscriptionsState } from "store/subscriptions";
import { resetCreateSurveyState } from "store/create-survey/survey";
import { resetSurveyTagsState } from "store/create-survey/survey-tags";
import { resetSurveyWhitelistState } from "store/create-survey/whitelist";
import { resetUserSurveyState } from "store/user/survey";
// import { resetCompleteSurveyState } from "store/user/complete-survey";
import { resetReferralsState } from "store/referrals";
import { resetUserProfileState } from "store/user/profile";
// import { resetTrendingDataState } from "store/trending-data";
import { resetSurveyStatsSliceState } from "store/business/survey-stats";
import { resetKYCState } from "store/kyc";
import { resetCreateNftState } from "store/create-nft";
import { resetNftDataState } from "store/user/nft-data";
import { resetAccessGatingState } from "store/create-survey/survey-access-gating";
import { resetSolanaProofState } from "store/zkp/solana-proof";
import { resetTonProofState } from "store/zkp/ton-proof";
import { resetBusinessMediaState } from "store/business/business-media";
import { resetBusinessItemState } from "store/business-profile";
import { resetNearProofState } from "store/zkp/near-proof";
import { resetRootstockProofState } from "store/zkp/rootstock-proof";
import { resetKakarotProofState } from "store/zkp/kakarot-proof";
import { resetBobaProofState } from "store/zkp/boba-proof";
import { resetSomniaProofState } from "store/zkp/somnia-proof";
import { resetSkaleProofState } from "store/zkp/skale-proof";
import { resetCSVState } from "store/csv";

const timeout = 15_000;

export function resetStore() {
  store.dispatch(resetAuth());
  store.dispatch(resetProfileState());
  store.dispatch(resetLeaderBoardState());
  store.dispatch(resetAnalyticsState());
  store.dispatch(resetCampaignsState());
  store.dispatch(resetUserSegmentationState());
  store.dispatch(resetBusinessTransactionsState());
  store.dispatch(resetSubscriptionsState());
  store.dispatch(resetCreateSurveyState());
  store.dispatch(resetSurveyTagsState());
  store.dispatch(resetSurveyWhitelistState());
  store.dispatch(resetUserSurveyState());
  // store.dispatch(resetCompleteSurveyState());
  store.dispatch(resetReferralsState());
  store.dispatch(resetDiscoverSurveyState());
  store.dispatch(resetUserProfileState());
  // store.dispatch(resetTrendingDataState());
  store.dispatch(resetSurveyStatsSliceState());
  store.dispatch(resetKYCState());
  store.dispatch(resetDiscoverBusinessesState());
  store.dispatch(resetCreateNftState());
  store.dispatch(resetNftDataState());
  store.dispatch(resetSolanaProofState());
  store.dispatch(resetTonProofState());
  store.dispatch(resetAccessGatingState());
  store.dispatch(resetBusinessMediaState());
  store.dispatch(resetBusinessItemState());
  store.dispatch(resetNearProofState());
  store.dispatch(resetRootstockProofState());
  store.dispatch(resetKakarotProofState());
  store.dispatch(resetBobaProofState());
  store.dispatch(resetSomniaProofState());
  store.dispatch(resetSkaleProofState());
  store.dispatch(resetCSVState());
}

export function getInstance(
  baseURL = process.env.REACT_APP_API_URL,
  isTonProof = false,
  isSolanaProof = false,
  isRootstockProof = false,
  isKakarotProof = false,
  isBobaProof = false,
  isSomniaProof = false,
  isSkaleProof = false,
  isNearProof = false,
  isAnonHeaderId = false,
  isAnonHeaderArray = false,
) {
  const instance = axios.create({
    baseURL,
    timeout,
  });

  instance.interceptors.request.use(
    config => {
      const tonProofToken =
        store.getState().tonProof.tonProofToken || localStorage.getItem(LOCAL_STORAGE_KEYS.tonProofToken);
      const rootstockProofToken =
        store.getState().rootstockProof.rootstockProofToken || localStorage.getItem(LOCAL_STORAGE_KEYS.rootstockToken);
      const kakarotProofToken =
        store.getState().kakarotProof.kakarotProofToken || localStorage.getItem(LOCAL_STORAGE_KEYS.kakarotToken);
      const bobaProofToken =
        store.getState().bobaProof.bobaProofToken || localStorage.getItem(LOCAL_STORAGE_KEYS.bobaToken);
      const somniaProofToken =
        store.getState().somniaProof.somniaProofToken || localStorage.getItem(LOCAL_STORAGE_KEYS.somniaToken);
      const skaleProofToken =
        store.getState().skaleProof.skaleProofToken || localStorage.getItem(LOCAL_STORAGE_KEYS.skaleToken);
      const nearProofToken =
        store.getState().nearProof.nearProofToken || localStorage.getItem(LOCAL_STORAGE_KEYS.nearToken);
      const solanaProofToken =
        store.getState().solanaProof.solanaProofToken || localStorage.getItem(LOCAL_STORAGE_KEYS.solanaToken);
      const anonToken = store.getState().utils?.ghostSession?.ghostToken || null;
      const token = store.getState().auth.token || localStorage.getItem(LOCAL_STORAGE_KEYS.token);

      if (token && config.headers) {
        if (isTonProof) {
          config.headers["x-proof-token"] = tonProofToken;
        }
        if (isSolanaProof) {
          config.headers["x-proof-token"] = solanaProofToken;
        }
        if (isRootstockProof) {
          config.headers["x-proof-token"] = rootstockProofToken;
        }
        if (isKakarotProof) {
          config.headers["x-proof-token"] = kakarotProofToken;
        }
        if (isBobaProof) {
          config.headers["x-proof-token"] = bobaProofToken;
        }
        if (isSomniaProof) {
          config.headers["x-proof-token"] = somniaProofToken;
        }
        if (isSkaleProof) {
          config.headers["x-proof-token"] = skaleProofToken;
        }
        if (isNearProof) {
          config.headers["x-proof-token"] = nearProofToken;
        }
        config.headers.Authorization = `Bearer ${token}`;
      }

      if (anonToken && config.headers) {
        if (isAnonHeaderArray && anonToken) {
          config.headers["x-anon-array"] = anonToken;
        }
        if (isAnonHeaderId && anonToken) {
          config.headers["x-anon-id"] = anonToken;
        }
      }

      return config;
    },
    error => Promise.reject(error),
  );

  instance.interceptors.response.use(
    success => success,
    error => {
      const {
        response: { status },
      } = error;

      if (status === 401) {
        if (isTonProof) {
          toast.error("Please, reconnect TON Wallet.");
        } else {
          resetStore();
        }
      }

      return Promise.reject(error);
    },
  );

  return instance;
}
