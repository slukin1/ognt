import { ErrorResult } from "services/types";
import { ProfileData } from "store/profile/types";

export type AuthState = {
  token: string | null;
  pending: boolean;
  error: ErrorResult | null;
};

export type LoginUserResponse = {
  accessToken: string;
  user: ProfileData;
};

export type LoginUserPayload = {
  email: string;
  magicToken: string;
  type: AccountType;
  isAnon?: boolean;
};

export type RegistrationUserPayload = {
  email: string;
  magicToken: string;
  type: AccountType;
  firstName: string;
  lastName: string;
  refId?: number;
  biconomyAddress: string;
  protectedDataAddress?: string;
  isAnon?: boolean;
};

export type RegistrationBusinessPayload = {
  email: string;
  magicToken: string;
  type: AccountType;
  businessName: string;
  refId?: number;
  protectedDataAddress?: string;
  isAnon?: boolean;
};

export type RegistrationResponse = {
  accessToken: string;
  user: ProfileData;
};

export enum AccountType {
  business = "business",
  user = "user",
}

export type StatusResponse = {
  status: string;
};

export type SetWalletPayload = {
  address: string;
  chainId: string | number;
  recipient: Recipient;
};

export enum Recipient {
  biconomy = "biconomy",
  magic = "magic",
}
