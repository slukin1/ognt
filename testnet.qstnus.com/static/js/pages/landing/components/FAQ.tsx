import { useTheme } from "context";

import Accordion from "./accordion";

import landingStyles from "../landing.module.scss";

export const FAQ = () => {
  const { theme } = useTheme();
  const bgOverLay = {
    dark: "linear-gradient(180deg,#121113 0%,rgba(24, 24, 27, 0) 7.06%,rgba(24, 24, 27, 0) 48.44%,#121113 100%)",
    light:
      "linear-gradient(180deg, rgba(244, 244, 245, 0.00) 0%, rgba(237, 237, 237, 0.00) 7.06%, rgba(237, 237, 237, 0.00) 48.44%, rgba(244, 244, 245, 0.00) 100%)",
  };
  return (
    <div className={landingStyles.featuredBusinesses}>
      <div className={landingStyles.featuredBusinesses_bg}>
        <img
          src={theme === "dark" ? "/images/overlay-2.svg" : "/images/overlay-2-light.svg"}
          width={100}
          height={100}
          className="object-cover"
          alt={""}
        />
        <div className={landingStyles.featuredBusinesses_bg_overlay} style={{ background: bgOverLay[theme] }} />
      </div>
      <div className={landingStyles.faq}>
        <h2 style={{ textAlign: "center" }}>
          <span style={{ color: "#A855F7" }}>Do you have questions?</span> We have answers.
        </h2>
        <div>
          <Accordion />
        </div>
      </div>
    </div>
  );
};
