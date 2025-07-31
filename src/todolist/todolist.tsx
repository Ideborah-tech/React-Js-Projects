import React, { useState } from "react";

interface Props {
  onAdd: (task: string) => void;
}

export default function TodoInput({ onAdd }: Props) {
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAdd(input);
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        placeholder="Enter a task"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="todo-input"
      />
      <button type="submit" className="todo-button">
        Add Task
      </button>
    </form>
  );
}