import { useEffect, useRef, useState } from "react";
import { Button, Input, TodoItem } from "../components";
import type { Todo } from "../types/todolist";

export const Home = () => {
  const [todos, setTodos] = useState<Todo[]>(() =>
    JSON.parse(localStorage.getItem("todos") ?? "[]"),
  );
  const [text, setText] = useState<string>("");

  const textRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (!text.trim()) return;

    const newTodo: Todo = {
      id: Date.now(),
      text: text,
      done: false,
    };

    setTodos([newTodo, ...todos]);
    setText("");
    textRef.current?.focus();
  };

  const setIsDoneCheckBox = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo,
      ),
    );
  };

  const delteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id: number, editText: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: editText } : todo,
      ),
    );
  };

  const doneCount = todos.filter((todo) => todo.done).length;

  return (
    <div
      style={{
        maxWidth: "480px",
        margin: "60px auto",
        fontFamily: "monospace",
      }}
    >
      <h1
        style={{
          fontSize: "20px",
          fontWeight: "bold",
          marginBottom: "16px",
          borderBottom: "2px solid black",
          paddingBottom: "8px",
        }}
      >
        Todo List
      </h1>

      <div style={{ display: "flex", gap: "8px", marginBottom: "16px" }}>
        <Input
          ref={textRef}
          value={text}
          onChange={setText}
          placeholder="할 일을 입력하세요"
        />
        <Button onClick={addTodo} variant="primary">
          추가
        </Button>
      </div>

      <ul style={{ padding: 0, margin: 0 }}>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            text={todo.text}
            done={todo.done}
            onToggle={() => setIsDoneCheckBox(todo.id)}
            onDelete={() => delteTodo(todo.id)}
            onEdit={(editText) => editTodo(todo.id, editText)}
          />
        ))}
      </ul>

      <div
        style={{
          marginTop: "12px",
          fontSize: "12px",
          color: "#555",
          textAlign: "right",
        }}
      >
        완료 {doneCount} / 전체 {todos.length}
      </div>
    </div>
  );
};
