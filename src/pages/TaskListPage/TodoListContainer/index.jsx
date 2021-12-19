import React, { Component } from "react";
import TodoList from "../TodoList";
import { connect } from "react-redux";
import { setLoader } from "../../../actions/ui";
import { fetchTasks, addTasks, setTasks } from "../../../actions/tasks";

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
    const newTaskElement = {
      ...newTask,
      labels: [],
      completed: false,
      startDate: null,
      endDate: null
    }
    this.props.addTasks(newTaskElement);
    this.props.fetchTasks();
  }

  render() {
    const { filterApplied, hideTimer } = this.state;
    const { list, loading } = this.props;
    return (
      <TodoList
        list={list}
        showLoader={loading}
        filterApplied={filterApplied}                                                                                                                           
        toggleTimer={this.toggleTimer}
        toggleListItem={this.toggleListItem}
        performAddTask={this.performAddTask}
        hideTimer={hideTimer}
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
    addTasks: (task) => dispatch(addTasks({task: task})),
    setTask: () => dispatch(setTasks({list: list}))
  }
}

export default connect(mapStateToProps, mapDispacthToProps)(TodoListContainer);
