import BigNumber from "bignumber.js";
import { CHAIN_IDS, Network } from "./chains";
import { PublicKey } from "@solana/web3.js";

const ZERO = BigNumber("0");

export { ZERO };

export enum CONTRACTS_NAMES {
  SURVEY = "survey",
  SURVEY_NFT = "survey-nft",
}

// TODO: refactor it in future for production
export const CONTRACTS_ADDRESSES = {
  [CHAIN_IDS[Network.POLYGON]]: {
    [CONTRACTS_NAMES.SURVEY]: "0xF94c1FC4b6796e72A033a8d1e50F995dC68D906F",
  },
  [CHAIN_IDS[Network.POLYGON_AMOY]]: {
    [CONTRACTS_NAMES.SURVEY]:
      process.env.REACT_APP_ENV === "development"
        ? "0xfE457e9b172396e0690D00cc8D884C0866659480"
        : "0xF94c1FC4b6796e72A033a8d1e50F995dC68D906F",
  },
  [CHAIN_IDS[Network.ROOTSTOCK_TEST]]: {
    [CONTRACTS_NAMES.SURVEY]:
      process.env.REACT_APP_ENV === "development"
        ? "0x335EB4c94DF9072271eefa2EC3cb2397539BCF5f"
        : "0xF94c1FC4b6796e72A033a8d1e50F995dC68D906F",
    [CONTRACTS_NAMES.SURVEY_NFT]:
      process.env.REACT_APP_ENV === "development"
        ? "0x3686ddd87fd5F634E82C557451AcE6c3CF5C1907"
        : "0x1b1aa239d778855D94A2Ecd97Ae864D3af98C839",
  },
  [CHAIN_IDS[Network.ROOTSTOCK]]: {
    [CONTRACTS_NAMES.SURVEY]:
      process.env.REACT_APP_ENV === "development"
        ? "0x335EB4c94DF9072271eefa2EC3cb2397539BCF5f"
        : "0xF94c1FC4b6796e72A033a8d1e50F995dC68D906F",
    [CONTRACTS_NAMES.SURVEY_NFT]:
      process.env.REACT_APP_ENV === "development"
        ? "0x3686ddd87fd5F634E82C557451AcE6c3CF5C1907"
        : "0x1b1aa239d778855D94A2Ecd97Ae864D3af98C839",
  },
  [CHAIN_IDS[Network.KAKAROT_TEST]]: {
    [CONTRACTS_NAMES.SURVEY]:
      process.env.REACT_APP_ENV === "development"
        ? "0xE48A7786DD18B70b5c5f51AEa29F911097C676B9"
        : "0xE48A7786DD18B70b5c5f51AEa29F911097C676B9",
    [CONTRACTS_NAMES.SURVEY_NFT]:
      process.env.REACT_APP_ENV === "development"
        ? "0x8e135e6f1d921Ffe6A20e8aC1a83aD84E9698356"
        : "0x8e135e6f1d921Ffe6A20e8aC1a83aD84E9698356",
  },
  [CHAIN_IDS[Network.KAKAROT]]: {
    [CONTRACTS_NAMES.SURVEY]:
      process.env.REACT_APP_ENV === "development"
        ? "0xE48A7786DD18B70b5c5f51AEa29F911097C676B9"
        : "0xE48A7786DD18B70b5c5f51AEa29F911097C676B9",
    [CONTRACTS_NAMES.SURVEY_NFT]:
      process.env.REACT_APP_ENV === "development"
        ? "0x8e135e6f1d921Ffe6A20e8aC1a83aD84E9698356"
        : "0x8e135e6f1d921Ffe6A20e8aC1a83aD84E9698356",
  },
  [CHAIN_IDS[Network.BOBA_TEST]]: {
    [CONTRACTS_NAMES.SURVEY]:
      process.env.REACT_APP_ENV === "development"
        ? "0x335EB4c94DF9072271eefa2EC3cb2397539BCF5f"
        : "0xF94c1FC4b6796e72A033a8d1e50F995dC68D906F",
    [CONTRACTS_NAMES.SURVEY_NFT]:
      process.env.REACT_APP_ENV === "development"
        ? "0x3686ddd87fd5F634E82C557451AcE6c3CF5C1907"
        : "0x1b1aa239d778855D94A2Ecd97Ae864D3af98C839",
  },
  [CHAIN_IDS[Network.BOBA]]: {
    [CONTRACTS_NAMES.SURVEY]:
      process.env.REACT_APP_ENV === "development"
        ? "0x335EB4c94DF9072271eefa2EC3cb2397539BCF5f"
        : "0xF94c1FC4b6796e72A033a8d1e50F995dC68D906F",
    [CONTRACTS_NAMES.SURVEY_NFT]:
      process.env.REACT_APP_ENV === "development"
        ? "0x3686ddd87fd5F634E82C557451AcE6c3CF5C1907"
        : "0x1b1aa239d778855D94A2Ecd97Ae864D3af98C839",
  },
  [CHAIN_IDS[Network.SOMNIA_TEST]]: {
    [CONTRACTS_NAMES.SURVEY]:
      process.env.REACT_APP_ENV === "development"
        ? "0x335EB4c94DF9072271eefa2EC3cb2397539BCF5f"
        : "0x335EB4c94DF9072271eefa2EC3cb2397539BCF5f",
    [CONTRACTS_NAMES.SURVEY_NFT]:
      process.env.REACT_APP_ENV === "development"
        ? "0x3686ddd87fd5F634E82C557451AcE6c3CF5C1907"
        : "0x3686ddd87fd5F634E82C557451AcE6c3CF5C1907",
  },
  [CHAIN_IDS[Network.SOMNIA]]: {
    [CONTRACTS_NAMES.SURVEY]:
      process.env.REACT_APP_ENV === "development"
        ? "0x335EB4c94DF9072271eefa2EC3cb2397539BCF5f"
        : "0x335EB4c94DF9072271eefa2EC3cb2397539BCF5f",
    [CONTRACTS_NAMES.SURVEY_NFT]:
      process.env.REACT_APP_ENV === "development"
        ? "0x3686ddd87fd5F634E82C557451AcE6c3CF5C1907"
        : "0x3686ddd87fd5F634E82C557451AcE6c3CF5C1907",
  },
  [CHAIN_IDS[Network.SKALE_TEST]]: {
    [CONTRACTS_NAMES.SURVEY]:
      process.env.REACT_APP_ENV === "development"
        ? "0x910C548F3084113b89E616e12D3285E4625BfD00"
        : "0x80327c8146fd776695562D8385450058E2a510Fd",
    [CONTRACTS_NAMES.SURVEY_NFT]:
      process.env.REACT_APP_ENV === "development"
        ? "0xc28106C78A27445480FacD6e0C81A03d251FB569"
        : "0xc317F7C24114564241Dd607869E2959B02a1BB97",
  },
  [CHAIN_IDS[Network.SKALE]]: {
    [CONTRACTS_NAMES.SURVEY]:
      process.env.REACT_APP_ENV === "development"
        ? "0x910C548F3084113b89E616e12D3285E4625BfD00"
        : "0x80327c8146fd776695562D8385450058E2a510Fd",
    [CONTRACTS_NAMES.SURVEY_NFT]:
      process.env.REACT_APP_ENV === "development"
        ? "0xc28106C78A27445480FacD6e0C81A03d251FB569"
        : "0xc317F7C24114564241Dd607869E2959B02a1BB97",
  },
};

