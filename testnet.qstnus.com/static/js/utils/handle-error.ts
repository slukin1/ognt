import { ErrorResult } from "services/types";

import { toast } from "react-hot-toast";

export const handleError = (err: ErrorResult) => {
  if (err.message.includes("destination account needs to have at least one of the following capabilities")) {
    toast.error("Please complete the Stripe setup in the 'Settings' tab to receive reward.");

    return false;
  }
  return true;
};
