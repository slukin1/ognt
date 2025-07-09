import { TonConnectError } from "@tonconnect/ui-react";
import { toast } from "react-hot-toast";

export const handleTonTransactionError = (error: TonConnectError) => {
  if (error.message.includes("Reject request")) {
    toast.error("You rejected the transaction");
  } else {
    toast.error("Something went wrong. Please, try again.");
  }
};
