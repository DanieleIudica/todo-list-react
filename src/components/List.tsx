import { Task } from "../App";
import { TaskElement } from "./TaskElement";

type ListProps = {
  tasks: Task[];
  deleteTask: (id: string) => void;
  toggleTask: (id: string, completed: boolean) => void;
};

export const List = ({ tasks, deleteTask, toggleTask }: ListProps) => {
  return (
    <ul className="list">
      {tasks.length === 0 && "No Tasks"}
      {tasks &&
        tasks.map((task) => (
          <TaskElement
            key={task.id}
            task={task}
            toggleTask={toggleTask}
            deleteTask={deleteTask}
          />
        ))}
    </ul>
  );
};
