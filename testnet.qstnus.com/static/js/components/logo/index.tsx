import { Link } from "react-router-dom";

import logoStyles from "./Logo.module.scss";

export const Logo = () => {
  return (
    <Link to="/">
      <div className={logoStyles.logo}>
        <img src={"/images/QSTN_logo.svg"} height={40} width={26} alt="QSTN LOGO" />

        <span className={logoStyles.logoText}>qstn</span>
      </div>
    </Link>
  );
};
