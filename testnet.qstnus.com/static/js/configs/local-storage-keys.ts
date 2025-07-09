import packages from "../../package.json";

const LOCAL_STORAGE_KEYS = {
  theme: `${packages.name}_theme`,
  token: `${packages.name}_token`,
  language: `${packages.name}_language`,
  solanaWallet: `${packages.name}_solana_wallet`,
  rootstockToken: `${packages.name}_rootstock_token`,
  rootstockWallet: `${packages.name}_rootstock_wallet`,
  kakarotToken: `${packages.name}_kakarot_token`,
  kakarotWallet: `${packages.name}_kakarot_wallet`,
  bobaToken: `${packages.name}_boba_token`,
  bobaWallet: `${packages.name}_boba_wallet`,
  somniaToken: `${packages.name}_somnia_token`,
  somniaWallet: `${packages.name}_somnia_wallet`,
  skaleToken: `${packages.name}_skale_token`,
  skaleWallet: `${packages.name}_skale_wallet`,
  tonProofToken: `${packages.name}_ton_proof_token`,
  solanaToken: `${packages.name}_solana_token`,
  solanaPublicKey: `${packages.name}_solana_wallet`,
  nearToken: `${packages.name}_near_token`,
  ghostToken: `${packages.name}_ghost_token`,
  ghostReward: `${packages.name}_ghost_rewarded`,
};

export default LOCAL_STORAGE_KEYS;
