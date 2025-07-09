import { createConfig, http } from "@wagmi/core";
import { skaleEuropa, skaleEuropaTestnet } from "wagmi/chains";

export const SkaleWagmiConfigs =
  process.env.REACT_APP_ENV === "development"
    ? createConfig({
        chains: [skaleEuropaTestnet],
        transports: {
          [skaleEuropaTestnet.id]: http(),
        },
      })
    : createConfig({
        chains: [skaleEuropa],
        transports: {
          [skaleEuropa.id]: http(),
        },
      });
