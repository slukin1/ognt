import { ErrorResult } from "services/types";
import { AccountType, Recipient } from "store/auth/types";

export type ProfileData = {
  id: number;
  did: string;
  firstName?: string;
  lastName?: string;
  email: string;
  displayName?: string;
  businessName?: string;
  avatar?: string;
  bio?: string;
  location?: string;
  city?: string;
  countryCode?: string;
  birthdate?: string;
  emailProof?: boolean;
  kycLevel: KYCLevel;
  kysStatus?: KYCStatus;
  type: AccountType;
  age?: number;
  status: AccountStatus;
  gender?: Gender;
  isAdmin: boolean;
  wallets?: ProfileWallet[];
  subscriptionType: string;
  ansrBalance: string;
  socialLinks: SocialLinks;
  protectedDataAddress?: string;
  onboarding?: OnboardingObject;
  createdAt?: string;
  updatedAt?: string;
};

export type OnboardingObject = {
  age: string;
  sex: string;
  salary: string;
  interests: string[];
  industries: string;
  motivation: string[];
  surveyPreferences: string;
};

export type ProfileState = {
  profileData: ProfileData | null;
  pending: boolean;
  error: ErrorResult | null;
};
export enum KYCLevel {
  zero = "zero",
  one = "one",
  two = "two",
}

export enum KYCStatus {
  pending = "pending",
  approved = "approved",
  rejected = "rejected",
}

export enum AccountStatus {
  completed = "completed",
  pending = "pending",
  banned = "banned",
  deleted = "deleted",
}

export enum Gender {
  male = "male",
  female = "female",
  nonBinary = "non-binary",
  transgender = "transgender",
  other = "other",
}

export type SocialLinks = {
  instagram?: string;
  facebook?: string;
  twitter?: string;
  telegram?: string;
  youtube?: string;
};

export enum Social {
  instagram = "instagram",
  facebook = "facebook",
  twitter = "twitter",
  telegram = "telegram",
  youtube = "youtube",
}

export type ProfileWallet = {
  id: number;
  userId: number;
  chainId: string;
  address: string;
  recipient: Recipient;
};

export interface UpdateProfilePayload {
  bio?: string;
  displayName?: string;
  location?: string;
  age?: number;
  gender?: Gender;
  businessName?: string;
  protectedDataAddress?: string;
}