export const PROGRAM_ID =
  process.env.REACT_APP_ENV === "development"
    ? new PublicKey("HL8bnAXM3V4chwBzY2kn9HR2YiZku2Spy4UwPyvueH8X")
    : new PublicKey("BVtKF9WjSk3xPJg4wMpkTkFmwnEgjYzAMHZP2vxYqERP");

export const PROGRAM_NFT_ID =
  process.env.REACT_APP_ENV === "development"
    ? new PublicKey("Df6Q7EwQTMTpcQgY5rbwCc39eBLtfx3ydhScc2kKSV6p")
    : new PublicKey("6rTFpdBNhBsVF64FztjEspEAYsSvh6MR2ewG4Gc2VUbr");

export const SOL_CONTROLLER =
  process.env.REACT_APP_ENV === "development"
    ? new PublicKey("3PuNwQGKZVqvJTN6HVVXc1Ei8JubfFCX7o7j7oYZRpgd")
    : new PublicKey("82BREH7pn9CFUah7JJKqfwqYPaT6Ahto4rQtFEtr6Emt");

export const SOL_MAINNET_RPC = "https://solana-rpc.qstn.us/123facaf24536587e96d81903d7cbc41ffc91465";

export const SKALE_USDC_ADDRESS =
  process.env.REACT_APP_ENV === "development"
    ? "0x2375133AB968C055a137616f53917CF270803eB7"
    : "0x5F795bb52dAC3085f578f4877D450e2929D2F13d";
