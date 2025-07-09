export enum PLANS {
  FREE = "free",
  BASIC = "basic",
  ADVANCED = "advanced",
  PROFESSIONAL = "professional",
  CUSTOM = "custom",
}

export const PLAN_DETAILS = {
  [PLANS.FREE]: {
    features: ["AI Drafting", "Crypto funding (No NFTs)", "Basic data visualization with AI tables", "Cash funding"],
    idealFor: "For new users or small-scale experiments with blockchain technology",
  },
  [PLANS.BASIC]: {
    features: ["All Free Plan features", "Enhanced KYC access gating", "NFT funding", "Internal platform verifcation"],
    idealFor:
      "For small to medium businesses seeking blockchain capabilities including NFTs and enhanced survey functionalities.",
  },
  [PLANS.ADVANCED]: {
    features: [
      "All Basic Plan features",
      "Improved data analytics",
      "Pivacy-preserving user profiles",
      "Credibility scoring",
    ],
    idealFor: "For businesses requiring advanced data insights, enhanced user privacy, and credibility assessments.",
  },
  [PLANS.PROFESSIONAL]: {
    features: [
      "All Advanced features",
      "Complete smart contract management",
      "Highest-tier data visualization",
      "White-label solutions",
    ],
    idealFor:
      "For established businesses looking for comprehensive survey and blockchain tools, and the ability to brand these services as their own.",
  },
  [PLANS.CUSTOM]: {
    features: [
      "All Professional Plan features",
      "Unlimited blockchain access",
      "Unlimited responses",
      "Customizable suite of services",
      "Campaign management and hosting",
    ],
    idealFor:
      "For large enterprises needing tailored solutions, high-volume operations, and full-service campaign management under their branding.",
  },
} as const;
