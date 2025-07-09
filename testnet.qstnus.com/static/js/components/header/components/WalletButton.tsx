import { Fragment } from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";

import { Avatar } from "components";
import { LogoutIcon } from "components/icons";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@radix-ui/react-icons";

import { useTheme } from "context";

import { useAppSelector } from "store/store";

import { getNavItemsUser, getNavItemsBusiness } from "components/outlets";

import { AccountType } from "store/auth/types";

import walletBtnStyles from "./wallet.module.scss";

const WalletButton: React.FC<{ onLogout: () => Promise<void> }> = ({ onLogout }) => {
  const profileData = useAppSelector(state => state.profile.profileData);
  const { theme } = useTheme();

  const navItems = profileData?.type === AccountType.user ? getNavItemsUser(theme) : getNavItemsBusiness(theme);

  return (
    <Menu as="div" className="relative ml-3">
      <div>
        <Menu.Button className="relative flex rounded-full border-none bg-transparent text-sm">
          <div className={walletBtnStyles.walletBtn}>
            <Avatar imgSrc={profileData?.avatar} scale="sm" />
            <ChevronDownIcon />
          </div>
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          style={{ background: theme === "dark" ? "#1f1f22" : "white" }}
          className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-lg py-0 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none overflow-hidden"
        >
          {navItems.map(({ title, path, icon }) => (
            <div key={title}>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    to={path}
                    className={clsx(
                      active ? (theme === "dark" ? "bg-[#3F3F46]" : "bg-gray-100") : "",
                      "flex px-4 py-2 text-xs text-gray-900",
                    )}
                  >
                    {icon}

                    <span className="ml-3 mt-0.5 font-bold" style={{ color: theme === "dark" ? "white" : "#1f1f22" }}>
                      {title}
                    </span>
                  </Link>
                )}
              </Menu.Item>

              <div className="h-px w-full border border-solid border-zinc-200 dark:border-zinc-700" />
            </div>
          ))}

          <Menu.Item>
            {({ active }) => (
              <div
                onClick={onLogout}
                className={clsx(
                  active ? (theme === "dark" ? "bg-[#3F3F46]" : "bg-gray-100") : "",
                  "flex px-4 py-2 text-xs text-gray-900 cursor-pointer",
                )}
              >
                <LogoutIcon width={20} height={20} mode={theme} />

                <span className="ml-3 mt-0.5 font-bold text-zinc-900 dark:text-white">Logout</span>
              </div>
            )}
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default WalletButton;
