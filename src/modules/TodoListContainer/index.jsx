import React, { Component } from "react";
import TodoList from "../../components/TodoList";
import DialogForm from "../../components/Dialog";
import FormAddTask from '../../components/FormAddTask';


class TodoListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      filterApplied: false,
      hideTimer: false
    };
    this.toggleTimer = this.toggleTimer.bind(this);
    this.toggleListItem = this.toggleListItem.bind(this);
    this.performAddTask = this.performAddTask.bind(this);
  }

  componentDidMount() {
    // comunicate an external service to get data
    fetch("http://localhost:3000/data/tasks.json")
    .then(response => response.json())
    .then(data => {
      this.setState({
        list: data.list
      });
    })
    .catch(function(error) {
      console.error(error);
    });
  }

  toggleTimer(event) {
    this.setState({
      hideTimer: event.currentTarget.checked
    });
  }

  toggleListItem(event) {
    this.setState({
      filterApplied: event.currentTarget.checked
    });
  }

  performAddTask(newTask) {
    this.setState(state => {
      const newTaskElement = {
        ...newTask,
        id: state.list.length,
        completed: false
      }
      let newList = [...state.list];
      newList.push(newTaskElement);
      return {
        list: newList
      }
    });
  }

  render() {
    const { list, filterApplied } = this.state;
    return (
      <>
      <DialogForm addTask={this.performAddTask} >
        <FormAddTask />
      </DialogForm>
      <TodoList
        list={list}
        filterApplied={filterApplied}
        toggleTimer={this.toggleTimer}
        toggleListItem={this.toggleListItem}
        performAddTask={this.performAddTask}
      />
      </>
    )
  }
}

export default TodoListContainer;
