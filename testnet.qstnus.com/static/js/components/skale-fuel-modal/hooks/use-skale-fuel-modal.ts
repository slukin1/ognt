import { useState, useEffect, useCallback, useMemo } from "react";
import { useAppDispatch } from "store/store";
import { isErrorResult } from "services";
import { requestDistributeFuel } from "store/user/user-transactions-rewards/actions";
import { useChainId, useAccount } from "wagmi";
import { getBalance } from "@wagmi/core";
import { SkaleWagmiConfigs } from "configs/web3/wagmi-core-configs";
import { SUPPORTED_SKALE_CHAIN_ID } from "configs/web3";
import BigNumber from "bignumber.js";
import { SkaleFuelModalStatuses, SkaleFuelModalProps } from "../types";

const MINIMAL_AMOUNT = new BigNumber(100000000000);

export const useSkaleFuelModal = (props: SkaleFuelModalProps) => {
  const { isOpen, toggleOpen, invalidate } = props || {};
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [currentStatus, setCurrentStatus] = useState<SkaleFuelModalStatuses>(SkaleFuelModalStatuses.INITIALIZATION);

  const chainId = useChainId();
  const { address } = useAccount();
  const dispatch = useAppDispatch();

  const isModalVisible = useMemo(() => {
    if (currentStatus === SkaleFuelModalStatuses.INITIALIZATION) {
      return false;
    }

    if (currentStatus === SkaleFuelModalStatuses.BALANCE_CHECK) {
      return false;
    }

    return isOpen;
  }, [isOpen, currentStatus]);

  const handleCheckBalance = useCallback(async () => {
    if (address && chainId) {
      const balance = await getBalance(SkaleWagmiConfigs, {
        address: address,
      });

      if (balance && balance?.value !== undefined && balance?.value !== null) {
        const amount = new BigNumber(balance.value.toString());

        if (amount.isGreaterThanOrEqualTo(MINIMAL_AMOUNT)) {
          if (invalidate) {
            invalidate();
          }
          toggleOpen();
        } else {
          setCurrentStatus(() => SkaleFuelModalStatuses.DISTRIBUTE_REQUEST);
        }
      }
    }
  }, [address, chainId, invalidate, toggleOpen]);

  const handleDistributionRequest = useCallback(async () => {
    if (address && chainId) {
      const res = await dispatch(requestDistributeFuel({ chainId: chainId.toString(), address: address }));

      if (res.payload && !isErrorResult(res.payload)) {
        setCurrentStatus(() => SkaleFuelModalStatuses.DISTRIBUTE_PENDING);
      } else {
        toggleOpen();
      }
    }
  }, [dispatch, chainId, address, toggleOpen]);

  const handleDistributionCheck = useCallback(async () => {
    if (address && chainId) {
      const balance = await getBalance(SkaleWagmiConfigs, {
        address: address,
      });

      if (balance && balance.value) {
        const amount = new BigNumber(balance.value.toString());
        if (amount.isGreaterThanOrEqualTo(MINIMAL_AMOUNT)) {
          setIsLoading(() => false);
          setCurrentStatus(() => SkaleFuelModalStatuses.ALL_RIGHT);
        }
      }
    }
  }, [address, chainId]);

  const handleFinishFlow = useCallback(async () => {
    if (currentStatus === SkaleFuelModalStatuses.ALL_RIGHT) {
      if (invalidate) {
        invalidate();
      }
      toggleOpen();
    }
  }, [invalidate, toggleOpen, currentStatus]);

  useEffect(() => {
    if (!isOpen && currentStatus !== SkaleFuelModalStatuses.INITIALIZATION) {
      setCurrentStatus(() => SkaleFuelModalStatuses.INITIALIZATION);
      setIsLoading(() => true);
    }
  }, [currentStatus, isOpen]);

  useEffect(() => {
    if (isOpen && currentStatus === SkaleFuelModalStatuses.INITIALIZATION) {
      if (address && chainId && chainId.toString() === SUPPORTED_SKALE_CHAIN_ID.toString()) {
        setCurrentStatus(() => SkaleFuelModalStatuses.BALANCE_CHECK);
      }
    }
  }, [currentStatus, isOpen, chainId, address]);

  useEffect(() => {
    if (isOpen && currentStatus === SkaleFuelModalStatuses.BALANCE_CHECK) {
      handleCheckBalance();
    }
  }, [currentStatus, isOpen]);

  useEffect(() => {
    if (isOpen && currentStatus === SkaleFuelModalStatuses.DISTRIBUTE_REQUEST) {
      handleDistributionRequest();
    }
  }, [currentStatus, isOpen]);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isOpen && currentStatus === SkaleFuelModalStatuses.DISTRIBUTE_PENDING) {
      handleDistributionCheck();

      interval = setInterval(() => {
        handleDistributionCheck();
      }, 5000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [currentStatus, isOpen]);

  useEffect(() => {
    let timeout: NodeJS.Timeout | null = null;

    if (isOpen && currentStatus === SkaleFuelModalStatuses.ALL_RIGHT) {
      timeout = setTimeout(() => {
        handleFinishFlow();
      }, 1500);
    }

    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [currentStatus, isOpen]);

  return { isLoading, currentStatus, props, isOpen, toggleOpen, isModalVisible };
};
