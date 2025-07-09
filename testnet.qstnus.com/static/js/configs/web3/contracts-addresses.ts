import { address } from "@ton/core";
import { Network } from "./chains";

const contractsAddresses = {};

const tonInitAddress = {
  [Network.TON]: address("UQBVKTzJGgc2ieJmHSvMsCXo0TOJtqX_XtlwNxlygRm4qwcB"),
  [Network.TON_TEST]: address("0QDimmN5xnKUvfNe2QiJk1jYgcIUVEu3mD9eX6KYlg6CAQLP"),
};

export { contractsAddresses, tonInitAddress };
