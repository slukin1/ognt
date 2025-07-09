export type AvatarProps = {
  imgSrc?: string;
  fallback?: string;
  scale?: Scale;
  handleClick?: () => void;
};

export const scales = {
  XS: "xs",
  SM: "sm",
  MD: "md",
  LG: "lg",
  XL: "xl",
  XXL: "2xl",
} as const;

export type Scale = (typeof scales)[keyof typeof scales];
