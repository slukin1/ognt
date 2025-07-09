import { useState, useEffect } from "react";
import { IExecDataProtector, IExecDataProtectorCore, IExecDataProtectorSharing } from "@iexec/dataprotector";
import { useSwitchChain, useChainId, useAccount } from "wagmi";
import { EIP1193Provider } from "viem";
import type { AddressOrENS } from "@iexec/dataprotector";
import JSZip from "jszip";

const RENT_LENGTH = 60 * 60 * 24 * 30 * 12 * 50;
const RENT_PRICE = 0;

function stringToUint8Array(str: string): Uint8Array {
  const encoder = new TextEncoder();
  return encoder.encode(str);
}

const processAndDownloadFile = async (zipBlob: Blob, responseId: string) => {
  const zip = new JSZip();

  const zipContent = await zip.loadAsync(zipBlob);

  const contentFile = zipContent.file("content");
  if (!contentFile) {
    throw new Error("Content file not found in the zip");
  }

  const contentText = await contentFile.async("text");

  const newBlob = new Blob([contentText], { type: "text/plain" });
  const newFileURL = URL.createObjectURL(newBlob);

  const downloadFile = (url: string, fileName: string) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = fileName;
    link.style.display = "none";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  downloadFile(newFileURL, `answers-${responseId}.txt`);
};

export const useWeb3Mail = () => {
  const [dataProtector, setDataProtector] = useState<IExecDataProtectorCore | null>(null);
  const [dataProtectorShare, setDataProtectorShare] = useState<IExecDataProtectorSharing | null>(null);
  const chainId = useChainId();
  const { isConnected, connector, address } = useAccount();
  const { switchChainAsync } = useSwitchChain();

  useEffect(() => {
    init();
  }, [isConnected, connector, chainId]);

  const init = async () => {
    if (connector) {
      try {
        const provider = (await connector.getProvider()) as EIP1193Provider;
        const dataProtector = new IExecDataProtector(provider);
        const dataProtectorCore = dataProtector.core;
        const dataProtectorShare = dataProtector.sharing;
        setDataProtector(dataProtectorCore);
        setDataProtectorShare(dataProtectorShare);
      } catch (error) {
        setDataProtector(null);
        setDataProtectorShare(null);
      }
    } else {
      setDataProtector(null);
      setDataProtectorShare(null);
    }
  };

  const changeNetwork = async () => {
    if (chainId !== 134) {
      await switchChainAsync({ chainId: 134 });
    }
    return true;
  };

  const protectData = async (email: string) => {
    if (!dataProtector) {
      throw new Error("Data protector is not initialized");
    }

    if (chainId !== 134) {
      throw new Error("Chain Id is not configured");
    }

    const protectedData = await dataProtector.protectData({
      data: {
        name: "QSTN Protected Data",
        email: email,
      },
    });

    return protectedData;
  };

  const grantAccess = async (protectedDataParam: string) => {
    if (!dataProtector) {
      throw new Error("Data protector is not initialized");
    }

    if (chainId !== 134) {
      throw new Error("Chain Id is not configured");
    }

    const protectedData = protectedDataParam as unknown as AddressOrENS;
    const authorizedUser = process.env.REACT_APP_EVM_MANAGER as unknown as AddressOrENS;
    const authorizedApp = "web3mail.apps.iexec.eth" as unknown as AddressOrENS;

    const grantAccessResult = await dataProtector.grantAccess({
      protectedData,
      authorizedUser,
      authorizedApp,
      numberOfAccess: 999999,
    });

    return grantAccessResult;
  };

  const protectSurveyData = async (surveyAnswers: string) => {
    if (!dataProtector || !dataProtectorShare) {
      throw new Error("Data protector is not initialized");
    }

    if (chainId !== 134) {
      throw new Error("Chain Id is not configured");
    }

    let collectionId: number | null = null;

    const collectionsResult = await dataProtectorShare.getCollectionsByOwner({
      owner: address as AddressOrENS,
    });

    if (collectionsResult.collections?.length > 0) {
      if (collectionsResult.collections?.length >= 2) {
        // eslint-disable-next-line
        console.log(
          `It looks like you have more than one collection. The first one will be used. (id: ${collectionsResult.collections[0].id})`,
        );
      }
      collectionId = collectionsResult.collections[0].id;
    } else {
      const newCollection = await dataProtectorShare.createCollection();
      collectionId = newCollection.collectionId;
    }

    const protectedData = await dataProtector.protectData({
      name: "QSTN Survey Response Data",
      data: {
        file: stringToUint8Array(surveyAnswers),
      },
    });

    await dataProtectorShare.addToCollection({
      protectedData: protectedData.address,
      collectionId: collectionId,
      addOnlyAppWhitelist: "0x256bcd881c33bdf9df952f2a0148f27d439f2e64",
    });

    await dataProtectorShare.setProtectedDataToRenting({
      protectedData: protectedData.address,
      price: RENT_PRICE,
      duration: RENT_LENGTH,
    });

    return protectedData.address;
  };

  const getProtectedSurveyData = async (protectedDataAddress: string) => {
    if (!protectedDataAddress) {
      throw new Error("Protected data address is not provided");
    }

    if (chainId !== 134) {
      throw new Error("Chain Id is not configured");
    }

    if (!dataProtectorShare) {
      throw new Error("Data protector share is not initialized");
    }

    await dataProtectorShare.rentProtectedData({
      protectedData: protectedDataAddress,
      price: RENT_PRICE,
      duration: RENT_LENGTH,
    });

    const getDataResult = await dataProtectorShare.consumeProtectedData({
      protectedData: protectedDataAddress,
      app: "0x1cb7D4F3FFa203F211e57357D759321C6CE49921",
      workerpool: "0x0975bfce90f4748dab6d6729c96b33a2cd5491f5",
    });

    const taskResult = await dataProtectorShare.getResultFromCompletedTask({
      taskId: getDataResult.taskId,
    });

    const fileAsBlob = new Blob([taskResult.result]);
    await processAndDownloadFile(fileAsBlob, protectedDataAddress);

    return true;
  };

  return {
    isDataProtectorInitialized: Boolean(dataProtector),
    protectData,
    grantAccess,
    changeNetwork,
    protectSurveyData,
    getProtectedSurveyData,
  };
};
