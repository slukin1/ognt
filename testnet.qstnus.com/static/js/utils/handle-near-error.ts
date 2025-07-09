import { toast } from "react-hot-toast";

export const handleNearError = (error: string) => {
  if (error.includes("REQUEST_NOT_SIGNED")) {
    toast.error("You rejected the transaction");
  } else {
    toast.error("Something went wrong. Please, try again.");
  }
};
