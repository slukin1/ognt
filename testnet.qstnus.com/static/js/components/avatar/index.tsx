import clsx from "clsx";

import { scalesStyles, scalesTextStyles } from "./theme";

import { useAppSelector } from "store/store";

import { AvatarProps } from "./types";

const Avatar: React.FC<AvatarProps> = ({ imgSrc, fallback, scale = "md", handleClick }) => {
  const profileData = useAppSelector(state => state.profile.profileData);
  const handleClickAvatar = () => {
    handleClick?.();
  };

  return (
    <div onClick={handleClickAvatar}>
      <div
        className={clsx(scalesStyles[scale], "rounded-full", !imgSrc ? "flex items-center justify-center" : "")}
        style={{ background: imgSrc ? `url(${imgSrc}) 50% 50% / cover no-repeat` : "#EDE3F5" }}
      >
        {!imgSrc && (
          <p className={clsx(scalesTextStyles[scale], "text-purple-500 font-medium")}>
            {fallback ? fallback : profileData?.displayName ? profileData?.email[0].toUpperCase() : "A"}
          </p>
        )}
      </div>
    </div>
  );
};

export default Avatar;
