import { useState, useEffect } from "react";
import { toast } from "react-hot-toast";

import { isErrorResult } from "services";

import { useAppSelector, useAppDispatch } from "store/store";
import { getReclaimProof, verifyReclaim } from "store/zkp/reclaim-proof/actions";
import { getProfile } from "store/profile/actions";

import { useReclaimCheck } from "hooks/use-reclaim-check";

import type { ReclaimProofResponse } from "store/zkp/reclaim-proof/types";

export const useReclaim = () => {
  const statusUrl = useAppSelector(state => state.reclaimProof.statusUrl);
  const requestUrl = useAppSelector(state => state.reclaimProof.requestUrl);
  const requestPending = useAppSelector(state => state.reclaimProof.pending);
  const session = useAppSelector(state => state.reclaimProof.session);

  const [isLoading, setIsLoading] = useState(false);
  const [isChecking, setIsChecking] = useState(false);

  const dispatch = useAppDispatch();
  useReclaimCheck(isChecking);

  useEffect(() => {
    if (isChecking && session && session.session && session.session.proofs && session.session.proofs.length > 0) {
      dispatch(verifyReclaim(session.session.proofs[0]))
        .then(() => {
          dispatch(getProfile());
          toast.success("Successfully verified!");
        })
        .catch(err => {
          console.error("Error verifying Reclaim proof: ", err);
          toast.error("Reclaim verifying error");
        })
        .finally(() => {
          setIsChecking(false);
        });
    }
  }, [session, session?.session, session?.session?.proofs]);

  const fetchReclaimProof = async () => {
    try {
      setIsLoading(true);
      const signatureRes = await dispatch(getReclaimProof());
      if (signatureRes && signatureRes.payload && !isErrorResult(signatureRes.payload)) {
        const { statusUrl, requestUrl } = signatureRes.payload as ReclaimProofResponse;
        if (statusUrl && requestUrl) {
          setIsLoading(false);
          return { statusUrl, requestUrl };
        } else {
          throw new Error("Error signing Reclaim proof");
        }
      } else {
        throw new Error("Error signing Reclaim proof");
      }
    } catch (error) {
      setIsLoading(false);
      console.error("Error signing Reclaim proof: ", error);
      return { statusUrl: null, requestUrl: null };
    }
  };

  return {
    statusUrl,
    requestUrl,
    fetchReclaimProof,
    reclaimSession: session,
    setReclaimCheck: setIsChecking,
    isLoading: isLoading || requestPending || isChecking,
  };
};
