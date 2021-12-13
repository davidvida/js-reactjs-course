import React, { Component } from "react";
import TodoList from "../TodoList";
import { connect } from "react-redux";
import { setLoader } from "../../../actions/ui";
import { fetchTasks, addTasks } from "../../../actions/tasks";

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
    const newTaskElement = {
      ...newTask,
      id: this.props.list.length,
      completed: false,
      description: 'Generic description',
      startDate: "2021-12-12T21:01:58.167Z",
      endDate: "2021-12-12T21:01:58.167Z",
      user: 'Miguel Montalvo'
    };
    /**Add remote request method */
    let newList = [...this.props.list];
    return this.props.addTasks(newTaskElement)
    .then(data => {
      newList.push(newTaskElement);
      return newList;
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
    addTasks: (task => {
      return new Promise(resolve => {
        resolve(dispatch(addTasks({task: task})));
      })
    })
  }
}

export default connect(mapStateToProps, mapDispacthToProps)(TodoListContainer);
