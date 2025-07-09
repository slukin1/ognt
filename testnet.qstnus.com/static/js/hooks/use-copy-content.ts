import { toast } from "react-hot-toast";

const useCopyContent = () => {
  const copyToClipBoard = async (copyMe?: string) => {
    try {
      if (copyMe) {
        await navigator.clipboard.writeText(copyMe);

        toast.success("Copied!");
      }
    } catch (error) {
      toast.error("Failed!");
    }
  };

  return { copyToClipBoard };
};

export default useCopyContent;
