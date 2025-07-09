import { useEffect } from "react";

export const useMagicVisibility = () => {
  useEffect(() => {
    const iframe = document.querySelector(".magic-iframe") as HTMLElement;

    if (!iframe) return;

    const handleVisibilityChange = () => {
      const computedStyle = window.getComputedStyle(iframe);
      const visibility = computedStyle.getPropertyValue("visibility");

      if (visibility === "hidden") {
        iframe.style.display = "none";
      } else if (visibility === "visible") {
        iframe.style.display = "block";
      }
    };

    const observer = new MutationObserver(() => {
      handleVisibilityChange();
    });

    observer.observe(iframe, {
      attributes: true,
      attributeFilter: ["style", "class"],
    });

    handleVisibilityChange();

    return () => {
      observer.disconnect();
    };
  }, []);
};
