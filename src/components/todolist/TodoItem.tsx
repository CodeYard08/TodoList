import React, { useEffect, useRef, useState } from "react";
import { Button } from "../button";

type TodoItemProps = {
  text: string;
  done: boolean;
  onToggle: () => void;
  onDelete: () => void;
  onEdit: (editText: string) => void;
};

export const TodoItem = ({
  text,
  done,
  onToggle,
  onDelete,
  onEdit,
}: TodoItemProps) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editText, setEditText] = useState<string>(text);

  const editInputRef = useRef<HTMLInputElement>(null);

  const onClickIdEditing = () => {
    if (!isEditing) {
      setIsEditing(true);
      return;
    }
    if (!editText.trim()) return;

    onEdit(editText);
    setIsEditing(false);
  };

  useEffect(() => {
    if (isEditing) {
      editInputRef.current?.focus();
    }
  }, [isEditing]);

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
      {isEditing ? (
        <input
          ref={editInputRef}
          value={editText}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEditText(e.target.value)
          }
          placeholder="수정할 내용을 입력해주세요."
        />
      ) : (
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
      )}
      <Button onClick={onClickIdEditing} variant="secondary">
        {isEditing ? "수정완료" : "수정"}
      </Button>

      {!isEditing && (
        <Button onClick={onDelete} variant="secondary">
          삭제
        </Button>
      )}
    </li>
  );
};
