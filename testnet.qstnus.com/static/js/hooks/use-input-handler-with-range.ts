import { useState } from "react";
import BigNumber from "bignumber.js";

type UseInputHandlerWithRangeProps = {
  minValue: number | string;
  maxValue: number | string;
  decimals?: number;
};

export const useInputHandlerWithRange = ({ minValue, maxValue, decimals = 18 }: UseInputHandlerWithRangeProps) => {
  const [value, setValue] = useState("0");
  const [inputValue, setInputValue] = useState("");

  const regex = new RegExp(`^[0-9]*[.,]?[0-9]{0,${decimals}}$`);

  const convertToBigNumber = (value: number | string) => new BigNumber(value.toString());

  const min = convertToBigNumber(minValue);
  const max = convertToBigNumber(maxValue);

  const minDecimals = min.decimalPlaces() ?? 0;

  const roundToMinDecimals = (valueToRound: BigNumber) => {
    return valueToRound.decimalPlaces(minDecimals, BigNumber.ROUND_HALF_UP);
  };

  const rangeCheckAndSetValue = (valueToCheck: BigNumber) => {
    let correctedValue = valueToCheck;

    if (valueToCheck.isGreaterThan(max)) {
      correctedValue = max;
    } else if (valueToCheck.isLessThan(min)) {
      correctedValue = min;
    }

    correctedValue = roundToMinDecimals(correctedValue);
    setValue(correctedValue.toString());
    return correctedValue;
  };

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const valueFromInput = event.target.value.replace(/,/g, ".");

    if (regex.test(valueFromInput)) {
      setInputValue(valueFromInput);

      const bigNumberValue = new BigNumber(valueFromInput.startsWith(".") ? "0" + valueFromInput : valueFromInput);

      rangeCheckAndSetValue(bigNumberValue);
    }
  };

  const onInputBlur = () => {
    const bigNumberValue = convertToBigNumber(inputValue || "0");

    let correctedValue = bigNumberValue;

    if (bigNumberValue.isGreaterThan(max)) {
      correctedValue = max;
    } else if (bigNumberValue.isLessThan(min)) {
      correctedValue = min;
    }

    correctedValue = roundToMinDecimals(correctedValue);
    setInputValue(correctedValue.toFormat(minDecimals, BigNumber.ROUND_HALF_UP));
  };

  const maxHandler = () => {
    const maxValueFormatted = max.toFormat(minDecimals, BigNumber.ROUND_HALF_UP);
    setInputValue(maxValueFormatted);
    setValue(max.toString());
  };

  const minHandler = () => {
    const minValueFormatted = min.toFormat(minDecimals, BigNumber.ROUND_HALF_UP);
    setInputValue(minValueFormatted);
    setValue(min.toString());
  };

  const reset = () => {
    setValue("0");
    setInputValue("");
  };

  return {
    onInputChange,
    value,
    inputValue,
    maxHandler,
    minHandler,
    reset,
    onInputBlur,
  };
};
