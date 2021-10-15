// * node_modules
import React from "react";
import { TaskListContext } from "../../context/TaskLIstContext";

// * Component codes
const TaskForm = () => {
  const { tasks } = React.useContext(TaskListContext);
  console.log("==========", tasks);
  // * JSX
  return <h1>Task Form CP</h1>;
};

export default TaskForm;
