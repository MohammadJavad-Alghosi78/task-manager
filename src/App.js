// * node_modules
import React from "react";

import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/globalStyles";
import { Button } from "./theme";
import theme from "./styles";
import TaskForm from "./components/TaskForm";
import TaskListContextProvider from "./context/TaskLIstContext";

// * JSX
function App() {
  return (
    <TaskListContextProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <TaskForm />
        <br />
        <Button variant="outline" size="small">
          SMALL
        </Button>
        <br />
        <Button variant="contained" size="medium">
          MEDIUM
        </Button>
        <br />
        <Button variant="outline" size="large">
          LARGE
        </Button>
      </ThemeProvider>
    </TaskListContextProvider>
  );
}

export default App;
