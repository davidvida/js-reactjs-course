import React, { Component } from "react";
import TodoList from "../TodoList";
import { connect } from "react-redux";
import { setLoader } from "../../../actions/ui";
import { POST_TASK, setTasks, fetchTasks } from "../../../actions/tasks";

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
    /*Challenge
    * Create a new command action and the necessary actions and middlewares to manage this process
    */
    // this.setState(state => {
    //   const newTaskElement = {
    //     ...newTask,
    //     id: this.propsstate.list.length,
    //     completed: false
    //   }
    //   let newList = [...state.list];
    //   newList.push(newTaskElement);
    //   return {
    //     list: newList
    //   }
    // });
    console.info(this.props);
    this.setState(state => {
      debugger;
      const newTaskElement = {
        ...newTask,
        id: this.props.list.length,
        completed: false
      };
      let newList = [...this.props.list];
      newList.push(newTaskElement);
      this.props.setTasks(newTaskElement);
      return {
        list: newList
      }
    });
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
    setTasks: (data) => dispatch(setTasks(data))
  }
}

export default connect(mapStateToProps, mapDispacthToProps)(TodoListContainer);
