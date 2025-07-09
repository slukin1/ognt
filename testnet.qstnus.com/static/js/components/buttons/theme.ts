import { variants, scales, Variant } from "./types";

export const getVariantStyles = (variant: Variant, theme: "light" | "dark") => {
  return {
    [variants.PRIMARY]: "bg-purple-500 hover:bg-purple-400",
    [variants.SECONDARY]: `${theme === "light" ? "bg-white hover:bg-zinc-100" : "dark:bg-zinc-800 hover:dark:bg-zinc-700"}`,
    [variants.SUPER]: `${theme === "light" ? "bg-white hover:bg-zinc-100" : "bg-zinc-900 hover:bg-zinc-800"}`,
  }[variant];
};

export const getVariantStylesText = (variant: Variant, theme: "light" | "dark") => {
  return {
    [variants.PRIMARY]: " text-white",
    [variants.SECONDARY]: `${theme === "light" ? "text-zinc-900" : "dark:text-white"}`,
    [variants.SUPER]: `${theme === "light" ? "text-zinc-900" : "text-white"}`,
  }[variant];
};

export const scalesStyles = {
  [scales.MD]: "py-3 px-4",
  [scales.SM]: "py-3 px-4",
};
