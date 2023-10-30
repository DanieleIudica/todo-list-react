import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import "./style/style.css";
import { useEffect, useState } from "react";
import { MyForm } from "./components/Form";
import { List } from "./components/List";

export type Task = {
  id: string;
  title: string;
  completed: boolean;
};

function App() {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const localTasks = localStorage.getItem("TASKS");
    return localTasks ? JSON.parse(localTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem("TASKS", JSON.stringify(tasks));
  }, [tasks]);

  function addTodo(title: string) {
    setTasks((currentTask) => {
      return [
        ...currentTask,
        { id: crypto.randomUUID(), title: title, completed: false },
      ];
    });
  }
  function toggleTask(id: string, completed: boolean) {
    setTasks((currentTasks) => {
      return currentTasks.map((task) => {
        if (task.id === id) {
          return { ...task, completed };
        }
        return task;
      });
    });
  }

  function deleteTask(id: string) {
    setTasks((currentTasks) => {
      return currentTasks.filter((task) => task.id !== id);
    });
  }

  return (
    <Container>
      <h1>Todo List</h1>
      <MyForm addTodo={addTodo} />
      <h2 className="header">My Tasks:</h2>
      <List tasks={tasks} deleteTask={deleteTask} toggleTask={toggleTask} />
    </Container>
  );
}

export default App;
