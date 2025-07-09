import { BaseError, ContractFunctionRevertedError } from "viem";
import { toast } from "react-hot-toast";

export const handleViemSimulateError = (err: unknown) => {
  if (err instanceof BaseError) {
    const revertError = err.walk(err => err instanceof ContractFunctionRevertedError);
    if (revertError instanceof ContractFunctionRevertedError) {
      const contractFunctionError = revertError.data;
      if (contractFunctionError && contractFunctionError.args && contractFunctionError.args.length > 0) {
        const errorMessage = contractFunctionError.args[0];
        toast.error(`${errorMessage}`);
      } else if (err.shortMessage && err.shortMessage.includes("insufficient funds")) {
        toast.error("You don't have enough funds to create survey");
      }
    } else {
      toast.error("Transactions can't be processed");
    }
  } else {
    toast.error("Transactions can't be processed");
  }
};
