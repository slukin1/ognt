import { forwardRef, useId } from "react";

import { useTheme } from "context";

import inputStyles from "./Input.module.scss";

import { InputProps } from "./types";

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { prefixIcon, value, type, onChange, placeholder, width, style, suffixIcon, ...props },
  ref,
) {
  const id = useId();

  const { theme } = useTheme();

  return (
    <div className={inputStyles.inputContainer} style={{ width }}>
      <div className={inputStyles.inputPrefixIcon}>{prefixIcon}</div>
      <div className={inputStyles.inputSuffixIcon}>{suffixIcon}</div>

      <input
        id={id}
        ref={ref}
        type={type ? type : "text"}
        className={inputStyles.input}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        style={{
          paddingLeft: prefixIcon ? 42 : "",
          paddingRight: suffixIcon ? 42 : "",
          width: width,
          background: theme === "dark" ? "#27272A" : "#FFFFFF",
          ...style,
        }}
        {...props}
      />
    </div>
  );
});
