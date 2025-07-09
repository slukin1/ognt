import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import clsx from "clsx";

import { Input, Button } from "components";

import { useTheme } from "context";

import { useAppDispatch, useAppSelector } from "store/store";
import { setSurveyGenerateType } from "store/create-survey/survey";
import { hideModal } from "store/modal";
import { createSurveyWithAI } from "store/create-survey/survey/actions";

import { selectCombinedData } from "./selectors";
import { isErrorResult } from "services";
import { ROUTES } from "router/routes";

import { FormInputs } from "./types";
import { CreateSurveyResponse } from "store/create-survey/survey/types";

const GenerateSurveyModal: React.FC = () => {
  const { pending, isQuiz } = useAppSelector(selectCombinedData);

  const { theme } = useTheme();

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const {
    register,
    watch,
    formState: { errors },
  } = useForm<FormInputs>();

  const [keyword, questionCount] = watch(["keyword", "questionCount"]);

  const handleRemoveSurveyType = () => {
    dispatch(hideModal());
    dispatch(setSurveyGenerateType());
  };

  const handleSubmit = () => {
    dispatch(createSurveyWithAI({ keyword, questionCount: +questionCount, isQuiz })).then(res => {
      if (!isErrorResult(res.payload)) {
        const { id } = res.payload as CreateSurveyResponse;
        navigate(`/${ROUTES.business}/${ROUTES.surveys}/${id}/${ROUTES.surveySettings}`);
        handleRemoveSurveyType();
      }
    });
  };

  return (
    <div className="w-full flex flex-col justify-center">
      <p className={clsx("text-sm", theme === "light" ? "text-zinc-600" : "text-zinc-400")}>
        {`Generate a ${isQuiz ? "quiz" : "survey"} using AI (Machine Learning) based on a keyword you select. Try it out!`}
      </p>

      <div className="mt-6 grid grid-cols-12 gap-3">
        <div className="col-span-6 sm:col-span-7">
          <label
            htmlFor="first-name"
            className={clsx("mb-1.5 block text-xs", theme === "light" ? "text-zinc-900" : "text-white")}
          >
            {`About what should be this ${isQuiz ? "quiz" : "survey"}?`}
          </label>
          <Input
            placeholder="type a keyword"
            disabled={pending}
            {...register("keyword", {
              required: true,
              validate: {
                validateentry: value =>
                  /^[\D\w]{4,}$/.test(value) ||
                  "Keyword should contain letters and/or numbers with at least 4 characters long",
              },
            })}
            style={{ color: theme === "light" ? "#09090B" : "white" }}
          />
          {errors.keyword && <span className="p-0 text-xs font-semibold text-red-500">{errors.keyword.message}</span>}
        </div>

        <div className="col-span-6 sm:col-span-5">
          <label
            htmlFor="last-name"
            className={clsx("mb-1.5 block text-xs", theme === "light" ? "text-zinc-900" : "text-white")}
          >
            Questions Number (30 max)
          </label>
          <Input
            placeholder="Number of questions"
            required
            disabled={pending}
            type="number"
            min={1}
            max={30}
            {...register("questionCount", {
              required: true,
              validate: {
                minValue: value => value > 0 || "Must be a least 1",
                maxValue: value => value <= 30 || "Must be at max. 30",
              },
            })}
            style={{ color: theme === "light" ? "#09090B" : "white" }}
          />
          {errors.questionCount && (
            <span className="text-xs font-semibold text-red-500">{errors.questionCount.message}</span>
          )}
        </div>
      </div>

      <div className="mt-5 gap-3 sm:mt-4 sm:flex">
        <Button
          pending={pending}
          disabled={!keyword || !questionCount}
          onClick={handleSubmit}
        >{`Generate ${isQuiz ? "Quiz" : "Survey"}`}</Button>

        <Button variant="super" disabled={pending} onClick={handleRemoveSurveyType}>
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default GenerateSurveyModal;
