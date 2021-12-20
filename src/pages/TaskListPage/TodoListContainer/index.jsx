import React, { Component } from "react";
import TodoList from "../TodoList";
import { connect } from "react-redux";
import { setLoader } from "../../../actions/ui";
import { fetchTasks,addTasks,updateTask } from "../../../actions/tasks";

class TodoListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterApplied: false,
      hideTimer: false,
      count: 0
    };
    this.toggleTimer = this.toggleTimer.bind(this);
    this.toggleListItem = this.toggleListItem.bind(this);
    this.performAddTask = this.performAddTask.bind(this);
    this.performUpdateTask = this.performUpdateTask.bind(this);
  }

  componentDidMount() {
    const __this = this;
    this.props.fetchTasks();
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
    const date = new Date();
    const newTaskElement = {
      ...newTask,
      id: this.props.list.length,
      completed: false,
      startDate: date.toISOString(),
      endDate: date.toISOString(),
      user: 'Administrator'
    };

    let newList = [...this.props.list];
    return this.props.addTasks(newTaskElement)
    .then(data => {
      newList.push(newTaskElement);
      return newList;
    });  
  }
  performUpdateTask(task, completed) {
    const updatedTask = {
      ...task
    };
    const date = new Date();
    updatedTask.completed = completed;
    if (completed) {
      updatedTask.endDate = date.toISOString();
    } else {
      updatedTask.startDate = date.toISOString();
    }
    return this.props.updateTask(updatedTask)
    .then(data => {
      return this.props.list;
    })
  }

  render() {
    const { filterApplied } = this.state;
    const { list, loading } = this.props;
    return (
      <TodoList
        list={list}
        showLoader={loading}
        filterApplied={filterApplied}
        toggleTimer={this.toggleTimer}
        toggleListItem={this.toggleListItem}
        performAddTask={this.performAddTask}
        performUpdateTask={this.performUpdateTask}
      />
    )
  }
}

const mapStateToProps = state => {
  return {
    loading: state.ui.loading,
    list: state.tasks.data
  }
}

const mapDispacthToProps = dispatch => {
  return {
    fetchTasks: () => dispatch(fetchTasks({query: {}})),
    addTasks: (task => {
      return new Promise(resolve => {
        resolve(dispatch(addTasks({task: task})));
      })
    }),
    updateTask: (task => {
      return new Promise(resolve =>  {
        resolve(dispatch(updateTask({task: task})));
      });
    })
  }
}

export default connect(mapStateToProps, mapDispacthToProps)(TodoListContainer);
