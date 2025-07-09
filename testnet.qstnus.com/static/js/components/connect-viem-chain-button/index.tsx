/* eslint-disable */
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useEffect, useState } from "react";
import { useDisconnect, useSwitchChain, useAccount } from "wagmi";

import { Button, Icons } from "components";

import { useTheme } from "context";

import { SHORT_CHAIN_NAMES } from "configs/web3";

import { Variant } from "components/buttons/types";
import { useAppDispatch } from "store/store";
import { resetRootstockProofState } from "store/zkp/rootstock-proof";

const ConnectViemNetwork: React.FC<{ chainId: number; variant?: Variant; pending?: boolean }> = ({
  chainId,
  variant = "secondary",
  pending = false,
}) => {
  const { disconnect: disconnectRootstock } = useDisconnect();
  const dispatch = useAppDispatch();
  const { switchChain } = useSwitchChain();

  const handleDisconnectRootstock = () => {
    disconnectRootstock();
    dispatch(resetRootstockProofState());
  };

  const handleSwitchChain = () => {
    switchChain({ chainId });
  };

  const { theme } = useTheme();
  const [provider, setProvider] = useState<any>();
  const { connector } = useAccount();

  const handleCheckProvider = async () => {
    try {
      const provider = (await connector?.getProvider()) as any;

      setProvider(provider);
    } catch (error) {
      console.error("Error in handleCheckProvider", error);
    }
  };

  useEffect(() => {
    handleCheckProvider();
  }, [connector]);

  useEffect(() => {
    if (provider?.isPhantom && provider?.isMetaMask) {
      handleDisconnectRootstock();
    }
  }, [provider]);

  return (
    <ConnectButton.Custom>
      {({ chain, account, mounted, openConnectModal }) => {
        if (!mounted || !account || !chain) {
          return (
            <Button
              pending={pending}
              variant={variant}
              icon={<Icons.LinkNetworkIcon stroke={theme === "dark" || variant === "primary" ? "white" : "#09090B"} />}
              onClick={openConnectModal}
            >
              Connect Wallet
            </Button>
          );
        } else if (chain && chain.id !== chainId) {
          return (
            <Button pending={pending} variant={variant} onClick={handleSwitchChain}>
              {`Swith to ${SHORT_CHAIN_NAMES[chainId]}`}
            </Button>
          );
        } else {
          return (
            <Button
              pending={pending}
              variant={variant}
              icon={<Icons.LinkBrokenIcon stroke={theme === "dark" || variant === "primary" ? "white" : "#09090B"} />}
              onClick={handleDisconnectRootstock}
            >
              Disconnect
            </Button>
          );
        }
      }}
    </ConnectButton.Custom>
  );
};

export default ConnectViemNetwork;
