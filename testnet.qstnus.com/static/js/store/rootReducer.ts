import { combineReducers } from "redux";

import auth from "store/auth";
import profile from "store/profile";
import discoverSurvey from "store/discover-survey";
import leaderBoard from "store/leader-boards";
import analytics from "store/business/analytics";
import campaigns from "store/business/campaigns";
import usersSegmentation from "store/business/users-segmentation";
import businessTransactions from "store/business/business-transactions";
import userTransactionsRewards from "store/user/user-transactions-rewards";
import createSurvey from "store/create-survey/survey";
import surveyTags from "store/create-survey/survey-tags";
import surveyWhitelist from "store/create-survey/whitelist";
import subscriptions from "store/subscriptions";
import userSurvey from "store/user/survey";
import completeSurvey from "store/user/complete-survey";
import referrals from "store/referrals";
import userProfile from "store/user/profile";
import trendingSurveys from "store/trending-data";
import surveyStats from "store/business/survey-stats";
import kyc from "store/kyc";
import modal from "store/modal";
import discoverBusinesses from "store/discover-businesses";
import businessItem from "store/business-profile";
import createNft from "store/create-nft";
import nftData from "store/user/nft-data";
import accessGating from "store/create-survey/survey-access-gating";
import solanaProof from "store/zkp/solana-proof";
import reclaimProof from "store/zkp/reclaim-proof";
import businessMedia from "store/business/business-media";
import tonProof from "store/zkp/ton-proof";
import nearProof from "store/zkp/near-proof";
import rootstockProof from "store/zkp/rootstock-proof";
import kakarotProof from "store/zkp/kakarot-proof";
import bobaProof from "store/zkp/boba-proof";
import somniaProof from "store/zkp/somnia-proof";
import skaleProof from "store/zkp/skale-proof";
import adminSurvey from "store/admin";
import csv from "store/csv";
import userSurveyAnswers from "store/user/survey-answers";
import utils from "store/utils";

export const rootReducer = combineReducers({
  [auth.name]: auth.reducer,
  [profile.name]: profile.reducer,
  [discoverSurvey.name]: discoverSurvey.reducer,
  [leaderBoard.name]: leaderBoard.reducer,
  [analytics.name]: analytics.reducer,
  [campaigns.name]: campaigns.reducer,
  [usersSegmentation.name]: usersSegmentation.reducer,
  [businessTransactions.name]: businessTransactions.reducer,
  [subscriptions.name]: subscriptions.reducer,
  [createSurvey.name]: createSurvey.reducer,
  [surveyTags.name]: surveyTags.reducer,
  [surveyWhitelist.name]: surveyWhitelist.reducer,
  [userSurvey.name]: userSurvey.reducer,
  [completeSurvey.name]: completeSurvey.reducer,
  [referrals.name]: referrals.reducer,
  [userTransactionsRewards.name]: userTransactionsRewards.reducer,
  [userProfile.name]: userProfile.reducer,
  [trendingSurveys.name]: trendingSurveys.reducer,
  [surveyStats.name]: surveyStats.reducer,
  [kyc.name]: kyc.reducer,
  [modal.name]: modal.reducer,
  [discoverBusinesses.name]: discoverBusinesses.reducer,
  [businessItem.name]: businessItem.reducer,
  [createNft.name]: createNft.reducer,
  [nftData.name]: nftData.reducer,
  [accessGating.name]: accessGating.reducer,
  [solanaProof.name]: solanaProof.reducer,
  [reclaimProof.name]: reclaimProof.reducer,
  [tonProof.name]: tonProof.reducer,
  [businessMedia.name]: businessMedia.reducer,
  [nearProof.name]: nearProof.reducer,
  [adminSurvey.name]: adminSurvey.reducer,
  [rootstockProof.name]: rootstockProof.reducer,
  [kakarotProof.name]: kakarotProof.reducer,
  [bobaProof.name]: bobaProof.reducer,
  [somniaProof.name]: somniaProof.reducer,
  [skaleProof.name]: skaleProof.reducer,
  [csv.name]: csv.reducer,
  [userSurveyAnswers.name]: userSurveyAnswers.reducer,
  [utils.name]: utils.reducer,
});

export default rootReducer;
