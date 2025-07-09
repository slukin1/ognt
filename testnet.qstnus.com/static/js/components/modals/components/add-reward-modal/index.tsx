import React from "react";
import { useForm } from "react-hook-form";
import clsx from "clsx";
import { toast } from "react-hot-toast";

import { Input, Button } from "components";

import { useTheme } from "context";

import { useAppDispatch, useAppSelector } from "store/store";
import { setSurveyGenerateType } from "store/create-survey/survey";
import { hideModal } from "store/modal";
import { addPaymentAnsrForSurvey } from "store/create-survey/survey/actions";
import { getAdminSurveys } from "store/admin/actions";

import { selectCombinedData } from "./selectors";
import { isErrorResult } from "services";

import { FormInputs } from "./types";

const AddRewardModal: React.FC = () => {
  const { pending, surveyId, isQuiz, name, adminSurveyPayload } = useAppSelector(selectCombinedData);

  const { pageOrder, pageOrderBy, statuses, isPremium, search, tagsIds } = adminSurveyPayload;

  const { theme } = useTheme();

  const dispatch = useAppDispatch();

  const {
    register,
    watch,
    formState: { errors },
  } = useForm<FormInputs>();

  const [amount, participantLimit] = watch(["amount", "participantLimit"]);

  const handleRemoveSurveyType = () => {
    dispatch(hideModal());
    dispatch(setSurveyGenerateType());
  };

  const handleSubmit = () => {
    dispatch(
      addPaymentAnsrForSurvey({
        surveyId,
        data: {
          participantLimit: +participantLimit,
          amount,
        },
      }),
    ).then(res => {
      if (!isErrorResult(res.payload)) {
        toast.success("Tou successfully added reward");
        dispatch(
          getAdminSurveys({
            pageNumber: 1,
            pageSize: 10,
            pageOrder,
            pageOrderBy,
            statuses,
            isPremium,
            search,
            tagsIds,
          }),
        );
        dispatch(hideModal());
      }
    });
  };

  return (
    <div className="w-full flex flex-col justify-center">
      <p className={clsx("text-sm", theme === "light" ? "text-zinc-600" : "text-zinc-400")}>
        {`Please, enter amount ANSR and count of participants to ${name} ${isQuiz ? "quiz" : "survey"}.`}
      </p>

      <div className="mt-6 grid grid-cols-12 gap-3">
        <div className="col-span-6 sm:col-span-7">
          <label
            htmlFor="first-name"
            className={clsx("mb-1.5 block text-xs", theme === "light" ? "text-zinc-900" : "text-white")}
          >
            Amount
          </label>
          <Input
            placeholder="Amount"
            type="number"
            disabled={pending}
            {...register("amount", {
              required: true,
              validate: {
                minValue: value => +value === 0 || "Must be a least 0",
              },
            })}
            style={{ color: theme === "light" ? "#09090B" : "white" }}
          />
          {errors.amount && <span className="p-0 text-xs font-semibold text-red-500">{errors.amount.message}</span>}
        </div>

        <div className="col-span-6 sm:col-span-5">
          <label
            htmlFor="last-name"
            className={clsx("mb-1.5 block text-xs", theme === "light" ? "text-zinc-900" : "text-white")}
          >
            Participant Limit
          </label>
          <Input
            placeholder="Participant Limit"
            required
            disabled={pending}
            type="number"
            {...register("participantLimit", {
              required: true,
              validate: {
                minValue: value => value > 0 || "Must be a least 1",
              },
            })}
            style={{ color: theme === "light" ? "#09090B" : "white" }}
          />
          {errors.participantLimit && (
            <span className="text-xs font-semibold text-red-500">{errors.participantLimit.message}</span>
          )}
        </div>
      </div>

      <div className="mt-5 gap-3 sm:mt-4 sm:flex">
        <Button
          pending={pending}
          disabled={!participantLimit || !amount || +amount === 0 || +participantLimit === 0}
          onClick={handleSubmit}
        >
          Add ANSR
        </Button>

        <Button variant="super" disabled={pending} onClick={handleRemoveSurveyType}>
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default AddRewardModal;
