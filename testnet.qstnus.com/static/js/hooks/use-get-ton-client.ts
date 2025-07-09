import { useEffect, useState } from "react";
import { getHttpEndpoint } from "@orbs-network/ton-access";
import { TonClient } from "@ton/ton";

const network = process.env.REACT_APP_ENV === "development" ? "testnet" : "mainnet";

const useGetTonClient = () => {
  const [tonClient, setTonClient] = useState<TonClient | null>(null);

  useEffect(() => {
    getHttpEndpoint({ network }).then(endpoint => {
      const client = new TonClient({
        endpoint,
      });
      setTonClient(client);
    });
  }, []);

  return { tonClient };
};

export default useGetTonClient;
