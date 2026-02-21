type InputProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
};

export const Input = ({ value, onChange, placeholder, onKeyDown }: InputProps) => {
  return (
    <input
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
};
