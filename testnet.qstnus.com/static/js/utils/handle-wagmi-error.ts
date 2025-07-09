import { toast } from "react-hot-toast";

export const handleWagmiError = (error: string) => {
  if (error.includes("User rejected the request")) {
    toast.error("You rejected the transaction");
  } else {
    toast.error("Something went wrong. Please, try again.");
  }
};
