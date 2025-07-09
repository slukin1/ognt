import { useTheme } from "context";

import headerStyles from "./Header.module.scss";
import { NavItem } from "./NavItem";

import { useAppSelector } from "store/store";

import { getNavItems, getNavItemsAdmin } from "./constants";

export const DesktopNav = () => {
  const { theme } = useTheme();
  const profileData = useAppSelector(state => state.profile.profileData);

  const navItems = profileData?.isAdmin
    ? [...getNavItems(theme, profileData?.type), ...getNavItemsAdmin(theme)]
    : getNavItems(theme, profileData?.type);
  return (
    <nav className={headerStyles.desktopNav}>
      <ul>
        {navItems.map(nav => (
          <NavItem {...nav} key={nav.name} />
        ))}
      </ul>
    </nav>
  );
};
