import { Fragment } from "react/jsx-runtime";
import { Menu, Transition } from "@headlessui/react";
import clsx from "clsx";

import { Icons } from "components/icons";

import { useTheme } from "context";

import { SurveyGenerateTypeEnum } from "store/create-survey/survey/types";

import { MenuParts } from "../constants";

const MainPart: React.FC<{
  handleSurveyType: (arg: SurveyGenerateTypeEnum) => void;
  setCurrentPart: (arg: MenuParts) => void;
}> = ({ handleSurveyType, setCurrentPart }) => {
  const { theme } = useTheme();

  return (
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
        className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-lg py-0 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
      >
        <Menu.Item>
          {({ active }) => (
            <div
              onClick={e => {
                e.preventDefault();
                setCurrentPart(MenuParts.QUIZ);
              }}
              className={clsx(
                active ? (theme === "dark" ? "bg-[#3F3F46]" : "bg-gray-100") : "",
                "flex px-4 py-3 text-xs text-gray-900",
              )}
            >
              <span
                className="font-bold"
                style={{
                  color: theme === "dark" ? "white" : "#1f1f22",
                }}
              >
                Create Quiz
              </span>
              <Icons.ArrowRightIcon mode={theme} />
            </div>
          )}
        </Menu.Item>
        <div
          className={clsx(
            "h-[0px] w-full",
            theme === "dark" ? "border border-solid border-[#27272A]" : "border border-solid border-[#E4E4E7]",
          )}
        />
        <Menu.Item>
          {({ active }) => (
            <div
              onClick={e => {
                e.preventDefault();
                setCurrentPart(MenuParts.SURVEY);
              }}
              className={clsx(
                active ? (theme === "dark" ? "bg-[#3F3F46]" : "bg-gray-100") : "",
                "flex px-4 py-3 text-xs text-gray-900",
              )}
            >
              <span
                className="font-bold"
                style={{
                  color: theme === "dark" ? "white" : "#1f1f22",
                }}
              >
                Create Survey
              </span>
              <Icons.ArrowRightIcon mode={theme} />
            </div>
          )}
        </Menu.Item>

        <div
          className={clsx(
            "h-[0px] w-full",
            theme === "dark" ? "border border-solid border-[#27272A]" : "border border-solid border-[#E4E4E7]",
          )}
        />
        <Menu.Item>
          {({ active }) => (
            <div
              onClick={() => handleSurveyType(SurveyGenerateTypeEnum.quiz)}
              className={clsx(
                active ? (theme === "dark" ? "bg-[#3F3F46]" : "bg-gray-100") : "",
                "flex px-4 py-2 text-xs text-gray-900",
              )}
            >
              <span
                className="mr-3 mt-1.5 font-bold"
                style={{
                  color: theme === "dark" ? "white" : "#1f1f22",
                }}
              >
                Create Quiz
              </span>

              <Icons.CreateAIIcon />
            </div>
          )}
        </Menu.Item>

        <div
          className={clsx(
            "h-[0px] w-full",
            theme === "dark" ? "border border-solid border-[#27272A]" : "border border-solid border-[#E4E4E7]",
          )}
        />
        <Menu.Item>
          {({ active }) => (
            <div
              onClick={() => handleSurveyType(SurveyGenerateTypeEnum.campaign)}
              className={clsx(
                active ? (theme === "dark" ? "bg-[#3F3F46]" : "bg-gray-100") : "",
                "flex px-4 py-2 text-xs text-gray-900",
              )}
            >
              <span
                className="mt-1.5 whitespace-nowrap font-bold"
                style={{
                  color: theme === "dark" ? "white" : "#1f1f22",
                }}
              >
                Create Survey
              </span>

              <Icons.CreateAIIcon />
            </div>
          )}
        </Menu.Item>
      </Menu.Items>
    </Transition>
  );
};

export default MainPart;
