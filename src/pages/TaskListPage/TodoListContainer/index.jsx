import React, { Component } from "react";
import TodoList from "../TodoList";
import { connect } from "react-redux";
import { setLoader } from "../../../actions/ui";
import { fetchTasks,postTask,putTask } from "../../../actions/tasks";

class TodoListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterApplied: false,
      hideTimer: false
    };
    this.toggleTimer = this.toggleTimer.bind(this);
    this.toggleListItem = this.toggleListItem.bind(this);
    this.performAddTask = this.performAddTask.bind(this);
    this.performUpdateTask = this.performUpdateTask.bind(this);
    this.currentUser = "joel chambilla"
  }

  componentDidMount() {
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
    const newTaskElement = {
      id: this.props.list.length,
      ...newTask,
      completed: false,
      user: this.currentUser
    }

    this.props.postTask(newTaskElement);
    this.props.fetchTasks();
  }

  performUpdateTask(udpatedTask) {
    this.props.putTask(udpatedTask._id, udpatedTask);
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
    postTask: (task) => dispatch(postTask({item: task})),
    putTask: (taskId, task) => dispatch(putTask({taskId: taskId, item: task}))
  }
}

export default connect(mapStateToProps, mapDispacthToProps)(TodoListContainer);
