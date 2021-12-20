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
      hideTimer: false,
      userName: this.props.userName
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

  getListByUser() {
    let listByUser = [];
    if (!userName === "All") {
      this.props.list.filter(item => {
        if (item.user === userName) {
          listByUser.push(item);
        }
      })
      this.listByUser
    }
    return this.props.list.filter
  };

  performUpdateTask(item) {
    console.log("safasfsaf" + item._id);
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

  performAddTask(newTask) {
    const newTaskElement = {
      ...newTask,
      // _id: token(),
      "completed": false,
      "user": "MV"
    }
    this.props.AddTask(newTaskElement);

  }

  render() {
    const { filterApplied, hideTimer, userName } = this.state;
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
        performUpdateTask={this.performUpdateTask}
        userName={this.state.userName}
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
    fetchTasks: () => dispatch(fetchTasks({ query: {} })),
    AddTask: (task) => dispatch(postTask({ task: task })),
    putTask: (task, paramId) => dispatch(putTask({ task, paramId })),
  }
}

export default connect(mapStateToProps, mapDispacthToProps)(TodoListContainer);
