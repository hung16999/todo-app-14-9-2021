import React from "react";
import FormInsert from "./components/FormInsert";
import TasksList from "./components/TasksList";
import Title from "./components/Title";
import { tasks } from "./tasks";

import "./App.css";

class App extends React.Component {
  state = {
    tasks: tasks,
  };

  addTask = (task) => {
    tasks.unshift(task);

    this.setState({
      tasks: [...tasks],
    });
  };

  deleteTask = (index) => {
    tasks.splice(index, 1);

    this.setState({
      tasks: [...tasks],
    });
  };

  toggleCompleted = (index) => {
    tasks[index].completed = !tasks[index].completed;

    this.setState({
      tasks: [...tasks],
    });
  };

  render() {
    return (
      <div className="todo-app">
        <Title />
        <FormInsert addTask={this.addTask} />
        <TasksList
          tasks={this.state.tasks}
          deleteTask={this.deleteTask}
          toggleCompleted={this.toggleCompleted}
        />
      </div>
    );
  }
}

export default App;
