import { Task } from "../App";

type TaskElementProp = {
  task: Task;
  deleteTask: (id: string) => void;
  toggleTask: (id: string, completed: boolean) => void;
};

export const TaskElement = ({
  task,
  deleteTask,
  toggleTask,
}: TaskElementProp) => {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={(e) => toggleTask(task.id, e.target.checked)}
        />
        {task.title}
      </label>
      <button className="btn btn-danger" onClick={() => deleteTask(task.id)}>
        Delete
      </button>
    </li>
  );
};
