import { Button } from "../button";

type TodoItemProps = {
  text: string;
  done: boolean;
  onToggle: () => void;
  onDelete: () => void;
};

export const TodoItem = ({ text, done, onToggle, onDelete }: TodoItemProps) => {
  return (
    <li
      style={{
        display: "flex",
        alignItems: "center",
        gap: "12px",
        padding: "12px",
        border: "1px solid black",
        marginBottom: "8px",
        listStyle: "none",
      }}
    >
      <input
        type="checkbox"
        checked={done}
        onChange={onToggle}
        style={{ width: "16px", height: "16px", cursor: "pointer" }}
      />
      <span
        style={{
          flex: 1,
          fontSize: "14px",
          fontFamily: "monospace",
          textDecoration: done ? "line-through" : "none",
          color: done ? "#888" : "black",
        }}
      >
        {text}
      </span>
      <Button onClick={onDelete} variant="secondary">
        삭제
      </Button>
    </li>
  );
};
