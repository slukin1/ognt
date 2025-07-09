import React, { useEffect, useState } from "react";
import BigNumber from "bignumber.js";
import { Flex, Tooltip } from "@sekmet/radix-ui-themes";

import { Icons } from "components/icons";

import { useDebounce, useInputHandlerWithRange } from "hooks";

import { useAppDispatch } from "store/store";
import { setReward } from "store/create-survey/survey";

import styles from "./form.module.scss";

const RewardAmount: React.FC<{ label: string; tokenName?: string; minAmount: number; maxAmount: number }> = ({
  label,
  tokenName,
  minAmount,
  maxAmount,
}) => {
  const [value, setValue] = useState(minAmount);
  const [isRange, setIsRange] = useState(true);

  const {
    inputValue,
    value: valueCopy,
    onInputChange,
    onInputBlur,
  } = useInputHandlerWithRange({
    minValue: minAmount,
    maxValue: maxAmount,
  });

  const dispatch = useAppDispatch();

  const debouncedValue = useDebounce(value, 1000);

  useEffect(() => {
    if (debouncedValue) {
      dispatch(setReward(Number(debouncedValue)));
    }
  }, [debouncedValue]);

  useEffect(() => {
    setValue(+valueCopy);
  }, [valueCopy]);

  useEffect(() => {
    onInputChange({ target: { value: value.toString() } } as React.ChangeEvent<HTMLInputElement>);
  }, [value]);

  return (
    <div>
      <Flex gap="3">
        <p style={{ marginBottom: "7px", fontSize: "12px" }}>
          {label ? label : "Number of Surveys "}
          {value ? ` = ${BigNumber(value).toFormatExtended(18)} ${tokenName}` : ""}
        </p>
        <Tooltip content={`Switch to ${isRange ? "input" : "range"}`}>
          <div>
            {!isRange && <Icons.RangeIcon onClick={() => setIsRange(prev => !prev)} cursor={"pointer"} />}
            {isRange && <Icons.InputIcon onClick={() => setIsRange(prev => !prev)} cursor={"pointer"} />}
          </div>
        </Tooltip>
      </Flex>
      <div className="bg-white py-3 px-4 rounded-xl dark:bg-zinc-800">
        {isRange && (
          <div className="relative w-full mb-6">
            <input
              id="labels-range-input"
              onChange={e => setValue(+e.target.value)}
              value={value}
              type="range"
              min={minAmount.toString()}
              max={maxAmount.toString()}
              step={minAmount.toString()}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-zinc-700"
            />
            <span className="text-sm text-zinc-500 dark:text-gray-400 absolute start-0 left-1/5 transform -translate-x-1/2 -bottom-6">
              {minAmount.toString()}
            </span>
            <span className="text-sm text-zinc-500 dark:text-gray-400 absolute left-1/4 transform -translate-x-1/2 -bottom-6">
              {BigNumber(maxAmount).multipliedBy(0.25).toFormatExtended(18)}
            </span>
            <span className="text-sm text-zinc-500 dark:text-gray-400 absolute left-1/2 transform -translate-x-1/2 -bottom-6">
              {BigNumber(maxAmount).multipliedBy(0.5).toFormatExtended(18)}
            </span>
            <span className="text-sm text-zinc-500 dark:text-gray-400 absolute left-3/4 transform -translate-x-1/2 -bottom-6">
              {BigNumber(maxAmount).multipliedBy(0.75).toFormatExtended(18)}
            </span>
            <span className="text-sm text-zinc-500 dark:text-gray-400 absolute end-0 -bottom-6">
              {maxAmount.toString()}
            </span>
          </div>
        )}
        {!isRange && (
          <input
            id="labels-range-input"
            onChange={onInputChange}
            onBlur={onInputBlur}
            value={inputValue}
            type="text"
            className={`text-zinc-500 dark:text-gray-400 ${styles.input}`}
          />
        )}
      </div>
    </div>
  );
};

export default RewardAmount;
