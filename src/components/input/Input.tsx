import { forwardRef } from "react";

type InputProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ value, onChange, placeholder, onKeyDown }, ref) => {
    return (
      <input
        ref={ref}
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={onKeyDown}
        placeholder={placeholder}
        style={{
          flex: 1,
          padding: "8px",
          border: "1px solid black",
          outline: "none",
          fontSize: "14px",
          fontFamily: "monospace",
        }}
      />
    );
  },
);
