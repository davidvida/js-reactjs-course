import React, { Component } from "react";
import TodoList from "../TodoList";
import { connect } from "react-redux";
import { setLoader } from "../../../actions/ui";
import { fetchTasks, postTask, putTask } from "../../../actions/tasks";
import Timer from "../../../components/Timer";

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
  }

  componentDidMount() {
    // const __this = this;
    this.props.fetchTasks();
  }

  toggleTimer(item) {
    console.log("sdfsdfsd" + item.id);
    // this.setState({
    //   hideTimer: true
    // });

  }

  toggleListItem(event) {
    console.log("hhhjj");
    this.setState({
      filterApplied: event.currentTarget.checked
    });
    debugger;
  };

  performUpdateTask(taskBody, id) {
    console.log("safasfsaf");
    return this.props.putTask(taskBody, id);
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

    const newTaskElement = {
      ...newTask,
      // _id: token(),
      "completed": false,
      "user": "FT"
    }
    this.props.AddTask(newTaskElement);
   
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
        addTimer={hideTimer}
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
    AddTask: (task) => dispatch(postTask({task : task})),
    putTask: (task, paramId) => dispatch(putTask({ task, paramId })),
  }
}

export default connect(mapStateToProps, mapDispacthToProps)(TodoListContainer);
