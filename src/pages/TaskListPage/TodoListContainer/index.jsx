import React, { Component } from "react";
import TodoList from "../TodoList";
import { connect } from "react-redux";
import { setLoader } from "../../../actions/ui";
import { setData, addNewTask, setFilter, setTimer } from "../../../actions/task";

class TodoListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // list: [],
      // filterApplied: false,
      // hideTimer: false,
    };
    this.toggleTimer = this.toggleTimer.bind(this);
    this.toggleListItem = this.toggleListItem.bind(this);
    this.performAddTask = this.performAddTask.bind(this);
  }

  componentDidMount() {
    const __this = this;
    __this.props.setLoaderProp(true);
    // comunicate an external service to get data
    fetch("http://localhost:3000/data/tasks.json")
      .then((response) => response.json())
      .then((data) => {
        setTimeout(() => {
        __this.props.setDataProp(data.list);
        __this.props.setLoaderProp(false);
        }, 2000);
        // setTimeout(function () {
        //   __this.props.setLoaderProp(false);
        // }, 5000);
      })
      .catch(function (error) {
        console.error(error);
      }).finally(()=>{
        // __this.props.setLoaderProp(false);
      });
  }

  toggleTimer(event) {
    this.props.setTimerProp(event.currentTarget.checked)
  }

  toggleListItem(event) {
    this.props.setFilterProp(event.currentTarget.checked);
  }

  performAddTask(newTask) {
    const __this = this;
    const newTaskElement = {
      ...newTask,
      id: __this.props.list.length,
      completed: false,
    };
    __this.props.addNewTaskProp(newTaskElement);
  }

  render() {
    const { list, loading, filterApplied } = this.props;
    console.log('filterApplied', filterApplied)
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
    hideTimer: state.tasks.hideTimer,
  };
};

const mapDispacthToProps = (dispatch) => {
  return {
    setLoaderProp: (show) => dispatch(setLoader(show)),
    setDataProp: (data) => dispatch(setData(data)),
    addNewTaskProp: (newElement) => dispatch(addNewTask(newElement)),
    setFilterProp: (filter) => dispatch(setFilter(filter)),
    setTimerProp: (timer) => dispatch(setTimer(timer)),
  };
};

export default connect(mapStateToProps, mapDispacthToProps)(TodoListContainer);
