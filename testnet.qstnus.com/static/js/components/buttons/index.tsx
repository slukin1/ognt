import clsx from "clsx";
import { forwardRef } from "react";

import { Icons } from "components";

import { useTheme } from "context";

import { scalesStyles, getVariantStyles, getVariantStylesText } from "./theme";

import { ButtonProps } from "./types";

const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { className = "", scale = "md", variant = "primary", icon, disabled = false, pending = false, children, ...rest },
  ref,
) {
  const { theme } = useTheme();
  return (
    <button
      ref={ref}
      className={clsx(
        "flex justify-center border-none rounded-xl text-white text text-sm font-semibold min-w-20",
        getVariantStyles(variant, theme),
        scalesStyles[scale],
        className,
      )}
      disabled={disabled || pending}
      type={rest.type}
      {...rest}
    >
      {pending ? (
        <Icons.SpinIcon stroke="white" className="w-5 h-5" />
      ) : (
        <div className="flex items-center gap-2">
          {typeof children === "string" ? (
            <p className={clsx("text sm font-semibold", getVariantStylesText(variant, theme))}>{children}</p>
          ) : (
            children
          )}
          {icon && icon}
        </div>
      )}
    </button>
  );
});

export default Button;
