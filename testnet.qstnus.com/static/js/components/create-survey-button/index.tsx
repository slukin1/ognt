import { useState, useRef } from "react";
import { Menu } from "@headlessui/react";
import { Button } from "@sekmet/radix-ui-themes";
import { useNavigate } from "react-router-dom";

import { useOutsideClick, useSurveyTemplates } from "hooks";

import { MainPart, SurveyPart, QuizPart } from "./components";

import { useAppDispatch } from "store/store";
import { showModal } from "store/modal";
import { setSurveyGenerateType, resetCreateSurveyState } from "store/create-survey/survey";

import { ROUTES } from "router/routes";

import { SurveyGenerateTypeEnum } from "store/create-survey/survey/types";

import { ModalProps } from "store/modal/types";
import { GenerateSurveyModalProps } from "components/modals/components/generate-survey-modal/types";

import { MenuParts } from "./constants";

const CreateSurveyButton: React.FC<{ buttonText?: string }> = ({ buttonText = "Create" }) => {
  const [currentPart, setCurrentPart] = useState<MenuParts>(MenuParts.MAIN);
  const menuRef = useRef<HTMLDivElement>(null);

  const refreshMenu = () => {
    setTimeout(() => {
      setCurrentPart(MenuParts.MAIN);
    }, 500);
  };

  useOutsideClick(menuRef, refreshMenu);

  useSurveyTemplates();

  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const handleSurveyType = (type: SurveyGenerateTypeEnum) => {
    refreshMenu();
    dispatch(setSurveyGenerateType(type));
    const _showModal = showModal as ModalProps<GenerateSurveyModalProps>;

    dispatch(
      _showModal({
        modalName: "generateSurveyModal",
        // clickOutsideHandler: () => {},
        title: `Generate a ${type === SurveyGenerateTypeEnum.campaign ? "Survey" : "Quiz"}`,
        props: {
          isQuiz: type === SurveyGenerateTypeEnum.quiz,
        },
      }),
    );
  };

  // ?fromTemplate=true

  const handleSurveyTypeClick = (path: string) => {
    refreshMenu();
    dispatch(resetCreateSurveyState());
    navigate(`/${ROUTES.business}/${ROUTES.surveys}/${path}`);
  };

  return (
    <Menu as="div" className="relative z-1 rounded-lg " ref={menuRef}>
      <Menu.Button
        size={"3"}
        as={Button}
        className="light-button-main relative flex rounded-full border-none bg-transparent"
        style={{
          backgroundColor: "#A855F7",
          borderRadius: "12px",
          padding: "12px 16px",
          fontSize: "12px",
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        <div className="desktop">{buttonText}</div>
        <svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M5.99967 1.33301V10.6663M1.33301 5.99967H10.6663"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Menu.Button>
      {currentPart === MenuParts.MAIN && (
        <MainPart setCurrentPart={setCurrentPart} handleSurveyType={handleSurveyType} />
      )}
      {currentPart === MenuParts.SURVEY && (
        <SurveyPart setCurrentPart={setCurrentPart} handleSurveyTypeClick={handleSurveyTypeClick} />
      )}
      {currentPart === MenuParts.QUIZ && (
        <QuizPart setCurrentPart={setCurrentPart} handleSurveyTypeClick={handleSurveyTypeClick} />
      )}
    </Menu>
  );
};

export default CreateSurveyButton;
