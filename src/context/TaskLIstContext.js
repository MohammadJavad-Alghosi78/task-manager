// * node_modules
import React from "react";

export const TaskListContext = React.createContext();

const TaskListContextProvider = ({ children }) => {
  const [tasks, setTasks] = React.useState([
    {
      task: "Read book",
      id: 1,
    },
  ]);

  return (
    <TaskListContext.Provider value={{ tasks }}>
      {children}
    </TaskListContext.Provider>
  );
};

export default TaskListContextProvider;
