import React, { Component } from "react";
import TodoList from "../TodoList";
import { connect } from "react-redux";
import { setLoader } from "../../../actions/ui";
import {
  setList,
  setFilter,
  fetchTasks,
  addTasks,
} from "../../../actions/tasks";

class TodoListContainer extends Component {
  constructor(props) {
    super(props);
    this.toggleTimer = this.toggleTimer.bind(this);
    this.toggleListItem = this.toggleListItem.bind(this);
    this.performAddTask = this.performAddTask.bind(this);
  }

  componentDidMount() {
    const __this = this;
    __this.props.fetchTasks();
  }

  toggleTimer(event) {
    this.props.setHideTimerProp(event.currentTarget.checked);
  }

  toggleListItem(event) {
    this.props.setFilterProp(event.currentTarget.checked);
  }

  performAddTask(newTask) {
    const { list } = this.props;
    const newTaskElement = {
      ...newTask,
      id: list.length,
      completed: false,
    };
    let newList = [...list, newTaskElement];
    return this.props.addTasks(newList);
  }

  render() {
    const { list, loading, filter } = this.props;
    return (
      <TodoList
        list={list}
        showLoader={loading}
        filterApplied={filter}
        toggleTimer={this.toggleTimer}
        toggleListItem={this.toggleListItem}
        performAddTask={this.performAddTask}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.ui.loading,
    list: state.tasks.data,
    filter: state.tasks.filterApplied,
    hideTimer: state.tasks.hideTimer,
  };
};

const mapDispacthToProps = (dispatch) => {
  return {
    setLoaderProp: (show) => dispatch(setLoader(show)),
    setListProp: (list) => dispatch(setList(list)),
    setFilterProp: (filter) => dispatch(setFilter(filter)),
    setHideTimerProp: (filter) => dispatch(setHideTimer(filter)),
    addTasks: (task) => dispatch(addTasks({ task: task })),
    fetchTasks: () => dispatch(fetchTasks({ query: {} })),
  };
};

export default connect(mapStateToProps, mapDispacthToProps)(TodoListContainer);
