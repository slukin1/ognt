import { ErrorResult } from "services/types";

export type NftState = {
  pending: boolean;
  totalNftItems?: number;
  activeTab: NftDataActiveTab;
  error: ErrorResult | null;
  nftItems: NftItem[];
  nftPayload: NftItemsPayload;
};

export enum NftDataActiveTab {
  // bought = "Bought",
  rewards = "Rewards",
}

export type NftItem = {
  id: number;
  name: string;
  number: number;
  imageUrl: string;
  chainId: string;
  authorName: string;
  authorAvatar: string;
  itemContractAddress: string;
  collectionContractAddress: string;
  createdAt: string;
  isPrivate?: boolean;
};

export type NftItemsPayload = {
  pageSize: number;
  pageNumber: number;
  pageOrderBy: string;
  pageOrder: string;
};

export type NftItemsResponse = {
  total: number;
  items: NftItem[];
};

export const nftDataOptions = [
  // NftDataActiveTab.bought,
  NftDataActiveTab.rewards,
];
