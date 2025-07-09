export const ENDPOINTS_AUTH = {
  login: "/auth/login",
  register: "/auth/register",
  logout: "/auth/logout",
  wallet: "/user/wallet",
};

export const ENDPOINTS_HOME = {
  countries: "/countries",
  configs: "/configs",
};

export const ENDPOINTS_USER = {
  profile: "/user/me",
  referral: "/referral",
  inviteReferrals: "/referral/invitations",
};

export const ENDPOINTS_NFT = {
  nft: "/nft",
  nftItems: "/nft-items",
  nftCollections: "nft/collection",
};

export const ENDPOINTS_KYC = {
  getKYCUrl: "/user/kyc/fractal/url",
  verifyKYC: "/user/kyc/fractal/callback",
};

export const ENDPOINTS_BUSINESS = {
  plans: "/business/subscription/plans",
  subscriptionIntent: "/payment/stripe/subscription",
  usersSubscriptions: "/user/subscription",
  subscription: "/subscription",
  getBusinessCollections: "/business/nft-collections",
};

export const ENDPOINTS_PROOF = {
  getProofPayload: "/auth/payload-proof",
  checkSolanaProof: "/auth/sol/check-proof",
  checkNearProof: "/auth/near/connect",
  checkTonProof: "/auth/ton/check-proof",
  checkRootstockProof: "/auth/rbtc/check-proof",
  checkKakarotProof: "/auth/kak/check-proof",

  checkBobaProof: "/auth/boba/check-proof",
  checkSomniaProof: "/auth/somnia/check-proof",
  checkSkaleProof: "/auth/skale/check-proof",

  reclaim: "/auth/reclaim-proof",
  reclaimVerify: "/auth/verify-reclaim-proof",
};

export const ENDPOINTS_SURVEY = {
  survey: "/survey",
  claim: "/claim",
  business: "/business",
  businessDid: "/business/did",
  businessSurvey: "/business/survey",
  getSurveyTags: "/tags",
  analytics: "/analytics",
  surveyBusinessTag: "/tag",
  whitelist: "/whitelist",
  inviteUsers: "/whitelist/invite",
  status: "/status",
  payment: "/payment",
  fiat: "/fiat",
  confirm: "/confirm",
  invite: "/invite",
  response: "/response",
  users: "/users",
  ai: "/ai",
  answers: "/answers",
  leaderboard: "/leaderboard",
  time: "/time",
  skaleClaimApprove: "/skale-claim",
  checkClaim: "/check-claim",
  accessGating: "/access-rule",
  csv: "/csv",
  stripe: "/stripe",
  account: "/account",
  connect: "/connect",
  session: "/session",
  balance: "/balance",
  templates: "/templates",
};

export const ENDPOINTS_TRANSACTIONS = {
  transaction: "/transaction",
  reward: "/reward",
  distributeFuel: "/reward/distribute-fuel",
};

export const ENDPOINTS_ADMIN = {
  root: "/root",
  paymentAnsr: "/payment/ansr",
  getAdminSurveys: "/root/survey",
  getAdminUsers: "/root/user",
  banUser: "/root/user/banned",
  unbanUser: "/root/user/unbanned",
  deleteUser: "/root/user/deleted",
  updateLeaderboardRewards: "/root/survey/update/leaderboardConfig",
};
