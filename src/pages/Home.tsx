import { Button, Input, TodoItem } from "../components";

const DUMMY_TODOS = [
  { id: 1, text: "운동하기", done: true },
  { id: 2, text: "책 읽기", done: false },
  { id: 3, text: "코드 리뷰", done: false },
];

export const Home = () => {
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
        <Input value="" onChange={() => {}} placeholder="할 일을 입력하세요" />
        <Button variant="primary">추가</Button>
      </div>

      <ul style={{ padding: 0, margin: 0 }}>
        {DUMMY_TODOS.map((todo) => (
          <TodoItem
            key={todo.id}
            text={todo.text}
            done={todo.done}
            onToggle={() => {}}
            onDelete={() => {}}
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
        완료 1 / 전체 3
      </div>
    </div>
  );
};
