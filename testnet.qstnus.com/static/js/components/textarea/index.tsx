import { forwardRef, useId } from "react";

import textareaStyles from "./Textarea.module.scss";
import { useTheme } from "context";
import { TextAreaProps } from "./types";

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(function TextArea(
  { label, placeholder, width, style, ...props },
  ref,
) {
  const id = useId();
  const { theme } = useTheme();

  return (
    <div className={textareaStyles.textareaContainer} style={{ width }}>
      <label htmlFor={id}>
        {label && <div className="label">{label}</div>}
        <textarea
          id={id}
          className={textareaStyles.textarea}
          placeholder={placeholder}
          rows={5}
          style={{
            width: width,
            fontSize: "14px",
            background: theme === "dark" ? "#1f1f22" : "white",
            ...style,
          }}
          ref={ref}
          {...props}
        />
      </label>
    </div>
  );
});
