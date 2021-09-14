import React from "react";

class FormInsert extends React.Component {
  state = {
    name: "",
  };

  onChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  addNewTask = (event) => {
    event.preventDefault();

    this.props.addTask({
      name: this.state.name,
      completed: false,
    });

    this.setState({
      name: "",
    });
  };

  render() {
    return (
      <form onSubmit={this.addNewTask}>
        <label>
          Add task:{" "}
          <input type="text" value={this.state.name} onChange={this.onChange} />
        </label>

        <button onClick={this.addNewTask}>+</button>
      </form>
    );
  }
}

export default FormInsert;
