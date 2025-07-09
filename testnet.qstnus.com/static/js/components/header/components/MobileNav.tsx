import { useTheme } from "context";
import { TextAlignLeftIcon } from "@radix-ui/react-icons";
import { DropdownMenu, IconButton } from "@sekmet/radix-ui-themes";

import { NavItem } from "./NavItem";

import { useAppSelector } from "store/store";

import { getNavItems, getNavItemsAdmin } from "./constants";

import headerStyles from "./Header.module.scss";

export const MobileNav = () => {
  const profileData = useAppSelector(state => state.profile.profileData);

  const { theme } = useTheme();

  const navItems = profileData?.isAdmin
    ? [...getNavItems(theme, profileData?.type), ...getNavItemsAdmin(theme)]
    : getNavItems(theme, profileData?.type);
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className="mobile">
        <IconButton radius="full" className={headerStyles.hambtn}>
          <TextAlignLeftIcon transform="scale(1.5)" />
        </IconButton>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content className="mobile">
        <nav className={headerStyles.mobileNav}>
          <ul>
            {navItems.map(nav => (
              <NavItem {...nav} key={nav.name} />
            ))}
          </ul>
          {/* <div style={{ marginTop: "1.5rem" }}>
            <Input
              prefixIcon={<img height={20} width={20} alt="h" src={"/images/search-sm.svg"} />}
              width={"100%"}
              placeholder="Search businesses, users"
            />
          </div> */}
        </nav>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};
