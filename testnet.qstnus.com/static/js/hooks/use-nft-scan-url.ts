import { useState } from "react";
import useSWR from "swr";

import {
  CHAIN_IDS,
  TON_NFT_COLLECTION_URL,
  getScanLinkSolana,
  SUPPORTED_SOLANA_CHAIN_ID,
  SUPPORTED_TON_CHAIN_ID,
  SUPPORTED_NEAR_CHAIN_ID,
  SUPPORTED_ROOTSTOCK_CHAIN_ID,
  SUPPORTED_SKALE_CHAIN_ID,
  SUPPORTED_BOBA_CHAIN_ID,
  SUPPORTED_SOMNIA_CHAIN_ID,
  SCAN_URLS,
  getScanLink,
  BLOCK_EXPLORER_URLS_NEAR,
} from "configs/web3";

export const useNftScanUrl = (
  chainId: string,
  collectionAddress: string,
  itemAddress: string,
  itemId: number,
  isCollection: boolean = false,
) => {
  const [scanNftUrl, setNftScanUrl] = useState<string>("");
  const [networkName, setNetworkName] = useState<string | undefined>("");

  useSWR(
    `useNftScanUrl/${chainId}/${collectionAddress}/${itemAddress}/${isCollection}`,
    chainId && collectionAddress && itemAddress
      ? async () => {
          return handleNftScanData();
        }
      : null,
    { revalidateOnFocus: false, refreshInterval: 0 },
  );

  const handleNftScanData = async () => {
    setNftScanUrl(isCollection ? handleCollectionScanUrl() : handleNftScanUrl());
    setNetworkName(
      Object.entries(CHAIN_IDS).find(([_, chainIdEntry]) => chainIdEntry.toString() === chainId.toString())?.[0],
    );
  };

  const handleNftScanUrl = () => {
    if (chainId === SUPPORTED_SOLANA_CHAIN_ID) {
      return getScanLinkSolana(itemAddress, "address", chainId);
    }

    if (chainId === SUPPORTED_TON_CHAIN_ID.toString()) {
      return `${TON_NFT_COLLECTION_URL}${collectionAddress}/${itemAddress}`;
    }

    if (chainId === SUPPORTED_NEAR_CHAIN_ID) {
      return `${BLOCK_EXPLORER_URLS_NEAR}/nft-token/${itemAddress}/${itemId}`;
    }

    if (chainId === SUPPORTED_ROOTSTOCK_CHAIN_ID.toString() && process.env.REACT_APP_ENV !== "development") {
      return `https://artoshi.io/rsk/${collectionAddress.toLocaleLowerCase()}/${itemId}`;
    }

    if (chainId === SUPPORTED_SKALE_CHAIN_ID.toString()) {
      return `${SCAN_URLS[SUPPORTED_SKALE_CHAIN_ID]}/token/${collectionAddress.toLocaleLowerCase()}/instance/${itemId}`;
    }

    if (chainId === SUPPORTED_BOBA_CHAIN_ID.toString()) {
      return `${SCAN_URLS[SUPPORTED_BOBA_CHAIN_ID]}/nft/${collectionAddress.toLocaleLowerCase()}/${itemId}`;
    }

    if (chainId === SUPPORTED_SOMNIA_CHAIN_ID.toString()) {
      return `${SCAN_URLS[SUPPORTED_SOMNIA_CHAIN_ID]}/token/${collectionAddress.toLocaleLowerCase()}/instance/${itemId}`;
    }

    return getScanLink(itemAddress, "address", +chainId);
  };

  const handleCollectionScanUrl = () => {
    if (chainId === SUPPORTED_SOLANA_CHAIN_ID) {
      return getScanLinkSolana(collectionAddress, "address", chainId);
    }

    if (chainId === SUPPORTED_TON_CHAIN_ID.toString()) {
      return `${TON_NFT_COLLECTION_URL}${collectionAddress}`;
    }

    if (chainId === SUPPORTED_NEAR_CHAIN_ID) {
      return `${BLOCK_EXPLORER_URLS_NEAR}/nft-token/${collectionAddress}`;
    }

    if (chainId === SUPPORTED_ROOTSTOCK_CHAIN_ID.toString() && process.env.REACT_APP_ENV !== "development") {
      return `https://artoshi.io/rsk/${collectionAddress.toLocaleLowerCase()}/${itemId}`;
    }

    if (chainId === SUPPORTED_SKALE_CHAIN_ID.toString()) {
      return `${SCAN_URLS[SUPPORTED_SKALE_CHAIN_ID]}/token/${collectionAddress.toLocaleLowerCase()}`;
    }

    if (chainId === SUPPORTED_BOBA_CHAIN_ID.toString()) {
      return `${SCAN_URLS[SUPPORTED_BOBA_CHAIN_ID]}/token/${collectionAddress.toLocaleLowerCase()}`;
    }

    if (chainId === SUPPORTED_SOMNIA_CHAIN_ID.toString()) {
      return `${SCAN_URLS[SUPPORTED_SOMNIA_CHAIN_ID]}/token/${collectionAddress.toLocaleLowerCase()}`;
    }

    return getScanLink(itemAddress, "address", +chainId);
  };

  return { scanNftUrl, networkName };
};
