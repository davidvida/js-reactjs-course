import React, { Component } from "react";
import TodoList from "../TodoList";
import { connect } from "react-redux";
import { setLoader } from "../../../actions/ui";
import { fetchTasks, setTasks, putTask, postTask } from "../../../actions/tasks";

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
    this.getList = this.getList.bind(this);
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
    return this.props.postTask(newTask);
  }

  performUpdateTask(item) {
    console.log("ID:" + item._id);
    let body = {};
    if (!item.startDate && !item.completed) {
      body = {
        "startDate": new Date().toISOString(),
        "completed": false
      };
    } else if (item.startDate && !item.completed) {
      body = {
        "endDate": new Date().toISOString(),
        "completed": true
      };
    }
    return this.props.putTask(body, item._id);
  }

  getList() {
    return this.props.list.filter
  };

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
      />
    )
  }
}

const mapStateToProps = state => {
console.log('From UI:', state)
  return {
    loading: state.ui.loading,
    list: state.tasks.data
  }
}

const mapDispacthToProps = dispatch => {
  return {
    fetchTasks: () => dispatch(fetchTasks({query: {}})),
    setLoaderProp: (show) => dispatch(setLoader(show)),
    setTasksProp: (list) => dispatch(setTasks(list)),
    postTask: (task) => dispatch(postTask({ task })),
    putTask: (task, paramId) => dispatch(putTask({ task, paramId }))
  }
}

export default connect(mapStateToProps, mapDispacthToProps)(TodoListContainer);
