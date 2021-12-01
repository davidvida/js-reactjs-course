import React, { Component } from "react";
import TodoList from "../TodoList";
import { connect } from "react-redux";
import { setLoader } from "../../../actions/ui";
import { setData, setFilterApplied } from "../../../actions/task";

class TodoListContainer extends Component {
  constructor(props) {
    super(props);
    this.toggleTimer = this.toggleTimer.bind(this);
    this.toggleListItem = this.toggleListItem.bind(this);
    this.performAddTask = this.performAddTask.bind(this);
  }

  componentDidMount() {
    this.props.setLoaderProp(true);
    // comunicate an external service to get data
    fetch("http://localhost:3000/data/tasks.json")
      .then((response) => response.json())
      .then((data) => {
        this.props.setDataProp(data.list);
      })
      .catch(function (error) {
        console.error(error);
      });
    this.props.setLoaderProp(false);
  }

  toggleTimer(event) {
    this.props.setHideTimerProp(event.currentTarget.checked);
  }

  toggleListItem(event) {
    this.props.setFilterAppliedProp(event.currentTarget.checked);
  }

  performAddTask(newTask) {
    const newTaskElement = {
      ...newTask,
      id: this.props.list.length,
      completed: false,
    };
    let newList = [...this.props.list];
    newList.push(newTaskElement);
    this.props.setDataProp(newList);
  }

  render() {
    const { filterApplied } = this.props;
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
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.ui.loading,
    list: state.tasks.data,
    filterApplied: state.tasks.filterApplied,
  };
};

const mapDispacthToProps = (dispatch) => {
  return {
    setLoaderProp: (show) => dispatch(setLoader(show)),
    setDataProp: (data) => dispatch(setData(data)),
    setFilterAppliedProp: (data) => dispatch(setFilterApplied(data)),
    setHideTimerProp: (data) => dispatch(setHideTimer(data)),
  };
};

export default connect(mapStateToProps, mapDispacthToProps)(TodoListContainer);
