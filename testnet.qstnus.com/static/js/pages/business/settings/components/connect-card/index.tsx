import { CopyIcon } from "@radix-ui/react-icons";
import { Avatar, Button, Icons } from "components";

import { useCopyContent } from "hooks";

import { useTheme } from "context";

import { truncateHash } from "configs/web3";

import { NetworkCardProps } from "./types";

const NetworkCard: React.FC<NetworkCardProps> = ({
  logoSrc,
  description,
  title,
  networkAddress,
  isMagicConnected = false,
  isDisabled = false,
  isConnected = false,
  connectButton: ConnectButton,
  handleConnectClick,
  chainId,
}) => {
  const { copyToClipBoard } = useCopyContent();

  const copySurveyLink = async (address: string) => {
    return await copyToClipBoard(address);
  };
  const { theme } = useTheme();
  return (
    <div className="rounded-xl border border-solid border-zinc-300 dark:border-zinc-800 p-4 flex flex-col w-full">
      <div className="flex gap-4 items-start md:min-h-[240px] 2xl:min-h-[120px]">
        <Avatar imgSrc={logoSrc} scale="lg" />
        <div className="flex flex-col gap-1">
          <p className="font-medium text-zinc-900 dark:text-white">{title}</p>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">{description}</p>
        </div>
      </div>

      <div className="h-px w-full bg-zinc-300 dark:bg-zinc-800 my-4" />

      <div className="flex flex-col gap-2">
        {networkAddress.map(({ title, address }, idx) => (
          <div key={`${address}-${title}-${idx}`} className="flex justify-between">
            <p className="font-medium text-zinc-900 dark:text-white">{title}</p>
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => copySurveyLink(address)}>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">{truncateHash(address)}</p>
              <CopyIcon />
            </div>
          </div>
        ))}
      </div>

      {!!networkAddress.length && <div className="h-px w-full bg-zinc-300 dark:bg-zinc-800 my-4" />}

      <div>
        {ConnectButton && chainId ? (
          <ConnectButton chainId={chainId} />
        ) : (
          <Button
            onClick={handleConnectClick}
            disabled={isDisabled}
            variant="secondary"
            icon={
              isConnected ? (
                <Icons.LinkBrokenIcon stroke={theme === "light" ? "#09090B" : "white"} />
              ) : (
                <Icons.LinkNetworkIcon stroke={theme === "light" ? "#09090B" : "white"} />
              )
            }
          >
            {isConnected ? (isMagicConnected ? "Logout" : "Disconnect") : "Connect"}
          </Button>
        )}
      </div>
    </div>
  );
};

export default NetworkCard;
