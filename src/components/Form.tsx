import { useState } from "react";

type FormProp = { addTodo: (title: string) => void };

export const MyForm = ({ addTodo }: FormProp) => {
  const [newTask, setNewTask] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    addTodo(newTask);

    setNewTask("");
  }

  return (
    <form className="new-item-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label htmlFor="item">New Item</label>
        <input
          type="text"
          id="item"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
      </div>
      <button className="btn" disabled={newTask === ""}>
        Add
      </button>
    </form>
  );
};
