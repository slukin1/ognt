import clsx from "clsx";
import { useAccount, useDisconnect } from "wagmi";
import { useWallet } from "@solana/wallet-adapter-react";

import { MobileNav } from "./MobileNav";
import { LogoutIcon } from "components/icons";
import { DesktopNav } from "./DesktopNav";
import WalletButton from "./WalletButton";
import { CreateSurveyButton, Logo, Skeleton } from "components";
import { Button, Separator } from "@sekmet/radix-ui-themes";

import { useMagic, useTheme, useTonContext, useNearContext } from "context";

import { useNavigateWIthQuery } from "hooks";

import { useAppDispatch, useAppSelector } from "store/store";
import { resetStore } from "services/axios";
import { logoutUser } from "store/auth/actions";

import { BLOCK_ID } from "configs";
import { themeColors } from "theme";
import { ROUTES } from "router/routes";
import { truncateHash } from "configs/web3";

import { AccountType } from "store/auth/types";
import { AccountStatus } from "store/profile/types";

import headerStyles from "./Header.module.scss";

// TODO: Finish header when login flow will be done
export const DesktopHeader = () => {
  const { theme } = useTheme();
  const profileData = useAppSelector(state => state.profile.profileData);
  const pending = useAppSelector(state => state.profile.pending);
  const { publicAddress, magicLoading, handleShowUI, handleDisconnect } = useMagic();
  const { disconnect } = useDisconnect();
  const { chainId } = useAccount();
  const { disconnectTon } = useTonContext();
  const { connectedAccount: nearConnectedAccount, disconnectNear } = useNearContext();
  const { disconnect: disconnectSolana, connected } = useWallet();
  const { navigateWithQuery } = useNavigateWIthQuery();

  const dispatch = useAppDispatch();

  const onClickAddress = async (address: string) => {
    await handleShowUI();
    await navigator.clipboard.writeText(address);
  };

  const onLogout = async () => {
    await handleDisconnect();
    resetStore();
    dispatch(logoutUser());
    disconnectTon();
    if (chainId) {
      disconnect();
    }
    if (connected) {
      disconnectSolana();
    }
    if (nearConnectedAccount) {
      disconnectNear();
    }
  };

  const handleLoginNavigate = () => {
    navigateWithQuery(`/${ROUTES.login}`);
  };

  const handleSignUpNavigate = () => {
    navigateWithQuery(`/${ROUTES.createAccount}`);
  };

  return (
    <div id={BLOCK_ID.header} className={headerStyles.desktopHeader} style={{ background: themeColors[theme].body }}>
      <div className={headerStyles.leftDesktopNav}>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          {profileData && profileData.status === AccountStatus.completed ? <MobileNav /> : null}
          <Logo />
        </div>
        {profileData && profileData.status === AccountStatus.completed ? <DesktopNav /> : null}
      </div>
      {pending ? (
        <div className="flex gap-2">
          <Skeleton classNames="min-h-10 w-10 md:w-24 inline-flex" />

          <Skeleton classNames="hidden min-h-10 w-[280px] md:inline-flex" />

          <Skeleton classNames="min-h-10 w-[87px] inline-flex" />
        </div>
      ) : profileData?.id ? (
        <div className={headerStyles.rightDesktopNav}>
          {profileData?.type === AccountType.business && profileData?.status === AccountStatus.completed && (
            <CreateSurveyButton />
          )}

          {magicLoading ? (
            <Skeleton classNames="hidden min-h-10 w-[280px] md:inline-flex" />
          ) : (
            publicAddress && (
              <div className="flex items-center">
                <section
                  className={clsx(
                    "hidden h-full min-h-[42px] items-center rounded-xl sm:flex",
                    theme === "dark" ? "bg-[#1F1F22]" : "bg-white",
                  )}
                >
                  <div className="inline-flex h-10 items-center justify-center gap-4 rounded-xl px-4 py-3">
                    <div
                      className={clsx(
                        "cursor-pointer text-sm font-semibold leading-tight",
                        theme === "dark" ? "text-white" : "text-[#09090B]",
                      )}
                      onClick={() => onClickAddress(publicAddress)}
                    >
                      {truncateHash(publicAddress)}
                    </div>

                    <Separator
                      orientation="vertical"
                      style={{ height: "100%" }}
                      className={clsx(
                        "h-[0px] w-5 origin-top-left rotate-90 border",
                        theme === "dark" ? "border-[#F4F4F5]" : "border-[#09090B]",
                      )}
                    />

                    <button className="m-0 border-0 bg-transparent p-0" onClick={onLogout}>
                      <div className="flex h-4 w-4 items-center justify-center">
                        <LogoutIcon mode={theme} />
                      </div>
                    </button>
                  </div>
                </section>
              </div>
            )
          )}
          <WalletButton onLogout={onLogout} />
        </div>
      ) : (
        <div className="flex items-center justify-start gap-2">
          <Button
            onClick={handleLoginNavigate}
            className="h-24 w-24 rounded-2xl"
            style={{
              padding: "21px 21px",
              borderRadius: "12px",
              cursor: "pointer",
              fontSize: "14px",
              fontWeight: "semi-bold",
              backgroundColor: theme === "dark" ? "#18181B" : "#FFFFFF",
              color: theme === "dark" ? "white" : "black",
            }}
          >
            Login
          </Button>

          <Button
            onClick={handleSignUpNavigate}
            className="h-24 w-24 rounded-2xl"
            style={{
              padding: "21px 21px",
              borderRadius: "12px",
              cursor: "pointer",
              fontSize: "14px",
              fontWeight: "semi-bold",
              backgroundColor: "#A855F7",
            }}
          >
            Sign up
          </Button>
        </div>
      )}
    </div>
  );
};
