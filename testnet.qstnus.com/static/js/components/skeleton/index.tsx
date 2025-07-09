import { animationStyles } from "./theme";
import { animation as ANIMATION, SkeletonProps, variant as VARIANT } from "./types";
import clsx from "clsx";

const Skeleton: React.FC<SkeletonProps> = ({
  classNames = "",
  animation = ANIMATION.PULSE,
  variant = VARIANT.RECT,
}) => {
  return (
    <div
      className={clsx(
        "block bg-zinc-300 dark:bg-zinc-700",
        variant === VARIANT.CIRCLE ? "rounded-full" : "rounded-xl",
        animationStyles[animation],

        classNames,
      )}
    />
  );
};

export default Skeleton;
