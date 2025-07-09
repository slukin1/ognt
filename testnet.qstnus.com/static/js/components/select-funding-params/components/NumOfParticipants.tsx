import React, { useEffect, useState } from "react";
import { Flex, Tooltip } from "@sekmet/radix-ui-themes";

import { useDebounce, useInputHandlerWithRange } from "hooks";

import { Icons } from "components/icons";

import { useAppDispatch } from "store/store";
import { setParticipants } from "store/create-survey/survey";

import styles from "./form.module.scss";

const NumOfParticipants: React.FC<{ label: string }> = ({ label }) => {
  const [value, setValue] = useState(1);
  const [isRange, setIsRange] = useState(true);

  const dispatch = useAppDispatch();

  const {
    inputValue,
    value: valueCopy,
    onInputChange,
    onInputBlur,
  } = useInputHandlerWithRange({
    minValue: 1,
    maxValue: 1000,
  });

  const debouncedValue = useDebounce(value, 1000);
  // this value will pick real time value, but will change it's result only when it's seattled for 1000ms

  useEffect(() => {
    // this effect will be called on seattled values
    if (debouncedValue) {
      dispatch(setParticipants(Number(debouncedValue)));
    }
  }, [debouncedValue]);

  useEffect(() => {
    setValue(+valueCopy);
  }, [valueCopy]);

  useEffect(() => {
    onInputChange({ target: { value: value.toString() } } as React.ChangeEvent<HTMLInputElement>);
  }, [value]);

  return (
    <div className="w-full">
      <Flex gap="3">
        <p style={{ marginBottom: "7px", fontSize: "12px" }}>
          {label ? label : "Number of Surveys "} {value ? ` = ${value}` : ""}
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
              onChange={e => setValue(+e.target.value)}
              value={value}
              type="range"
              min="1"
              max="1000"
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-zinc-700"
            />
            <span className="text-sm text-zinc-500 dark:text-gray-400 absolute start-0 left-1/5 transform -translate-x-1/2 -bottom-6">
              1
            </span>
            <span className="text-sm text-zinc-500 dark:text-gray-400 absolute left-1/4 transform -translate-x-1/2 -bottom-6">
              250
            </span>
            <span className="text-sm text-zinc-500 dark:text-gray-400 absolute left-1/2 transform -translate-x-1/2 -bottom-6">
              500
            </span>
            <span className="text-sm text-zinc-500 dark:text-gray-400 absolute left-3/4 transform -translate-x-1/2 -bottom-6">
              750
            </span>
            <span className="text-sm text-zinc-500 dark:text-gray-400 absolute end-0 -bottom-6">1,000</span>
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

export default NumOfParticipants;
