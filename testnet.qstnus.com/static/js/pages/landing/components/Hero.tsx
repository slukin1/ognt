import { Link } from "react-router-dom";

import { Button } from "@sekmet/radix-ui-themes";
import { Icons } from "components";

import { useTheme } from "context";

import { themeColors } from "theme";
import { ROUTES } from "router/routes";

import landingStyles from "../landing.module.scss";

export const Hero = () => {
  const { theme } = useTheme();

  const bgOverLay = {
    dark: "linear-gradient(180deg,#121113 0%,rgba(24, 24, 27, 0) 7.06%,rgba(24, 24, 27, 0) 48.44%,#121113 100%)",
    light:
      "linear-gradient(180deg, rgba(244, 244, 245, 0.00) 0%, rgba(237, 237, 237, 0.00) 7.06%, rgba(237, 237, 237, 0.00) 48.44%, rgba(244, 244, 245, 0.00) 100%)",
  };

  const handleBchLogos = () => {
    return (
      <div className={landingStyles.blockchainsLogos}>
        <img src="/images/chain_images/rootstockLogo.svg" alt="Rootstock" style={{ transform: "scale(0.9)" }} />
        <img src="/images/skale-logo.svg" alt="TON" />
        <img src="/images/polygon.png" alt="MATIC" />
        <img src="/images/chain_images/SOL.svg" alt="Solana" />
        <img src="/images/near-coin.svg" alt="Near" />
        <small
          style={{
            color: themeColors[theme].text,
            backgroundColor: themeColors[theme].base0,
            border: `1px solid ${themeColors[theme].cinc}`,
          }}
          className={landingStyles.moreBlockchains}
        >
          +2
        </small>
      </div>
    );
  };

  return (
    <div className={landingStyles.landing_heroSection}>
      <div
        className={landingStyles.landing_heroSection_bg}
        style={{
          width: "100%",
          height: "100%",
          background: `url(${theme === "dark" ? "/images/heroImg.svg" : "/images/overlay.svg"})`,
        }}
      >
        <div className={landingStyles.landing_heroSection_bg_overlay} style={{ background: bgOverLay[theme] }} />
      </div>
      <div className={landingStyles.landing_heroSection_content}>
        <div className={landingStyles.poweredBy}>
          <small style={{ color: themeColors[theme].cinc }}> Powered by </small>
          <img src={theme === "dark" ? "/images/web3-logo-dark.svg" : "/images/web3-logo-light.svg"} alt="QSTN" />
        </div>

        {handleBchLogos()}

        <div className={landingStyles.highlights}>
          <h2>Unlock Insights with</h2>
          <h2>
            Engaging <span style={{ background: "#A855F7", color: "#fff" }}>Surveys</span>{" "}
            <span>
              &
              <span className={landingStyles.lineIllustration}>
                <Icons.Lines />
              </span>
            </span>
          </h2>
          <h2>
            <span style={{ background: "#3DD69E", color: "#09090B" }}>
              <span className={landingStyles.planeIllustration}>
                <Icons.PlanesIcons />
              </span>
              Rewarding
            </span>{" "}
            Participation
          </h2>
        </div>

        <div className={landingStyles.bottomText}>
          <p style={{ color: themeColors[theme].text2 }}>
            Embark on a discovery journey with QSTN-where opinions gain value and participation pays off. Voice your
            thoughts, reap rewards, and take your engagement to the next level
          </p>
        </div>

        <div className={landingStyles.bottomBtn}>
          <Link to={`/${ROUTES.discover}`}>
            <Button size={"4"}>Get Started it&apos;s free</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
