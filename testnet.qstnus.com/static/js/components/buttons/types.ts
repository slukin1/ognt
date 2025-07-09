import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  pending?: boolean;
  scale?: Scale;
  variant?: Variant;
  icon?: ReactNode;
  disabled?: boolean;
  children?: ReactNode;
  className?: string;
}

export const variants = {
  PRIMARY: "primary",
  SECONDARY: "secondary",
  SUPER: "super",
} as const;

export const scales = {
  MD: "md",
  SM: "sm",
} as const;

export type Scale = (typeof scales)[keyof typeof scales];
export type Variant = (typeof variants)[keyof typeof variants];
