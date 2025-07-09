import { useState } from "react";

type UseAgeRangeHandlerProps = {
  minAgeLimit?: number;
  maxAgeLimit?: number;
};

export const useAgeRangeHandler = ({ minAgeLimit = 10, maxAgeLimit = 100 }: UseAgeRangeHandlerProps) => {
  const [minAge, setMinAge] = useState(minAgeLimit); // Значение для API
  const [maxAge, setMaxAge] = useState(maxAgeLimit); // Значение для API

  const [inputMinAge, setInputMinAge] = useState(minAgeLimit.toString()); // Визуальное значение
  const [inputMaxAge, setInputMaxAge] = useState(maxAgeLimit.toString()); // Визуальное значение

  const regex = new RegExp(`^[0-9]*$`);

  const onMinAgeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const valueFromInput = event.target.value;

    if (regex.test(valueFromInput)) {
      setInputMinAge(valueFromInput); // Визуальное обновление без округления

      const parsedValue = parseInt(valueFromInput, 10);

      if (!isNaN(parsedValue)) {
        // Моментальное обновление API значения
        if (parsedValue >= minAgeLimit && parsedValue <= maxAge) {
          setMinAge(parsedValue);
        } else if (parsedValue > maxAge) {
          setMinAge(maxAge);
        }
      }
    }
  };

  const onMaxAgeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const valueFromInput = event.target.value;

    if (regex.test(valueFromInput)) {
      setInputMaxAge(valueFromInput); // Визуальное обновление без округления

      const parsedValue = parseInt(valueFromInput, 10);

      if (!isNaN(parsedValue)) {
        // Моментальное обновление API значения
        if (parsedValue <= maxAgeLimit && parsedValue >= minAge) {
          setMaxAge(parsedValue);
        } else if (parsedValue < minAge) {
          setMaxAge(minAge);
        }
      }
    }
  };

  const onMinAgeBlur = () => {
    const parsedValue = parseInt(inputMinAge, 10);

    if (isNaN(parsedValue) || parsedValue < minAgeLimit) {
      setInputMinAge(minAgeLimit.toString());
      setMinAge(minAgeLimit);
    } else if (parsedValue > maxAge) {
      setInputMinAge(maxAge.toString());
      setMinAge(maxAge);
    } else {
      setInputMinAge(parsedValue.toString());
    }
  };

  const onMaxAgeBlur = () => {
    const parsedValue = parseInt(inputMaxAge, 10);

    if (isNaN(parsedValue) || parsedValue > maxAgeLimit) {
      setInputMaxAge(maxAgeLimit.toString());
      setMaxAge(maxAgeLimit);
    } else if (parsedValue < minAge) {
      setInputMaxAge(minAge.toString());
      setMaxAge(minAge);
    } else {
      setInputMaxAge(parsedValue.toString());
    }
  };

  const reset = () => {
    setMinAge(minAgeLimit);
    setMaxAge(maxAgeLimit);
    setInputMinAge(minAgeLimit.toString());
    setInputMaxAge(maxAgeLimit.toString());
  };

  return {
    minAge,
    maxAge,
    inputMinAge,
    inputMaxAge,
    onMinAgeChange,
    onMaxAgeChange,
    onMinAgeBlur,
    onMaxAgeBlur,
    reset,
  };
};
