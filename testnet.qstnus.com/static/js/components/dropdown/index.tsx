import dropdownStyles from "./dropdown.module.scss";
import { Select } from "@sekmet/radix-ui-themes";
import clsx from "clsx";
import { forwardRef } from "react";

import { useTheme } from "context";

import { DropdownProps } from "./types";

export const Dropdown = forwardRef<HTMLButtonElement, DropdownProps>(function Input(
  { label, className, options, value, onValueChange },
  ref,
) {
  const { theme } = useTheme();

  return (
    <div>
      {label && (
        <p
          style={{
            textTransform: "capitalize",
            fontSize: "12px",
            marginBottom: "8px",
          }}
        >
          {label}
        </p>
      )}
      <Select.Root size="3" value={value?.toString()} onValueChange={onValueChange}>
        <Select.Trigger
          variant="ghost"
          style={{
            background: theme === "dark" ? "#1F1F22" : "#FFFFFF",
          }}
          className={clsx(dropdownStyles.dropdown, className)}
          ref={ref}
        >
          {value}
        </Select.Trigger>

        <Select.Content variant="soft" style={{ background: theme === "dark" ? "#1F1F22" : "#FFFFFF" }}>
          <Select.Group>
            <Select.Label style={{ color: theme === "light" ? "#52525b" : "#a1a1aa" }}>{label && label}</Select.Label>
            {options.map(({ key, value }, index) => (
              <Select.Item
                key={`${value}-${index}`}
                value={key}
                style={{ color: theme === "light" ? "#1F1F22" : "#FFFFFF" }}
              >
                {value}
              </Select.Item>
            ))}
          </Select.Group>
        </Select.Content>
      </Select.Root>
    </div>
  );
});
