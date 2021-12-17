import React, { Component } from "react";
import TodoList from "../TodoList";
import { connect } from "react-redux";
import { setLoader } from "../../../actions/ui";
import {
  setList,
  setFilter,
  fetchTasks,
  postTask,
  putTask,
} from "../../../actions/tasks";
class TodoListContainer extends Component {
  constructor(props) {
    super(props);
    this.toggleTimer = this.toggleTimer.bind(this);
    this.toggleListItem = this.toggleListItem.bind(this);
    this.performAddTask = this.performAddTask.bind(this);
    this.performUpdateTask = this.performUpdateTask.bind(this);
    this.getList = this.getList.bind(this);
  }

  componentDidMount() {
    this.props.fetchTasks();
  }

  toggleTimer(event) {
    this.props.setHideTimerProp(event.currentTarget.checked);
  }

  toggleListItem(event) {
    this.props.setFilterProp(event.currentTarget.checked);
  }

  performAddTask(newTask) {
    return this.props.postTask(newTask);
  }
  performUpdateTask(taskBody, id) {
    return this.props.putTask(taskBody, id);
  }

  getList(list) {
    if(this.props.user)
      return list.filter((task) => task.user === this.props.user);
    return list;
  }

  render() {
    const { list, loading, filter, user } = this.props;
    return (
      <TodoList
        list={this.getList(list)}
        user={user}
        showLoader={loading}
        filterApplied={filter}
        toggleTimer={this.toggleTimer}
        toggleListItem={this.toggleListItem}
        performAddTask={this.performAddTask}
        performUpdateTask={this.performUpdateTask}
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
    postTask: (task) => dispatch(postTask({ task })),
    putTask: (task, paramId) => dispatch(putTask({ task, paramId })),
    fetchTasks: () => dispatch(fetchTasks({ query: {} })),
  };
};

export default connect(mapStateToProps, mapDispacthToProps)(TodoListContainer);
