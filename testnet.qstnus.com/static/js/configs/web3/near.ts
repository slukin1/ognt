const contractPerNetwork = {
  mainnet: "qstn-survey.near",
  testnet: "native-blackkilt7020.testnet",
};

const contractNearNft = {
  mainnet: "qstn-survey-nft.near",
  testnet: "nft-otherbat2195.testnet",
};

export const NetworkId = process.env.REACT_APP_ENV === "development" ? "testnet" : "mainnet";
export const NearContract = contractPerNetwork[NetworkId];
export const NearNftContract = contractNearNft[NetworkId];
