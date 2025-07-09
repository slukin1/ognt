import { Fragment } from "react/jsx-runtime";
import { Menu, Transition } from "@headlessui/react";
import clsx from "clsx";

import { useTheme } from "context";

import { useSurveyTemplates } from "hooks";

import { ROUTES } from "router/routes";

import { MenuParts } from "../constants";

import { Icons } from "components/icons";

import { SurveyTemplateItem } from "store/utils/types";

const SurveyPart: React.FC<{
  setCurrentPart: (arg: MenuParts) => void;
  handleSurveyTypeClick: (arg: string) => void;
}> = ({ setCurrentPart, handleSurveyTypeClick }) => {
  const { theme } = useTheme();

  const { getTemplatesForSurvey, FROM_TEMPLATE, setActiveTemplate } = useSurveyTemplates();

  const handleClickTemplate = (template: SurveyTemplateItem) => {
    setActiveTemplate(template);
    handleSurveyTypeClick(`${ROUTES.createSurvey}?${FROM_TEMPLATE}=true`);
  };

  const renderOptions = () => {
    const templates = getTemplatesForSurvey();

    const options: JSX.Element[] = [];

    let index: number = 0;

    options.push(
      <Menu.Item key={index}>
        {({ active }) => (
          <div
            onClick={e => {
              e.preventDefault();
              setCurrentPart(MenuParts.MAIN);
            }}
            className={clsx(
              active ? (theme === "dark" ? "bg-[#3F3F46]" : "bg-gray-100") : "",
              "flex gap-3 px-4 py-2 text-xs text-gray-900",
            )}
          >
            <Icons.ArrowRightIcon rotate={180} className="mt-1.5 " mode={theme} />
            <span
              className="mt-1.5 whitespace-nowrap font-bold"
              style={{
                color: theme === "dark" ? "white" : "#1f1f22",
              }}
            >
              Back
            </span>
          </div>
        )}
      </Menu.Item>,
    );
    index++;

    options.push(
      <div
        key={index}
        className={clsx(
          "h-[0px] w-full",
          theme === "dark" ? "border border-solid border-[#27272A]" : "border border-solid border-[#E4E4E7]",
        )}
      />,
    );
    index++;

    options.push(
      <Menu.Item key={index}>
        {({ active }) => (
          <div
            onClick={() => handleSurveyTypeClick(ROUTES.createSurvey)}
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
              Create empty survey
            </span>
          </div>
        )}
      </Menu.Item>,
    );
    index++;

    options.push(
      <div
        key={index}
        className={clsx(
          "h-[0px] w-full",
          theme === "dark" ? "border border-solid border-[#27272A]" : "border border-solid border-[#E4E4E7]",
        )}
      />,
    );
    index++;

    templates.forEach(template => {
      options.push(
        <Menu.Item key={index}>
          {({ active }) => (
            <div
              onClick={() => handleClickTemplate(template)}
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
                {template.title}
              </span>
            </div>
          )}
        </Menu.Item>,
      );
      index++;

      options.push(
        <div
          key={index}
          className={clsx(
            "h-[0px] w-full",
            theme === "dark" ? "border border-solid border-[#27272A]" : "border border-solid border-[#E4E4E7]",
          )}
        />,
      );
      index++;
    });

    return options;
  };

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
        {renderOptions()}
      </Menu.Items>
    </Transition>
  );
};

export default SurveyPart;
