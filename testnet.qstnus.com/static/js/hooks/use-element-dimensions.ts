import { useState, useEffect } from "react";

interface ElementDimensions {
  width: number | undefined;
  height: number | undefined;
}

export const useElementDimensions = (id: string) => {
  const [dimensions, setDimensions] = useState<ElementDimensions>({ width: 0, height: 0 });

  const updateDimensions = () => {
    const element = document.getElementById(id) as HTMLElement;
    if (element) {
      setDimensions({
        width: element.offsetWidth,
        height: element.offsetHeight,
      });
    }
  };

  useEffect(() => {
    updateDimensions();

    window.addEventListener("resize", updateDimensions);

    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  return dimensions;
};

export default useElementDimensions;
